import { createGlobalStyle } from 'styled-components';
import { Style } from './style';
import { MediaQuery } from './utils';

export const GlobalStyle = createGlobalStyle`
    html {
        /* overflow: scroll; */
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        display: none;
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        display: none;
        background: ${Style.Color.Dark25};
        border-radius: 8px;
        width: 0;
    }

    body {
        background: ${Style.Color.Dark75};
        font-family: ${Style.Typography.FontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
    }

    @keyframes gradientKeyframe {
        0% { background-position: 0%; }
        /* 50% { background-position: 100% 50%; } */
        100% { background-position: 100%; }
    }

    // Collapse animation
    .ReactCollapse--collapse {
        transition: height 500ms ease;
    }

    // Typography
    ${MediaQuery.DesktopOrTablet} {
        html {
            font-size: ${Style.Typography.Desktop.RootFontSize};
        }
    }
    ${MediaQuery.Mobile} {
        html {
            font-size: ${Style.Typography.Mobile.RootFontSize};
        }
    }
    .heading1 {
        ${Style.Typography.Desktop.Heading1}
    }
    .heading2 {
        ${Style.Typography.Desktop.Heading2}
    }
    .heading3 {
        ${Style.Typography.Desktop.Heading3}
    }
    .heading4 {
        ${Style.Typography.Desktop.Heading4}
    }
    .caption {
        ${Style.Typography.Desktop.Caption}
    }
    .body1 {
        ${Style.Typography.Desktop.Body1}
    }
    .body2 {
        ${Style.Typography.Desktop.Body2}
    }
    .body3 {
        ${Style.Typography.Desktop.Body3}
    }
    .label {
        ${Style.Typography.Desktop.Label}
    }
    .button1 {
        ${Style.Typography.Desktop.Button1}
    }
    .button2 {
        ${Style.Typography.Desktop.Button2}
    }
`;