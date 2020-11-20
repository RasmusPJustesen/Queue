const { override } = require('customize-cra'); 
const { addReactRefresh } = require('customize-cra-react-refresh');

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
    }
];

module.exports = override(addReactRefresh());