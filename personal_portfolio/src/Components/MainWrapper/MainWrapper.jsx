import Header from "../Header/Header";
import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";

export default function MainWrapper() {
  return (
    <div id="main-wrapper">
      {/* <!-- Header */}
      {/* ============================ --> */}
      <Header />
      {/* <!-- Header End -->  */}

      {/* <!-- Content */}
      {/* ============================================= --> */}
      <Contents />
      {/* <!-- Content end -->  */}

      {/* <!-- Footer */}
      {/* ============================================= --> */}
      <Footer />
      {/* <!-- Footer end -->  */}
    </div>
  );
}
