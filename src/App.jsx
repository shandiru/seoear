import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReviewPage from "./Page/Review.jsx";
import HomePage from "./Page/Homepage";
import Earwaxremovalpage from "./Page/Earwaxremovalpage";
import ServiceDetailpage from "./Page/ServiceDetailpage";

import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import GDPRConsent from "./components/GDPRBanner.jsx";

import EarwaxremovalNottingham from "./Page/EarwaxremovalNottingham.jsx";
import Derby from "./Page/Derby.jsx";
import EarwaxremovalLeicester from "./Page/EarwaxremovalLeicester.jsx";
import Lincoln from "./Page/Lincoln.jsx";
import Grantham from "./Page/Grantham.jsx";
import EarwaxremovalStafford from "./Page/EarwaxremovalStafford.jsx";
import EarwaxremovalTamworth from "./Page/Tamworth.jsx";
import Burton from "./Page/Burton.jsx";
import Chesterfield from "./Page/Chesterfield.jsx";
import EarwaxremovalNuneaton from "./Page/EarwaxremovalNuneaton.jsx";
import SouthSheffield from "./Page/SouthSheffield.jsx";
import EarwaxremovalWorksop from "./Page/EarwaxremovalWorksop.jsx";
import EarwaxremovalLoughborough from "./Page/EarwaxremovalLoughborough.jsx";

import NotFoundPage from "./Page/NotFoundPage.jsx";
import IndustrialHearing from "./Page/IndustrialHearing.jsx";
import HearingScreening from "./Page/HearingScreening.jsx";
import HearingEngineering from "./Page/HearingEngineering.jsx";
import Factories from "./Page/factories.jsx";
import Construction from "./Page/Construction.jsx";
import Warehouses from "./Page/Warehouses.jsx";

import BlogList from "./Page/BlogList.jsx";
import SingleBlog from "./Page/SingleBlog.jsx";
import Author from "./Page/Author.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/earwaxremovalpage" element={<Earwaxremovalpage />} />
        <Route path="/symptoms" element={<ServiceDetailpage />} />

        {/* Legal Pages */}
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Areas We Cover */}
        <Route path="/areas-we-cover/ear-wax-removal-derby" element={<Derby />} />
        <Route path="/areas-we-cover/ear-wax-removal-nottingham" element={<EarwaxremovalNottingham />} />
        <Route path="/areas-we-cover/ear-wax-removal-leicester" element={<EarwaxremovalLeicester />} />
        <Route path="/areas-we-cover/ear-wax-removal-lincoln" element={<Lincoln />} />
        <Route path="/areas-we-cover/ear-wax-removal-grantham" element={<Grantham />} />
        <Route path="/areas-we-cover/ear-wax-removal-stafford" element={<EarwaxremovalStafford />} />
        <Route path="/areas-we-cover/ear-wax-removal-tamworth" element={<EarwaxremovalTamworth />} />
        <Route path="/areas-we-cover/ear-wax-removal-burton" element={<Burton />} />
        <Route path="/areas-we-cover/ear-wax-removal-chesterfield" element={<Chesterfield />} />
        <Route path="/areas-we-cover/ear-wax-removal-nuneaton" element={<EarwaxremovalNuneaton />} />
        <Route path="/areas-we-cover/ear-wax-removal-south-sheffield" element={<SouthSheffield />} />
        <Route path="/areas-we-cover/ear-wax-removal-worksop" element={<EarwaxremovalWorksop />} />
        <Route path="/areas-we-cover/ear-wax-removal-loughborough" element={<EarwaxremovalLoughborough />} />
        {/* Reviews Page */}
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/industrial" element={<IndustrialHearing />} />
        <Route path="/services/industrial-plants" element={<HearingScreening />} />
        <Route path="/services/workshops" element={<HearingEngineering />} />

        <Route path="/services/factories" element={<Factories />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/warehouses" element={<Warehouses />} />

        {/* blog */}
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/author" element={<Author />} />
        <Route path="/author2" element={<Author /> } />
        {/* Catch-all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
