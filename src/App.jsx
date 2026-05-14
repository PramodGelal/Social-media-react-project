import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./component/Sidebar";
import { Footer } from "./component/Footer";
import "./App.css";

function App(){

  return (<div className="app-container ">

  <Sidebar></Sidebar>
  <div className="main-container">
  <Header></Header>
  <Footer></Footer>
    </div>
  
  </div>);
}
export default App;