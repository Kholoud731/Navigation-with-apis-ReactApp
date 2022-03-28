import { useEffect, useState } from "react";


const Route = ({path, children}) => {

    const [currentPath, setPath] = useState(window.location.pathname)
    
    useEffect(()=>{

        const onPathChange =()=>{
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', onPathChange)

        return ()=>{
            window.removeEventListener('popstate', onPathChange)
        }
    },[])

    return ( currentPath ===  path ? children : null);
}
 
export default Route;