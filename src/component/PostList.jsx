import { useContext } from "react";
import { Card } from "./Card";
import { PostList as PostListData}from "../store/post-list-store";
import "../App.css";

export function PostList(){
   const {postList}= useContext(PostListData)

    return (
<div className="container-card">
{postList.map((postdata)=>{
           return <Card key={postdata.id} post={postdata}></Card>;

        })}
    
        </div>);
}