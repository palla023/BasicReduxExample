const intialState = {
	name : 'Leo',
	score : 90
}
export default function PlayertwoReducer(state = intialState ,action){
    const {type,payload} = action;           //Destructuring the action 
	
	switch(type){
        case "INC_PLAYERTWO_SCORE":
            return {...state, score:state.score+1};        //destructure the state var and incre and assign to the score
        case "DEC_PLAYERTWO_SCORE":
            return {...state, score:state.score-1};
        default:
            return state;
    }
}