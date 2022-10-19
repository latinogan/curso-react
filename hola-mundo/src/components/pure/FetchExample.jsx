import React,{useState,useEffect} from "react"
import {getAllUsers,getAllPagedUsers,getUserDetails } from "../../services/fetchServices"

const Fetchexample=()=>{
 const [users, setUsers] =useState([])
 const[selectedUser,setSelectedUser] =useState({})
  const [totalUsers, setTotalUsers]= useState(12)
  const [userPerPage,setUserPerPage]=useState(6)
 const [pages,setPages]= useState(2)


 useEffect(() =>{
    obtainUsers();
 },[]);

 const obtainUsers = () =>{
   getAllUsers()
   .then((response) => {
    console.log("All Users .",response.data)
    setUsers(response.data)
    setTotalUsers(response.total)
    setUserPerPage(response.per_page)
    setPages(response.total_pages)
   
   })
   .catch((error) =>{
    alert(`error while retreiving user: ${error}`)   
   })
   .finally(() => { 
     console.log("ended obtainig users:")
     console.table(users)
    })
 }

 const obtainPagedUsers=(page) =>{
  getAllPagedUsers(page)
  .then((response) => {
    console.log("All Paged Users .",response.data)
    setUsers(response.data)
    setTotalUsers(response.total)
    setUserPerPage(response.per_page)
    setPages(response.total_pages)
   
   })
   .catch((error) =>{
    alert(`error while retreiving user: ${error}`)   
   })
   .finally(() => { 
     console.log("ended obtainig users:")
     console.table(users)
    })
 }
const obtainUserDatails =(id)=>{
  getUserDetails (id)
  .then((response) => {
    console.log("All Paged Users .",response.data)
    setSelectedUser(response.data)
 
   
   })
   .catch((error) =>{
    alert(`error while retreiving user: ${error}`)   
   })
   .finally(() => { 
     console.log("ended obtainig users:")
     console.table(selectedUser)
    })
}


    return (
        <div>
        <h2>users :</h2>
       {
        users.map((users ,index) =>
        ( <p key={index} onClick={()=>obtainUserDatails(users.id) }>{
            users.first_name
       }

       {users.last_name}
       </p>)
        )
       }
       <p>Showing {userPerPage} users of {totalUsers}</p>
       <button onClick={() =>obtainPagedUsers(1)}>1</button>
       <button onClick={()=>obtainPagedUsers(2)}>2</button>

       <div>
        <h3>UserDetails</h3>
       </div>
       {selectedUser && (
        <div>
        <p>Name: {selectedUser.first_name}</p>
        <p>Last Name{selectedUser.last_name}</p>
        <p>Email {selectedUser.email}</p>
        <img src={selectedUser.avatar} style={{height: "50px", width:"50px"}}  alt="avatar"/>
        </div>
        )}
       </div>
       
    )
}
export default  Fetchexample;