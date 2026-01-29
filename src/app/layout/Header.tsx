import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { DTMenu } from "./DTMenu";
import { MobileMenu } from "./MobileMenu";

const womenSections = [
  {
    name: "Tops",
    to: "/products?section=tops&gender=female",
  },
  {
    name: "Bottoms",
    to: "/products?section=bottoms&gender=female",
  },
  {
    name: "Shoes",
    to: "/products?section=shoes&gender=female",
  },
];

const menSections = [
  {
    name: "Tops",
    to: "/products?section=tops&gender=male",
  },
  {
    name: "Bottoms",
    to: "/products?section=bottoms&gender=male",
  },
  {
    name: "Shoes",
    to: "/products?section=shoes&gender=male",
  },
];

const menuItems = [
  {
    title: "Women",
    items: womenSections,
  },
  {
    title: "Men",
    items: menSections,
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <DTMenu sections={menuItems} />
        <MobileMenu
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          sections={menuItems}
        />
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};
