import React, { useState, useRef, useEffect } from 'react';
import { blogs } from './blogList';

const BlogArchive = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all categories");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);
  
  const postsPerPage = 6;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    "View all categories",
    "Accessible travel",
    "Driving with adaptations",
    "Lifestyle",
    "News",
    "Press"
  ];

  const filteredBlogs = selectedCategory === "View all categories"
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* CUSTOM GREEN DROPDOWN */}
        <div className="flex flex-col md:flex-row md:items-center justify-end mb-10 gap-4">
          <label className="text-sm font-medium text-gray-700">Select a category:</label>
          
          <div className="relative w-full md:w-64" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-[#43AA8B] focus:border-[#43AA8B] sm:text-sm"
            >
              <span className="block truncate">{selectedCategory}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={`cursor-pointer select-none relative py-2 pl-3 pr-9 transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-[#43AA8B] text-white' // Selected item is green
                        : 'text-gray-900 hover:bg-[#43AA8B] hover:text-white' // Hover is green
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                      setIsOpen(false);
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((blog) => (
            <article key={blog.id} className="group flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-gray-200">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold uppercase text-gray-500 mb-2">{blog.category}</span>
                <h3 className="text-xl font-bold mb-3 text-[#43AA8B]">{blog.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">{blog.excerpt}</p>
                <div className="mt-auto">
                  <a href={blog.url} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6 border-[#43AA8B] text-[#43AA8B] hover:bg-[#43AA8B] hover:text-white">
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-16 flex justify-center">
            <ul className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <li key={number}>
                  <button
                    onClick={() => { setCurrentPage(number); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-10 h-10 flex items-center justify-center rounded-md font-bold transition-all ${
                      currentPage === number ? "bg-[#43AA8B] text-white" : "text-gray-600 hover:bg-[#43AA8B]/10 hover:text-[#43AA8B]"
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogArchive;