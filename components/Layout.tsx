import type { ReactNode } from "react";
import Navbar from "@/components/Navbar"



type LayoutProps = {
   children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
      <Navbar/> 
      {children}
    
  </>
);

export default Layout