import { Link } from "react-router-dom"
import style from "./crud.module.css"
const Nav=()=>{

    return(
        <div id={style.navbar}>
            <Link  to="/" >CreateUser</Link>
            <Link to="/user" >User</Link>

        </div>
    )
}

export default Nav