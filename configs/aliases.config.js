const path = require('path');

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    'cahcnc91-button': path.resolve(__dirname, '../src/Button/src/index'),
    'cahcnc91-click-scroll': path.resolve(__dirname, '../src/ClickAndScroll/src/index'),
};

module.exports = { aliases };