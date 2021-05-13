const path = require('path');

module.exports = (env ={}) => {
  console.log(env);
  return {
    mode: env.prod ? 'product' : 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `[name].bundle.js`
    },
    module: {
      rules: [
        {
          
        }
      ]
    }
  };
}