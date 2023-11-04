import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}
