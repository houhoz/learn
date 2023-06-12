import { useState, useMemo, useDeferredValue } from 'react'

const numbers = [...new Array(20000).keys()]

function UseDeferredValue() {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input type='number' onChange={handleChange} value={query} />
      <List query={query} />
    </div>
  )
}

function List(props) {
  const { query } = props
  const defQuery = useDeferredValue(query)

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        defQuery ? (
          i.toString().startsWith(defQuery) && <p key={index}>{i}</p>
        ) : (
          <p key={index}>{i}</p>
        )
      ),
    [defQuery]
  )

  return <div>{list}</div>
}

export default UseDeferredValue
