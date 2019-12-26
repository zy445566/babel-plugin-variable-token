# babel-plugin-variable-token
support different token,support different languages javascript 

`fork from @babel/parser`

# install
```sh
npm install babel-plugin-variable-token
```
# example
```js
const babelCore = require('@babel/core')
const babelPluginVariableToken = require('babel-plugin-variable-token')
babelPluginVariableToken.customTokenTypes._function.keyword = '函数'
babelPluginVariableToken.customTokenTypes._if.keyword = '如果'
babelPluginVariableToken.customTokenTypes._return.keyword = '返回'
const result = babelCore.transformSync(`
函数 斐波那契(所求数) {
    如果(所求数<=2){返回 1};
    返回 斐波那契(所求数-2)+斐波那契(所求数-1);
}
`, { plugins: [babelPluginVariableToken.plugin] });
/**
 * result.code:
 * function 斐波那契(所求数) {
 *    if (所求数 <= 2) {
 *       return 1;
 *    };
 *    return 斐波那契(所求数 - 2) + 斐波那契(所求数 - 1);
 *  }
 */
```
