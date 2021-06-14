import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase';
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const signIn=e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')

            })
            .catch(error=>alert(error.message))

    }
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
           
        }) 
        // console.log(auth);
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png
            "/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button typre='submit' onClick={signIn} className='login_signInButton'>Sign In</button>

                    <p>My name is Garvit Sharma my name is Garvit Sharma
                       My name is Garvit Sharma my name is Garvit Sharma
                       My name is Garvit Sharma my name is Garvit Sharma
                    </p>

                    <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>

                    
                    
                </form>
            </div>


            
        </div>
    )
}

export default Login
