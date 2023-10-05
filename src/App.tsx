import './App.css'
import { NoProduct } from './components/noProduct/noProduct'

function App() {
  return (
    <>
      <main className="mainBox">
        <section className='sectionFixed top'>

        </section>
        <section className='sectionMain'>
          <NoProduct/>

        </section>
        <section className='sectionFixed base'>

        </section>
      </main> 
    </>
  )
}

export default App
