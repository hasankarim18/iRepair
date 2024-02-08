import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className=" fixed left-0 z-50 bg-white w-full h-16 "
    >
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
    </motion.header>
  );
};

export default Navbar;
