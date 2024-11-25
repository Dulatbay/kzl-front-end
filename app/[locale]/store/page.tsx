'use client';
import React from 'react';
import { Button, Card } from 'antd';
import { useTranslations } from 'next-intl';

const StorePage = () => {
    const t = useTranslations('store');

    return (
        <div className="min-h-screen text-white px-4 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-semibold mt-4">{t('title')}</h1>
                <p className="text-lg mt-2">{t('description')}</p>
                <div className="flex justify-center space-x-4 mt-6">
                    <Button type="primary" className="bg-orange-500 border-none hover:bg-orange-600">{t('buttons.redeem')}</Button>
                    <Button type="default" className="bg-gray-600 hover:bg-gray-700">{t('buttons.earn')}</Button>
                    <Button type="default" className="border-white hover:border-orange-500">{t('buttons.premium')}</Button>
                    <Button type="default" className="bg-gray-600 hover:bg-gray-700">{t('buttons.orders')}</Button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        style={{ borderColor: '#3c3c3c' }}
                        className="hover:scale-105 hover:shadow-l hover:shadow-gray-600 transition-all duration-500"
                        cover={<img alt={t(`products.${product.id}.title`)} src={product.image} className="h-60 object-cover" />}
                    >
                        <h3 className="text-xl font-semibold mb-2">{t(`products.${product.id}.title`)}</h3>
                        <p className="text-base mb-4">{t(`products.${product.id}.description`)}</p>
                        <div
                            className="text-right text-orange-500 font-semibold absolute right-0 bottom-0 mr-6 mb-4"
                        >
                            {t(`products.${product.id}.price`)} {t('products.price_suffix')}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

const products = [
    {
        id: 1,
        title: 'Hoodie EST.1465 Sky Blue',
        description: 'A comfortable sky blue hoodie with EST.1465 design.',
        price: 2200,
        image: 'https://test.qazaqrepublic.com/uploads/thumbs/fw23-web-makets-sweater-blue-4c50f57538-518e361d2626f964419164d3472e4858.jpeg',
    },
    {
        id: 2,
        title: 'Jeans KEÑ Navy',
        description: 'Stylish navy jeans with a relaxed fit.',
        price: 2300,
        image: 'https://test.qazaqrepublic.com/uploads/thumbs/fw23-web-makets-ken-dark-blue-d50e58b85c-df8261a6b32dc902a9ced2bb97788675.jpeg',
    },
    {
        id: 3,
        title: 'Velvet Cap WRQ Green',
        description: 'A trendy green velvet cap with WRQ branding.',
        price: 1000,
        image: 'https://test.qazaqrepublic.com/uploads/thumbs/fw23-web-makets-velvet-green-1fb5310193-518e361d2626f964419164d3472e4858.jpeg',
    },
    {
        id: 4,
        title: 'Sweatshirt Qazaq Republic Navy',
        description: 'Navy sweatshirt featuring the Qazaq Republic logo.',
        price: 1800,
        image: 'https://test.qazaqrepublic.com/uploads/thumbs/fw23-web-makets-sw-qrl-dark-blue-bd3ce19d49-518e361d2626f964419164d3472e4858.jpeg',
    },
    {
        id: 5,
        title: 'Pants Wide Khaki',
        description: 'Wide-legged khaki pants for a comfortable fit.',
        price: 2500,
        image: 'https://test.qazaqrepublic.com/uploads/thumbs/90s-pants-white-2-9cf6186362-3986048ac7f20f65da69e2f7c00ee850.jpeg',
    },
    {
        id: 6,
        title: 'Bag WRQ Blue',
        description: 'A spacious blue bag with WRQ branding.',
        price: 900,
        image: 'https://test.qazaqrepublic.com/uploads/thumbs/fw23-web-makets-somke-blue-d8a02fe1ed-518e361d2626f964419164d3472e4858.jpeg',
    },
];

export default StorePage;
