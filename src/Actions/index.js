export const incplayerone = () => async dispatch =>{
	dispatch({
		type: 'INC_PLAYERONE_SCORE'
	})
}

export const decplayerone = () => async dispatch =>{
	dispatch({
		type: 'DEC_PLAYERONE_SCORE'
	})
}

export const incplayerotwo = () => async dispatch =>{
	dispatch({
		type: 'INC_PLAYERTWO_SCORE'
	})
}

export const decplayerotwo = () => async dispatch =>{
	dispatch({
		type: 'DEC_PLAYERTWO_SCORE'
	})
}