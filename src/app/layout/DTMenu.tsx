import { Link } from "react-router";
import { Popover, PopoverPanel, PopoverButton } from "@headlessui/react";
import { TSection } from "./types";

type TProps = {
  sections: TSection[];
};

export const DTMenu = ({ sections }: TProps) => {
  return (
    <>
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </Link>
      </div>
      {sections.map((section) => (
        <div key={section.title} className="mx-4">
          <Popover className="hidden lg:flex">
            <PopoverButton className="p-2">{section.title}</PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="min-w-48 p-4 divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 shadow-md"
            >
              {section.items.map((item) => (
                <div key={item.name} className="p-2">
                  <Link to={item.to}>{item.name}</Link>
                </div>
              ))}
            </PopoverPanel>
          </Popover>
        </div>
      ))}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/cart" className="text-sm/6 font-semibold text-gray-900">
          Cart
        </Link>
      </div>
    </>
  );
};
