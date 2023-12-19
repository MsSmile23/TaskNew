
import './App.css'
import smallred from '/red ball.svg';
import bigred from '/red ball (1).svg';
import purple from '/purple ball.svg';
import { NavBar } from './components/NavBar';
import { Center } from './components/Center';
import { End } from './components/End';

function App() {
  
  return (
    <div className="Desktop">
      <div className="RedLight"  />
      <div className="PurpleLight" />
      <img src={smallred} className='RedBallS' alt='ball'/>
      <img src={bigred} className='RedBallB' alt='ball'/>
      <img src={purple} className='PurpleBall' alt='ball'/>
      <NavBar/>
      <Center/>
      <End/>
    </div>
  );
}

export default App
