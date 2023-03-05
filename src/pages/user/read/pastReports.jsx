import React from "react";

function PastRecords({ data, handleFind, setCode }) {
  console.log(data);
  return (
    <div>
    {
        data!==''?
        <div
      style={{
        height: "69vh",
        margin: "10%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
        flexDirection: "column",
      }}
    >
      <div
        class="container"
        style={{ overflowX: "auto", MaxHeight: "50vh", width: "45vw" }}
      >
        <h1 class="label"> Past Records Info</h1>

        {data?.pastReports?.map((n, index) => {
          return (
            <div
              class="d-flex"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div style={{ marginBottom: "50px" }}>
                <h3 class="label"> Reason</h3>
                <h3>{n?.reason}</h3>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <h3 class="label"> Diagnosis</h3>
                <h3>{n?.diagnosis}</h3>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <h3 class="label"> Date</h3>
                <h3>{n?.appDate}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
      :
      <form onSubmit={handleFind}>
        

       


    <input onChange={(e)=>{setCode(e.target.value)}} type="text" />
    
    <button  type="submit" style={{height:'40px',width:'40px'}}></button>
        
    </form> 
    }
    </div>

);
}
export default PastRecords;



