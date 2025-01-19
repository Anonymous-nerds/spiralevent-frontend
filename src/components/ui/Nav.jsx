// "use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/spiraleE4.png";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
// import User from "../assets/102716454.jpeg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore/event" },
  { name: "Buy Ticket", href: "/ticket" },
  { name: "Create an Event", href: "/Expanses" },
  { name: "Pirce", href: "/Customers" },
  { name: "Banner", href: "/Banner" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="bg-transparent pb-24">
      <header className="inset-x-0 top-0 z-50 fixed">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 bg-transparent bg-opacity-20 backdrop-blur-lg"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Spiral Event</span>

              <img className="App-logo h-8 w-auto" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href}
                className="text-sm font-semibold leading-6 text-black"
                style={{ fontSize: "12px" }}>{item.name}</a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/Register"
              className="p-2 px-5 py-3 text-[12px] bg-pink-900 rounded-full m-2 icon"
              style={{ letterSpacing: "1px" }}
            >
              <span className="text-white">Create an Account</span>
            </a>
            <a
              href="/internship"
              className="p-2 px-10 py-3 text-[12px] bg-transparent border border-pink-900  rounded-full m-2 icon"
            >
              <span className="text-pink-690 ">Sign In</span>
            </a>
          </div>
        </nav>
        <hr className="bg-black" />
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fefefe] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Spiral Event</span>
                <img className="App-logo h-10 w-auto" src={Logo} alt="Logo" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black 0">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex lg:flex-1 lg:justify-end">
                  <a
                    href="/Register"
                    className="p-2 px-5 py-3 text-sm bg-blue-600 rounded-full m-2 icon"
                    style={{ letterSpacing: "1px" }}
                  >
                    <span className="text-white">Create an Account</span>
                  </a>
                  <a
                    href="/internship"
                    className="p-2 px-5  py-3 text-sm bg-transparent border border-blue-600  rounded-full m-2 icon"
                  >
                    <span className="text-blue-600 ">Sign In</span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
