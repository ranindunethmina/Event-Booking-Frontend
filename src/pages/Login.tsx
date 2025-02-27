// import {useEffect, useState} from "react";
// import {Button, TextField} from "@mui/material";
// import {useDispatch, useSelector} from "react-redux";
// import {AppDispatch} from "../store/store.ts";
// import {loginUser, registerUser} from "../reducers/UserReducer.ts";
// import {useNavigate} from "react-router";
// import {User} from "../models/User.ts";
//
// export function Login() {
//
//     const dispatch = useDispatch<AppDispatch>();
//     const navigate = useNavigate();
//
//     const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
//
//     const [register_username, setRegisterUsername] = useState('');
//     const [register_password, setRegisterPassword] = useState('');
//
//     const [login_username, setLoginUsername] = useState('');
//     const [login_password, setLoginPassword] = useState('');
//
//     function handleRegister(){
//         const user: User = {username: register_username,password : register_password}
//         dispatch(registerUser(user));
//     }
//
//     function handleLogin(){
//         const user : User = {username : login_username, password: login_password};
//         dispatch(loginUser(user));
//     }
//
//     useEffect(() => {
//         if(isAuthenticated){
//             navigate('/dashboard');
//         }
//     }, [isAuthenticated]);
//     return (
//         <>
//             <div>
//                 <h2>Register</h2><br/>
//                 <TextField type="text" placeholder='username' onChange={(e)=>setRegisterUsername(e.target.value)}/><br/>
//                 <TextField type="password" placeholder='password' onChange={(e) =>setRegisterPassword(e.target.value)}/><br/>
//                 <Button onClick={handleRegister}>Register</Button>
//             </div>
//
//             <div>
//                 <h2>Login</h2><br/>
//                 <TextField type="text" placeholder='username' onChange={(e) =>setLoginUsername(e.target.value)}/><br/>
//                 <TextField type="password" placeholder='password' onChange={(e)=>setLoginPassword(e.target.value)}/><br/>
//                 <Button onClick={handleLogin}>Login</Button>
//             </div>
//             {login_username+ ' '+ login_password} <br/>
//             {register_username + ' '+ register_password}
//         </>
//     );
// }