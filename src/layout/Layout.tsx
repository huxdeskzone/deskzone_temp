import { useState } from "react";
import { useLocation } from "react-router-dom";
import useScrolling from "../hooks/useScroll";
import NavigationBar from "./NavigationBar";
import SideNavigationBar from "./SideNavigationBar";
import ExpertServicesFilterTab from "./ExpertServicesFilterTab";
import BottomNav from "./BottomNav";
import MobileSideBar from "./MobileSideBar";
import AppRoutes from "./AppRoutes";
import styles from "./Layout.module.css";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling] = useScrolling();

  const { pathname } = useLocation();

  const onOpenMobileSideBar = () => {
    if (isOpen) {
      return setIsOpen(false);
    }

    return setIsOpen(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-10 ${
          isScrolling && "hidden transition ease-in-out delay-150"
        } transition ease-in-out delay-150`}
      >
        <NavigationBar />
        {pathname.split("/")[1] !== "experts" && <ExpertServicesFilterTab />}
      </header>

      <main
        className={`${
          pathname.split("/")[1] !== "experts" ? styles.main : styles.main2
        }`}
      >
        <aside>
          <SideNavigationBar />
        </aside>

        <section className={styles.main_content}>
          <AppRoutes />
        </section>

        <aside>
          <MobileSideBar
            isOpen={isOpen}
            onOpenMobileSideBar={onOpenMobileSideBar}
          />
        </aside>
      </main>

      <footer>
        <BottomNav
          isOpen={isOpen}
          onOpenMobileSideBar={onOpenMobileSideBar}
          isScrolling={isScrolling}
        />
      </footer>
    </>
  );
};

export default Layout;
