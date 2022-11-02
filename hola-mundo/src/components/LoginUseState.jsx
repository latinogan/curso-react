import React ,{useState} from 'react';

const LoginUseState = () => {

const [username, setusername] = useState(" ");
const [password,setpassword] = useState(" ");
const [isloading,setisloading] = useState(false);
const [error, seterror] = useState(" ");
const [isLoggedIn,setisLoggedIn] = useState(false);

const submit = async (e) => {
    e.preventDefault();
    seterror(" ");
    setisloading (true);
    try {
        await function login({username,password}){
            new Promise((resolve, reject) => {
                setTimeout(() => { 
                if(username ==="admin" && password ==="admin"){
                    resolve ();
                }else {
                    reject()
                }
            },2000);
        })
            
        }
        setisLoggedIn(true);
        setisloading(false)
    } catch (error) {
        seterror(`Invalid Username or Password: ${error}`);
        setisloading(false);
        setusername(" ");
        setpassword(" ");
        
    }
}

const logout =()=>{
    setisLoggedIn(false);
    setisloading(false)
}

    return (
        <div className="app">
        <div>
            {
                isLoggedIn ? (
                    <div>
                    <h1>Welcome {username}</h1>
                    <button onClick= {logout}>
                            LogOut
                    </button>
                    </div>

                ) :
                (
                    <form onSubmit={submit}>
                    {
                        error && <p style= {{color:"tomato"}}>{error}</p>
                    }
                    <input
                        type="text"
                        placeholder='UserName'
                        value={username}
                        onChange={(e)=>setusername(e.currentTarget.value)}
                    />
                    <input
                        type="text"
                        placeholder='password'
                        value={password}
                        onChange={(e)=>setpassword(e.currentTarget.value)}
                    />

                    <button type="submit">
                        {
                            isloading ?"Loggin...":"Login"
                        }
                    </button>

                    </form>
                )
            }
        </div>
            
        </div>
    );
}

export default LoginUseState;
