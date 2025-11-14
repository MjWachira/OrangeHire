import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Tailwind test block - visible component to confirm Tailwind is working */}
      <div className="m-6 p-6 max-w-xl mx-auto">
        <div className="p-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Tailwind test</h2>
          <p className="mb-4">If you see this styled box, Tailwind is working.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white text-indigo-600 rounded hover:bg-gray-100">Primary</button>
            <button className="px-4 py-2 border border-white rounded hover:bg-white/10">Secondary</button>
          </div>
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
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
