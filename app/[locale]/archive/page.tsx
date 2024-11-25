'use client'

import React from 'react';
import TitledContainer from "@/app/[locale]/components/TitledContainer";

const ArchiveComponent = ({imageUrl, width = 'w-96'}: { imageUrl: string; width?: string }) => (
    <div className={`${width} h-fit bg-red-50 rounded-xl overflow-hidden flex justify-center items-center hover:scale-105 transition-all duration-500 cursor-pointer`}>
        <img src={imageUrl} alt=""/>
    </div>
)


const Page = () => {
    return (
        <div className="px-8 max-w-[1200px] m-auto py-8 relative flex flex-col gap-24">
            <TitledContainer title={"Books"}>
                <div className={'relative'}>
                    <div className={'flex mt-4 h-64 gap-4'}>
                        <ArchiveComponent
                            width={'w-48'}
                            imageUrl={'https://cdn.kitap.kz/storage/book/15ae42f55f4f1b470086b3b98d1f82bc.png'}/>
                        <ArchiveComponent
                            width={'w-48'}
                            imageUrl={'https://cdn.kitap.kz/storage/book/3f988ae1241402212ceca385d88f4b5d.jpg'}/>
                        <ArchiveComponent
                            width={'w-48'}
                            imageUrl={'https://cdn.kitap.kz/storage/book/78b800de7126aa94d97324869fe48e66.jpg'}/>
                        <ArchiveComponent
                            width={'w-48'}
                            imageUrl={'https://cdn.kitap.kz/storage/book/ab8fde0381df353dc4cbe579ec51f08d.png'}/>
                        <ArchiveComponent
                            width={'w-48'}
                            imageUrl={'https://cdn.kitap.kz/storage/book/ce1b4cc2e0058808c7812e7b81ce367b.png'}/>
                    </div>
                    <a className={'absolute right-0 mt-10 text-gray-400'} href={'#'}>more...</a>
                </div>
            </TitledContainer>
            <TitledContainer title={"Videos"}>
                <div className={'relative'}>
                    <div className={'flex mt-4 h-52 gap-4'}>
                        <ArchiveComponent imageUrl={'/video1.jpeg'}/>
                        <ArchiveComponent imageUrl={'/video2.jpeg'}/>
                        <ArchiveComponent imageUrl={'/video3.jpeg'}/>
                    </div>
                    <a className={'absolute right-0 mt-5 text-gray-400'} href={'#'}>more...</a>
                </div>
            </TitledContainer>
            <TitledContainer title={"Podcasts"}>
                <div className={'relative'}>
                    <div className={'flex mt-4 h-52 gap-4'}>
                        <ArchiveComponent imageUrl={'/podcast1.jpeg'}/>
                        <ArchiveComponent imageUrl={'/podcast2.jpeg'}/>
                        <ArchiveComponent imageUrl={'/podcasr3.jpeg'}/>
                    </div>
                    <a className={'absolute right-0 mt-5 text-gray-400'} href={'#'}>more...</a>
                </div>
            </TitledContainer>
        </div>
    );
};

export default Page;