import React from "react";
import Container from "../Container";
import Logo from "../navbar/Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
export default function Navbar() {
  return (
    <div className="z-10 w-full bg-white ">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
          <Logo/>
          <Search/>
          <Usermenu/>
          </div>
        </Container>  
      </div>
    </div>
  );
}
