"use client";

import { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");

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
        <Sheet className="sheet">
          <SheetTrigger>
            <MenuIcon className="menuIcon" />
          </SheetTrigger>
          <SheetContent className="sheetContent">
            <SheetHeader>
              <SheetTitle><p className="sheetTitle">Navigation</p></SheetTitle>
              <SheetDescription>
                <SheetClose asChild>
                  <div className={`sheetNav ${activeNav == "home" && "active"}`}>
                    Home
                  </div>
                </SheetClose>
              </SheetDescription>
              <SheetDescription>
                <SheetClose asChild>
                  <div
                    className={`sheetNav ${activeNav == "services" && "active"}`}
                  >
                    Services
                  </div>
                </SheetClose>
              </SheetDescription>
              <SheetDescription>
                <SheetClose asChild>
                  <div
                    className={`sheetNav ${activeNav == "courses" && "active"}`}
                  >
                    Courses
                  </div>
                </SheetClose>
              </SheetDescription>
              <SheetDescription>
                <SheetClose asChild>
                  <div
                    className={`sheetNav ${activeNav == "booking" && "active"}`}
                  >
                    Booking Tab
                  </div>
                </SheetClose>
              </SheetDescription>
              <SheetDescription>
                <SheetClose asChild>
                  <div
                    className={`sheetNav ${activeNav == "events" && "active"} `}
                  >
                    Events
                  </div>
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
