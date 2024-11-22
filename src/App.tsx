import './App.css'
import { UserPage } from './pages/UserPage'
import { PostPage } from './pages/PostPage'
// import Blog from './Blog'

// import Classroom from './components/school/Classroom'
// import Home from "./components/bank/Home";
// import WatchList from './components/sample/WatchList'

// import VanillaExtract from './components/examples/VanillaExtract'
// import TailwindCSSBorderBox from './components/examples/TailwindCSSBorderBox'

// import { Menu } from './components/examples/Menu'

// import MyList from './copilot/MyList'

// import TodoApp from './components/TodoApp'
// import UserComponent from './components/example/UserComponent'

function App () {
  return (
    <div className='App'>
      <header>
        <h2>Vite React TypeScript</h2>
        <h3 className='docker'>
          The Roadmap: TypeScript +Vite + React + Node + Fetch + Vitest + Docker
          Compose + + GitHub + Azure DevOps
        </h3>
      </header>
      <UserPage />
      <PostPage />
      {/* <Classroom name='Saint Paul High School' /> */}

      {/* <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div> */}
      {/* <Home /> */}

      {/* <Blog /> */}
      {/* <WatchList /> */}
      {/* <TodoApp /> */}

      {/* <VanillaExtract /> */}
      {/* <Menu /> */}
      <hr />

      {/* <AxiosApi /> */}
      {/* <TailwindCSSBorderBox /> */}

      {/* <MyList /> */}
      <hr />
      {/* <UserComponent
          name='Stephen'
          address='152 Eagleton Ct, Palm Beach Gardens, FL 33418'
          age={73}
        /> */}
      {/* <h4>+ Vanilla Extract CSS-in-JS + Tailwind CSS Framework</h4> */}
    </div>
  )
}

export default App
