import { useEffect } from "react";

const AgainHook = (count) => {
    useEffect(() => {
        console.log("check top");
        if (count>1) {
            document.title = `Chat(${count})`;    
        }else {
            document.title = `Chat`;    
        }
        
    }, [count]);
}

export default AgainHook
