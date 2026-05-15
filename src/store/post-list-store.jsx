import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT={
postList:[],
addPost:()=>{},
deletePost:()=>{},
addPosts:()=>{}

};

export const PostList = createContext(DEFAULT_CONTEXT);



const PostListreducer=(currentPostList, action) =>{
    let newPostList=currentPostList;
 if(action.type==="DELETE_POST"){
     newPostList=currentPostList.filter(post=>post.id!==action.payload.postId);
     
 }
 else if(action.type==="CREATE_POST"){
    newPostList=[...currentPostList,action.payload]

 }
 else if (action.type === "ADD_POSTS") {
     newPostList = action.payload.posts;

 }
 else{
    console.log("Choosen type is error ");
 }
 

    return newPostList;
}
export const PostListProvider = ({ children })=>{
     const [postList, dispatchPostList] = useReducer(PostListreducer, []);
    const addPost = (userId, postTitle, postBody, reaction, tags)=>{
         dispatchPostList(
             {
                 type: "CREATE_POST",
                 payload: {
                     id: {},
                     title: postTitle,
                     body: postBody,
                     reaction: reaction,
                     userId: userId,
                     tags: tags


                 }
             });
     }
     const addPosts=(posts)=>{
        dispatchPostList(

            {
                type:"ADD_POSTS",
                payload: {posts}
            }
        );
     }
     const deletePost=(postId)=>{

        dispatchPostList(
            {
                type:"DELETE_POST",
                payload:{postId:postId}
            }
        );
     }
    return <PostList.Provider value={{ postList, addPost, deletePost, addPosts }}>
        {children}
    </PostList.Provider>;
 }
const DEFAULT_POSTLIST=[{
id:1,
title:"Nepal Science and technology",
body:"Yestarday was the Great Day for the Nepal . we get the ministry for the science and technology ",
reaction:3,
userId:"pram",
tags:["nepal","goodgovernance"]
},
{
id:2,
title:"Era of  technology",
body:"Great Day for the Nepal . we get the ministry for the science and technology ",
reaction:3,
userId:"pram1",
tags:["nepal","goodgovernance"]
}]