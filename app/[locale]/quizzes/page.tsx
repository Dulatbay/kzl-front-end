'use client';

import {useState} from 'react';
import {Dropdown, Button, Input, Card, Space, Progress, Col, Row, ConfigProvider, Tag} from 'antd';
import {CloseOutlined, RollbackOutlined, SearchOutlined} from '@ant-design/icons';
import {darkTheme} from "@/app/theme";
import CustomTag from "@/app/[locale]/components/Tag";
import {useTranslations} from "next-intl";

const rows = [
    {
        solved: true,
        id: 1,
        title: 'Зат есімдер',
        progress: 70.6,
        difficulty: 'easy',
        link: '/1',
        questionsAmount: 25,
        image: '/main-page/1.jpg',
    },
    {
        solved: false,
        id: 2,
        title: 'Шылаулар',
        progress: 32.5,
        difficulty: 'hard',
        link: '/2',
        questionsAmount: 21,
        image: '/main-page/1.jpg',
    },
    {
        solved: false,
        id: 3,
        title: 'Сын есім',
        progress: 66.5,
        difficulty: 'medium',
        link: '/3',
        questionsAmount: 12,
        image: '/main-page/1.jpg',
    },
];

export default function Quizzes() {
    const t = useTranslations('quizzes');
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

    const dropdownOptions = {
        topics: ['Зат есім', 'Сын есім'],
        difficulty: [t('easy'), t('medium'), t('hard')],
        status: [t('solved'), t('not_solved')],
    };

    function toggleTag(tag: string) {
        setActiveTags(activeTags.includes(tag)
            ? activeTags.filter((t) => t !== tag)
            : [...activeTags, tag]);
    }

    function pickRandomQuiz() {
        const randomIndex = Math.floor(Math.random() * rows.length);
        setSelectedQuiz(rows[randomIndex].id);
    }

    return (
        <div className="mt-10 w-full max-w-[1200px] mx-auto flex flex-col gap-6 px-8">
            <h1 className="text-4xl">{t('title')}</h1>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#5348F2',
                    colorTextPlaceholder: 'gray',
                },
            }}>
                <Space wrap align="center" className="w-full justify-between">
                    <Space wrap>
                        {Object.entries(dropdownOptions).map(([key, options]) => (
                            <Dropdown
                                key={key}
                                menu={{
                                    items: options.map((option) => ({
                                        key: option,
                                        label: (
                                            <div onClick={() => toggleTag(option)}>
                                                {option}
                                            </div>
                                        ),
                                    })),
                                }}
                            >
                                <Button type={"default"} style={{
                                    border: 'solid 1px',
                                    borderColor: '#535353'
                                }}>{t(key)}</Button>
                            </Dropdown>
                        ))}
                        <Input
                            placeholder={t('search_placeholder')}
                            style={{
                                border: 'solid 1px',
                                borderColor: '#535353',
                            }}
                            prefix={<SearchOutlined/>}
                            className="w-80"
                        />
                    </Space>
                    <Button type="primary" onClick={pickRandomQuiz} icon={<RollbackOutlined/>}>
                        {t('pick_random')}
                    </Button>
                </Space>
                <Space wrap className="w-full">
                    {activeTags.map((tag) => (
                        <CustomTag
                            key={tag}
                            onClose={() => toggleTag(tag)}
                        >
                            {tag}
                        </CustomTag>
                    ))}
                </Space>
            </ConfigProvider>

            <Row gutter={[16, 16]} className="w-full">
                {rows.map((row) => {
                    const isSelected = selectedQuiz === row.id;
                    let colorClass = '';
                    switch (row.difficulty) {
                        case 'easy':
                            colorClass = 'green';
                            break;
                        case 'medium':
                            colorClass = 'yellow';
                            break;
                        case 'hard':
                            colorClass = 'red';
                            break;
                    }

                    return (
                        <Col xs={24} sm={12} md={8} key={row.id}>
                            <Card
                                hoverable
                                className={isSelected ? 'border-2 border-blue-500' : ''}
                                cover={
                                    <img
                                        alt={row.title}
                                        src={row.image}
                                        className="object-cover h-48 w-full"
                                    />
                                }
                                actions={[
                                    <span>
                                        <a
                                            href={`/quizzes/${row.link}/preview`}
                                            style={{color: darkTheme.token?.colorPrimary, fontWeight: 'bold'}}
                                        >
                                            {t('preview')}
                                        </a>
                                    </span>,
                                ]}
                                bordered={false}
                            >
                                <Card.Meta
                                    title={row.title}
                                    description={<span className={'text-gray-400'}>{t('questions', {count: row.questionsAmount})}</span>}
                                />
                                <div className="mt-4">
                                    <Progress
                                        percent={row.progress}
                                        status="active"
                                        strokeColor={colorClass}
                                    />
                                    <div className="flex justify-between items-center mt-2">
                                        <span className={`text-${colorClass}-500`}>
                                            {t(row.difficulty)}
                                        </span>
                                        {row.solved && <Tag color="green">{t('solved')}</Tag>}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}