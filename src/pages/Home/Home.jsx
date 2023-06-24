import { useContext, useState } from "react";
import "./styles/Home.scss";
import { DataContext } from "../../context/DataContext";
import PostItem from "../../shared/PostItem/PostItem";
import { BiSolidDownArrow } from "react-icons/bi";
const Home = () => {
  const dataCtx = useContext(DataContext);
  const [sortState, setSortState] = useState(false);
  const sortChangeHandler = (e) => {
    setSortState(e.target.value);
  };
  return (
    <div className="home-page">
      <h2>All Posts</h2>
      {dataCtx.state.posts.map((item) => (
        <PostItem key={item.postId} {...item} />
      ))}
      <div className="post-filter">
        <h2>Sort By</h2>
        <select
          name="sort"
          defaultValue={sortState}
          onClick={sortChangeHandler}
        >
          <option value="true">Latest Posts</option>
          <option value="false">Most Upvoted</option>
        </select>
      </div>
    </div>
  );
};
export default Home;
