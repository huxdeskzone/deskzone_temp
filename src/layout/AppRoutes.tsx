import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ModalOverlay from "../components/commons/ModalOverlay";
import ExpertModalOverlay from "../components/commons/ExpertModalOverlay";
import LoginForm from "../components/Auth/LoginForm";
import SignupForm from "../components/Auth/SignupForm";
import PasswordResetForm from "../components/Auth/PasswordResetForm";
import VerificationForm from "../components/Auth/VerificationForm";
import VerifyResetPasswordForm from "../components/Auth/VerifyResetPasswordForm";
import ProtectedRoutes from "./ProrectedRoutes";
import UpdatePasswordForm from "../components/Auth/UpdatePasswordForm";
import ExpertApplicationForm from "../components/Expert/ExpertApplicationForm";
import ExpertProducts from "../components/TopExperts/ExpertProducts";
import TopExpertContact from "../components/TopExperts/TopExpertContacts";
import TopExpertsAbout from "../components/TopExperts/TopExpertsAbout";
import TopExpertsHelp from "../components/TopExperts/TopExpertsHelp";
import TopExpertTerms from "../components/TopExperts/TopExpertsTerms";

const HomePage = lazy(() => import("../pages/HomePage"));
const TopExpertsPage = lazy(() => import("../pages/TopExpertsPage"));
const ExpertDetailsPage = lazy(() => import("../pages/ExpertDetailsPage"));

const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const AppRoutes: React.FC = () => {
  const { user } = useSelector((state: any) => state.userState);

  // let user = "Emmanuel";

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
          element={<ModalOverlay children={<LoginForm />} />}
        />

        <Route
          path="auth/sign-up"
          element={<ModalOverlay children={<SignupForm />} />}
        />

        <Route
          path="auth/verify"
          element={<ModalOverlay children={<VerificationForm />} />}
        />

        <Route
          path="auth/password/reset"
          element={<ModalOverlay children={<PasswordResetForm />} />}
        />

        <Route
          path="auth/password/reset/verify"
          element={<ModalOverlay children={<VerifyResetPasswordForm />} />}
        />

        <Route
          path="auth/password/update"
          element={<ModalOverlay children={<UpdatePasswordForm />} />}
        />

        <Route
          path="/expert/application"
          element={
            <ProtectedRoutes
              user={user}
              children={
                <ExpertModalOverlay children={<ExpertApplicationForm />} />
              }
            />
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
        <Route path="products" element={<ExpertProducts />} />
        <Route path="about" element={<TopExpertsAbout />} />
        <Route path="help" element={<TopExpertsHelp />} />
        <Route path="contact-us" element={<TopExpertContact />} />
        <Route path="terms" element={<TopExpertTerms />} />
      </Route>

      <Route
        path="/expert/profile"
        element={
          <Suspense fallback={<></>}>
            <ProfilePage />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
