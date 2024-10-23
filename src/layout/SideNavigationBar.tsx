import { Link, useLocation } from "react-router-dom";
import Icon from "../components/commons/Icon";
import styles from "./SideNavigationBar.module.css";

const SideNavigationBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <section
      className="fixed top-14 left-0 z-40 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className={`h-full overflow-x-auto  ${styles.side_nav}`}>
        <ul className="space-y-2  mt-3 flex flex-col  gap-5 font-medium">
          <li
            className={`${
              !pathname.split(" ")[1] && styles.active
            } text-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full p-2 text-gray-900 rounded-lg dark:text-white`}
          >
            <Link to="/" title="HOME" className="group">
              <Icon
                iconClasses={
                  "fa-solid fa-house  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                }
              />
            </Link>
          </li>
          <li className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full p-2 text-gray-900 rounded-lg dark:text-white ">
            <Link to="#" title="EXPLORE" className="group">
              <Icon
                iconClasses={
                  "fa-solid fa-compass w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                }
              />
            </Link>
          </li>
          <li className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full p-2 text-gray-900 rounded-lg dark:text-white ">
            <Link to="#" title="POPULAR SERVICES" className="group">
              <Icon
                iconClasses={
                  "fa-solid fa-fire w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                }
              />
            </Link>
          </li>
          <li
            className={`${
              pathname.split("/")[1] === "experts" && styles.active
            } text-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full p-2 text-gray-900 rounded-lg dark:text-white`}
          >
            <Link to="/experts" title="TOP EXPERTS" className="group">
              <Icon
                iconClasses={
                  "fa-solid fa-user-group w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                }
              />
              {/* <span className="flex-1 ms-3 whitespace-nowrap">Users</span> */}
            </Link>
          </li>
          <li className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 w-full p-2 text-gray-900 rounded-lg dark:text-white ">
            <a href="#" title="CONTACT US" className="group">
              <Icon
                iconClasses={
                  "fa-brands fa-telegram w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                }
              />
              {/* <span className="flex-1 ms-3 whitespace-nowrap">Products</span> */}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SideNavigationBar;
