import { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useGetCurrentUserMutation } from "../lib/apis/userApi";
import { useLogoutUserMutation } from "../lib/apis/authApi";
import { getToken } from "../helpers/firebase";
import { ModalContext } from "../context/modal-context";
import Icon from "../components/commons/Icon";
import logo from "../Assets/logo.png";
import styles from "./NavgitaionBar.module.css";

const NavigationBar: React.FC = () => {
  const modalCtx = useContext(ModalContext);

  const [getCurrentUser] = useGetCurrentUserMutation();
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const { user } = useSelector((state: any) => state.userState);

  const onLogoutUserHandler = () => {
    logoutUser(null);
  };

  useEffect(() => {
    const onGetCurrentUser = async () => {
      const token = await getToken();

      if (token) {
        await getCurrentUser(token);
      }
    };

    onGetCurrentUser();
  }, [isSuccess]);

  return (
    <>
      <nav className={styles.nav_bar}>
        <div className={styles.nav_logo}>
          <NavLink to="/">
            <img src={logo} alt="app_logo" />
          </NavLink>
        </div>
        <div className={styles.nav_items}>
          <ul>
            <li className={styles.search}>
              <a href="#">
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
                to="/expert/application"
                className={styles.cta_btn}
                onClick={() => modalCtx.toggleModal("expert")}
              >
                <a href="#">Create a service</a>
              </NavLink>
            ) : (
              <NavLink
                to="/expert/application"
                className={styles.cta_btn}
                onClick={() => modalCtx.toggleModal("expert")}
              >
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
                            : "/profile"
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
                  <Icon
                    iconClasses={`fa-solid fa-user ${styles.profile_icon}`}
                  />
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
