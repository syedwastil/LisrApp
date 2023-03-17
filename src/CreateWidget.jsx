import React, { useState,useId } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createList } from "./state";

function CreateWidget({setClose}) {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const id=useId();

  const dispatch=useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);

  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);

  };
  const handleAdd = () => {
    dispatch(createList({List:{title,description,id}}))
      setTitle('')
      setDescription('')
      setClose(false)

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
      <TextField label="Title" variant="outlined" fullWidth onChange={handleChangeTitle} />
      
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        onChange={handleChangeDescription} 
   
      />
            <Box sx={{ p: 1 }} textAlign="right">
  
     <Button align="center" onClick={handleAdd}>
          Add
        </Button>

      </Box>
    </Box>
  );
}

export default CreateWidget;
