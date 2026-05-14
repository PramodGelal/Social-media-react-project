import { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PostList } from "../store/post-list-store";
export function Card({post}){
    const { deletePost } = useContext(PostList);
    return (<div class="card" style={{width: `18rem`}}>
        <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{post.title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                <MdOutlineDeleteOutline onClick={()=>deletePost(post.id)}/>
            </span></h5>
                <p class="card-text">{post.body}</p>
            {post.tags.map((tag) => (<button type="button" class="btn btn-primary m-1">{tag}</button>))}
            </div>
    </div>);
}