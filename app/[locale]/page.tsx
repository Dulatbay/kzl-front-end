'use client';

import {Button} from 'antd';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import FeatureSection from "@/app/[locale]/components/FeatureSection";
import {Link} from "@/i18n/routing";

export default function Home() {
    const t = useTranslations('home');
    const [isNewUser, setIsNewUser] = useState(!(localStorage.getItem('userVisited')));

    useEffect(() => {
        setIsNewUser(!(localStorage.getItem('userVisited')));
    }, []);

    const sections = [
        {
            title: t('sections.title1'),
            description: t('sections.description1'),
            imageUrl: 'main-page/1.jpg',
        },
        {
            title: t('sections.title2'),
            description: t('sections.description2'),
            imageUrl: 'https://sputnik.kz/img/07e7/06/1a/36336614_0:0:600:338_1920x0_80_0_0_f3ccf0259fd789ad67e34ca355b5849a.jpg',
        },
        {
            title: t('sections.title3'),
            description: t('sections.description3'),
            imageUrl: 'https://sputnik.kz/img/07e7/06/1a/36336614_0:0:600:338_1920x0_80_0_0_f3ccf0259fd789ad67e34ca355b5849a.jpg',
        },
        {
            title: t('sections.title4'),
            description: t('sections.description4'),
            imageUrl: 'main-page/4.jpg',
        },
        {
            title: t('sections.title5'),
            description: t('sections.description5'),
            imageUrl: 'main-page/5.jpg',
        },
        {
            title: t('sections.title6'),
            description: t('sections.description6'),
            imageUrl: 'https://sputnik.kz/img/07e7/06/1a/36336614_0:0:600:338_1920x0_80_0_0_f3ccf0259fd789ad67e34ca355b5849a.jpg',
        },
        {
            title: t('sections.title7'),
            description: t('sections.description7'),
            imageUrl: 'https://sputnik.kz/img/07e7/06/1a/36336614_0:0:600:338_1920x0_80_0_0_f3ccf0259fd789ad67e34ca355b5849a.jpg',
        },
        {
            title: t('sections.title8'),
            description: t('sections.description8'),
            imageUrl: 'https://sputnik.kz/img/07e7/06/1a/36336614_0:0:600:338_1920x0_80_0_0_f3ccf0259fd789ad67e34ca355b5849a.jpg',
        },
        {
            title: t('sections.title9'),
            description: t('sections.description9'),
            imageUrl: 'main-page/9.jpg',
        },
    ];

    return (
        <div className="h-screen">
            {isNewUser ? (
                <motion.div
                    className="flex flex-col justify-center items-center text-center h-full w-full"
                    style={{
                        backgroundImage: 'url(./Махамбет.jpeg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <h1 className="text-4xl font-bold mb-6 text-white">{t('new_user_title')}</h1>
                    <Link href="/test">
                        <Button type="primary"
                                className="bg-white text-4xl w-80 h-20 text-blue-600 py-2 px-4 rounded font-bold"
                                size={'large'}>
                            {t('new_user_button')}
                        </Button>
                    </Link>
                </motion.div>
            ) : (
                <div className="h-full w-full">
                    <motion.div
                        className="text-center h-1/2 bg-red-50"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./Махамбет.jpeg)',
                            backgroundPosition: 'top',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <header className="relative w-full h-full flex items-center justify-center">
                            <h1 className="text-4xl font-bold text-white">
                                {t('header_title')}
                            </h1>
                        </header>
                    </motion.div>

                    {sections.map((section, index) => (
                        <FeatureSection
                            isImageLeft={index % 2 === 1}
                            key={index}
                            title={section.title}
                            description={section.description}
                            imageUrl={section.imageUrl}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
