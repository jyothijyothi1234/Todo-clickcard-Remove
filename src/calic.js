import React, { useEffect, useState } from "react";




export default function   Calic(){


const[value,setValue]=useState()
const[valu,setValu]=useState()
const[result,setResult]=useState()
const[dat,setDat]=useState(false)

useEffect(()=>{

    if(!dat){

        return ;
    }else{
    
        setResult(Number(value)+Number(valu))
    }

},[dat,valu,value])

    return(


        <div>
            <input      onChange={(e)=>setValue(e.target.value)} />
            +
            <input      onChange={(e)=>setValu(e.target.value)} />
            =
            <input    value={result} />
            <button   onClick={()=>setDat(true)}>calculate</button>

        </div>
    );
}