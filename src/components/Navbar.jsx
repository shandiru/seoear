import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setLocationOpen(false);
        setServicesOpen(false);
        setBlogOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpen(false);
    setLocationOpen(false);
    setServicesOpen(false);
    setBlogOpen(false);
  }, [location]);

  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Keep all your original link data
  const links = [
    { label: "Symptoms", href: "/symptoms/" },
    { label: "Micro Suction", href: "/earwaxremovalpage/" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/#contact" },
  ];

  const services = [
    { name: "Industrial Hearing", path: "/industrial" },
    { name: "Factories", path: "/services/factories" },
    { name: "Construction", path: "/services/construction" },
    { name: "Warehouses", path: "/services/warehouses" },
    { name: "Workshops", path: "/services/workshops" },
    { name: "Industrial Plants", path: "/services/industrial-plants" },
  ];

  const Blog = [
    { name: "micro-suction-ear-wax-removal", path: "/blog/micro-suction-ear-wax-removal" },
  ];

  const locations = [
    { name: "Nottingham", path: "/areas-we-cover/ear-wax-removal-nottingham/" },
    { name: "Derby", path: "/areas-we-cover/ear-wax-removal-derby/" },
    { name: "Leicester", path: "/areas-we-cover/ear-wax-removal-leicester/" },
    { name: "Lincoln", path: "/areas-we-cover/ear-wax-removal-lincoln/" },
    { name: "Grantham", path: "/areas-we-cover/ear-wax-removal-grantham/" },
    { name: "Lichfield", path: "/areas-we-cover/ear-wax-removal-lichfield/" },
    { name: "Tamworth", path: "/areas-we-cover/ear-wax-removal-tamworth/" },
    { name: "Burton", path: "/areas-we-cover/ear-wax-removal-burton/" },
    { name: "Chesterfield", path: "/areas-we-cover/ear-wax-removal-chesterfield/" },
    { name: "Nuneaton", path: "/areas-we-cover/ear-wax-removal-nuneaton/" },
    { name: "South Sheffield", path: "/areas-we-cover/ear-wax-removal-south-sheffield/" },
    { name: "Worksop", path: "/areas-we-cover/ear-wax-removal-worksop/" },
    { name: "Loughborough", path: "/areas-we-cover/ear-wax-removal-loughborough/" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/LOGO2-removebg-preview.png"
              alt="EarWeGo Logo"
              width="500"
              height="500"
              className="h-16 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation - UPDATED ORDER */}
          <nav className="hidden xl:flex space-x-8 items-center">
            {/* 1. Symptoms */}
            <HashLink to="/symptoms/" scroll={enhancedScroll} className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base">
              Symptoms
            </HashLink>

            {/* 2. Micro Suction */}
            <HashLink to="/earwaxremovalpage/" scroll={enhancedScroll} className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base">
              Micro Suction
            </HashLink>

            {/* 3. Location Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocationOpen((prev) => !prev)}
                className="flex items-center gap-1 text-[#4B5563] hover:text-[#0D1525] font-medium text-base"
              >
                Location
                {locationOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {locationOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-md rounded-md py-2 z-50 max-h-96 overflow-y-auto">
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

            {/* 4. Industrial Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-[#4B5563] hover:text-[#0D1525] font-medium text-base"
              >
                Industrial
                {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {servicesOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 shadow-md rounded-md py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Reviews */}
            <HashLink to="/reviews" scroll={enhancedScroll} className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base">
              Reviews
            </HashLink>

            {/* 6. Blogs */}
            <HashLink to="/blogs" scroll={enhancedScroll} className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base">
              Blogs
            </HashLink>

            {/* 7. Contact */}
            <HashLink to="/#contact" scroll={enhancedScroll} className="text-[#4B5563] hover:text-[#0D1525] transition-colors font-medium text-base">
              Contact
            </HashLink>

            {/* KEEPING YOUR HIDDEN SEO LINKS EXACTLY AS THEY WERE */}
            <div style={{ display: "none" }}>
              {locations.map((loc) => (
                <a key={loc.name} href={loc.path}>Earwax Removal {loc.name}</a>
              ))}
              {services.map((service) => (
                <a key={service.name} href={service.path}>{service.name}</a>
              ))}
              {Blog.map((blogs) => (
                <a key={blogs.name} href={blogs.path}>{blogs.name}</a>
              ))}
            </div>
          </nav>

          {/* Desktop Call Now */}
          <a
            href="tel:+448081371961"
            className="hidden xl:inline-flex items-center gap-2 rounded-md text-sm font-semibold shadow h-10 px-5 bg-[#43AA8B] hover:bg-[#368a75] text-white transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 text-gray-800"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer - UPDATED ORDER */}
        {open && (
          <div className="xl:hidden border-t border-gray-200 py-4 animate-fadeIn overflow-y-auto max-h-[80vh]">
            <nav className="flex flex-col space-y-1">
              <HashLink to="/symptoms/" onClick={() => setOpen(false)} scroll={enhancedScroll} className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC]">Symptoms</HashLink>
              <HashLink to="/earwaxremovalpage/" onClick={() => setOpen(false)} scroll={enhancedScroll} className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC]">Micro Suction</HashLink>

              {/* Mobile Location */}
              <div className="px-3">
                <button onClick={() => setLocationOpen(!locationOpen)} className="w-full flex items-center justify-between py-2 text-base font-medium text-[#4B5563]">
                  Location {locationOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {locationOpen && (
                  <div className="ml-4 flex flex-col space-y-1">
                    {locations.map((loc) => (
                      <Link key={loc.name} to={loc.path} onClick={() => setOpen(false)} className="block px-3 py-2 text-[#4B5563] hover:bg-[#F8FAFC] rounded-md">{loc.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industrial */}
              <div className="px-3">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-2 text-base font-medium text-[#4B5563]">
                  Industrial {servicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col space-y-1">
                    {services.map((service) => (
                      <Link key={service.name} to={service.path} onClick={() => setOpen(false)} className="block px-3 py-2 text-[#4B5563] hover:bg-[#F8FAFC] rounded-md">{service.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              <HashLink to="/reviews" onClick={() => setOpen(false)} scroll={enhancedScroll} className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC]">Reviews</HashLink>
              <HashLink to="/blogs" onClick={() => setOpen(false)} scroll={enhancedScroll} className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC]">Blogs</HashLink>
              <HashLink to="/#contact" onClick={() => setOpen(false)} scroll={enhancedScroll} className="block rounded-md px-3 py-2 text-base font-medium text-[#4B5563] hover:bg-[#F8FAFC]">Contact</HashLink>
            </nav>

            <a href="tel:+448081371961" onClick={() => setOpen(false)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-semibold h-10 px-4 bg-[#43AA8B] text-white">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;