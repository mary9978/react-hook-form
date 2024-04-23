import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";
import toast from "react-hot-toast";
import TextField from "./TextField";
function LoginForm() {
    const { register,resetField, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const [togglePassword,setToggle] = useState(false);
    const FormHandler =(data)=>{
        resetField("userName");
        resetField("password");
        toast('you have successfully login !!!',{
            duration: 4000,
            style:{
                backgroundColor :'#9DA0DC',
                fontFamily:'nunito',
                fontWeight:'bold'
            }
        });
    }
  return (
    <form 
    onSubmit={handleSubmit(FormHandler)}
    className="flex flex-col">
        <TextField register ={register} name={'userName'} type={'text'} placeholder={'Enter username'}/>
      <p className="error">{errors.userName?.message}</p>
      <div className="flex mt-2 items-center justify-between rounded-lg  bg-white">
        <TextField register ={register} name={'password'} type={togglePassword ? 'text' : 'password'} placeholder={'Enter password'}/>
        {togglePassword ? 
        <LuEye onClick={()=>setToggle(false)} color="gray" className="me-2 cursor-pointer" /> 
        :
         <LuEyeOff onClick={()=>setToggle(true)} color="gray" className="me-2 cursor-pointer" />
        }     
      </div>
      <p className="error">{errors.password?.message}</p>
      <div className="flex justify-end text-gray-500 font-nunito text-xs">
        <Link to={"#"}>Recovery Password</Link>
      </div>
      <button className="btn ">Sign In</button>
    </form>
  );
}

export default LoginForm;
