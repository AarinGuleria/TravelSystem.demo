import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PackageDetailPageTourInformation from "./pages/PackageDetailPageTourInformation";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesArchivePage from "./pages/PackagesArchivePage";
import PackageDetailPageTourGallery from "./pages/PackageDetailPageTourGallery";
import PackageDetailPageTourPlan from "./pages/PackageDetailPageTourPlan";
import PackageDetailPageTourLocation from "./pages/PackageDetailPageTourLocation";
import CreateYourOwnPackage from "./pages/CreateYourOwnPackage";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/package-detail-page-tour-information":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/packages-archive-page":
        title = "";
        metaDescription = "";
        break;
      case "/package-detail-page-tour-gallery":
        title = "";
        metaDescription = "";
        break;
      case "/package-detail-page-tour-plan":
        title = "";
        metaDescription = "";
        break;
      case "/package-detail-page-tour-location":
        title = "";
        metaDescription = "";
        break;
      case "/create-your-own-package":
        title = "";
        metaDescription = "";
        break;

    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/package-detail-page-tour-information"
        element={<PackageDetailPageTourInformation />}
      />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/packages-archive-page" element={<PackagesArchivePage />} />
      <Route
        path="/package-detail-page-tour-gallery"
        element={<PackageDetailPageTourGallery />}
      />
      <Route
        path="/package-detail-page-tour-plan"
        element={<PackageDetailPageTourPlan />}
      />
      <Route
        path="/package-detail-page-tour-location"
        element={<PackageDetailPageTourLocation />}
      />
      <Route
        path="/create-your-own-package"
        element={<CreateYourOwnPackage />}
      />

    </Routes>
  );
}

export default App;
