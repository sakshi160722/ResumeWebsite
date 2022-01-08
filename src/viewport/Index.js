import React, { useContext } from 'react';
import { ViewportContext } from './Viewportprovider';


const useViewport=()=>{
    const{width,height}=useContext(ViewportContext);
    const isMobile=width<900;

    return{width,height,isMobile};
}

export default useViewport;