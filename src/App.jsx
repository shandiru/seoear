import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Page/Homepage";
import Earwaxremovalpage from "./Page/Earwaxremovalpage";
import ServiceDetailpage from "./Page/ServiceDetailpage";
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import GDPRConsent from "./components/GDPRBanner.jsx";
import EarwaxremovalNottingham from "./Page/EarwaxremovalNottingham.jsx";
import NotFoundPage from "./Page/NotFoundPage.jsx"; // ✅ create this page
import Derby from "./Page/Derby.jsx"
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
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Earwaxremovalpage" element={<Earwaxremovalpage />} />
        <Route path="/symptoms" element={<ServiceDetailpage />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/derby" element={<Derby />} />
        <Route
          path="/earwax-removal-nottingham"
          element={<EarwaxremovalNottingham />}
        />
        <Route path="/earwax-removal-leicester" element={<EarwaxremovalLeicester />} />
        <Route path="/earwax-removal-lincoln" element={<Lincoln />} />
        <Route path="/earwax-removal-grantham" element={<Grantham />} />
        <Route path="/earwax-removal-stafford" element={<EarwaxremovalStafford />} />
        <Route path="/earwax-removal-tamworth" element={<EarwaxremovalTamworth />} />
        <Route path="/earwax-removal-burton" element={<Burton />} />
        <Route path="/earwax-removal-chesterfield" element={<Chesterfield />} />
        <Route path="/earwax-removal-nuneaton" element={<EarwaxremovalNuneaton />} />
        <Route path="/earwax-removal-southsheffield" element={<SouthSheffield />} />
        <Route path="/earwax-removal-worksop" element={<EarwaxremovalWorksop />} />
        {/* ✅ Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
