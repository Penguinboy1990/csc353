import { useState } from 'react' // works
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import penguin from './assets/penguin.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [likes, setLikes] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
          <img src={penguin} className="logo"/>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <button onClick={() => setLikes((likes) => likes + 1)}>
              Likes: {likes}
          </button>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
