import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { PostList as PostListData}from "../store/post-list-store";
import "../App.css";
import { Welcome } from "./Welcome";
import { Loading } from "./Loading";

export function PostList(){
   const { postList, addPosts }= useContext(PostListData);
   const [fetching,setFetching]=useState(false);
   useEffect(() => {

      setFetching(true);
      const controller=new AbortController();
      const signal=controller.signal;

      fetch("https://dummyjson.com/posts",{signal})
         .then((resp) => resp.json())
         .then((data) => {
            addPosts(data.posts);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setFetching(false);
            controller.abort();
         });

   }, []);


    return (

<div className="container-card">
          {fetching && <Loading></Loading>}
          {!fetching && postList.length === 0 && (<Welcome ></Welcome>)}
  
          {!fetching && postList.map((postdata)=>{
           return <Card key={postdata.id} post={postdata}></Card>;

        })}
    
        </div>);
}