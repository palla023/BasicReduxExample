
import './App.css';
import { connect } from 'react-redux';
import { incplayerone,decplayerone,incplayerotwo,decplayerotwo} from './Actions';
const App = ({playerone, playertwo,incplayerone,decplayerone,incplayerotwo,decplayerotwo }) =>{
  return (
    <div className="App">
      
        <h3>playerone details:</h3>
        <p>Name : {playerone.name} | Score : {playerone.score}</p> <br />
        <button onClick={()=>incplayerone()} className='btn btn-success'>Increment</button> &nbsp;
        <button onClick={()=>decplayerone()} className='btn btn-danger'>Decrement</button>
        <h3>Playertwo details:</h3>
        <p>Name : {playertwo.name} | Score : {playertwo.score}</p> <hr />
        <button onClick={()=>incplayerotwo()} className='btn btn-success'>Increment</button> &nbsp;
        <button onClick={()=>decplayerotwo()} className='btn btn-danger'>Decrement</button>
        
     
    </div>
  )
}

const mapStateToProps = state =>({
  playerone : state.playerone,                   // we are trying to use state values , so state.variablevalue  
  playertwo : state.playertwo                   //In state playertwo obj can be stored in playertwo local variable
})
export default connect(mapStateToProps,{ incplayerone,decplayerone,incplayerotwo,decplayerotwo }) (App);
