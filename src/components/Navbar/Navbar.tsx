import { Link } from "react-router-dom";
import Logo from "../../images/bg/rift.gg-1-edited.png";

const Navbar = () => {
  return (
    <nav className="flex bg-[#1c1c1e] justify-evenly py-6 border-[#31313b] border-b-2 ">
      <div className="flex flex-1 font-bold justify-evenly items-center">
        <Link to="/">
          <img className="w-36 h-full" src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-1 font-bold justify-evenly items-center">
        {/* <Link className="text-white no-underline my-0 mx-3" to="/tft">
          Teamfight Tactics
        </Link> no longer works since using navigate/:id pathss */}
        <Link className="text-white no-underline my-0 mx-3" to="/leaderboard">
          TFT Challenger Leaderboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
