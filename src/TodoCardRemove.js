import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Todo() {
  const [title, setTitle] = useState("");
  const [desp, setDesp] = useState("");
  const [data, setData] = useState([]);
  const [isFilter,setIsFilter]=useState("")


  useEffect(()=>{

    const FilteringData= data.filter((item)=> item.title !== isFilter)

    setData(FilteringData)
    setIsFilter("")

  },[data,isFilter])


  return (
    <Grid container item xs={12}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "150px",color:"pink" }}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px",color:"black" }}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={(e) => setDesp(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Button
          variant="contained"
          sx={{
            width: "220px",
            height: "50px",
            backgroundColor:"blue"
          }}
          onClick={() => setData([...data, { title, desp }])}
        >
          Add
        </Button>
      </Grid>
      {data.map((item) => (
        <Card title={item.title} desp={item.desp} setIsFilter={setIsFilter} />
      ))}
    </Grid>
  );
}

function Card(Props) {
  return (
    <Grid container item >
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "30px",
          marginLeft: "150px",
          backgroundColor: "pink",
          marginRight: "120px",
        }}
      >
        <h3>{Props.title}</h3>
        <p>{Props.desp}</p>
        <Button
          variant="contained"
          sx={{
            width: "220px",
            height: "50px",
            backgroundColor:"green"
          }}
          onClick={() => Props.setIsFilter(Props.title)}
        >
          Completed
        </Button>

      </Grid>
    </Grid>
  );
}

export default Todo;
