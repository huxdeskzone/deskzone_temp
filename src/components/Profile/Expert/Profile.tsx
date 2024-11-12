import { useState, useEffect } from "react";
import { useGetLoggedInExpertsMutation } from "../../../lib/apis/expertApis";
import styles from "../Profile.module.css";

const Profile: React.FC = () => {
  const [editInfo, setEditInfo] = useState(false);
  const [editSocialLink, setEditSocialLink] = useState(false);

  const [expertData, setExpertData] = useState<{
    business_name?: string;
    business_logo?: string;
    about_me?: string;
    instagram_profile?: string;
    linkedin_profile?: string;
    twitter_profile?: string;
    youtube_profile?: string;
    phone_number?: string;
  }>({
    business_name: "",
    business_logo: "",
    about_me: "",
    instagram_profile: "",
    linkedin_profile: "",
    twitter_profile: "",
    youtube_profile: "",
  });
  const [getLoggedInExperts, { data, isLoading, isSuccess, error }] =
    useGetLoggedInExpertsMutation();

  useEffect(() => {
    getLoggedInExperts(null);
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      setExpertData({
        business_name: data?.data?.business_name,
        business_logo: data?.data?.business_logo,
        about_me: data?.data?.about_me,
        instagram_profile: data?.data?.instagram_profile,
        twitter_profile: data?.data?.twitter_profile,
        linkedin_profile: data?.data?.linkedin_profile,
        youtube_profile: data?.data?.youtube_profile,
        phone_number: "",
      });
    }
  }, [isSuccess, data, editInfo, editSocialLink]);

  console.log(expertData);

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
        <form className="flex flex-grow flex-col">
          <fieldset className="mb-6 grid gap-5 pb-5 sm:grid-cols-2 md:pb-9 lg:mb-8">
            <div className="sm:col-span-2">
              <div className="text-xs">
                <div className="flex flex-wrap gap-2.5">
                  <div
                    role="presentation"
                    tabIndex={0}
                    className={`${styles.logo_border} relative border-dashed border-2 border-light-500 dark:border-dark-600 text-center flex flex-col justify-center hover:text-black dark:hover:text-light items-center cursor-pointer focus:border-accent-400 focus:outline-none h-36 w-full rounded`}
                  >
                    {data && isSuccess && (
                      <div className="h-full flex justify-center items-center">
                        <img
                          src={data?.data?.business_logo}
                          alt="upload_image_preview"
                          className={styles.logo_preview}
                        />

                        {editInfo && (
                          <div>
                            <a
                              className={styles.upload_btn}
                              href="#"
                              // onClick={onShowProfileModal}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-camera-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-13px">
                <span
                  className={`${styles.form_label} block cursor-pointer pb-2.5 font-normal`}
                >
                  Name
                </span>
                {!editInfo && (
                  <input
                    type="text"
                    name="name"
                    className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                    value={expertData.business_name}
                    disabled
                  />
                )}

                {editInfo && (
                  <input
                    type="text"
                    name="name"
                    className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                    value={expertData.business_name}
                    onChange={(event) =>
                      setExpertData({
                        ...expertData,
                        business_name: event.target.value,
                      })
                    }
                  />
                )}
              </label>
            </div>
            <div>
              <label className="block text-13px">
                <span
                  className={`${styles.form_label} block cursor-pointer pb-2.5 font-normal`}
                >
                  Phone
                </span>

                {!editInfo && (
                  <input
                    className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                    placeholder="+1 (702) 123-4567"
                    type="text"
                    value={expertData?.phone_number}
                    disabled
                  />
                )}

                {editInfo && (
                  <input
                    className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                    placeholder="+1 (702) 123-4567"
                    type="text"
                    value={expertData?.phone_number}
                    onChange={(event) =>
                      setExpertData({
                        ...expertData,
                        phone_number: event.target.value,
                      })
                    }
                  />
                )}
              </label>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-13px">
                <span
                  className={`${styles.form_label} block cursor-pointer pb-2.5 font-normal`}
                >
                  About
                </span>
                {!editInfo && (
                  <textarea
                    name="profile.bio"
                    className={` ${styles.profile_input} text-cyan-50 min-h-[150px] w-full appearance-none rounded border border-light-500 px-4 py-3 text-13px text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand lg:px-5 bg-transparent`}
                    disabled
                    value={expertData?.about_me}
                  ></textarea>
                )}

                {editInfo && (
                  <textarea
                    name="profile.bio"
                    className={` ${styles.profile_input} text-cyan-50 min-h-[150px] w-full appearance-none rounded border border-light-500 px-4 py-3 text-13px text-dark ring-[0.5px] ring-light-500 placeholder:text-dark-900 focus:border-brand focus:ring-[0.5px] focus:ring-brand dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:placeholder:text-dark-700 dark:focus:border-brand dark:focus:ring-brand lg:px-5 bg-transparent`}
                    value={expertData.about_me}
                  ></textarea>
                )}
              </label>
            </div>
          </fieldset>
          <div className="mt-auto flex items-center gap-4 pb-3 lg:justify-end">
            {editInfo && (
              <>
                <button
                  onClick={() => setEditInfo(false)}
                  className={`${styles.profile_btn3} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                >
                  Cancel
                </button>
                <button
                  className={`${styles.profile_btn2} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                >
                  Save change
                </button>
              </>
            )}

            {!editInfo && (
              <button
                className={`${styles.profile_btn} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                onClick={() => setEditInfo(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>

        <div
          className="flex  flex-grow flex-col"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="mb-5 text-15px font-medium text-cyan-50 dark:text-light sm:mb-6">
            Social Media Links
          </h1>
          <form className="flex flex-grow flex-col">
            <fieldset className="mb-6 grid gap-5 pb-5 sm:grid-cols-2 md:pb-9 lg:mb-8">
              <div>
                <label className="block text-13px">
                  <span className="block cursor-pointer pb-2.5 font-normal text-cyan-50 rtl:text-right dark:text-light/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                    </svg>
                  </span>
                  {!editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="x-twitter"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.twitter_profile}
                      disabled
                    />
                  )}
                  {editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="x-twitter"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.twitter_profile}
                      onChange={(event) =>
                        setExpertData({
                          ...expertData,
                          twitter_profile: event.target.value,
                        })
                      }
                    />
                  )}
                </label>
              </div>
              <div>
                <span className="block cursor-pointer pb-2.5 font-normal text-cyan-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                    viewBox="0 0 448 512"
                  >
                    <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                  </svg>
                </span>
                <div className="">
                  {editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="instagram"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.instagram_profile}
                      onChange={(event) =>
                        setExpertData({
                          ...expertData,
                          instagram_profile: event.target.value,
                        })
                      }
                    />
                  )}

                  {!editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="instagram"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.instagram_profile}
                      disabled
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-13px">
                  <span className="block cursor-pointer pb-2.5 font-normal text-cyan-50 rtl:text-right dark:text-light/70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </span>
                  {editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="linkedin"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.linkedin_profile}
                      onChange={(event) =>
                        setExpertData({
                          ...expertData,
                          linkedin_profile: event.target.value,
                        })
                      }
                    />
                  )}

                  {!editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="linkedin"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.linkedin_profile}
                      disabled
                    />
                  )}
                </label>
              </div>
              <div>
                <span className="block cursor-pointer pb-2.5 font-normal text-cyan-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={`${styles.profile_link_icon} h-4 w-4 sm:h-[18px] sm:w-[18px]`}
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </span>
                <div className="">
                  {editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="youtube"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.youtube_profile}
                      onChange={(event) =>
                        setExpertData({
                          ...expertData,
                          youtube_profile: event.target.value,
                        })
                      }
                    />
                  )}

                  {!editSocialLink && (
                    <input
                      type="text"
                      name="name"
                      placeholder="youtube"
                      className={`${styles.profile_input}  h-11 w-full text-cyan-50  rounded border  px-4 py-2  bg-transparent`}
                      value={expertData?.youtube_profile}
                      disabled
                    />
                  )}
                </div>
              </div>
            </fieldset>
            <div className="mt-auto flex items-center gap-4 pb-3 lg:justify-end">
              {editSocialLink && (
                <>
                  <button
                    onClick={() => setEditSocialLink(false)}
                    className={`${styles.profile_btn3} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                  >
                    Cancel
                  </button>
                  <button
                    className={`${styles.profile_btn2} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                  >
                    Save change
                  </button>
                </>
              )}

              {!editSocialLink && (
                <button
                  className={`${styles.profile_btn} transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark flex-1 lg:flex-none`}
                  onClick={() => setEditSocialLink(true)}
                >
                  Edit Social Links
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Profile;
