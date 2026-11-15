import NavbarComponent from "@/components/layout/navbar/NavbarComponent";
import React, { Suspense } from "react";
import Loading from "../loading";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div className="h-16" />}>
        <NavbarComponent />
      </Suspense>
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
      <Footer/>
    </div>
  );
}
