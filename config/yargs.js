const argv = require('yargs').option('b', {
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: 'Es la base para la tabla de multiplicar'
                            })
                            .option('l', {
                                alias: 'listado',
                                type: 'boolean',
                                default: false,
                                describe: 'Muestra la lista'
                            })
                            .option('h', {
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                describe: 'Hasta donde llegan las tablas'
                            })
                            .check((argv, options)=>{
                                if(isNaN(argv.base)){
                                    throw 'La base debe ser un número';
                                }
                                return true
                            })
                            .argv 

module.exports = argv