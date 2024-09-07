import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';





// console.log(process.argv);
// console.log(yarg.b);
(async()=>{
       await main();
    //    console.log('fin de programa');
    })();



    async function main(){
        // console.log(yarg);

        const {b:base, l:limit, s:showTable,n:fileName,d:fileDestination} = yarg;
        ServerApp.run({ base, limit,showTable, fileName, fileDestination  });
        // console.log('Main Ejecutado');
    }


