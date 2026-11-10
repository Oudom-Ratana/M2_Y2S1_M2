"use client";

import { cn } from "cn";

import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileCompenent";
import { usePathname } from "next/navigation";

export interface MenuItem {
  url: string,
  name: string
}

const NavbarComponent = () => {

  const pathName = usePathname();

   return (
    <section className={cn("py-4")}>
      <div className="container">
       <DesktopComponent/>
       <MobileComponent/>
      </div>
    </section>
  );
};

export default NavbarComponent;







