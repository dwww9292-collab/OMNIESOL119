import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ErpPage from "../pages/erp/page";
import GroupwarePage from "../pages/groupware/page";
import DocumentPage from "../pages/document/page";
import AiPage from "../pages/ai/page";
import InquiryPage from "../pages/inquiry/page";
import PrivacyPage from "../pages/privacy/page";
import TermsPage from "../pages/terms/page";
import LocationPage from "../pages/location/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/erp",
    element: <ErpPage />,
  },
  {
    path: "/groupware",
    element: <GroupwarePage />,
  },
  {
    path: "/document",
    element: <DocumentPage />,
  },
  {
    path: "/ai",
    element: <AiPage />,
  },
  {
    path: "/inquiry",
    element: <InquiryPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/location",
    element: <LocationPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;