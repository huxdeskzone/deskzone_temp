import { IProgressInterface } from "../../interfaces/propsInterfaces";
import styles from "./Expert.module.css";

const ExpertApplicationProgress: React.FC<IProgressInterface> = ({
  progressStage,
  percentageCompletion,
}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-7">
      <div
        className={`${styles.progress} h-2.5 rounded-full`}
        style={{
          width: `${percentageCompletion}%`,
        }}
      ></div>
    </div>
  );
};

export default ExpertApplicationProgress;
