const lib = require("./lib");
const plugin = {
    customTokenTypes:lib.tokTypes,
    plugins: [function(state){
        return {
          parserOverride(code, opts) {
              return lib.parse(code, opts);
          }
        }
    }]
  }
module.exports = plugin.default = plugin;