const initialState = {
}
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_NOTE_DATA':
      const { key, data} = action; 
      const newState = {};
      newState[key] = data;
      return Object.assign({}, state, newState) ;
    case 'SET_POLICY_STRING':
      return Object.assign({}, state, {
        policyString: action.policyString,
      })
    case 'SET_QUEUE':
      const { queue } = action;
      return Object.assign({}, state, {
        queue,
      })
    case 'SET_FULLNAMES':
      const { fullnames } = action;
      return Object.assign({}, state, {
        fullnames,
      })  
    case 'SET_REFER_REASONS':
      const { reasons: referReasons } = action;
      return Object.assign({}, state, {
        referReasons,
      })
    default:
      return state;
  }
}
    

  // switch(action.type) { 
    // case 'SET_MED_CLAIM_REVIEW_NOTE':
    //   console.log(code);
    //   const { lob, service, drugRequest, pa, claimHistory, benefits, summary } = action.data;
    //   return Object.assign({}, state, {
    //     lob, service, drugRequest, code, pend, policyString, pa, claimHistory, benefits, summary, 
      
    //   })
    // case 'SET_INFO_REQUEST_NOTE':
    //     let { policyString, route, related } = action.data;
    //     return Object.assign({}, state, {
    //       code, pend, policyString, route, related,
    //     })
    // case 'SET_ROUTE':
    //     const { route } = action;
    //     return Object.assign({}, state, {
    //       route,
    //     })
    // case 'SET_RELATED':
    //     const { related } = action;
    //     return Object.assign({}, state, {
    //       related,
    //     })
    // case 'SET_PEND':
    //     return Object.assign({}, state, {
    //       pend: action.pend,
    //     })
    // case 'SET_CODE':
    //     return Object.assign({}, state, {
    //       code: action.code,
    //     })
  
    // case 'SET_OCWA_NOTE':
    //     const { ocwaNote } = action;
    //     return Object.assign({}, state, {
    //       ocwaNote,
    //     })
    // case 'SET_INSTRUCTIONS':
    //     const { instructions } = action;
    //     return Object.assign({}, state, {
    //       instructions,
    //     }) 
    // case 'SET_MODIFIER22':
    //     const { modifier22 } = action;
    //     return Object.assign({}, state, {
    //       modifier22,
    //     })
    // case 'SET_REMAINDER':
    //     const { remainder } = action;
    //     return Object.assign({}, state, {
    //       remainder,
    //     }) 



export default reducer;