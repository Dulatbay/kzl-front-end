'use client';

import {useState} from 'react';
import {Button, Radio} from 'antd';
import {useRouter} from 'next/navigation';
import {useTranslations} from 'next-intl';

const questions = [
    {
        question: "Қазақ тілінде зат есім дегеніміз не?",
        options: [
            "Заттың атауын білдіретін сөздер",
            "Қимылды білдіретін сөздер",
            "Сапаны білдіретін сөздер",
            "Сандық мағынаны білдіретін сөздер"
        ],
        correctAnswer: 0
    },
    {
        question: "Төмендегі сөздердің қайсысы етістік болып табылады?",
        options: [
            "Жүгіру",
            "Үлкен",
            "Үй",
            "Төрт"
        ],
        correctAnswer: 0
    },
    {
        question: "Қазақ тілінде қанша септік бар?",
        options: [
            "7",
            "6",
            "5",
            "8"
        ],
        correctAnswer: 0
    },
    {
        question: "Қай сөз септеулі сөзге жатады?",
        options: [
            "Соң",
            "Үй",
            "Жақсы",
            "Кітап"
        ],
        correctAnswer: 0
    },
    {
        question: "Сын есім дегеніміз не?",
        options: [
            "Заттың сынын, сапасын білдіретін сөздер",
            "Қимылды білдіретін сөздер",
            "Сандық ұғымды білдіретін сөздер",
            "Сөйлемнің құрылымын анықтайтын сөздер"
        ],
        correctAnswer: 0
    },
    {
        question: "Қазақ тілінде жалғаулар қандай қызмет атқарады?",
        options: [
            "Сөздерді байланыстыру үшін",
            "Сөздерді бөлу үшін",
            "Тыныс белгілерін анықтау үшін",
            "Сөйлемді аяқтау үшін"
        ],
        correctAnswer: 0
    },
    {
        question: "Қайсысы қазақ тіліндегі көмекші сөздерге жатады?",
        options: [
            "Бірақ",
            "Үлкен",
            "Терезе",
            "Он"
        ],
        correctAnswer: 0
    },
    {
        question: "Сан есім дегеніміз не?",
        options: [
            "Заттың санын, мөлшерін білдіретін сөздер",
            "Заттың атауын білдіретін сөздер",
            "Заттың қимылын білдіретін сөздер",
            "Заттың сынын білдіретін сөздер"
        ],
        correctAnswer: 0
    },
    {
        question: "Төмендегі сөйлемдердің қайсысында жалаң сөйлем бар?",
        options: [
            "Бала кітап оқиды.",
            "Жылы күнде адамдар көшеге шығады.",
            "Сен бүгін сабаққа бардың ба?",
            "Анау жерде үлкен үй тұр."
        ],
        correctAnswer: 0
    },
    {
        question: "Қазақ тілінде болымсыз етістік қалай жасалады?",
        options: [
            "«-ма», «-ме», «-ба», «-бе» жұрнақтары арқылы",
            "«-дық», «-дік» жалғаулары арқылы",
            "«-лар», «-лер» жалғаулары арқылы",
            "«-сы», «-сі» жұрнақтары арқылы"
        ],
        correctAnswer: 0
    }
];


export default function TestPage() {
    const t = useTranslations('test');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [isTestComplete, setIsTestComplete] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const router = useRouter();

    const handleNextQuestion = () => {
        // @ts-ignore
        setUserAnswers([...userAnswers, selectedOption]);
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            setIsTestComplete(true);
        }
    };

    const handleFinishTest = () => {
        localStorage.setItem('userVisited', 'true');
        router.push('/');
    };

    const getLevel = () => {
        if (score <= 2) return 'A1';
        if (score <= 4) return 'A2';
        if (score <= 6) return 'B1';
        return 'B2';
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            {isTestComplete ? (
                <div className="text-center w-full max-w-3xl">
                    <h1 className="text-3xl font-bold mb-6">{t('test_complete')}</h1>
                    <p className="mb-6">{t('your_result', {score, total: questions.length})}</p>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">{t('your_answers')}</h2>
                        {questions.map((question, index) => (
                            <div key={index} className="mb-4 p-4 border rounded-lg">
                                <h3 className="text-lg font-semibold">
                                    {t('question_title', {index: index + 1, question: question.question})}
                                </h3>
                                <p
                                    className={
                                        userAnswers[index] === question.correctAnswer
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                    }
                                >
                                    {t('your_answer')}: {question.options[userAnswers[index]]}
                                </p>
                                {userAnswers[index] !== question.correctAnswer && (
                                    <p className="text-green-600">
                                        {t('correct_answer')}: {question.options[question.correctAnswer]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="mb-6">{t('your_level', {level: getLevel()})}</p>
                    <Button
                        type="primary"
                        onClick={handleFinishTest}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        {t('finish')}
                    </Button>
                </div>
            ) : (
                <div className="w-full max-w-md h-20">
                    <h1 className="text-xl font-bold mb-2">{questions[currentQuestionIndex].question}</h1>
                    <Radio.Group
                        onChange={(e) => setSelectedOption(e.target.value)}
                        value={selectedOption}
                    >
                        <div className="flex flex-col">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <div className="block mt-2" key={index}>
                                    <Radio key={index} value={index} className="block">
                                        {option}
                                    </Radio>
                                </div>
                            ))}
                        </div>
                    </Radio.Group>
                    <Button
                        type="primary"
                        onClick={handleNextQuestion}
                        disabled={selectedOption === null}
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-6"
                        block
                    >
                        {currentQuestionIndex === questions.length - 1 ? t('finish') : t('next')}
                    </Button>
                </div>
            )}
        </div>
    );
}
