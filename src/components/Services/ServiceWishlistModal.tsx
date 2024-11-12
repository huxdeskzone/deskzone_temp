import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import ButtonLoader from "../commons/ButtonLoader";
import { useAddItemToWishListMutation } from "../../lib/apis/wishlistApi";
import useFormValidation from "../../hooks/useFormValidation";
import styles from "./ServiceWishListModal.module.css";

const ServiceWishListModal: React.FC<{
  wishListModalOpen?: boolean;
  onShowWishList?: () => void;
  serviceId?: string;
  service?: string;
  category?: string;
}> = ({ wishListModalOpen, onShowWishList, service, serviceId, category }) => {
  const [wishListData, setWishListData] = useState<{
    name: string;
    serviceId: string;
  }>({ name: "", serviceId: "" });

  const [addItemToWishList, { isSuccess, isLoading, error }] =
    useAddItemToWishListMutation();

  useEffect(() => {
    if (serviceId && category) {
      setWishListData({
        name: `${category} ${Math.floor(Math.random() * 235)}`,
        serviceId: serviceId,
      });
    }
  }, [serviceId, service]);

  // validate form hook
  const [formIsValid, formError, validateFormInputs] = useFormValidation() as [
    boolean,
    { field: string; error: string },
    (type: string, formProps: any) => void
  ];

  useEffect(() => {
    if (typeof validateFormInputs === "function") {
      const timer = setTimeout(() => {
        validateFormInputs("wishlist", wishListData);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [wishListData]);

  const onAddItemToWishList = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    await addItemToWishList({
      serviceId: wishListData.serviceId,
      name: wishListData.name,
    });
  };

  useEffect(() => {
    if (isSuccess && onShowWishList) {
      onShowWishList();
    }
  }, [isSuccess]);

  return ReactDOM.createPortal(
    <div
      id="progress-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${styles.modal_overlay} ${
        wishListModalOpen ? "flex" : "hidden"
      }  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-full bg-black bg-opacity-55`}
    >
      <div
        className={`relative p-4 w-full max-w-3xl max-h-fit ${styles.auth_form_container}`}
      >
        <div className="flex justify-between w-full pl-3 pr-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-4"
              viewBox="0 0 384 512"
            >
              <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
            </svg>
          </div>

          <h1 className="text-sm md:text-xl lg:text-2xl font-medium text-cyan-50">
            Add to wishlist
          </h1>
          <div>
            <button
              type="button"
              className="top-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="progress-modal"
              onClick={onShowWishList}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>

              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <div className="relative shadow">
          <div className="px-4 md:px-5">
            <form onSubmit={onAddItemToWishList}>
              <div>
                <label
                  htmlFor="email"
                  className={`${styles.form_label} block mb-2  font-medium`}
                >
                  Title
                </label>
                <input
                  type="text"
                  name="wishlist-title"
                  id="email"
                  className={`${styles.form_input} ${
                    formError?.field === "name" && styles.error_identifier
                  } text-sm block w-full p-2.5  dark:text-white`}
                  placeholder="My Wishlist"
                  onChange={(event) =>
                    setWishListData({
                      ...wishListData,
                      name: event.target.value,
                    })
                  }
                  value={wishListData.name}
                />
                <div className="flex justify-end -mt-5 mr-2">
                  <span className="text-fuchsia-200 text-sm">
                    {wishListData.name.trim().length}/50
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 space-x-4">
                <button
                  onClick={() => setWishListData({ ...wishListData, name: "" })}
                  data-modal-hide="progress-modal"
                  type="button"
                  className={`text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${styles.form_btn2}`}
                >
                  Clear
                </button>
                {formIsValid ? (
                  <button
                    data-modal-hide="progress-modal"
                    type="submit"
                    className={`text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${styles.form_btn}`}
                  >
                    {isLoading ? <ButtonLoader /> : "Create"}
                  </button>
                ) : (
                  <button
                    disabled
                    data-modal-hide="progress-modal"
                    type="button"
                    className={`text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ${styles.form_btn}`}
                  >
                    Create
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ServiceWishListModal;
