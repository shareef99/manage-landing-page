import { useState } from "react";
import Button from "./button";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative container lg:flex lg:items-center lg:justify-between">
      <div className="my-12 flex items-center justify-between lg:my-8">
        <div className="-mb-1">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>

          {isOpen ? (
            <img src="/images/icon-close.svg" alt="close" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="hamburger" />
          )}
        </button>
      </div>
      <div className="absolute -top-20 -right-12 left-12 z-[-1]">
        <img src="/images/bg-tablet-pattern.svg" alt="Manage Logo" />
      </div>
      {/* Small Screen Navbar */}
      {isOpen && (
        <nav className="absolute right-0 left-4 z-10 w-full lg:hidden">
          <ul
            className={twMerge(
              "bg-c-gray-50 flex w-[calc(100vw-2rem)] flex-col items-center gap-8 rounded-lg py-8",
              "*:text-c-blue *:font-bold",
            )}
          >
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
      )}
      {/* Large Screen Navbar */}
      <nav className="hidden lg:block">
        <ul
          className={twMerge(
            "flex flex-row items-center gap-8 rounded-lg py-8 xl:gap-12",
            "*:text-c-blue *:font-bold",
          )}
        >
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>
      <Button className="hidden lg:block">Get Started</Button>
    </header>
  );
}
