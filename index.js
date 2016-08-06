const foregroundColor = '#f8f8f0';
const backgroundColor = '#272822';
const red = '#ff5c57';
const green = '#e6db74';
const yellow = '#a6e22e';
const blue = '#ae81ff';
const magenta = '#f92672';
const cyan = '#66d9ef';

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: backgroundColor,
  colors: {
    black: backgroundColor,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white: '#f1f1f0',
    lightBlack: '#686868',
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: foregroundColor
  },
  css: `
    ${config.css}

    .header_header {
      top: 0px;
      left: 0px;
      right: 0px;
    }

    .tabs_nav {
      height: 36px;
      line-height: 36px;
    }

    .tabs_list {
      max-height: 36px;
      background-color: #202020;
      box-shadow: inset 0 -1px #181818;
    }

    .tab_text {
      border-color: transparent;
      height: 36px;
    }

    .tab_tab:before {
      content: '';
      display: block;
      width: 2px;
      top: 0;
      left: 0;
      bottom: 0;
      background: #416eca;
      border: none;
      opacity: 0;
      transition: opacity 500ms;
    }

    .tab_tab:after {
      content: '';
      position: absolute;
      width: 2px;
      top: 0;
      right: -2px;
      bottom: 0;
      border-left: 1px solid #181818;
      border-bottom-left-radius: 2px;
      opacity: 0;
    }

    .tab_tab:last-child:after {
      display: none;
    }

    .tab_active,
    .tabs_title {
      background-color: ${backgroundColor};
      background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
    }

    .tab_active:before,
    .tab_active:after {
      opacity: 1;
    }

    .terms_terms {
      margin-top: 36px;
    }
  `
});
