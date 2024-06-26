import { useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createuser =()=>{

    let[name,setName]=useState("")
    let[sal,setSal]=useState("")
    let[comp,setComp]=useState("")

    let navigate=useNavigate()
        
    let formhandler=(e)=>{
        if(name===""|| sal===""|| comp===""){
            alert("fill the form properly")
        }
        else{
            e.preventDefault()
            let payload={
                empname:name,
                empsal:sal,
                empcomp:comp
            }
            axios.post('http://localhost:100/employees',payload)
            .then(()=>{
                navigate("/User")
            })
            .catch(()=>{
                console.log("eroorrrr");
            })
        }

    }
    

    return(
        <div id={style.form}>

            <form >
                <h2>CREATE USR FORM</h2>
                <input type="text"  placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="SALARY" value={sal} onChange={(e)=>{setSal(e.target.value)}} />
                <input type="text" placeholder="COMPANY" value={comp} onChange={(e)=>{setComp(e.target.value)}} />
                <button onClick={formhandler}>SUBMIT</button>

            </form>

        </div>
    )
}
export default Createuser