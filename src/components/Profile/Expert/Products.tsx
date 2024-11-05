const Products: React.FC = () => {
  return (
    <main className="flex w-full flex-grow flex-col lg:flex-grow-0 lg:bg-light lg:px-12 lg:py-8 lg:dark:bg-dark-250">
      <div
        className="flex min-h-full flex-grow flex-col"
        style={{ opacity: "1", transform: "none" }}
      >
        <h1 className="mb-3 text-15px font-medium text-dark dark:text-light">
          My Wishlist<span className="ml-1 text-light-900">(6)</span>
        </h1>
        <div className="flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5">
          <div className="relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
            <img
              alt="Borobazar React Next Grocery Template"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="bg-light-400 object-cover dark:bg-dark-400"
              sizes="100vw"
              src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F492%2Fconversions%2Fimage52-thumbnail.jpg&amp;w=3840&amp;q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
            <div className="border-b border-light-400 pb-4 dark:border-dark-600 sm:border-b-0 sm:pb-0">
              <a
                className="font-medium text-dark dark:text-light sm:mb-1.5"
                href="/products/borobazar-react-next-grocery-template"
              >
                Borobazar React Next Grocery Template
              </a>
              <p className="pt-0.5 font-medium text-gray-500 dark:text-gray-400 sm:pt-0">
                BentaSoft
              </p>
              <div className="mt-2 sm:mt-3">
                <span className="rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark">
                  $65.00
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
              <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative pointer-events-auto cursor-pointer w-full flex-1 shrink-0 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-dark-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark">
                Add to Cart
              </button>
              <button
                type="button"
                className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
              >
                <svg
                  viewBox="0 -28 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                >
                  <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5">
          <div className="relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
            <img
              alt="Scholar Multipurpose Education WordPress Theme"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="bg-light-400 object-cover dark:bg-dark-400"
              sizes="100vw"
              src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F494%2Fconversions%2Fimage02-thumbnail.jpg&amp;w=3840&amp;q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
            <div className="border-b border-light-400 pb-4 dark:border-dark-600 sm:border-b-0 sm:pb-0">
              <a
                className="font-medium text-dark dark:text-light sm:mb-1.5"
                href="/products/scholar-multipurpose-education-wordpress-theme"
              >
                Scholar Multipurpose Education WordPress Theme
              </a>
              <p className="pt-0.5 font-medium text-gray-500 dark:text-gray-400 sm:pt-0">
                Bitronic
              </p>
              <div className="mt-2 sm:mt-3">
                <span className="rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark">
                  $70.00
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
              <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative pointer-events-auto cursor-pointer w-full flex-1 shrink-0 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-dark-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark">
                Add to Cart{" "}
              </button>
              <button
                type="button"
                className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
              >
                <svg
                  viewBox="0 -28 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                >
                  <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5">
          <div className="relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
            <img
              alt="MagazzinePro  Lyfestyle Blog Template"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="bg-light-400 object-cover dark:bg-dark-400"
              sizes="100vw"
              src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F500%2Fconversions%2Fimage04-thumbnail.jpg&amp;w=3840&amp;q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
            <div className="border-b border-light-400 pb-4 dark:border-dark-600 sm:border-b-0 sm:pb-0">
              <a
                className="font-medium text-dark dark:text-light sm:mb-1.5"
                href="/products/magazzinepro-lyfestyle-blog-template"
              >
                MagazzinePro Lyfestyle Blog Template
              </a>
              <p className="pt-0.5 font-medium text-gray-500 dark:text-gray-400 sm:pt-0">
                BentaSoft
              </p>
              <div className="mt-2 sm:mt-3">
                <span className="rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark">
                  $30.00
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
              <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative pointer-events-auto cursor-pointer w-full flex-1 shrink-0 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-dark-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark">
                Add to Cart{" "}
              </button>
              <button
                type="button"
                className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
              >
                <svg
                  viewBox="0 -28 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                >
                  <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5">
          <div className="relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
            <img
              alt="Reactify Searching Engine"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="bg-light-400 object-cover dark:bg-dark-400"
              sizes="100vw"
              src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F506%2Fconversions%2Fimage06-thumbnail.jpg&amp;w=3840&amp;q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
            <div className="border-b border-light-400 pb-4 dark:border-dark-600 sm:border-b-0 sm:pb-0">
              <a
                className="font-medium text-dark dark:text-light sm:mb-1.5"
                href="/products/reactify-searching-engine"
              >
                Reactify Searching Engine
              </a>
              <p className="pt-0.5 font-medium text-gray-500 dark:text-gray-400 sm:pt-0">
                Maxicon Soft Tech
              </p>
              <div className="mt-2 sm:mt-3">
                <span className="rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark">
                  $55.00
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
              <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative pointer-events-auto cursor-pointer w-full flex-1 shrink-0 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-dark-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark">
                Add to Cart{" "}
              </button>
              <button
                type="button"
                className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
              >
                <svg
                  viewBox="0 -28 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                >
                  <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5">
          <div className="relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
            <img
              alt="RNB Modern Laravel React Rental System"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="bg-light-400 object-cover dark:bg-dark-400"
              sizes="100vw"
              src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F512%2Fconversions%2Fimage07-thumbnail.jpg&amp;w=3840&amp;q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
            <div className="border-b border-light-400 pb-4 dark:border-dark-600 sm:border-b-0 sm:pb-0">
              <a
                className="font-medium text-dark dark:text-light sm:mb-1.5"
                href="/products/rnb-modern-laravel-react-rental-system"
              >
                RNB Modern Laravel React Rental System
              </a>
              <p className="pt-0.5 font-medium text-gray-500 dark:text-gray-400 sm:pt-0">
                Imagineco
              </p>
              <div className="mt-2 sm:mt-3">
                <span className="rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark">
                  $29.00
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
              <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative pointer-events-auto cursor-pointer w-full flex-1 shrink-0 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-dark-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark">
                Add to Cart{" "}
              </button>
              <button
                type="button"
                className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
              >
                <svg
                  viewBox="0 -28 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                >
                  <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5">
          <div className="relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36">
            <img
              alt="StoryHub WordPress Blog Theme"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="bg-light-400 object-cover dark:bg-dark-400"
              sizes="100vw"
              src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F518%2Fconversions%2Fimage05-thumbnail.jpg&amp;w=3840&amp;q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="sm:flex-start flex flex-1 flex-col gap-3 sm:flex-row sm:justify-between md:gap-0">
            <div className="border-b border-light-400 pb-4 dark:border-dark-600 sm:border-b-0 sm:pb-0">
              <a
                className="font-medium text-dark dark:text-light sm:mb-1.5"
                href="/products/storyhub-wordpress-blog-theme-2"
              >
                StoryHub WordPress Blog Theme
              </a>
              <p className="pt-0.5 font-medium text-gray-500 dark:text-gray-400 sm:pt-0">
                Omatron
              </p>
              <div className="mt-2 sm:mt-3">
                <span className="rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark">
                  $55.00
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4">
              <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark relative pointer-events-auto cursor-pointer w-full flex-1 shrink-0 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-dark-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark">
                Add to Cart{" "}
              </button>
              <button
                type="button"
                className="flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-dark-600 sm:h-12 !border-accent"
              >
                <svg
                  viewBox="0 -28 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                >
                  <path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
