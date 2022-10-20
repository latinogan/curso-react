import React , {useState,useEffect}from "react"
import {getRandomUser} from "../../services/axiosService"

const AxiosExample =()=>{
  
    const[user,setUser] =useState(null);
  //  useEffect(()=> {
     //   obtainUser()
   // }, []);

     const obtainUser =()=>{
        getRandomUser()
        .then((response)=> {
            if( response.status===200){
                setUser(response.data.results)

            }
            
        })
        .catch((error)=>{
            alert(`something went wrong : ${error}`)
        })
    
     }


    return (
        <div>
        <h1>Axios Example</h1>
        { user !=null ? 
        (
            <div>
                {/*<img src={user.picture.large} alt="avatar"/>*/}
                <h2> {user.name.title} {user.name.first} {user.name.last}</h2>
                <h3>{user.email}</h3>
            </div>
        )
        :
        (
            <div>
            <p>Generate a new user</p>
            <button onClick={obtainUser}>
            Random user
            </button>
            </div>
        ) }
    </div>
    )
}

export default AxiosExample;