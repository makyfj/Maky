import Navbar from "./navbar";
import Footer from "./footer";
import Birds from "../birds/birds";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        <Birds />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
