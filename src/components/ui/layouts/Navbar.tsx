import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Navbar = () => {
  return (
    <header className=" h-16 ">
      <nav className="w-full max-w-[1220px] px-[20px]  mx-auto  flex h-full justify-between items-center ">
        <NavLink to="/" className="text-[32px]">
          iRepair
        </NavLink>
        <ul className="space-x-5">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink className="font-semibold" to="/">
              Login
            </NavLink>{" "}
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
