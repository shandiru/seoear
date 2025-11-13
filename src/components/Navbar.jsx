"use client";
import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpen(false);
    setLocationOpen(false);
  }, [location]);

  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ✅ Navigation links (with trailing slash)
  const links = [
    { label: "Why Us", href: "/#whyus" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Team", href: "/#team" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQ", href: "/#faq" },
    { label: "Symptoms", href: "/symptoms/" },
    { label: "Micro Suction", href: "/earwaxremovalpage/" },
    { label: "Contact", href: "/#contact" },
  ];

  // ✅ Updated Service Area Locations (with trailing slash)
  const locations = [
    { name: "Nottingham", path: "/areas-we-cover/ear-wax-removal-nottingham/" },
    { name: "Derby", path: "/areas-we-cover/ear-wax-removal-derby/" },
    { name: "Leicester", path: "/areas-we-cover/ear-wax-removal-leicester/" },
    { name: "Lincoln", path: "/areas-we-cover/ear-wax-removal-lincoln/" },
    { name: "Grantham", path: "/areas-we-cover/ear-wax-removal-grantham/" },
    { name: "Stafford", path: "/areas-we-cover/ear-wax-removal-stafford/" },
    { name: "Tamworth", path: "/areas-we-cover/ear-wax-removal-tamworth/" },
    { name: "Burton", path: "/areas-we-cover/ear-wax-removal-burton/" },
    { name: "Chesterfield", path: "/areas-we-cover/ear-wax-removal-chesterfield/" },
    { name: "Nuneaton", path: "/areas-we-cover/ear-wax-removal-nuneaton/" },
    { name: "South Sheffield", path: "/areas-we-cover/ear-wax-removal-southsheffield/" },
    { name: "Worksop", path: "/areas-we-cover/ear-wax-removal-worksop/" },
    { name: "Loughborough", path: "/areas-we-cover/ear-wax-removal-loughborough/" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/LOGO2-removebg-preview.png"
              alt="EarWeGo Logo"
              className="h-16 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {links.map((link) => (
              <HashLink
                key={link.label}
                to={link.href}
                scroll={enhancedScroll}
                className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base"
              >
                {link.label}
              </HashLink>
            ))}

            {/* ✅ Location Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocationOpen((prev) => !prev)}
                className="flex items-center gap-1 text-[#4B5563] hover:text-[#0D1525] font-medium text-base"
              >
                Location
                {locationOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {locationOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-md rounded-md py-2 z-50">
                  {locations.map((loc) => (
                    <Link
                      key={loc.name}
                      to={loc.path}
                      onClick={() => setLocationOpen(false)}
                      className="block px-4 py-2 text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525] transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ✅ Hidden SEO-only links */}
            <div style={{ display: "none" }}>
              {locations.map((loc) => (
                <a key={loc.name} href={loc.path}>
                  Earwax Removal {loc.name}
                </a>
              ))}
            </div>
          </nav>

          {/* ✅ Desktop Call Now */}
          <a
            href="tel:+448081371961"
            className="hidden lg:inline-flex items-center gap-2 rounded-md text-sm font-semibold shadow h-10 px-5 bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* ✅ Mobile Hamburger */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gray-800"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ✅ Mobile Drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fadeIn overflow-y-auto max-h-[80vh]">
            <nav className="flex flex-col space-y-1">
              {links.map((link) => (
                <HashLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  scroll={enhancedScroll}
                  className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525] transition-colors"
                >
                  {link.label}
                </HashLink>
              ))}

              {/* ✅ Mobile Location Dropdown */}
              <div className="px-3">
                <button
                  onClick={() => setLocationOpen(!locationOpen)}
                  className="w-full flex items-center justify-between py-2 text-base font-medium text-[#4B5563] hover:text-[#0D1525] transition-colors"
                >
                  Location
                  {locationOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {locationOpen && (
                  <div className="ml-4 mt-1 flex flex-col space-y-1">
                    {locations.map((loc) => (
                      <Link
                        key={loc.name}
                        to={loc.path}
                        onClick={() => {
                          setOpen(false);
                          setLocationOpen(false);
                        }}
                        className="block px-3 py-2 text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525] rounded-md transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ✅ Hidden SEO-only links for mobile */}
              <div style={{ display: "none" }}>
                {locations.map((loc) => (
                  <a key={loc.name} href={loc.path}>
                    Earwax Removal {loc.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* ✅ Mobile Call Button */}
            <a
              href="tel:+448081371961"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-semibold h-10 px-4 bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
