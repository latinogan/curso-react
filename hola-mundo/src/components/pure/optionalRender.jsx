import React, { useState }from "react";

//login logout button
const LoginButton = ({loginAction}) =>{
    return (
        <button style={ loggedStyle} onClick={loginAction}>  Log In</button>
    )
}
const LogoutButton = ({logoutaction}) =>{
    return (
        <button style={ unloggedStyle } onClick={logoutaction}>  Log Out</button>
    )
}

const loggedStyle={
    backgroundColor:"green",
    color:"white"
};

const unloggedStyle={
    backgroundColor:"red",
    color:"white",
    fontWeight:"bold"
};


// ? (expresion true) && expression => se renderiza la expresion
// ? (expresion false) && expression => no se renderiza la expresion




const Optionalrender= () =>{

    const [access,setAccess] =useState( true);

    const [nMessage,setnMessage] =useState( 0);

    

   // const updateAccess = () => {
   //     setAccess(!access)
 //   }
   
    const loginAction =() =>{
        setAccess(true)
    }

    const logoutaction =() =>{
        setAccess(false)
    }


    let optionalButton;

   // if(access){
    //    optionalButton= <button class="frank" onClick={updateAccess}>Log out</button>
   // } else {
    //    optionalButton=<button onClick={updateAccess}>  Log In</button>
     if(access){
       optionalButton= <LogoutButton  logoutaction={ logoutaction}></LogoutButton>
    } else {
       optionalButton= < LoginButton   loginAction={loginAction}></ LoginButton>
    }
//unreadmessage

let addMessage =() =>{
    setnMessage(nMessage +1)
}

    return (
        <div>
        {/**optional button */}
      
        {optionalButton}
        {/** message unread */}
        {nMessage >0 && nMessage === 1 &&<p>You Have {nMessage} New Message .....</p>}

        {nMessage >1 && <p>You Have {nMessage} New Message .....</p>}
        {nMessage === 0 && <p>There are no new message</p>}
        <button onClick={addMessage}>Add new message</button>

        </div>
    );
}

export default Optionalrender;