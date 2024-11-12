import { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import styles from "./RequestServiceModal.module.css";

const ServiceDataPicker: React.FC<{
  onSelectDate?: (date: any) => void;
}> = ({ onSelectDate }) => {
  const [value, setValue] = useState<any>({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    if (onSelectDate) {
      onSelectDate(value?.endDate);
    }
  }, [value]);

  return (
    <div className={styles.date_picker}>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

export default ServiceDataPicker;
