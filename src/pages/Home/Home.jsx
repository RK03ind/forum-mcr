import { useContext, useEffect, useState } from "react";
import "./styles/Home.scss";
<<<<<<< HEAD
import { DataContext } from "../../context/DataContext";
=======
import { DataContext } from "../../context/DataContext";
>>>>>>> parent of b2480f5 (FIX: Case issues)
import PostItem from "../../shared/PostItem/PostItem";
const Home = () => {
  const dataCtx = useContext(DataContext);
  const [sortState, setSortState] = useState(0);
  const sortChangeHandler = (e) => {
    setSortState(parseInt(e.target.value));
  };
  useEffect(() => {
    console.log(sortState);
  }, [sortState]);
  return (
    <div className="home-page">
      <h2>All Posts</h2>
      {dataCtx.state.posts
        .slice()
        .sort(
          (
            { upvotes: a, downvotes: b, createdAt: c },
            { upvotes: e, downvotes: f, createdAt: d }
          ) => {
            return sortState ? new Date(d) - new Date(c) : a - b + (e - f);
          }
        )
        .map((item) => (
          <PostItem key={item.postId} {...item} />
        ))}
      <div className="post-filter">
        <h2>Sort By</h2>
        <select
          name="sort"
          defaultValue={sortState}
          onClick={sortChangeHandler}
        >
          <option value="1">Latest Posts</option>
          <option value="0">Most Upvoted</option>
        </select>
      </div>
    </div>
  );
};
export default Home;
