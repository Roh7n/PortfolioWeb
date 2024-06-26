import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Createuser from "./components/Createuser"
import User from "./components/User"
import Edituser from "./components/Edituser"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
           <Route element={<Createuser/>} path="/"/>
           <Route element={<User/>} path="/user"/>
           <Route element={<Edituser/>} path="/edit/:abc"/>
            </Routes>
            </BrowserRouter>
       

        </div>
    )
}

export default App