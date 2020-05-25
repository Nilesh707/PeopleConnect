import {API} from  "../../backend"
// API means  http://localhost:7000/api/

export const signup = user =>{
    console.log(user)
    return fetch(`${API}/signup`,{
        method : "POST",
        headers :{
            Accept : "application/json",
            "content-Type":"application/json"
        },
        body : JSON.stringify(user)
    }).then(res=>{
        console.log(res +" response aa gaya")
        return res.json();
    })  
    .catch(err=>console.log(err))
}

export const signin = user =>{
    return fetch(`${API}/signin`,{
        method : "POST",
        headers :{
            Accept : "application/json",
            "content-Type":"application/json"
        },
        body : JSON.stringify(user)
    }).then(res=>{
        return res.json();
    })
    .catch(err=>console.log(err))
}

export const authenticate = (data,next)=>{  // to save token in browser
    if(typeof window!=="undefined"){  
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout =() =>{
    if(typeof window!=="undefined"){
        localStorage.removeItem("jwt")
        //next();

        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(res=> console.log("Logout Successfull"))
        .catch(err=> console.log(err));
    }
}


export const isAuthenticated=()=>{
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false
    }
}