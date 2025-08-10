import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './Github/Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'



// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element ={<Home />} />
      <Route path='about' element ={<About />} />
      <Route path='contact' element ={<Contact />} />
      <Route path='user/:id' element ={<User />} />
      <Route
      loader = {githubInfoLoader}
       path='github'
       element ={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
