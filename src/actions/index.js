import { ADD_NEW_ITEMS } from '../typeactions';
import { CHANGE_COLOR } from '../typeactions'
import { REMOVE_ITEMS } from '../typeactions';
import { EDIT_ITEMS } from '../typeactions';

export const changecolor = (payload)=>{
    return {type: CHANGE_COLOR,payload}
}

export const  addnewitem = (payload) =>{
    return {type : ADD_NEW_ITEMS ,payload}
}

export const deleteitem = (payload) =>{
    return {type : REMOVE_ITEMS, payload}
}

export const toggleEdit = (key) =>{
    return {type: EDIT_ITEMS ,key}
} 

export const editItem=(payload)=>{
    return{
        type:"EDIT_ITEM",payload
    }
}