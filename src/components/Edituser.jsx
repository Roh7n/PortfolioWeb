import { useEffect, useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { Navigate, useNavigate, useParams } from "react-router-dom"

const Edituser=()=>{

    let[name,setName]=useState("")
    let[sal,setSal]=useState("")
    let[comp,setComp]=useState("")
    let obj=useParams()
    let navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:100/employees/${obj.abc}`)
        .then((resp)=>{
            setName(resp.data.empname)
            setSal(resp.data.empsal)
            setComp(resp.data.empcomp)

        })
        .catch(()=>{
            console.log("error");
        })
    },[])

    let updatebtn=(e)=>{
        e.preventDefault()
        let payload={
            empname:name,
            empsal:sal,
            empcomp:comp
        }
        axios.put(`http://localhost:100/employees/${obj.abc}`,payload)
        .then(()=>{
            navigate("/User")
        
        })
        .catch(()=>{
            console.log("errorrr");
        },)
    }


    return(
        <div id={style.form}>

        <form >
            <h2>USER EDIT FORM</h2>
            <input type="text"  placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder="SALARY" value={sal} onChange={(e)=>{setSal(e.target.value)}} />
            <input type="text" placeholder="COMPANY" value={comp} onChange={(e)=>{setComp(e.target.value)}} />
            <button onClick={updatebtn} >UPdate</button>

        </form>

    </div>
    )
}
export default Edituser