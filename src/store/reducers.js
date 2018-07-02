import { CLUE_SELECTED, SELECTION_EXECUTION_ANSWER_SUBMITTED, CLUES_LOADED } from "./actions";

const initialState = {
    clues: [],
    selectedClue: null,
};

export function rootReducer(state = initialState, action){

    switch(action.type)
{
    case CLUE_SELECTED:
    return {...state, selectedClue:action.clue};
    // return {selectedClue: action.clue};
    
    case SELECTION_EXECUTION_ANSWER_SUBMITTED:
    //return {selectedClue: null};
    return {...state,selectedClue:null};

    case CLUES_LOADED:
    return {...state,clues:action.clues};
default:
return state;
}
}