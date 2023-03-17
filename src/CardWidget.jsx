import React from 'react'
import { Box,Typography,Tooltip,IconButton } from '@mui/material'
import {EditOutlined,DeleteOutline,} from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { deleteList,setUpdate } from './state';


function CardWidget({title,description,id}) {
  const dispatch=useDispatch();

  const handleEdit=()=>{
      dispatch(setUpdate({update:true,updateList:{title:title,description:description,id:id}}))
  }

  const handleDelete=()=>{
    console.log(id,title)
    dispatch(deleteList({List:{id}}))
  }
  return (
<Box sx={{p:1.5,m:1, bgcolor:'grey',minWidth:'20rem'}}>
<Box display="flex" justifyContent="space-between">
<Typography variant='subtitle1'>{title}</Typography>
              <Box >
                <Tooltip title="Edit Item">
                  <IconButton onClick={handleEdit}>
                    <EditOutlined />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Item">
                  <IconButton onClick={handleDelete}>
                    <DeleteOutline />
                  </IconButton>
                </Tooltip>
              </Box>
              </Box>
 
  <Typography variant='caption'>{description}</Typography>
</Box>
  )
}

export default CardWidget