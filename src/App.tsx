import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let valami: string = "asd"


  const asd = [1, 2,3,4,5]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl">Vite + React</h1>
      
      <li>
        {asd.map((element)=>
            <ul>{element}</ul>
        )}
      </li>
      
    </>
  )
}

export default App
