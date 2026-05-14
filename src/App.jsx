import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./component/Sidebar";
import { Footer } from "./component/Footer";
import "./App.css";
import { CreatePost } from "./component/CreatePost";
import { PostList } from "./component/PostList";
import { useState } from "react";
import { PostListProvider } from "./store/post-list-store";

function App(){
const [selectedTab,setselectedTab]=useState("Home");
  return (
  <PostListProvider>
  <div className="app-container ">

    <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} ></Sidebar>
  <div className="main-container">
  <Header></Header>
      {selectedTab === `Home` ? (<PostList></PostList>):(<CreatePost></CreatePost>)}
  <Footer></Footer>
    </div>
  
  </div>
    </PostListProvider>
  );
}
export default App;