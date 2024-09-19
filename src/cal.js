import React, { useEffect, useState } from "react";


function Cal(){
    const[val1,setVal1]=useState();
    const[val2,setVal2]=useState();
    const[result,setResult]=useState();
    const[iscalt,setIscalt]=useState(false);


    useEffect(()=>{
        if(!iscalt){

            return ;
        }else{
            setResult(Number(val1)+ Number(val2))
        }
    },[iscalt,val1,val2])


    return(
        <div>
            <input  onChange={(e)=>setVal1(e.target.value)} />
            <h3> + </h3>

            <input onChange={(e)=>setVal2(e.target.value)}  />
<h3> = </h3>
            <input  value={result} />
            <button  onClick={()=>setIscalt(true)}> Calculator</button>

        </div>
    );
}


export default  Cal;