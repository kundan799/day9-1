import { createContext,useState } from "react";

export const Themcontext=createContext();//
export const Themeprovider=({children})=>{//
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark") ;
        }else{
            setTheme("light");  
        }
    }
    return (
        <Themcontext.Provider value={{
            theme,
            islight:theme ==="light" ,
            toggleTheme,
        }}>{children}</Themcontext.Provider>
    )
}
