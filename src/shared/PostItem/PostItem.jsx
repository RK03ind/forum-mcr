import { useContext, useState } from "react";
import "./PostItem.scss";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { GoComment, GoShareAndroid, GoBookmark } from "react-icons/go";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
const PostItem = ({
  upvotes,
  downvotes,
  picUrl,
  username,
  postDescription,
  post,
  tags,
  postId,
}) => {
  const [voteState, setVoteState] = useState(0);
  const dataCtx = useContext(DataContext);
  const navigate = useNavigate();
  const voteHandler = (e) => {
    if (e === 1) {
      if (voteState !== 1) {
        dataCtx.dispatch({
          type: "VOTE",
          payload: { postId, voteType: "upvotes" },
        });
        if (voteState === -1) {
          dataCtx.dispatch({
            type: "RESTORE",
            payload: { postId, voteType: "downvotes" },
          });
        }
      } else
        dataCtx.dispatch({
          type: "RESTORE",
          payload: { postId, voteType: "upvotes" },
        });
      setVoteState((prevState) => (prevState === 1 ? 0 : 1));
    } else {
      if (voteState !== -1) {
        dataCtx.dispatch({
          type: "VOTE",
          payload: { postId, voteType: "downvotes" },
        });
        if (voteState === 1) {
          dataCtx.dispatch({
            type: "RESTORE",
            payload: { postId, voteType: "upvotes" },
          });
        }
      } else
        dataCtx.dispatch({
          type: "RESTORE",
          payload: { postId, voteType: "downvotes" },
        });
      setVoteState((prevState) => (prevState === -1 ? 0 : -1));
    }
  };
  return (
    <div className="post-item">
      <div className="vote">
        <BiSolidUpArrow
          fontSize={25}
          className={voteState === 1 ? "active" : ""}
          onClick={() => voteHandler(1)}
        />
        {upvotes - downvotes}
        <BiSolidDownArrow
          fontSize={25}
          className={voteState === -1 ? "active" : ""}
          onClick={() => voteHandler(-1)}
        />
      </div>
      <div className="main-content">
        <div className="author">
          <img src={picUrl} alt="profile" />
          <span>Posted by @{username}</span>
        </div>
        <div className="post-title">{post}</div>
        <div className="tags">
          {tags.map((item) => {
            return <span key={item}>{item}</span>;
          })}
        </div>
        <div className="post-desc">{postDescription}</div>
        <div className="user-actions">
          <GoComment onClick={() => navigate(`/post/${postId}`)} />
          <GoShareAndroid />
          <GoBookmark />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
