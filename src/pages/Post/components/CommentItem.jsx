import "../styles/CommentItem.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { GoComment, GoShareAndroid } from "react-icons/go";
const CommentItem = ({ comment, username, picUrl, author }) => {
  return (
    <>
      <div className="comment-item">
        <div className="comment-details">
          <img src={picUrl} alt="dp" />
          <div className="comment-content">
            <div>@{username}</div>
            <div>
              Replying to <span>@{author}</span>
            </div>
            <div className="comment">{comment}</div>
            <div className="comment-action">
              <AiOutlineHeart />
              <GoComment />
              <GoShareAndroid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommentItem;
