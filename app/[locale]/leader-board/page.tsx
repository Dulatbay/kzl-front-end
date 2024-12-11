'use client'

import {useState} from "react";
import {NextPage} from "next";

interface Leader {
    id: number;
    name: string;
    avatar: string;
    questions: number;
    streak: number;
    score: number;
}

const Page: NextPage = () => {
    const [leaders] = useState<Leader[]>([
        {id: 1, name: "Dulatbay Akhan", avatar: "https://media.licdn.com/dms/image/v2/D4E03AQG22f9bYWsiwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725891674222?e=1739404800&v=beta&t=J-jaNa8ZbhnHlm7mQjMwlNNWsT5RBhM4qOHtTjYDKsM", questions: 1000, streak: 82, score: 100},
        {id: 2, name: "Yersin Kaldybek", avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGWbi_aclT9qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731337552388?e=1739404800&v=beta&t=DZ4rJQx_LwvsXDzqS4EoL9QVZkNI74blEjP7rRzhMpk", questions: 700, streak: 52, score: 75},
        {id: 3, name: "Sembek Aisana", avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEy6O_4vqAkMw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724561307389?e=1739404800&v=beta&t=_TJftAteh_-pdFjGZx39lu2jH6-oIefROzOnyqIZRac", questions: 500, streak: 42, score: 50},
        {id: 4, name: "Yerzhan Amangeldiev", avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEAamo6v6ee2A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728128673653?e=1739404800&v=beta&t=9BDn-ld8SLJIvi-47hol9Ex18lo5vsmpYZnld6099XI", questions: 300, streak: 22, score: 25},
        {id: 5, name: "Baurzhan Ulanulu", avatar: "https://media.licdn.com/dms/image/v2/D4E03AQELJVQhUesntw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727218034781?e=1739404800&v=beta&t=9GRFC0DI5xNZmRvKz7-Dcf0UWBM7cpaPjFqqY8ACItI", questions: 50, streak: 2, score: 8},
    ]);

    return (
        <div className="px-8 py-8 text-white min-h-screen max-w-[1200px] m-auto">
            <h1 className="text-3xl font-bold text-center mb-2 mt-4">Leader Board</h1>
            <p className="text-center text-gray-400 mb-4">
                Таблица лидеров по всему Казахстану. Узнай на каком ты месте и прокачивай свой ранг.
            </p>
            <div className="mx-auto">
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-left border-collapse">
                        <thead>
                        <tr className="border-b border-gray-700">
                            <th className="py-2">Rank</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Questions</th>
                            <th className="py-2 px-4">Streak</th>
                            <th className="py-2 px-4">Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaders.map((leader, index) => (
                            <tr key={leader.id}
                                className={`hover:bg-gray-800 ${index % 2 == 0 ? 'bg-[#282828] ' : ''}`}>
                                <td className="py-2 px-4 ">{index + 1}</td>
                                <td className="py-2 px-4 flex items-center">
                                    <img
                                        src={leader.avatar}
                                        alt="Avatar"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    {leader.name}
                                </td>
                                <td className="py-2 px-4">{leader.questions}</td>
                                <td className="py-2 px-4">{leader.streak} 🔥</td>
                                <td className="py-2 px-4">
                    <span
                        className={`font-bold ${
                            leader.score >= 75
                                ? "text-green-500"
                                : leader.score >= 50
                                    ? "text-yellow-500"
                                    : leader.score >= 25
                                        ? "text-orange-500"
                                        : "text-red-500"
                        }`}
                    >
                      {leader.score}%
                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-gray-500 mt-4">500K Users</p>
            </div>
        </div>
    );
};

export default Page;
