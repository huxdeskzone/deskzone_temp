import { useState } from "react";
import { useSelector } from "react-redux";
import { useDeleteItemFromWishlistMutation } from "../../../lib/apis/wishlistApi";
import Spinner from "../../commons/Spinner";
import WishlistVideoPreview from "../common/WishlistVideoPreview";
import styles from "../Profile.module.css";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlistId, setWishlistId] = useState<string | null>(null);

  const [deleteItemFromWishlist, { isLoading }] =
    useDeleteItemFromWishlistMutation();

  const { wishlist } = useSelector((state: any) => state.userWishlistState);

  const onDeleteItemFromWishlist = async (
    serviceId: string,
    wishlistId: string
  ) => {
    setWishlistId(serviceId);
    await deleteItemFromWishlist(wishlistId);
  };

  console.log(wishlist);
  return (
    <main className="flex w-full flex-grow flex-col lg:flex-grow-0 lg:bg-light lg:px-12 lg:py-8 lg:dark:bg-dark-250">
      <div
        className="flex min-h-full flex-grow flex-col"
        style={{ opacity: "1", transform: "none" }}
      >
        <div className="p-5 lg:pl-0">
          <h1 className="mb-3 text-15px font-medium text-cyan-50">
            My Wishlist
            <span className="ml-1 text-light-900">
              ({wishlist ? wishlist?.length : 0})
            </span>
          </h1>
          {wishlist ? (
            <p className={`${styles.wishlist_category} mb-7 -mt-2 text-xs`}>
              {wishlist[0]?.wishListCategory.name}
            </p>
          ) : (
            <p className={`${styles.wishlist_category} mb-7 -mt-2 text-xs`}>
              You do not have any service in your wishlist
            </p>
          )}
        </div>
        {wishlist &&
          wishlist.length > 0 &&
          wishlist?.map((service: any) => {
            return (
              <div
                className={`${styles.wishlist_card} flex items-start gap-4 border-b  mb-5  pt-4 px-4  border-dark-400 sm:gap-5`}
              >
                <div className="relative  w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
                  <WishlistVideoPreview
                    serviceVideo={service?.expertService?.explainer_video}
                    servicePoster={service?.expertService?.thumbnail}
                    id={service?.expertService.id}
                  />
                </div>
                <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
                  <div className="pb-4 dark:border-dark-600">
                    <a
                      className="font-medium text-white text-xs lsm:text-sm lg:text-lg sm:mb-1.5"
                      href="/products/borobazar-react-next-grocery-template"
                    >
                      {service?.expertService?.title}
                    </a>
                    <Link
                      to={`/experts/${service?.expertService?.expert_profile?.business_name}/products`}
                    >
                      <p className="pt-0.5 text-xs md:text-sm font-medium text-gray-400 sm:pt-0">
                        {service?.expertService?.expert_profile?.business_name}
                      </p>
                    </Link>
                    <div className="mt-2 sm:mt-3">
                      <span
                        style={{ color: "#24b47e" }}
                        className="py-1 text-sm font-semibold text-brand-dark"
                      >
                        ${service?.expertService?.lowest_acceptable_amount}
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
                    {wishlistId === service.expertService.id && isLoading ? (
                      <div className="mr-5">
                        <Spinner />
                      </div>
                    ) : (
                      <button
                        onClick={async () =>
                          await onDeleteItemFromWishlist(
                            service?.expertService.id,
                            service?.id
                          )
                        }
                        type="button"
                        className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded   transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
                      >
                        <svg
                          viewBox="0 -28 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          fill="currentColor"
                          className={`${styles.wishlist_icon} hover:transform hover:scale-110 text-accent h-8 w-8 text-brand dark:text-brand dark:hover:text-brand-dark `}
                        >
                          <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default WishList;
