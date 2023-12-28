import type { ReactNode } from "react";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'




type LayoutProps = {
   children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
      <Navbar/> 
      {children}
      <Footer/>

      
  </>
);

export default Layout