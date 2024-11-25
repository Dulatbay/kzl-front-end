import React, {ReactNode} from 'react';
import {Typography} from "antd";

interface Props {
    title: string;
    children: ReactNode;
}

const TitledContainer = ({title, children}: Props) => {
    return (
        <div className="">
            <h2 className={'text-2xl'}>{title}</h2>
            {children}
        </div>
    );
};

export default TitledContainer;