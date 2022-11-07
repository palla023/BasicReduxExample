const intialState = {
	name : 'John',
	score : 80
}
export default function PlayeroneReducer(state=intialState ,action){
    const {type,payload} = action;           //Destructuring the action 
	
	switch(type){
        case "INC_PLAYERONE_SCORE":
            return {...state, score:state.score+1};        //destructure the state var and incre and assign to the score
        case "DEC_PLAYERONE_SCORE":
            return {...state, score:state.score-1};
        default:
            return state;
    }
}