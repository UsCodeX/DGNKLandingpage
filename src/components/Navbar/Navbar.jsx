import "./Nav.css";
import {
  FaAccessibleIcon,
  FaPhone,
  FaUser,
  FaAngleDown,
  FaRegCommentDots,
  FaHouseChimney,
  FaMagnifyingGlass,
  FaSortDown,
} from "react-icons/fa6";
function Navbar() {
  return (
    <div className="mainnav">
      <div className="nav">
        <div className="logo-1">Logo</div>
        <ul className="navul">
          <li>
            <span>
              <FaAccessibleIcon />
            </span>
            <p>Skip to main content </p>
          </li>
          <li>
            <p>Ask Mrin</p>
            <span>
              <FaRegCommentDots />
            </span>
          </li>
          <li>
            <span>
              <FaPhone />
            </span>
            <p>Helpline: 1800-572-550/1800-111-1550</p>
          </li>
          <li>
            <p>Language</p>
            <span>
              <FaAngleDown />
            </span>
          </li>
          <li id="login">
            <span>
              <FaUser />
            </span>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="subnav">
        <div className="logo-2">Logo</div>
        <ul>
          <li>
            <span className="home-icon">
              <FaHouseChimney />
            </span>
            About DGNK
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            Services
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            MyDashboard
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            Regulations
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            Learn
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            Trade Statistics
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            Indian Trade Services
            <span>
              <FaSortDown />
            </span>
          </li>
          <li>
            <span className="search-icon">
              <FaMagnifyingGlass />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
