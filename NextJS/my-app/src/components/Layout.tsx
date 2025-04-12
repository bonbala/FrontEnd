import React from 'react'
import HeaderComponent from "@/components/HeaderComponent";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <HeaderComponent />
      <main>{children}</main>
      {/* <FooterComponent/> */}
    </div>
  )
}
