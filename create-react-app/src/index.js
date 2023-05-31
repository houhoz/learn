import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div>1111</div>
  </React.StrictMode>
)

fetch('/js/subscriptions/recommended_collections')
  .then(response => response.json())
  .then(value => {
    console.log('value :>> ', value)
  })
fetch('/zhi/news/latest')
  .then(response => response.json())
  .then(value => {
    console.log('value :>> ', value)
  })
