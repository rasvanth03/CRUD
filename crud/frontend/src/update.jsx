import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Update() {
    const [update, setUpdate] = useState({uname: '', uage: '', urole: '' ,});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3005/user/${id}`)
            .then(response => {
                setUpdate(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const updatedetails = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3005/user/${id}`, update)
            .then(response => {
                setUpdate(response.data);
                alert("Data updated successfully");
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 col-sm-8">
                    <div className="card p-4 shadow">
                        <h3 className="text-center mb-4">Update User</h3>
                        <form onSubmit={updatedetails}>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={update.uname}
                                    onChange={(e) => setUpdate({ ...update, uname: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={update.uage}
                                    onChange={(e) => setUpdate({ ...update, uage: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={update.urole}
                                    onChange={(e) => setUpdate({ ...update, urole: e.target.value })}
                                    required
                                />
                            </div>
                                {/* <div className="mb-3">
                                <label className="form-label">Contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={update.urole}
                                    onChange={(e) => setUpdate({ ...update, ucontact: e.target.value })}
                                    required
                                />
                            </div> */}
                            <button type="submit" className="btn btn-success w-100">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
