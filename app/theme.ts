import {theme, ThemeConfig} from 'antd';

export const darkTheme: ThemeConfig = {
    token: {
        colorPrimary: '#5348F2',
        colorPrimaryActive: '#4538f1',
        colorPrimaryHover: '#372ce3',
        colorText: '#ffe',
        colorBgContainer: '#282828',
        colorBgElevated: '#282828'
    },
    components: {
        Button: {
            colorPrimaryBg: '#5348F2',
            primaryShadow: 'rgba(83,72,242,0.58)',
        }
    }
};

// Define light theme
export const lightTheme: ThemeConfig = {
    token: {
        colorText: '#000',
    },
};
