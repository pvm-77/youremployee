
import axios from "axios"


let setToken=(token)=>{
    console.log(token)
    const config={
        Authrozation:`Bearer ${token}`
    }
}
const url='https://dummyjson.com/docs/auth/login';
const login =async({username,password})=>{

    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username,
    password
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);
}

const loginService={login,setToken}

export default loginService;