import Link from "next/link"

export function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <a className="flex">
              <svg
                className="mr-3 h-10"
                viewBox="0 0 52 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                  fill="#76A9FA"
                />
                <path
                  d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                  fill="#A4CAFE"
                />
                <path
                  d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                  fill="#1C64F2"
                />
              </svg>
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                FlowBite
              </span>
            </a>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <Link href="/about">
                <a
                  href="#"
                  className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/new">
                <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                  New Product
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Ravzi
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}
