'use client'

import React from "react";
import {Button, Card, Progress, List, Badge, Tag, Typography} from "antd";
import {useTranslations} from "next-intl";

const {Title, Text} = Typography;

const data = {
    dailyMinutes: 120,
    averageStudyTime: 90,
    quizzesCompleted: 15,
    kazakhTopicsCompleted: 12,
    kazakhTopicsTotal: 23,
    userLevel: {
        level: "C1",
        official: true,
        testDate: "2024-08-15",
    },
};

const Profile = () => {
    const t = useTranslations('profile');
    const progress = Math.round(
        (data.kazakhTopicsCompleted / data.kazakhTopicsTotal) * 100
    );

    return (
        <div className="h-full py-8">
            <div className="bg-[#282828] rounded-lg shadow-xl pb-8">
                {/* Фон и аватар */}
                <div className="w-full h-[250px]">
                    <img
                        src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                        alt="Background"
                        className="w-full h-full rounded-tl-lg rounded-tr-lg"
                    />
                </div>
                <div className="flex flex-col items-center -mt-20">
                    <img
                        src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
                        alt="Avatar"
                        className="w-40 border-4 border-white rounded-full"
                    />
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-2xl text-white">Askhat Daurenbaev</p>
                        <span className="bg-blue-500 rounded-full p-1" title={t('verified')}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
                    </div>
                    <p className="text-gray-300">{t('job_title')}</p>
                    <p className="text-sm text-gray-500">{`${t('location')} - ${t('location_value')}`}</p>
                </div>

                <div className="flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                    <Button type="primary" size="large">
                        {t('share_profile')}
                    </Button>
                </div>
            </div>

            <div className="my-4 flex flex-col space-y-4">
                <div className="w-full flex flex-col">
                    <div className="flex-1 bg-[#282828] rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-white font-bold">{t('personal_info')}</h4>
                        <ul className="mt-2 text-gray-200">
                            <li className="flex border-y py-2">
                                <span className="font-bold w-56">{t('full_name')}:</span>
                                <span className="text-gray-400">Askhat Daurenbaev</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-56">{t('birthday')}:</span>
                                <span className="text-gray-400">8 Jul, 2005</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-56">{t('mobile')}:</span>
                                <span className="text-gray-400">8 (707) 1038 007</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-56">{t('email')}:</span>
                                <span className="text-gray-400">askhat228@example.com</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-56">{t('location')}:</span>
                                <span className="text-gray-400">{t('location_value')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card
                        title={<Text style={{color: "white"}}>{t('daily_activity')}</Text>}
                        className="bg-[#282828] rounded-lg shadow-xl"
                        bordered={false}
                    >
                        <List>
                            <List.Item>
                                <Text style={{color: "white"}}>{t('minutes_spent_daily')}:</Text>
                                <Badge count={data.dailyMinutes} style={{backgroundColor: "#52c41a"}}/>
                            </List.Item>
                            <List.Item>
                                <Text style={{color: "white"}}>{t('average_study_time')}:</Text>
                                <Badge count={data.averageStudyTime} style={{backgroundColor: "#1890ff"}}/>
                            </List.Item>
                            <List.Item>
                                <Text style={{color: "white"}}>{t('quizzes_completed')}:</Text>
                                <Badge count={data.quizzesCompleted} style={{backgroundColor: "#faad14"}}/>
                            </List.Item>
                        </List>
                    </Card>

                    <Card
                        title={<Text style={{color: "white"}}>{t('kazakh_topics_progress')}</Text>}
                        bordered={false}
                    >
                        <div>
                            <Text style={{color: "white"}}>
                                {t('completed_topics')}: {data.kazakhTopicsCompleted}/{data.kazakhTopicsTotal}
                            </Text>
                            <Progress
                                percent={progress}
                                status="active"
                                strokeColor="#1890ff"
                                trailColor="#444"
                            />
                        </div>

                        <div className={'mt-4'}>
                            <Text style={{color: "white"}}>
                                Python: {14}/{40}
                            </Text>
                            <Progress
                                percent={(14 / 40) * 100}
                                status="active"
                                strokeColor="#1890ff"
                                trailColor="#444"
                            />
                        </div>

                    </Card>
                </div>

                {/* Блок достижений */}
                <Card
                    title={<Text style={{color: "white"}}>{t('achievements')}</Text>}
                    bordered={false}
                >
                    <div>
                        <Text style={{color: "white", fontSize: "16px"}}>
                            {t('current_level')}: <Tag color="blue">{data.userLevel.level}</Tag>
                        </Text>
                        {data.userLevel.official && (
                            <div className={'mt-2'}>
                                <Text style={{color: "white", fontSize: "16px"}}>{t('official_certification')}</Text>
                                <Tag color="green">✔ {t('certified')}</Tag>
                                <Text type="secondary" style={{color: "#a0a0a0"}}>
                                    {t('test_date')}: {data.userLevel.testDate}
                                </Text>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
