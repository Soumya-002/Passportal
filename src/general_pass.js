
import './styles/style1.css';
import Alcherlogo from'./alcher 2023 logo.png';
import pic2 from'./Frame 14957(1).png';
// import Creator from './Creators_page';
//  import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
  
     <div className="logo">
         <img src={Alcherlogo} alt="Alcherlogo" style={{width:200}} />
       <img src={pic2} alt="Alcherlogo" style={{width:300,height:400}} />
       <button className='btn'><a className='link' href="">All Creater's camp Passes</a>
         {/* <p className='para'>All Creater's camp Passes</p> */}
         </button>
     </div>
    
  );
}

export default App;
