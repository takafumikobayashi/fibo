import { getByElementCount, getByIndexValue } from 'fibonum-array';
import figlet from 'figlet'
import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('number <1-50>', 'return Fibonacci Numbers', () => {}, (argv) => {
        console.info(argv)
    })
    .demandCommand(1)
    .argv

figlet("FIBONUM-ARRAY", function(err, data) {

    console.log(data);

    let array = new Array
    array = getByElementCount(Number(process.argv[2]))
    console.log(array);

    let value = getByIndexValue(Number(process.argv[2]))
    console.log(chalk.red.bgBlue(value));

});


