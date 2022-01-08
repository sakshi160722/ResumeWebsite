import React, { createContext, useState ,useEffect} from 'react';

export const ViewportContext =createContext({});

const Viewportprovider= ({children}) =>{
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    const handlewindowResize=()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(()=>{
        window.addEventListener("resize",handlewindowResize);
        return()=>window.removeEventListener("resize",handlewindowResize);
    },[]);

    return(
        <ViewportContext.Provider value={{width,height}}>
             {children}
        </ViewportContext.Provider>
    )
};

export default Viewportprovider;