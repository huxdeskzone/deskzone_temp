import { IconProps } from "../../interfaces/propsInterfaces";

const Icon: React.FC<IconProps> = ({ iconClasses, onClickIcon }) => {
  return <i className={iconClasses} onClick={onClickIcon}></i>;
};

export default Icon;
