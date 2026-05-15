import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { PostList as PostListData } from "../store/post-list-store";
import "../App.css";
import { Welcome } from "./Welcome";
import { Loading } from "./Loading";

export function PostList() {
   const { postList, addPosts } = useContext(PostListData);

   const [fetching, setFetching] = useState(false);

   useEffect(() => {

      const controller = new AbortController();

      setFetching(true);
      const signal = controller.signal;

      fetch("https://dummyjson.com/posts", { signal })
         .then((resp) => resp.json())
         .then((data) => {
            addPosts(data.posts);
         })
         .catch((error) => {
            console.log(error);
         })
         .finally(() => {
            setFetching(false);
         });

      return () => {
         console.log("clean.....");
         controller.abort();
      };
   }, []);

   return (
      <div className="container-card">
         {fetching && <Loading />}

         {!fetching && postList.length === 0 && <Welcome />}

         {!fetching &&
            postList.map((postdata) => {
               return <Card key={postdata.id} post={postdata} />;
            })}
      </div>
   );
}