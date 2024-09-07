

import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';


const {b:base,l:limit,s:showTable}=yarg;

console.log(yarg);
const message:string = 'hola mundoooo';
// console.log(message);

let resultado ='';
// const base = 5;
const cadena = `
===================================
        Tabla del ${ base }
===================================
`;


// for (let i=1;  i<=10; i++)
for(let i=1;i<=limit;i++)
  resultado += `${base} x ${ i} = ${ base*i}\n`;
resultado = cadena + resultado;

if(showTable){

  console.log(resultado);
}

const output = `outputs`;
//crea una carpeta dentro de la raiz
fs.mkdirSync(output,{recursive:true});
//crea un archivo de texto con los datos de salida
fs.writeFileSync(`${output}/tabla-${base}.txt`,resultado);
console.log('File created!');