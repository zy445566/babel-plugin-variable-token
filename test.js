const babelCore = require('@babel/core')
const babelPluginVariableToken = require('./index') //babel-plugin-variable-token
const assert = require('assert');
let testUnit = {
    [Symbol('test.varToken')] : async function() {
        babelPluginVariableToken.customTokenTypes._function.keyword = '函数'
        babelPluginVariableToken.customTokenTypes._if.keyword = '如果'
        babelPluginVariableToken.customTokenTypes._return.keyword = '返回'
        const result = babelCore.transformSync(`
        函数 斐波那契(所求数) {
            如果(所求数<=2){返回 1};
            返回 斐波那契(所求数-2)+斐波那契(所求数-1);
        }
        `, { plugins: [babelPluginVariableToken.plugin] });
        assert.equal(
            result.code.replace(/\s+/g,''),
            'function斐波那契(所求数){if(所求数<=2){return1;};return斐波那契(所求数-2)+斐波那契(所求数-1);}'
            ,'varToken error!'
        )
    },

}

async function run(testUnitList) {
    for(let testUnitValue of testUnitList) {
        for(let testFunc of Object.getOwnPropertySymbols(testUnitValue)) {
            await testUnitValue[testFunc]();
        }
    }
}
run([testUnit]);