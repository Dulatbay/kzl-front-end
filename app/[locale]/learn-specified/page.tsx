'use client'

import React from "react";
import {Card} from "antd";
import {Link} from "@/i18n/routing";

const spheres = [
    {
        title: "IT",
        description:
            "Information technology is one of the fastest growing areas, including software development, network technologies and AI.",
        image: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    },
    {
        title: "Biology",
        description:
            "Biology is the study of living things, from cells to complex ecosystems, including genetics, ecology, and microbiology.",
        image: "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499316.jpg",
    },
    {
        title: "Math",
        description:
            "Mathematics is the language of science, the basis for calculations, analysis and modeling of complex systems.",
        image: "https://png.pngtree.com/background/20211215/original/pngtree-color-pen-doodle-education-math-formula-background-picture-image_1457815.jpg",
    },
];

const Page = () => {
    return (
        <div className="min-h-screen py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-10">
                Explore Different Fields
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {spheres.map((sphere, index) => (
                    <Link
                        href={'/learn-specified/1'}
                        className="hover:scale-105 transition-all duration-500" key={index}
                    >
                        <Card
                            key={index}
                            hoverable
                            bordered={false}
                            cover={<img alt={sphere.title} src={sphere.image} className="h-60 object-cover"/>}
                        >
                            <h2 className="text-xl font-semibold">{sphere.title}</h2>
                            <p className="text-gray-400 mt-2">{sphere.description}</p>
                        </Card>
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default Page;
