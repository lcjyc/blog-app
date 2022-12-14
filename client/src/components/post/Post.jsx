import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://lesleyblog.herokuapp.com/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <h1 className="postTitle">{post.title}</h1>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}
