console.clear();
const { table } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

table(argv.b, argv.l, argv.h)
.then(res => console.log(`El archivo ${res} fue creado con exito`.green))
.catch(err => console.log(err))
