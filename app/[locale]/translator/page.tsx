'use client';

import React, {useState} from 'react';
import Search from "antd/lib/input/Search";
import {Button, ConfigProvider} from "antd";
import {darkTheme} from "@/app/theme";
import {useTranslations} from 'next-intl';

const Page = () => {
    const t = useTranslations('translate');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSearch = async (value: string) => {
        try {
            setIsLoading(true);
            setResult('');

            // Send request to server and handle streaming response
            const response = await fetch(`https://kzl-translator-back.vercel.app/translate?msg=${value}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.body) {
                throw new Error('No response body');
            }

            const jsonResponse = await response.json();

            const content = jsonResponse.content;

            if (content && Array.isArray(content) && content.length > 0) {
                const textValue = content[0].text.value.replace(/【[^】]*】/g, '');
                setResult(textValue);
            } else {
                setResult(t('result_not_found'));
                console.error('Content is not found or empty');
            }
        } catch (error) {
            console.error('Error:', error);
            setResult(t('error_message'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ConfigProvider theme={darkTheme}>
            <div className="max-w-[1200px] m-auto px-8">
                <div>
                    <h1 className="mt-16 text-center text-2xl font-bold">{t('title')}</h1>
                    <Search
                        className={'mt-8'}
                        placeholder={t('placeholder')}
                        enterButton={
                            <Button type="primary" size="large" loading={isLoading}>
                                {t('search_button')}
                            </Button>
                        }
                        size="large"
                        onSearch={onSearch}
                    />
                    <div className={'result mt-8 p-4 border rounded'}>
                        {result}
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Page;
