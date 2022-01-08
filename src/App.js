
import './App.css';
import Navbar from './JSFiles/Navbar.js';
import Remus from './JSFiles/Remus';
import Classes from './JSFiles/Classes';
import Doubt from './JSFiles/Doubt';
import Mycourse from './JSFiles/Mycourse';
import Viewportprovider from './viewport/Viewportprovider';
function App() {
  return (
    <>
    <Viewportprovider>
    <div className='app' style={{width:"1586px",height:"1900px"}} >
    <Navbar/>
    <Remus/>
    <Doubt/>
   <Classes/>
   <Mycourse/> 
    </div>
    </Viewportprovider>  
    </>
  );
}

export default App;
