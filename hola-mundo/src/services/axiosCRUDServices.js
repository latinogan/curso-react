import axios from "axios"

/**
 * @param {string} Email
 * @param {password} Password
 */
 export const login=(email,password) =>{ 
 let body={
    email:email,
    password:password
}

 return axios.post("https://reqres.in/api/login",body)


}

//todo obtain All users
export const  getAllUsers=() =>{
    return axios.get("https://reqres.in/api/users")
}

//todo obtain all paged users
export const  getAllPagedUsers=(page) =>{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//todo obtain user by id
export const  getAllUsersById=(id) =>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//todo Create user
export const  createUser=(name,job) =>{
    let body={
        name:name,
        job:job  
    }
    
     return axios.post("https://reqres.in/api/users",body)
    
}

//todo Update user
export const  updateUser=(id,name,job) =>{
    let body={   
        name:name,
        job:job
    }
    
     return axios.put(`https://reqres.in/api/users/${id}`,body)
    
}
//todo Delete user
export const  deleteUsersById=(id) =>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}

