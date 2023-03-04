import { defaultAbiCoder } from "ethers/lib/utils";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ind";
function RightPanel({uid,update}){
    const {
        addPatient,
        getAllPatients,
        contract,
        getPatient,
        getMembers,
        getPublicInfo,
      } = useStateContext();
    const [parray, setparray] = useState([]);
    const [memberids, setmemberids] = useState([]);
    const { connect, address } = useStateContext();
    const handleGetMemebers = async () => {
        // var code = document.getElementById("code-text").value;
      
        const p = await getPublicInfo(uid);
       
        
        await getMembers(p?.uid).then((res) => {
          // console.log(res.farray,res.patient);
          setparray(res?.farray);
          setmemberids(res?.patient);
        });
    
        console.log(parray,'parray');
      };

      useEffect(()=>{
        console.log('hello');
        if(uid){
            handleGetMemebers();}
      },[update])
      useEffect(()=>{
        console.log('hello');
        if(uid){
            handleGetMemebers();}
      },[uid]);
      setTimeout(()=>{
        if(parray===[]){
        handleGetMemebers();}
      },3000)

      

    return (
        <div style={{height:'100vh' ,width:'16vw',backgroundColor:'black',flexDirection:'column',display:'flex',justifyContent:"space-between"}} >
            {
                parray.map((p)=>{
                    return(<h1>{p.name}</h1>)

                })
            }

        </div>

    );
}
export default RightPanel;