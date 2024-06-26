import { useEffect,useState } from "react"
import style from "./crud.module.css"

import { Link } from "react-router-dom"
import axios from "axios"

const User=()=>{

    let [employees,setEmployees]=useState([])
    let [load,SetLoad]=useState(true)

    useEffect(()=>{
        axios.get('http://localhost:100/employees')
        .then((resp)=>{
            console.log(resp.data);
            setEmployees(resp.data)

        })
        .catch(()=>{
            console.log("failed");
        })
        SetLoad(true)
    },[load])

    let deleteUser=(id)=>{
        axios.delete(`http://localhost:100/employees/${id}`)
        SetLoad(false)
    }
    

    return (
        <div id={style.tablepar}>
          <table id={style.tables}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Salary</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.empname}</td>
                    <td>{employee.empsal}</td>
                    <td>{employee.empcomp}</td>
                    <td>
                      <button>
                        <Link to={`/edit/${employee.id}`}>Edit</Link>
                      </button>
                      <button onClick={() => { deleteUser(employee.id); }}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )
    
}
export default User