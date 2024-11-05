import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  useGetCurrentUserMutation,
  useServerHealthCheckMutation,
} from "../lib/apis/userApi";
import {
  useLogoutUserMutation,
  useGetNewAccessTokenMutation,
} from "../lib/apis/authApi";
import { getToken, getRefreshToken } from "../helpers/firebase";
import { ModalContext } from "../context/modal-context";
import Icon from "../components/commons/Icon";
import logo from "../Assets/logo.png";
import styles from "./NavgitaionBar.module.css";

const NavigationBar: React.FC = () => {
  const modalCtx = useContext(ModalContext);

  const [getCurrentUser, { error, data, isError }] =
    useGetCurrentUserMutation();
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const [getNewAccessToken] = useGetNewAccessTokenMutation();

  const [serverHealthCheck, { error: serverError }] =
    useServerHealthCheckMutation();

  const { user } = useSelector((state: any) => state.userState);

  const onLogoutUserHandler = () => {
    logoutUser(null);
  };

  useEffect(() => {
    const onGetCurrentUser = async () => {
      const token = await getToken();

      getCurrentUser(token);
    };

    onGetCurrentUser();
  }, [isSuccess]);

  // useEffect(() => {
  //   const checkServerHealth = async () => {
  //     console.log("checking server health");
  //     serverHealthCheck(null);
  //   };

  //   setInterval(() => {
  //     checkServerHealth();
  //   }, 5000);
  // }, []);

  useEffect(() => {
    const apiError =
      isError &&
      error &&
      "data" in error &&
      typeof error.data === "object" &&
      error.data !== null &&
      "message" in error.data &&
      (error.data as { message: string }).message
        .split(":")
        .map((msg, index) => msg)[0];

    if (apiError === "Token has expired") {
      const refreshToken = getRefreshToken("");
      getNewAccessToken(refreshToken);
    }
  }, [error]);

  return (
    <>
      <nav className={`${styles.nav_bar}`}>
        <div className={styles.nav_logo}>
          <NavLink to="/">
            <img src={logo} alt="app_logo" />
          </NavLink>
        </div>
        <div className={styles.nav_items}>
          <ul>
            <li className={styles.search}>
              <a
                href="#"
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
              >
                <Icon
                  iconClasses={`fa-solid fa-magnifying-glass ${styles.icons}`}
                />
              </a>
            </li>
            <li className={styles.mode}>
              <a href="#">
                <Icon iconClasses={`fa-solid fa-moon ${styles.icons}`} />
              </a>
            </li>
            {user && user?.role === "expert" ? (
              <NavLink
                onClick={() => modalCtx.toggleModal("expert")}
                to="/service/create"
                className={styles.cta_btn}
              >
                <a href="#">Create a service</a>
              </NavLink>
            ) : (
              <NavLink to="/experts/application" className={styles.cta_btn}>
                <a href="#">Become an expert</a>
              </NavLink>
            )}
            <li>
              {user && (
                <Menu as="div" className={styles.drop_options}>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className={`${styles.profile_dropdown_menu} absolute right-3 mt-3 w-48 origin-top-right rounded-md  py-2 px-2 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
                  >
                    <MenuItem>
                      <NavLink
                        to={`${
                          user?.role === "expert"
                            ? "/expert/profile"
                            : "/client/profile"
                        }`}
                        className="block px-4 py-2 text-sm text-gray-700 "
                      >
                        Profile
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        // onClick={onLogoutUserHander}
                      >
                        Purchases
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        // onClick={onLogoutUserHander}
                      >
                        Followed Experts
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        // onClick={onLogoutUserHander}
                      >
                        Settings
                      </a>
                    </MenuItem>

                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        onClick={onLogoutUserHandler}
                      >
                        Logout
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
              {!user && (
                <NavLink
                  onClick={() => modalCtx.toggleModal("auth")}
                  to="/auth/login"
                  className={styles.profile_dropdown}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M10 10.625C9.25832 10.625 8.5333 10.4051 7.91661 9.99301C7.29993 9.58096 6.81928 8.99529 6.53545 8.31006C6.25162 7.62484 6.17736 6.87084 6.32206 6.14341C6.46675 5.41598 6.8239 4.7478 7.34835 4.22335C7.8728 3.6989 8.54098 3.34175 9.26841 3.19706C9.99584 3.05236 10.7498 3.12662 11.4351 3.41045C12.1203 3.69428 12.706 4.17493 13.118 4.79161C13.5301 5.4083 13.75 6.13332 13.75 6.875C13.75 7.86956 13.3549 8.82339 12.6517 9.52665C11.9484 10.2299 10.9946 10.625 10 10.625ZM10 4.375C9.50555 4.375 9.0222 4.52162 8.61108 4.79633C8.19995 5.07103 7.87952 5.46148 7.6903 5.91829C7.50108 6.37511 7.45158 6.87777 7.54804 7.36273C7.6445 7.84768 7.8826 8.29314 8.23223 8.64277C8.58187 8.9924 9.02732 9.2305 9.51228 9.32697C9.99723 9.42343 10.4999 9.37392 10.9567 9.1847C11.4135 8.99548 11.804 8.67505 12.0787 8.26393C12.3534 7.8528 12.5 7.36945 12.5 6.875C12.5 6.21196 12.2366 5.57608 11.7678 5.10723C11.2989 4.63839 10.663 4.375 10 4.375Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.99991 19.375C8.61393 19.374 7.2454 19.0658 5.99284 18.4725C4.74029 17.8792 3.63486 17.0155 2.75615 15.9437L2.43115 15.5437L2.75615 15.15C3.6356 14.0795 4.74135 13.2173 5.99387 12.6253C7.24639 12.0334 8.61454 11.7263 9.99991 11.7263C11.3853 11.7263 12.7534 12.0334 14.0059 12.6253C15.2585 13.2173 16.3642 14.0795 17.2437 15.15L17.5687 15.5437L17.2437 15.9437C16.365 17.0155 15.2595 17.8792 14.007 18.4725C12.7544 19.0658 11.3859 19.374 9.99991 19.375ZM4.06865 15.55C4.8288 16.3637 5.74811 17.0125 6.76951 17.4561C7.79091 17.8997 8.89259 18.1286 10.0062 18.1286C11.1197 18.1286 12.2214 17.8997 13.2428 17.4561C14.2642 17.0125 15.1835 16.3637 15.9437 15.55C15.1835 14.7362 14.2642 14.0874 13.2428 13.6438C12.2214 13.2002 11.1197 12.9713 10.0062 12.9713C8.89259 12.9713 7.79091 13.2002 6.76951 13.6438C5.74811 14.0874 4.8288 14.7362 4.06865 15.55Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.9999 19.375C7.87037 19.3764 5.8038 18.6528 4.14034 17.3232C2.47687 15.9936 1.31563 14.1373 0.847745 12.0598C0.379858 9.98231 0.633207 7.80742 1.56609 5.8931C2.49898 3.97877 4.05581 2.43909 5.98035 1.52747C7.90489 0.615841 10.0825 0.386598 12.1546 0.877467C14.2268 1.36834 16.0702 2.55007 17.3812 4.22816C18.6923 5.90625 19.393 7.9807 19.368 10.1101C19.343 12.2395 18.5938 14.2969 17.2436 15.9437C16.3649 17.0156 15.2595 17.8792 14.007 18.4725C12.7544 19.0659 11.3859 19.3741 9.9999 19.375ZM9.9999 1.87501C8.39293 1.87501 6.82205 2.35153 5.4859 3.24431C4.14975 4.1371 3.10835 5.40605 2.49339 6.8907C1.87843 8.37535 1.71753 10.009 2.03103 11.5851C2.34453 13.1612 3.11837 14.6089 4.25467 15.7452C5.39097 16.8815 6.8387 17.6554 8.4148 17.9689C9.99089 18.2824 11.6246 18.1215 13.1092 17.5065C14.5939 16.8916 15.8628 15.8502 16.7556 14.514C17.6484 13.1779 18.1249 11.607 18.1249 10C18.1249 7.84512 17.2689 5.77849 15.7451 4.25476C14.2214 2.73103 12.1548 1.87501 9.9999 1.87501Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.2373 15.5499C3.2373 15.5499 9.53105 22.5812 15.9373 16.2499L16.7623 15.5499C16.7623 15.5499 11.4123 9.99993 5.98105 13.3312L3.2373 15.5499Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10 10C11.7259 10 13.125 8.60089 13.125 6.875C13.125 5.14911 11.7259 3.75 10 3.75C8.27411 3.75 6.875 5.14911 6.875 6.875C6.875 8.60089 8.27411 10 10 10Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
