const path = require('path');

//entry -> output
console.log(path.join(__dirname, 'public'));
module.exports = {
  entry: './src/app.js',
  output: {  
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};