
export const initialState = {
   firstName : '',
   lastName : ''
}

export function nameReducer(
    state = initialState,
    action : {type : string , payload: { firstName: string, lastName: string }}) {
   switch (action.type){
      case "PUSH_NAME":
         return {...state, ...action.payload}
      default:
         return state;
   }
}