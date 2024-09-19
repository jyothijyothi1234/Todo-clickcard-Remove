import React, { useEffect, useState } from "react";

function Name(){

    const[value,setValue]=useState();
    const[val,setVal]=useState();
    const[va,setVa]=useState()
    const[iscal,setIscal]=useState(false)

    useEffect(()=>{

        if(!iscal){
return ;
        }
else{
    setVa(Number(value)+Number(val))

}
    },[val,value,iscal])

// console.log(value)

    return(
        <div>
            <input  type="text" onChange={(e)=>setValue(e.target.value)}  /><br /><br />
            <h3> + </h3>

            <input  type="text"  onChange={(e)=>setVal(e.target.value)}  /><br /><br />
            <h3> = </h3>

            <input  type="text" value={va} /><br /><br />
<button  onClick={()=>setIscal(true)} > click </button>
{va}

        </div>
    );
}


export default Name;