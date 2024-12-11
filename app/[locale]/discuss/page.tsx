'use client'

import { useState } from "react";
import { NextPage } from "next";

interface Post {
    id: number;
    image: string;
    description: string;
    likes: number;
    comments: string[];
}

const Page: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            image: "/main-page/1.jpg",
            description: "Қазақ тіліндегі терминологияның қалыптасу тарихы туралы қызықты мәліметтер.",
            likes: 15,
            comments: [
                "Мәтін өте пайдалы!",
                "Терминдерді дамыту аса маңызды."
            ]
        },
        {
            id: 2,
            image: "/main-page/4.jpg",
            description: "Қазақ тіліндегі дыбыстық жүйенің ерекшеліктері мен олардың басқа түркі тілдерінен айырмашылығы.",
            likes: 20,
            comments: [
                "Бұл тақырып әрқашан қызықтырады!",
                "Дыбыстардың шығу тегі туралы көбірек білгім келеді."
            ]
        },
        {
            id: 3,
            image: "/main-page/5.jpg",
            description: "Қазақ тілін компьютерлік өңдеудегі жаңа әдістер: морфологиялық талдау және нейрондық желілер.",
            likes: 25,
            comments: [
                "Технология мен тілдің тоғысуы таңқалдырады!",
                "Мақаланы қайдан оқуға болады?"
            ]
        },
        {
            id: 4,
            image: "/main-page/9.jpg",
            description: "Қазақ жазуының латын графикасына көшуіндегі ғылыми талдаулар мен болашағы.",
            likes: 30,
            comments: [
                "Көшу процесі туралы көбірек білгім келеді.",
                "Бұл үлкен тарихи қадам!"
            ]
        },
        {
            id: 5,
            image: "/learn/1.jpg",
            description: "Қазақ әдебиетінің заманауи кезеңдегі ғылыми зерттеулері мен бағыттары.",
            likes: 18,
            comments: [
                "Әдебиет арқылы тілді танимыз!",
                "Зерттеу нәтижелері қандай болды?"
            ]
        }
    ]);


    const handleLike = (id: number) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id ? { ...post, likes: post.likes + 1 } : post
            )
        );
    };

    const handleComment = (id: number, comment: string) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? { ...post, comments: [...post.comments, comment] }
                    : post
            )
        );
    };

    return (
        <div className="p-6 max-w-[600px] mx-auto flex flex-col gap-6 px-8">
            <h1 className="text-3xl font-bold text-center mb-6">Forumo</h1>
            <div className="space-y-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#282828] rounded-lg shadow-md p-4"
                    >
                        <img
                            src={post.image}
                            alt="Post Image"
                            className="w-full object-cover rounded-t-lg"
                        />
                        <div className="mt-4">
                            <p className="">{post.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="flex items-center text-blue-500 hover:underline"
                                    onClick={() => handleLike(post.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.7 9.3c1.7-1.7 1.7-4.6 0-6.3-1.7-1.7-4.6-1.7-6.3 0-1.7 1.7-1.7 4.6 0 6.3L12 14.1l2.7-4.8z"
                                        />
                                    </svg>
                                    {post.likes} Likes
                                </button>
                                <span className="text-gray-500">
                  {post.comments.length} Comments
                </span>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2 text-gray-600">Comments</h3>
                                <ul className="space-y-1">
                                    {post.comments.map((comment, index) => (
                                        <li key={index} className="border-b pb-2">
                                            {comment}
                                        </li>
                                    ))}
                                </ul>
                                <form
                                    className="mt-4 flex items-center space-x-2"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const commentInput = (e.target as any).elements.comment;
                                        const newComment = commentInput.value;
                                        if (newComment) {
                                            handleComment(post.id, newComment);
                                            commentInput.value = "";
                                        }
                                    }}
                                >
                                    <input
                                        type="text"
                                        name="comment"
                                        placeholder="Write a comment..."
                                        className="flex-grow border rounded px-2 py-1 text-black"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                                    >
                                        Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
