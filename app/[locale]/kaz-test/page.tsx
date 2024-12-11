'use client'

import { useState } from "react";
import { NextPage } from "next";

interface Section {
    id: number;
    title: string;
    description: string;
    link: string;
}

const Page: NextPage = () => {
    const [sections] = useState<Section[]>([
        {
            id: 1,
            title: "Grammar Practice",
            description: "Learn and practice Kazakh grammar with structured lessons and exercises.",
            link: "/grammar-practice",
        },
        {
            id: 2,
            title: "Vocabulary Builder",
            description: "Expand your Kazakh vocabulary with key words and phrases.",
            link: "/vocabulary-builder",
        },
        {
            id: 3,
            title: "Listening Practice",
            description: "Improve your listening skills with audio exercises and comprehension tasks.",
            link: "/listening-practice",
        },
        {
            id: 4,
            title: "Practice Tests",
            description: "Simulate the KazTest with realistic practice tests.",
            link: "/practice-tests",
        },
    ]);

    return (
        <div className="p-6 max-w-[1200px] m-auto">
            <h1 className="text-3xl font-bold text-center mb-6">KazTest Preparation</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
                {sections.map((section) => (
                    <div key={section.id} className="bg-[#282828] rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                        <p className="text-gray-400 mb-4">{section.description}</p>
                        <a
                            href={section.link}
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Start {section.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
