import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import Blog from './Blog'

// import Classroom from "./components/school/Classroom";
// import Home from "./components/bank/Home";
// import WatchList from './components/sample/WatchList'

// import VanillaExtract from './components/examples/VanillaExtract'
// import TailwindCSSBorderBox from './components/examples/TailwindCSSBorderBox'

// import { Menu } from './components/examples/Menu'
// import AxiosApi from './api/AxiosApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h3 className="docker">
          The Roadmap: Vite + React + Node + Fetch + Vitest + TypeScript +
          Docker Compose + Azure DevOps: GitHub
        </h3>
      </header>
      <main className="vitest">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        {/* <Classroom name="Saint Paul High School" /> */}

        {/* <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div> */}
        {/* <Home /> */}
        <h4>Vanilla Extract CSS-in-JS + Tailwind CSS Framework</h4>
        {/* <Blog /> */}
        {/* <WatchList /> */}
        {/* <VanillaExtract /> */}
        {/* <Menu /> */}
        <hr />
        {/* <AxiosApi /> */}
        {/* <TailwindCSSBorderBox /> */}
      </main>
    </div>
  )
}

export default App
