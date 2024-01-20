/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            card: ['Inter', 'Arial'],
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            blue: '#2980b9',
            purple: '#7949FF',
            white: '#F7F6FA',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
        },

        spacing: {
            px: '1px',
            0.5: '4px',
            1: '8px',
            2: '12px',
            3: '16px',
            4: '24px',
            5: '32px',
            6: '48px',
        },
        fontSize: {
            base: '16px',
            l: '24px',
        },
        borderRadius: {
            DEFAULT: '8px',
            xl: '12px',
        },
    },
    plugins: [],
}
