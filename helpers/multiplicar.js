const fs = require('fs');
const colors = require('colors');

const table = async(base, listado, hasta) => {
    try {
        let fileName = `tabla-${base}.txt`
        let dataFile, output = ''
        for(let i = 1; i <= hasta; i++) {
            output += `${colors.red(base)} x ${colors.magenta(i)} = ${colors.green(base*i)}\n`;
            dataFile += `${base} x ${i} = ${base*i}\n`;
        }
        fs.writeFileSync(fileName, dataFile);
        
        if(listado) console.log(output)


        return fileName;
    } catch (error) {
        throw error
    }
}

module.exports = {
    table
}