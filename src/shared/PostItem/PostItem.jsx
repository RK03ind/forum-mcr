import { useState } from "react";
import "./PostItem.scss";
import {
  BiSolidUpArrow,
  BiUpArrow,
  BiDownArrow,
  BiSolidDownArrow,
} from "react-icons/bi";
import { GoComment, GoShareAndroid, GoBookmark } from "react-icons/go";
const PostItem = ({
  upvotes,
  downvotes,
  picUrl,
  username,
  postDescription,
  post,
  tags,
}) => {
  const [voteState, setVoteState] = useState(0);
  return (
    <div className="post-item">
      <div className="vote">
        <BiSolidUpArrow fontSize={25} />
        {upvotes - downvotes}
        <BiSolidDownArrow fontSize={25} />
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
          <GoComment />
          <GoShareAndroid />
          <GoBookmark />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
