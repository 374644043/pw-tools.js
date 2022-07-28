/*
 * @Author: pangwei pw374644043@gmail.com
 * @Date: 2022-07-25 15:22:49
 * @LastEditors: pangwei pw374644043@gmail.com
 * @LastEditTime: 2022-07-25 16:11:47
 */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'semi': [
      2,
      'never',
      {
        'beforeStatementContinuationChars': 'never',
      },
    ],
  },
}
