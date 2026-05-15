import { useContext } from "react";
import { Card } from "./Card";
import { PostList as PostListData}from "../store/post-list-store";
import "../App.css";
import { Welcome } from "./Welcome";

export function PostList(){
   const { postList, addPosts }= useContext(PostListData);
   const handelerOnClick=()=>{
      fetch("https://dummyjson.com/posts")
      .then((resp)=>resp.json())
         .then((data)=>{addPosts(data.posts)});
      

   }

    return (

<div className="container-card">
          {postList.length === 0 && (<Welcome getPost={handelerOnClick}></Welcome>)}
  
{postList.map((postdata)=>{
           return <Card key={postdata.id} post={postdata}></Card>;

        })}
    
        </div>);
}