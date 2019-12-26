const lib = require("./lib");
const exportsPlugin = {
    plugin:function(state){
        return {
            parserOverride(code, opts) {
                return lib.parse(code, opts);
            }
        }
    },
    customTokenTypes:lib.tokTypes,
}
module.exports = exportsPlugin.default = exportsPlugin;