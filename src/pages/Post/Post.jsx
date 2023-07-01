import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./styles/Post.scss";
import PostItem from "../../shared/PostItem/PostItem";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import CommentItem from "./components/CommentItem";
const Post = () => {
  const dataCtx = useContext(DataContext);
  const { postId } = useParams();
  const postData = dataCtx.getById(postId);
  const navigate = useNavigate();
  return (
    <div className="post-page">
      <header>
        <BiArrowBack onClick={() => navigate("/")} /> <span>Post</span>
      </header>
      {postData ? <PostItem {...postData} /> : <h1>NOT FOUND </h1>}
      {postData.comments.map((item) => {
        return (
          <CommentItem
            key={item.commentId}
            {...item}
            author={postData.username}
          />
        );
      })}
    </div>
  );
};
export default Post;
