export const tabBarInitialState = {
    shown  : true
  };
  
  export const tabBarReducer = (state = tabBarInitialState, action) => {
    switch (action.type) {
      case "HIDE_TABBAR":
        return {  ...state , shown: false };
      case "SHOW_TABBAR":
      
        return {  ...state , shown: true };
  
      default:
        return state;
    }
  };
  