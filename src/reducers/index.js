import { ADD_NEW_ITEMS } from '../typeactions';
import { CHANGE_COLOR } from '../typeactions';
import { REMOVE_ITEMS } from '../typeactions';
import { EDIT_ITEMS } from '../typeactions';

const initialState={
    items: []
};

const rootReducers = (state = initialState , action) => {
    switch (action.type){
        case ADD_NEW_ITEMS :
        return Object.assign({}, state, {
            items: state.items.concat(action.payload)
          });
        case CHANGE_COLOR : 
        return  Object.assign({}, state, {
            items: state.items.map(el => {return  (action.payload===el.key) ?  {...el,button: !el.button}: el })
          }); 
        case REMOVE_ITEMS :
          return Object.assign({}, state, {
            items: state.items.filter(el =>action.payload!==el.key)
          });
        case EDIT_ITEMS : 
        return Object.assign({}, state, {
          items: state.items.map(el =>{return (el.key===action.key) ? {...el,edit:!el.edit}:el})
        });
        case "EDIT_ITEM":
          return {...state,items:state.items.map(el=>el.key===action.payload.key? {...el,text:action.payload.newText}:el)}
        default: 
        return state
    }
};

export default rootReducers;
