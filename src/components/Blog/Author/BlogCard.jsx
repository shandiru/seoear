// BlogCards.jsx
import React from "react";
import { Link } from "react-router-dom";

const blogData = [
    {
        id: "sustainable-home",
        title: "How to keep a conservatory cool",
        description:
            "There are plenty of smart, stylish ways to keep your conservatory cool without compromising on design.",
        image:
            "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-1.webp",
        link: "#",
    },
    {
         id: "sustainable-car",
        title: "Parisian interior design",
        description:
            "French interior design blends timeless elegance with a touch of modern glamour. Here's how to bring this classic yet contemporary trend into your home.",
        image:
            "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-2.webp",
        link: "#",
    },
    {
        id: "sustainable-home",
        title: "Day & Night blinds buying guide",
        description:
            "In our handy buying guide, we'll cover everything from what they are to how they work.",
        image:
            "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-3.webp",
        link: "#",
    },
        {
        id: "sustainable-home",
        title: "How to keep a conservatory cool",
        description:
            "There are plenty of smart, stylish ways to keep your conservatory cool without compromising on design.",
        image:
            "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-1.webp",
        link: "#",
    },
    {
        id: "sustainable-home",
        title: "Parisian interior design",
        description:
            "French interior design blends timeless elegance with a touch of modern glamour. Here's how to bring this classic yet contemporary trend into your home.",
        image:
            "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-2.webp",
        link: "#",
    },
    {
        id: "sustainable-home",
        title: "Day & Night blinds buying guide",
        description:
            "In our handy buying guide, we'll cover everything from what they are to how they work.",
        image:
            "https://cdn.prod.website-files.com/6758025a9c7dc8ef4a257c85/677777d6920e7eb04090bf7a_homev2-work-card-image-3.webp",
        link: "#",
    },
];

const BlogCards = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogData.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                            <Link
                                to={`/blog/${blog.id}`}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6 border-[#43AA8B] text-[#43AA8B] hover:bg-[#43AA8B] hover:text-white"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCards;
