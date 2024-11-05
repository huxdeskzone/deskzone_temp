import Icon from "../components/commons/Icon";
import { IMobileSideBarProps } from "../interfaces/propsInterfaces";
import styles from "./BottomNav.module.css";

// ${isScrolling && styles.scrolling}
const BottomNav: React.FC<IMobileSideBarProps> = ({
  isOpen,
  onOpenMobileSideBar = () => {},
  isScrolling,
}) => {
  return (
    <section
      className={` ${styles.bottom_nav} transition ease-in-out delay-150 z-50`}
    >
      <a href="#" type="button" className="cursor-pointer">
        <Icon iconClasses={`fa-solid fa-house ${styles.icons}`} />
      </a>

      <a
        href="#"
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
      >
        <Icon iconClasses={`fa-solid fa-magnifying-glass ${styles.icons}`} />
      </a>

      <a href="#">
        <Icon iconClasses={`fa-solid fa-moon ${styles.icons}`} />
      </a>

      <button
        type="button"
        className={styles.toggler}
        onClick={(event) => {
          event.preventDefault();
          onOpenMobileSideBar();
        }}
        data-drawer-target="drawer-right-example"
        data-drawer-show="drawer-right-example"
        data-drawer-placement="right"
        aria-controls="drawer-right-example"
      >
        <Icon iconClasses={`fa-solid fa-bars ${styles.icons}`} />
      </button>
    </section>
  );
};

export default BottomNav;
