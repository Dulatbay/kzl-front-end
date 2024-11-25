import React from 'react';
import {Card} from "antd";
import {Link} from "@/i18n/routing";


const spheres = [
    {
        title: "Python",
        description:
            "Python — универсальный язык программирования, используемый для веб-разработки, анализа данных, машинного обучения и автоматизации.",
        image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1",
    },
    {
        title: "Java",
        description:
            "Java — популярный язык программирования, широко применяемый в разработке корпоративных приложений, Android-программ и облачных решений.",
        image: "https://ultravds.com/wp-content/uploads/2023/10/756533742439601.jpg",
    },
    {
        title: "HTML/CSS",
        description:
            "HTML и CSS — основа веб-разработки, обеспечивающая структуру и стиль для создания современных и адаптивных сайтов.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS08U4K4dK-z4AIcetiSJIQBA4nTvLGgA_3A&s",
    },
];

const Page = () => {
    return (
        <div className="min-h-screen py-10 px-5">
            <span className="text-gray-400 text-l font-bold text-center mb-10 w-full block">
              <Link href="/learn-specified">{`Back`}</Link>
            </span>
            <h1 className="text-3xl font-bold text-center mb-10">
                Explore IT on Kazakh Language
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {spheres.map((sphere, index) => (
                    <div
                        className="hover:scale-105 transition-all duration-500" key={index}>
                        <Card
                            key={index}
                            hoverable
                            bordered={false}
                            cover={<img alt={sphere.title} src={sphere.image} className="h-60 object-cover "/>}
                            style={{
                                height: 400
                            }}

                        >
                            <h2 className="text-xl font-semibold">{sphere.title}</h2>
                            <p className="text-gray-400 mt-2">{sphere.description}</p>
                        </Card>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Page;