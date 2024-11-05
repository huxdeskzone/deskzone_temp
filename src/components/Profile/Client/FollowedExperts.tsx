const FollowedExperts: React.FC = () => {
  return (
    <>
      <h1 className="mb-3 text-15px font-medium text-dark dark:text-light">
        Followed Authors<span className="ml-1 text-light-900">(10)</span>
      </h1>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Demo shop"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F466%2Flogo.jpg&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/demo-shop"> Demo shop</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Maxicon Soft Tech"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F199%2FGroup-14403.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/maxicon-soft-tech"> Maxicon Soft Tech</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="BentaSoft"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F195%2FGroup-14404.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/bentasoft"> BentaSoft</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Omnico Team"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F194%2FGroup-14398.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/omnico-team"> Omnico Team</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Imagineco"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2FGroup-14394.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/imagineco"> Imagineco</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Omatron"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F109%2FGroup-14395.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/omatron"> Omatron</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Bitronic"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F428%2FGroup-14393.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/bitronic"> Bitronic</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Qubitron Solutions"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2FGroup-14400.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/qubitron-solutions"> Qubitron Solutions</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="BentaSoft"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F101%2FGroup-14392.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/fusion-digital"> BentaSoft</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b border-light-400 py-5 last:border-b-0 dark:border-dark-400 sm:gap-5">
        <div className="relative aspect-square w-16 flex-shrink-0 border border-light-300 dark:border-0">
          <img
            alt="Temper studios"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-3xl bg-light-400 object-cover dark:bg-dark-400"
            sizes="100vw"
            srcSet="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=3840&amp;q=100 3840w"
            src="/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F102%2FGroup-14405.png&amp;w=3840&amp;q=100"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="flex flex-1 flex-col items-start sm:flex-row sm:items-center sm:justify-between">
          <div className="pb-2 sm:pb-0">
            <h3 className="my-1.5 font-medium text-dark dark:text-light">
              <a href="/authors/temper-studios"> Temper studios</a>
            </h3>
          </div>
          <button className="transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200 pointer-events-auto cursor-pointer opacity-100 min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 false">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[15px] text-current"
            >
              <path
                d="M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z"
                fill="currentColor"
              ></path>
            </svg>
            Unfollow
          </button>
        </div>
      </div>
    </>
  );
};

export default FollowedExperts;
