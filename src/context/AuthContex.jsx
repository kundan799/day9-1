import React,{ createContext ,useState } from "react";



export const AuthContext=createContext();
export const Authprovider =({children})=>{
    const [isAuthorized,setIsAuthorized]=useState(false);
    const Login =(username,password)=>{
        setIsAuthorized(true);


    };
    const Logout=()=>{
        setIsAuthorized(false);

    }

    return <AuthContext.Provider value={{isAuthorized,Login,Logout}}>{children}</AuthContext.Provider>
}
