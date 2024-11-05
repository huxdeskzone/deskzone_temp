import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Profile.module.css";

const Profile: React.FC = () => {
  const [editInfo, setEditInfo] = useState(false);

  const { user } = useSelector((state: any) => state.userState);

  console.log(editInfo);

  return (
    <main
      className={`flex w-full flex-grow flex-col lg:flex-grow-0 lg:bg-light lg:px-12 npm lg:dark:bg-dark-250`}
    >
      <div
        className="flex min-h-full flex-grow flex-col"
        style={{ opacity: 1, transform: "none" }}
      >
        <h1 className="mb-5 text-15px font-medium text-cyan-50 dark:text-light sm:mb-6">
          Personal Information
        </h1>
        <div className="flex flex-grow flex-col">
          <fieldset className="mb-6 grid gap-5 pb-5 sm:grid-cols-2 md:pb-9 lg:mb-8">
            <div className="sm:col-span-2">
              <div className="text-xs">
                <div className="flex flex-wrap gap-2.5">
                  <div
                    role="presentation"
                    tabIndex={0}
                    className={`${styles.logo_border} relative border-dashed border-2 border-light-500 dark:border-dark-600 text-center flex flex-col justify-center hover:text-black dark:hover:text-light items-center cursor-pointer focus:border-accent-400 focus:outline-none h-36 w-full rounded`}
                  >
                    <input
                      accept=""
                      type="file"
                      tabIndex={-1}
                      name="profile.avatar"
                      className="z-50"
                      style={{ display: "none" }}
                    />
                    Upload Your Avatar Image (80 X 80)
                    {/* {data && isSuccess && (
                      <div className="h-full flex justify-center items-center">
                        <img
                          src={data?.data?.business_logo}
                          alt="upload_image_preview"
                          className={styles.logo_preview}
                        />
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-13px">
                <span className="block cursor-pointer pb-2.5 font-normal text-zinc-400 rtl:text-right dark:text-light/70">
                  First Name
                </span>
                <input
                  type="text"
                  name="name"
                  className={`${styles.profile_input} ${
                    !editInfo && "disabled"
                  } h-11 w-full text-cyan-50   rounded border  px-4 py-2  bg-transparent`}
                  value={user?.first_name}
                />
              </label>
            </div>

            <div>
              <label className="block text-13px">
                <span className="block cursor-pointer pb-2.5 font-normal text-zinc-400 rtl:text-right dark:text-light/70">
                  Last Name
                </span>
                <input
                  type="text"
                  name="name"
                  className={`${styles.profile_input}  ${
                    !editInfo && "disabled"
                  } h-11 w-full text-cyan-50   rounded border  px-4 py-2  bg-transparent`}
                  value={user?.last_name}
                />
              </label>
            </div>

            <div>
              <label className="block text-13px">
                <span className="block cursor-pointer pb-2.5 font-normal text-zinc-400 rtl:text-right dark:text-light/70">
                  Email
                </span>
                <input
                  type="text"
                  name="name"
                  className={`${styles.profile_input}  ${
                    !editInfo && "disabled"
                  } h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                  value={user?.email}
                />
              </label>
            </div>

            <div>
              <span className="block cursor-pointer pb-2.5 font-normal text-zinc-400">
                Phone
              </span>
              <div className=" react-tel-input ">
                <input
                  className={`${styles.profile_input}  ${
                    !editInfo && "disabled"
                  } h-11 w-full text-cyan-50 appearance-none rounded border border-light-500 px-4 py-2 text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand md:h-12 lg:px-5 xl:h-[50px] bg-transparent`}
                  placeholder="1 (702) 123-4567"
                  type="tel"
                  value="+1"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-13px">
                <span className=" text-cyan-50 block cursor-pointer pb-2.5 font-normal text-dark/70 dark:text-light/70">
                  About
                </span>
                <textarea
                  placeholder="we are a professional web developer"
                  name="profile.bio"
                  className={` ${styles.profile_input}  ${
                    !editInfo && "disabled"
                  } text-cyan-50 min-h-[150px] w-full appearance-none rounded border border-light-500 px-4 py-3 text-13px text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand lg:px-5 bg-transparent`}
                ></textarea>
              </label>
            </div>
          </fieldset>
          <div className="mt-auto flex items-center gap-4 pb-3 lg:justify-end">
            {editInfo ? (
              <button
                className={`${styles.profile_btn} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
              >
                Save change
              </button>
            ) : (
              <button
                type="button"
                className={`${styles.profile_btn} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                onClick={() => setEditInfo(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
