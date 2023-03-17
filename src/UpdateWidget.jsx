import React, { useState,useId } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateList,setUpdate } from "./state";

function UpdateWidget() {
    
    const {title,description,id}=useSelector(state=>state.updateList);
    const [updatedtitle, setTitle] = useState(title);
    const [updateddescription, setDescription] = useState(description);


  const dispatch=useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);

  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);

  };

  const handleUpdate = () => {
    dispatch(updateList({List:{title:updatedtitle,description:updateddescription,id:id}}))
    dispatch(setUpdate({update:false,updateList:{}}))

  };
  return (
    <Box
      sx={{
        width: "30rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <TextField label="Title" value={updatedtitle} variant="outlined" fullWidth onChange={handleChangeTitle} />
      <TextField
      label="Description"
        value={updateddescription}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        onChange={handleChangeDescription} 
       
      />
            <Box sx={{ p: 1 }} textAlign="right">

    <Button align="center" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateWidget;
