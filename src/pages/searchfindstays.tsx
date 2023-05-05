import React from "react";
import Logo from "../components/navbar/Logo";
import Container from "../components/Container";
import Search from "../components/navbar/Search";
import Usermenu from "../components/navbar/Usermenu";
import Image from "next/image";
import Find from "@/components/Find";
import Footer1 from "@/components/footer/Footer1";
import Stays from "@/components/searchstays/stays";

const roomstays = () => {
  return (
    <div className="z-10 w-full bg-white ">
      <div className="py-4">
        <Container children={undefined}>
          <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
            <Logo/>
            <Search />
            <Usermenu />
          </div>
        </Container>
      </div>
      <div className="relative">
        <Image
          src="/Images/roomstays.png"
          alt="Background Image"
          className="w-full h-auto"
          width={20}
          height={10}
        />
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full">
          <div className="w-full mx-12 my-2 overflow-y-hidden text-center bg-white h-28 rounded-3xl">
            <Find/>
          </div>
        </div>
      </div>
      <Stays/>
      <Footer1/>
    </div>
  );
};

export default roomstays;
