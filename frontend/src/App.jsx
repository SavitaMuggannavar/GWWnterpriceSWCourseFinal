import {useEffect, useState} from 'react'

import './App.css'

function App() {
    const url = "http://localhost:8080/api/users";
    const [users,setUsers] = useState([]);


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })

    },[]);

  return (
    <>
     <h1> React Frontend</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user => (
                    <tr key = {user.Id}>
                        <td>{user.Id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.active ? 'Active' : 'Inactive'}</td>
                    </tr>))
            }
            </tbody>
        </table>

    </>
  )
}

export default App
