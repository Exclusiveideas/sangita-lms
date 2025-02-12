"use client";

import { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="navbarWrapper">
      <div className="navTextContainer large">
        <div className={`navTxt ${activeNav == "home" && "active"}`}>
          Home <hr />
        </div>
        <div className={`navTxt ${activeNav == "services" && "active"}`}>
          Services <hr />
        </div>
        <div className={`navTxt ${activeNav == "courses" && "active"}`}>
          Courses <hr />
        </div>
        <div className={`navTxt ${activeNav == "booking" && "active"}`}>
          Booking Tab <hr />
        </div>
        <div className={`navTxt ${activeNav == "events" && "active"}`}>
          Events <hr />
        </div>
      </div>
      <div className="navCtaWrapper large">
        <button className="navCTA">Book A Session</button>
      </div>
      <div className="menuIconWrapper">
        <Popover>
          <PopoverTrigger asChild>
            {!navbarOpen ? (
              <MenuIcon className="menuIcon" />
            ) : (
              <CloseIcon className="menuIcon" />
            )}
          </PopoverTrigger>
          <PopoverContent className="w-full popOverContent">
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Courses</Link>
            <Link href="#">Booking Tab</Link>
            <Link href="#">Events</Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
