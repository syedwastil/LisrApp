import {createSlice} from "@reduxjs/toolkit"

const initialState={
Lists:[],
update:false,
updateList:{},
}

export const listSlice=createSlice({
    name:"list",
    initialState,
    reducers:{
        createList:(state,action)=>{
            let List=action.payload.List
            state.Lists.unshift(List)
       

        },
        updateList:(state,action)=>{
            const {title,description}=action.payload.List
            const updatedLists=state.Lists.map((List)=>{
                if(List!=undefined && List.id===action.payload.List.id){
                    return {...List,title:title,description:description}
                }else{
                    return List
                }
                
            });state.Lists=updatedLists
        },
        deleteList:(state,action)=>{
    

            const updatedLists=state.Lists.filter((List)=>{
       
                   return  List.id!==action.payload.List.id
                 
                
            })
            state.Lists=updatedLists

        },
        setUpdate:(state,action)=>{
            state.update=action.payload.update;
            state.updateList=action.payload.updateList;
        }

    }
})

export const {createList,updateList,deleteList,setUpdate}=listSlice.actions;
export default listSlice.reducer;
