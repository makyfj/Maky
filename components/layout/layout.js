import Navbar from "./navbar";
import Footer from "./footer";
import Container from "./container";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
