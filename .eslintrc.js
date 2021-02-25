module.exports = {
  root: true,
  env: {
    node: true
  },
  'globals':{
    "clientWindow":true,
    "":true,
    Frames:true,
    jsInteractive:true,
    globalThis:true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": 'off',
    "eslint-disable-next-line":0
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
