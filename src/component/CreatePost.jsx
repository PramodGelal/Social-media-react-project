import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

export function CreatePost(){
    const postTitleElement =useRef();
    const userIdElement =useRef();
    const postBodyElement =useRef();
    const reactionElement =useRef();
    const tagsElement =useRef();
    const { addPost }=useContext(PostList);

  const handleOnsubmit=(e)=>{
e.preventDefault(); 
     const userId = userIdElement.current.value; 
      const postTitle = postTitleElement.current.value; 
      const postBody = postBodyElement.current.value;
      const reaction = reactionElement.current.value;
      const tags = tagsElement.current.value.split(" ");
      addPost(userId, postTitle, postBody, reaction, tags);

  }
    return (<form onSubmit={(e) => { handleOnsubmit(e) }}>
        <div class="mb-3">
            <label htmlFor="userId" class="form-label">User ID</label>
            <input type="text" ref={userIdElement} class="form-control" id="userId" />
        </div>
        <div class="mb-3">
            <label htmlFor="postTitle" class="form-label">Post Title</label>
            <input type="text" ref={postTitleElement} class="form-control" id="postTitle" />
        </div>
        <div class="mb-3">
            <label htmlFor="postBody" class="form-label">Content</label>
            <input type="text" ref={postBodyElement} class="form-control" id="postBody" />
        </div>
        <div class="mb-3">
            <label htmlFor="reaction" class="form-label">Reactions</label>
            <input type="text" ref={reactionElement} class="form-control" id="reaction" />
        </div>
        <div class="mb-3">
            <label htmlFor="tags" class="form-label">Tags </label>
            <input type="text" ref={tagsElement} class="form-control" id="tags" />
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>);
}
