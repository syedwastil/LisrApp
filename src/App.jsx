import React, { useState } from "react";
import {useSelector} from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import CardWidget from "./CardWidget.jsx";
import CreateWidget from "./CreateWidget.jsx";
import UpdateWidget from "./UpdateWidget.jsx";

function App() {
  const Lists=useSelector(state=>state.Lists)
  const update=useSelector(state=>state.update)
  const [create, setCreate] = useState(false);

  const handleCreate = () => {
    setCreate(true);
  };
  return (
    <Box sx={{ bgcolor: "#fafafa", display: "block" }}>
      <Box sx={{ p: 1, m: 1, alignItems: "center", bgcolor: "#ffffff" }}>
        <Typography variant="h1" align="center">
          List App
        </Typography>
      </Box>
      <Box sx={{ p: 1 }} textAlign="center">
        <Button align="center" onClick={handleCreate}>
          Create
        </Button>
      </Box>
      {create && (
        <Box sx={{ display:'flex',justifyContent:'center', p: 1,  }} >
          <CreateWidget setClose={setCreate} />
        </Box>
      )}
      {update && (
        <Box sx={{ display:'flex',justifyContent:'center', p: 1,  }} >
          <UpdateWidget  />
        </Box>
      )}
      <Box sx={{display:'flex',flexWrap:'wrap', p: 1, m: 1, justifyContent: "center", bgcolor: "#ffffff" }}>
      {!Lists.length && 
      <Typography>No Items in List so far. Click create to add one.</Typography>

      }
      { Lists.map((list) => {
        if(list!==undefined){
            const {id,title,description}=list;
            return (<CardWidget key={id} title={title} description={description} id={id}></CardWidget>)
        }
      })}
      </Box>

    </Box>
  );
}

export default App;
