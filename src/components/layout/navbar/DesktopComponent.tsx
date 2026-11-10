import { Menu } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { menuList } from "@/lib/menu-list";
import Link from "next/link";
import { MenuItem } from "./NavbarComponent";
const DesktopComponent = () => { 
  

  return (
        <nav className="hidden grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <Link
            href={"/"}
            className="flex items-center gap-2 justify-self-start"
          >
            <Image
              src={"https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"}
              className="max-h-8 dark:invert"
              alt={"logo"}
              width={200}
              height={200}
            />
            
          </Link>
          <NavigationMenu className="justify-self-center">
            <NavigationMenuList>
              {menuList.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu> 
          
          <div className="flex gap-2 justify-self-end">
            <Button variant="outline" size="sm" render={<Link href='/auth/login' />} nativeButton={false}>Login</Button>
            <Button size="sm" render={<Link href='/auth/register' />} nativeButton={false}>register</Button>
          </div>
        </nav>

  );
};


const renderMenuItem = (item: MenuItem) => {

  
  return (
    <NavigationMenuItem key={item.name}>
      <NavigationMenuLink
        render={<Link href={item.url}/>}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.name}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default DesktopComponent;