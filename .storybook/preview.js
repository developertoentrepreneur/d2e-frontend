import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
    phoneHorizontal: {
        name: 'Phone Horizontal',
        styles: {
            width: '750px',
            height: '503px'
        }
    }
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
        viewports: { ...MINIMAL_VIEWPORTS, ...customViewports }
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
