"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const message = 'hola mundoooo';
// console.log(message);
let resultado = '';
const base = 5;
const cadena = `
===================================
        Tabla del ${base}
===================================
`;
for (let i = 1; i <= 10; i++)
    resultado += `${base} x ${i} = ${base * i}\n`;
resultado = cadena + resultado;
console.log(resultado);
const output = `outputs`;
fs_1.default.mkdirSync(output, { recursive: true });
fs_1.default.writeFileSync(`outputs/tabla-${base}.txt`, resultado);
console.log('File created!');
