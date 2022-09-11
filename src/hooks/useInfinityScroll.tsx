import React, { useReducer, createContext } from 'react'

//////////////////////////////////////////////////////////////////////////
//
//  This example demo builds on the previous useReducer example.
//  In that version data was loaded in chunks by pressing a button.
//  This version auto loads the data based on scroll position.
//  It does this through using the Intersection Oberserver API.
//  This example is based off of a tutorial by Leigh Halliday
//  https://www.youtube.com/watch?v=GVDiw3lAyp0
//
//////////////////////////////////////////////////////////////////////////

/* =========================================================================
                              types
========================================================================= */

// const LOADING = 'LOADING'
// const LOADED = 'LOADED'

/* =========================================================================
                            reducer
========================================================================= */

//Technically we're not showing items per page.
//It's more like items to show at a time.
// const itemsPerPage = 8

// const reducer = (state: any, action: any) => {
//   console.log(
//     '🚀 ~ file: useInfinityScroll.tsx ~ line 30 ~ reducer ~ action',
//     action,
//   )
//   console.log(
//     '🚀 ~ file: useInfinityScroll.tsx ~ line 30 ~ reducer ~ state',
//     state,
//   )
//   switch (action.type) {
//     case LOADING:
//       return {
//         ...state,
//         isLoading: true,
//       }

//     case LOADED:
//       // eslint-disable-next-line no-case-declarations
//       const startParam = state.startParam + action.payload.dataChunk.length
//       return {
//         ...state,
//         isLoading: false,
//         data: [...state.data, ...action.payload.dataChunk],
//         startParam: startParam,
//         isMore: startParam !== action.payload.dataLength,
//       }

//     default:
//       throw new Error("Don't understand action.")
//   }
// }

/* =========================================================================
                            Context.js
========================================================================= */

// export const Provider = (props: any) => {
//   const [state, dispatch] = useReducer(reducer, {
//     isLoading: false,
//     isMore: true,
//     data: [],
//     startParam: 0,
//   })

//   const { isLoading, isMore, data, startParam } = state

//   //Update: If this function is only used by one component, it makes more sense
//   //to locate it in that component, and just pass dispatch instead.
//   const loadDataChunk = () => {
//     dispatch({ type: LOADING })

//     //Simulate asynchronous request with setTimeout
//     setTimeout(() => {
//       //dummyData represents the entire data set.
//       //What we want is a subset.
//       //Initially, startParam is 0.
//       //Thus startParam + itemsPerPage would be 10
//       const dataChunk = props.userData.slice(
//         startParam,
//         startParam + itemsPerPage,
//       )

//       //Once we have the dataChunk, call dispatch again...
//       //LOADED will cause the reducer to set isLoading: false.
//       //Moreover, the payload/dataChunk will be added onto state.data
//       //startParam will be adjusted accordingly
//       //And isMore will be reevaluated.
//       const payload = {
//         dataLength: props.userData.length,
//         dataChunk: dataChunk,
//       }
//       dispatch({ type: LOADED, payload: payload })
//     }, 1000)
//   }

//   return (
//     <InfinityContext.Provider
//       value={{ isLoading, isMore, data, loadDataChunk }}
//     >
//       {props.children}
//     </InfinityContext.Provider>
//   )
// }
