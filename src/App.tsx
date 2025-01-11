// src/App.tsx

// import './App.css'
// import WatchList from './components/watchlist/WatchContainer.tsx'

// import { UserPage } from './pages/UserPage'
// import { PostPage } from './pages/PostPage'
// import Blog from './Blog'
// import Classroom from './components/school/Classroom'
// import Home from "./components/bank/Home";

// import VanillaExtract from './components/examples/VanillaExtract'
import TailwindCSSBorderBox from './components/examples/TailwindCSSBorderBox'
// import { Menu } from './components/examples/Menu'
// import MyList from './copilot/MyList'
// import TodoApp from './components/TodoApp'
// import UserComponent from './components/example/UserComponent'
// import VanillaExtract from './components/examples/VanillaExtract'
// import { Decorator } from './designs/Decorator'

function App () {
  return (
    <div className='App'>
      <header>
        <h1>Vite React TypeScript Migration</h1>
        <h3 className='docker'>
          The Roadmap: TypeScript +Vite + React + Node + Vitest + Docker Compose
          + + GitHub + Azure DevOps
        </h3>
      </header>
      <main>
        {/* <Decorator /> */}
        {/* <VanillaExtract /> */}
        {/* <WatchList /> */}
      </main>
      {/* <UserPage /> */}
      {/* <PostPage /> */}
      {/* <Classroom name='Saint Paul High School' /> */}

      {/* <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div> */}
      {/* <Home /> */}

      {/* <Blog /> */}

      {/* <TodoApp /> */}

      {/* <VanillaExtract /> */}
      {/* <Menu /> */}

      {/* <AxiosApi /> */}
      <TailwindCSSBorderBox />

      {/* <MyList /> */}

      {/* <UserComponent
          name='Stephen'
          address='152 Eagleton Ct, Palm Beach Gardens, FL 33418'
          age={73}
        /> */}
      <h4>+ Vanilla Extract CSS-in-JS + Tailwind CSS Framework</h4>
    </div>
  )
}

export default App
