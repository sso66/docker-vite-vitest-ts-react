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
import AxiosApi from './api/AxiosApi'
// import UserList from './api/UserList'
// import MyList from './copilot/MyList'

import TodoApp from './components/TodoApp'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header>
        <h3 className='docker'>
          The Roadmap: TypeScript +Vite + React + Node + Fetch + Vitest + Docker
          Compose + + GitHub + Azure DevOps
        </h3>
      </header>
      <main className='vitest'>
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>

        <div className=''>
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
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

        {/* <Blog /> */}
        {/* <WatchList /> */}
        <TodoApp />

        {/* <VanillaExtract /> */}
        {/* <Menu /> */}
        <hr />
        <AxiosApi />
        {/* <TailwindCSSBorderBox /> */}
        {/* <UserList /> */}
        {/* <MyList /> */}
        <hr />
        <h4>+ Vanilla Extract CSS-in-JS + Tailwind CSS Framework</h4>
      </main>
    </div>
  )
}

export default App
