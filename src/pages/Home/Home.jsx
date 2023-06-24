import { useContext } from "react";
import "./styles/Home.scss";
import { DataContext } from "../../context/DataContext";
import PostItem from "../../shared/PostItem/PostItem";
const Home = () => {
  const dataCtx = useContext(DataContext);
  return (
    <div className="home-page">
      <h2>All Posts</h2>
      {dataCtx.state.posts.map((item) => (
        <PostItem key={item.postId} {...item} />
      ))}
      <div className="post-filter">
        <h2>Sort By</h2>
        <div className="select">Latest Posts</div>
      </div>
    </div>
  );
};
export default Home;
