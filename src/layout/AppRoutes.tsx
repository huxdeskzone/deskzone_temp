import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ModalOverlay from "../components/commons/ModalOverlay";
import LoginForm from "../components/Auth/LoginForm";
import SignupForm from "../components/Auth/SignupForm";
import PasswordResetForm from "../components/Auth/PasswordResetForm";
import VerificationForm from "../components/Auth/VerificationForm";
import VerifyResetPasswordForm from "../components/Auth/VerifyResetPasswordForm";
import ProtectedRoutes from "./ProtectedRoutes";
import UpdatePasswordForm from "../components/Auth/UpdatePasswordForm";
import ExpertProducts from "../components/TopExperts/ExpertProducts";
import TopExpertContact from "../components/TopExperts/TopExpertContacts";
import TopExpertsAbout from "../components/TopExperts/TopExpertsAbout";
import TopExpertsHelp from "../components/TopExperts/TopExpertsHelp";
import TopExpertTerms from "../components/TopExperts/TopExpertsTerms";
import ExpertRoutes from "./ExpertRoutes";
import Profile from "../components/Profile/Expert/Profile";
import Products from "../components/Profile/Expert/Products";
import ClientGeneralProfile from "../components/Profile/Client/Profile";

const HomePage = lazy(() => import("../pages/HomePage"));
const TopExpertsPage = lazy(() => import("../pages/TopExpertsPage"));

const ServiceDetailsPage = lazy(() => import("../pages/ServiceDetailsPage"));

const ExpertDetailsPage = lazy(() => import("../pages/ExpertDetailsPage"));
const CreateServicePage = lazy(() => import("../pages/CreateServicePage"));

const ClientProfilePage = lazy(() => import("../pages/ClientProfilePage"));
const ExpertProfilePage = lazy(() => import("../pages/ExpertProfilePage"));

const ExpertApplicationPage = lazy(
  () => import("../pages/ExpertApplicationPage")
);

const ServiceNegotationPage = lazy(
  () => import("../pages/ServiceNegotationPage")
);

const AppRoutes: React.FC = () => {
  const { user } = useSelector((state: any) => state.userState);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<></>}>
            <HomePage />
          </Suspense>
        }
      >
        <Route
          path="auth/login"
          element={
            <Suspense fallback={<></>}>
              <ModalOverlay children={<LoginForm />} />
            </Suspense>
          }
        />

        <Route
          path="auth/sign-up"
          element={
            <Suspense fallback={<></>}>
              <ModalOverlay children={<SignupForm />} />
            </Suspense>
          }
        />

        <Route
          path="auth/verify"
          element={
            <Suspense fallback={<></>}>
              <ModalOverlay children={<VerificationForm />} />
            </Suspense>
          }
        />

        <Route
          path="auth/password/reset"
          element={
            <Suspense fallback={<></>}>
              <ModalOverlay children={<PasswordResetForm />} />
            </Suspense>
          }
        />

        <Route
          path="auth/password/reset/verify"
          element={
            <Suspense fallback={<></>}>
              <ModalOverlay children={<VerifyResetPasswordForm />} />
            </Suspense>
          }
        />

        <Route
          path="auth/password/update"
          element={
            <Suspense fallback={<></>}>
              <ModalOverlay children={<UpdatePasswordForm />} />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/experts"
        element={
          <Suspense fallback={<></>}>
            <TopExpertsPage />
          </Suspense>
        }
      />

      <Route
        path="/experts/:name"
        element={
          <Suspense fallback={<></>}>
            <ExpertDetailsPage />
          </Suspense>
        }
      >
        <Route
          path="products"
          element={
            <Suspense fallback={<></>}>
              <ExpertProducts />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<></>}>
              <TopExpertsAbout />
            </Suspense>
          }
        />
        <Route
          path="help"
          element={
            <Suspense fallback={<></>}>
              <TopExpertsHelp />
            </Suspense>
          }
        />
        <Route
          path="contact-us"
          element={
            <Suspense fallback={<></>}>
              <TopExpertContact />
            </Suspense>
          }
        />
        <Route
          path="terms"
          element={
            <Suspense fallback={<></>}>
              <TopExpertTerms />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/products/:serviceName"
        element={
          <Suspense fallback={<></>}>
            <ServiceDetailsPage />{" "}
          </Suspense>
        }
      />

      <Route
        path="/experts/application"
        element={
          <Suspense fallback={<></>}>
            <ProtectedRoutes user={user} children={<ExpertApplicationPage />} />
          </Suspense>
        }
      />

      <Route
        path="/client/profile"
        element={
          <Suspense fallback={<></>}>
            <ProtectedRoutes user={user}>
              <ClientProfilePage />
            </ProtectedRoutes>
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<></>}>
              {" "}
              <ClientGeneralProfile />{" "}
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/expert/profile/"
        element={
          <Suspense fallback={<></>}>
            <ExpertRoutes user={user}>
              <ExpertProfilePage />
            </ExpertRoutes>
          </Suspense>
        }
      >
        <Route
          path=""
          element={
            <Suspense fallback={<></>}>
              <ExpertRoutes user={user}>
                <Profile />
              </ExpertRoutes>
            </Suspense>
          }
        />

        <Route
          path="products"
          element={
            <Suspense fallback={<></>}>
              <ExpertRoutes user={user}>
                <Products />
              </ExpertRoutes>
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/service/create"
        element={
          <Suspense fallback={<></>}>
            <ExpertRoutes user={user}>
              <CreateServicePage />
            </ExpertRoutes>
          </Suspense>
        }
      />

      <Route
        path="/messages/:messageId"
        element={
          <Suspense fallback={<></>}>
            {" "}
            <ProtectedRoutes user={user}>
              {" "}
              <ServiceNegotationPage />
            </ProtectedRoutes>{" "}
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
