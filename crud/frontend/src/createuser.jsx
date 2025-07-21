import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function CreateUser(){
    const [Udetail, setDetails] = useState({ uname:'', uage:'', urole:'' })
    const navigate = useNavigate();

    const adddetails = (e) => {
      
        e.preventDefault();
        axios.post('http://localhost:3005/user', Udetail)
          .then(response=>setDetails(response.data))
          alert("new user created")
          navigate('/')
          .catch((err)=>console.log("error"))
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 col-sm-8">
                    <div className="card p-4 shadow">
                        <h3 className="text-center mb-4">Create New User</h3>
                        <form onSubmit={adddetails}>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={(e) => setDetails({ ...Udetail, uname: e.target.value })} 
                                
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    onChange={(e) => setDetails({ ...Udetail, uage: e.target.value })} 
                                    
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={(e) => setDetails({ ...Udetail, urole: e.target.value })} 
                                />
                            </div>
                                 {/* <div className="mb-3">
                                <label className="form-label">Contact</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={(e) => setDetails({ ...Udetail, ucontact: e.target.value })} 
                                />
                            </div> */}
                            <button type="submit" className="btn btn-primary w-100">Insert</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
