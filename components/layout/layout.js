import Navbar from "./navbar";
import Footer from "./footer";
import Birds from "../birds/birds";

const Layout = ({ children }) => {
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
