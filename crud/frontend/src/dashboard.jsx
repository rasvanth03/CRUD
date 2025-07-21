import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import './App.css';
DataTable.use(DT);
export default function Dashboard(){
    const[newUser,setUser]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
    axios.get('http://localhost:3005/user')
        .then((response) => setUser(response.data))
        .catch(error => console.log("dashboard error", error));
    })

    const addUser=()=>{
        navigate('/createuser')
    }
    const updatefun=(id)=>{
        // console.log(id)
        navigate(`update/${id}`)
    }
    const deletefun=(id)=>{
        axios.delete(`http://localhost:3005/user/${id}`)
        .then(response=>{
            alert("confirm want to delete")
            setUser(response.data)
            window.location.reload();
        })
        .catch(error=>{console.log(error)})
    }

    return(
        <body>
            
       
        <>
        <div className="container mt-4">
        <h1 className="" style={{color:"red"}}>CRUD Operations using MERN Stack</h1>
        <button onClick={()=>addUser()} className="btn btn-success">Add User</button>
        <table className="table table-striped mt-4">
                <thead>
                <tr style={{textAlign:"center"}}>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody style={{textAlign:"center"}}>
                    {newUser.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.uname}</td>
                            <td>{user.uage}</td>
                            <td>{user.urole}</td>
                            <td><button className="btn btn-success" onClick={()=>updatefun(user._id)}>Update</button> 
                            <button className="btn btn-danger ms-4" onClick={()=>deletefun(user._id)}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>

        </table>
        </div>
        </>
     </body>
    )
}