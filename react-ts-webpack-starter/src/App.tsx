import '@/App.css'
import scssStyles from '@/app.scss'
import smallImg from '@/assets/imgs/small.jpeg'
import bigImg from '@/assets/imgs/big.jpg'
import memberList from './test.json'

console.log('memberList :>> ', memberList)

function App() {
  return (
    <>
      <h2 className='h2'>Hello world</h2>
      <div className={scssStyles['scssBox']}>
        <div className={scssStyles['box']}>scssBox 处理字体</div>
        <img src={smallImg} alt='小于10kb的图片' />
        <img src={bigImg} alt='大于于10kb的图片' />
        <div className={scssStyles['smallImg']}>小图片背景</div>
        <div className={scssStyles['bigImg']}>大图片背景</div>
      </div>
    </>
  )
}

export default App
