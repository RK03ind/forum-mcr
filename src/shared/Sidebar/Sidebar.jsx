import "./Sidebar.scss";
import { AiOutlineHome, AiOutlineRocket } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const Sidebar = () => {
  return (
    <aside>
      <div className="active">
        <AiOutlineHome size={24} />
        Home
      </div>
      <div>
        <AiOutlineRocket size={24} />
        Explore
      </div>
      <div>
        <BsBookmark size={24} />
        Bookmarks
      </div>
      <div>
        <CgProfile size={24} />
        Profile
      </div>
    </aside>
  );
};
export default Sidebar;
