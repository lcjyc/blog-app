import "./header.css";
import skyline from "../../images/skyline.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle">My Blog</span>
      </div>
      <img className="headerImg" src={skyline} alt="" />
    </div>
  );
}
