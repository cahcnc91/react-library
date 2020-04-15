const path = require('path');

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    // react: path.resolve('../node_modules/react'),
    'cahcnc91-autocomplete': path.resolve(__dirname, '../src/Autocomplete/src/index'),
    'cahcnc91-click-scroll': path.resolve(__dirname, '../src/ClickAndScroll/src/index'),
};

module.exports = { aliases };