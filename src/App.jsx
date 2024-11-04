import { useState } from "react";
import Authenticate from "./authenticate";
import SignUpForm from './signUpForm';
import './App.css'

export default function App(){
  const [token, setToken] = useState(null)
  



  return (
    <>
     <SignUpForm token={token} setToken={setToken} />
            
    <Authenticate token={token} setToken={setToken} />
    </>
  )


}
