'use client';

import {Button} from 'antd';
import {useRouter} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {Link} from "@/i18n/routing";

export default function LearnPage() {
    const t = useTranslations('learn');

    return (
        <>
            <Head t={t}/>
            <Modules t={t}/>
        </>
    );
}

function Head({t}: { t: any }) {
    let imgs = '/learn/1.jpg';
    return (
        <>
            <div className="bg-[#252b32] h-80 flex justify-center items-center">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-2 items-center">
                        <svg width="129" height="129" viewBox="0 0 129 129" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.0938 88.6875V36.2812..."
                                fill="#5046E5"
                            />
                        </svg>
                        <h1 className="text-xl sm:text-3xl text-nowrap">
                            <strong>{t('head.title')}</strong>
                        </h1>
                    </div>
                    <h4 className="text-base">{t('head.description')}</h4>
                </div>
            </div>
            <div className="h-80 w-full flex justify-center items-center relative">
                <div className="h-20 w-full bg-[#252b32] absolute top-0 -z-10"></div>
                <Link
                    href="#"
                    className="w-[480px] aspect-video relative flex flex-col justify-between p-6 cursor-pointer"
                >
                    <img src={imgs} className="w-full h-full rounded-3xl inset-0 brightness-[40%] absolute -z-10"/>
                    <h3 className="text-yellow-200 text-2xl ml-auto">56%</h3>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Сан есімдер</h2>
                        <h3 className="text-sm">{t('modules.header')}</h3>
                    </div>
                </Link>
            </div>
        </>
    );
}

function Modules({t}: { t: any }) {
    return (
        <div className="flex flex-col w-[900px] mx-auto gap-4">
            <h2 className="text-2xl">{t('modules.header')}</h2>
            <div className="flex flex-col gap-10">
                {modules.map((modul, i) => {
                    let difficultyArray = new Array(modul.difficulty).fill(false);
                    return (
                        <div
                            key={`module${i}`}
                            className="relative w-full aspect-video flex flex-col justify-end gap-2 p-8"
                        >
                            <img
                                src={modul.img}
                                className="w-full h-full rounded-3xl inset-0 brightness-[40%] absolute -z-10"
                            />
                            <h2 className="text-xl font-bold">{modul.topic}</h2>
                            <p className="text-base text-wrap">{modul.text}</p>
                            <div className="flex gap-3">
                                <div className="flex gap-2 items-center">
                                    <QuestionsSVG/> {t('modules.questions', {count: modul.questionsNumber})}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <ClockSVG/> {t('modules.duration', {hours: modul.duration})}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <UserSVG/> {t('modules.users', {count: modul.usersNumber})}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    {t('modules.difficulty')}{' '}
                                    {difficultyArray.map((_, index) => (
                                        <LightningSVG key={`LightningSVG${index}`}/>
                                    ))}
                                </div>
                                <Button type={'primary'}>
                                    <Link
                                        href={'/learn/1'}
                                    >
                                        {t('modules.start')}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    )
                        ;
                })}
            </div>
        </div>
    );
}


const modules = [
    {
        "topic": "Бастауыш деңгей",
        "text": "Бұл курста сіз қазақ тілінің негіздерін меңгересіз. Әліпбиден, дыбыстардан және сөздерді буынға бөлуден бастаймыз. Содан кейін қарапайым сөздерді, сәлемдесу мен қоштасу формаларын үйреніп, өзіңізді таныстыруды меңгересіз. Сан есімдермен танысып, 1-ден 100-ге дейінгі сандарды, жылдар мен ғасырларды айтуға үйренесіз. Отбасы тақырыбында отбасы мүшелерінің атауларын және туыстық қатынастарды білесіз. Соңында зат есімдерді, олардың көпше түрін және заттардың сипаттамасын үйренесіз. Бұл курс қазақ тілінде еркін сөйлеудің негізін қалыптастырады.",
        "questionsNumber": 123,
        "duration": "14 hours",
        "usersNumber": "55.5K",
        "difficulty": 3,
        "img": "/learn/11.webp"
    },
    {
        "topic": "Бастауыш деңгей",
        "text": "Бұл курста сіз қазақ тілінің негіздерін меңгересіз. Әліпбиден, дыбыстардан және сөздерді буынға бөлуден бастаймыз. Содан кейін қарапайым сөздерді, сәлемдесу мен қоштасу формаларын үйреніп, өзіңізді таныстыруды меңгересіз. Сан есімдермен танысып, 1-ден 100-ге дейінгі сандарды, жылдар мен ғасырларды айтуға үйренесіз. Отбасы тақырыбында отбасы мүшелерінің атауларын және туыстық қатынастарды білесіз. Соңында зат есімдерді, олардың көпше түрін және заттардың сипаттамасын үйренесіз. Бұл курс қазақ тілінде еркін сөйлеудің негізін қалыптастырады.",
        "questionsNumber": 123,
        "duration": "14 hours",
        "usersNumber": "55.5K",
        "difficulty": 3,
        "img": "/learn/11.webp"
    },
    {
        "topic": "Бастауыш деңгей",
        "text": "Бұл курста сіз қазақ тілінің негіздерін меңгересіз. Әліпбиден, дыбыстардан және сөздерді буынға бөлуден бастаймыз. Содан кейін қарапайым сөздерді, сәлемдесу мен қоштасу формаларын үйреніп, өзіңізді таныстыруды меңгересіз. Сан есімдермен танысып, 1-ден 100-ге дейінгі сандарды, жылдар мен ғасырларды айтуға үйренесіз. Отбасы тақырыбында отбасы мүшелерінің атауларын және туыстық қатынастарды білесіз. Соңында зат есімдерді, олардың көпше түрін және заттардың сипаттамасын үйренесіз. Бұл курс қазақ тілінде еркін сөйлеудің негізін қалыптастырады.",
        "questionsNumber": 123,
        "duration": "14 hours",
        "usersNumber": "55.5K",
        "difficulty": 3,
        "img": "/learn/11.webp"
    }
]


function LightningSVG() {
    return (
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.08336 16.75H3.16669L4.08336 10.3333H0.875023C0.343356 10.3333 0.352523 10.04 0.526689 9.72833C0.700856 9.41667 0.572523 9.655 0.590856 9.61833C1.77336 7.52833 3.55169 4.41167 5.91669 0.25H6.83336L5.91669 6.66667H9.12502C9.57419 6.66667 9.63836 6.96917 9.55585 7.13417L9.49169 7.27167C5.88002 13.5875 4.08336 16.75 4.08336 16.75Z"
                fill="#DADE1B"/>
        </svg>
    )
}

function QuestionsSVG() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M13.25 8.875H19.5V6.375H13.25V8.875ZM13.25 17.625H19.5V15.125H13.25V17.625ZM20.75 23.25H3.25C1.875 23.25 0.75 22.125 0.75 20.75V3.25C0.75 1.875 1.875 0.75 3.25 0.75H20.75C22.125 0.75 23.25 1.875 23.25 3.25V20.75C23.25 22.125 22.125 23.25 20.75 23.25ZM4.5 10.75H10.75V4.5H4.5V10.75ZM5.75 5.75H9.5V9.5H5.75V5.75ZM4.5 19.5H10.75V13.25H4.5V19.5ZM5.75 14.5H9.5V18.25H5.75V14.5Z"
                  fill="#9632A6"/>
        </svg>
    )
}

function ClockSVG() {
    return (
        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.75 0.25H8.25V2.75H15.75V0.25ZM10.75 16.5H13.25V9H10.75V16.5ZM20.7875 8.2375L22.5625 6.4625C22.025 5.825 21.4375 5.225 20.8 4.7L19.025 6.475C17.0875 4.925 14.65 4 12 4C5.7875 4 0.75 9.0375 0.75 15.25C0.75 21.4625 5.775 26.5 12 26.5C18.225 26.5 23.25 21.4625 23.25 15.25C23.25 12.6 22.325 10.1625 20.7875 8.2375ZM12 24C7.1625 24 3.25 20.0875 3.25 15.25C3.25 10.4125 7.1625 6.5 12 6.5C16.8375 6.5 20.75 10.4125 20.75 15.25C20.75 20.0875 16.8375 24 12 24Z"
                fill="#00FFF0" fillOpacity="0.48"/>
        </svg>
    )
}

function UserSVG() {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM13 4.25C15.075 4.25 16.75 5.925 16.75 8C16.75 10.075 15.075 11.75 13 11.75C10.925 11.75 9.25 10.075 9.25 8C9.25 5.925 10.925 4.25 13 4.25ZM13 22C9.875 22 7.1125 20.4 5.5 17.975C5.5375 15.4875 10.5 14.125 13 14.125C15.4875 14.125 20.4625 15.4875 20.5 17.975C18.8875 20.4 16.125 22 13 22Z"
                fill="#91898C"/>
        </svg>
    )
}