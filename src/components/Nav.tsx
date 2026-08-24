import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Menu, X } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);

  const Icon = open ? X : Menu;

  return (
    <nav className="px-8 py-8 lg:px-0">
      <div className="mx-auto flex max-w-280 items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Manage Logo" />
        {/* Desktop */}
        <div className="hidden lg:flex flex-1 items-center">
  {/* NavegaÃ§Ã£o */}
  <ul className="flex flex-1 justify-center items-center gap-8 text-[14px] font-medium">
    <li className="cursor-pointer hover:text-gray-400 transition-colors">
      Pricing
    </li>

    <li className="cursor-pointer hover:text-gray-400 transition-colors">
      Product
    </li>

    <li className="cursor-pointer hover:text-gray-400 transition-colors">
      About Us
    </li>

    <li className="cursor-pointer hover:text-gray-400 transition-colors">
      Careers
    </li>

    <li className="cursor-pointer hover:text-gray-400 transition-colors">
      Community
    </li>
  </ul>

  {/* BotÃ£o */}
  <button
    className="
      cursor-pointer
      rounded-full
      bg-[#F3613C]
      px-8
      py-3
      text-white
      font-semibold
      shadow-lg
      transition
      hover:opacity-80
    "
  >
    Get Started
  </button>
</div>
        
        {/* Mobile */}
        <div className="lg:hidden">
          <Icon onClick={() => setOpen((prev) => !prev)} className="cursor-pointer"/>
          {open && (
            <>
              <div className="fixed inset-0 z-10 bg-linear-to-b from-transparent to-black/70" onClick={() => setOpen(false)}/>
              <div
                style={{
                    position: "fixed",
                    top: "90px",
                    left: "32px",
                    right: "32px",
                }}
                className="z-20 rounded-md bg-white p-6 text-center shadow-xl">
                <ul className="space-y-8 font-semibold">
                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Pricing
                  </li>
                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Product
                  </li>
                  <li className="cursor-pointer hover:text-[#F3613C]">
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Careers
                  </li>
                  <li className="cursor-pointer hover:text-[#F3613C]">
                    Community
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;