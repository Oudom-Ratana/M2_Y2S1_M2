import NavbarComponent from "@/components/layout/navbar/NavbarComponent";
import React, { Suspense } from "react";

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
      <Suspense fallback={<div className="container mx-auto p-8">Loading...</div>}>
        {children}
      </Suspense>
      <footer className="bg-blue-500">Footer</footer>
    </div>
  );
}
