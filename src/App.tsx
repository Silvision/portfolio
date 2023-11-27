import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'
import ProjectsGrid from './ProjectsGrid'
import Ecosphere from './Ecosphere'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TopBar/>} >
      <Route index element={<ProjectsGrid/>} />
      <Route path="ecosphere" element={<Ecosphere/>} /> 

    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
