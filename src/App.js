import logo from './logo.svg';
import './App.css';
// import FirstNavbar from "./Componants/HomePage/FirstNavbar"

// import SecondNavbraMain from './Componants/HomePage/SecondNavbraMain';
// import Body1 from './Componants/HomePage/Body1';
// import Footer from './Componants/HomePage/Footer';
import Home from "./MainPages/Home"
import AllRoute from './Routing/AllRoute';
import Cart from './Componants/Cart/Cart';
import Address from './Componants/Cart/Address';
import Payment from './Componants/Cart/Payment';
// import SignUp from './Componants/LogSign/SignUpEmail';
import Dummy from './Componants/Cart/Dummy';
import Female from './Componants/ProductPages/Female';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Dummy/> */}
<AllRoute/>
{/* <Address/> */}
{/* <Payment/> */}
{/* <Female/> */}


    </div>
  );
}

export default App;
