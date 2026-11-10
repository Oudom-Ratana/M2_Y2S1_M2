import { Menu } from "lucide-react";
import { cn } from "cn";

import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { menuList } from "@/lib/menu-list";
import Link from "next/link";
import { MenuItem } from "./NavbarComponent";

const MobileComponent = () => { 
  

  return (

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={'/'} className="flex items-center gap-2">
              <Image
                src={"https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"}
                className="max-h-8 dark:invert"
                alt={"hello"}
                width={200}
                height={200}
              />
            </Link>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon" />}><Menu className="size-4" /></SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/test" className="flex items-center gap-2">
                      <Image
                        src={"https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"}
                        className="max-h-8 dark:invert"
                        alt={"image"}
                        width={200}
                        height={200}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion className="flex w-full flex-col gap-4">
                    {menuList.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button variant="outline" render={<Link href='/auth/login' />} nativeButton={false}>login</Button>
                    <Button render={<Link href='/auth/regoster' />} nativeButton={false}>register</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
     
  );
};
const renderMobileMenuItem = (item: MenuItem) => {


  return (
    <Link key={item.name} href={item.url} className="text-md font-semibold">
      {item.name}
    </Link>
  );
};

export default MobileComponent;