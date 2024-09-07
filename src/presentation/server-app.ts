import { CreateTable } from "@/domain/use-cases/create-table.use-case";
import { SaveFile } from "@/domain/use-cases/save-file.use-case";



interface RunOptions{
    base: number;
    limit:number;
    showTable:string;
    fileDestination: string;
    fileName: string ;

}
export class ServerApp{




   static run({base,limit,showTable, fileName, fileDestination}:RunOptions){
        console.log('Server running.....');

        // console.log({options});
        const table = new CreateTable().execute({base,limit});
        const wasCreated = new SaveFile().execute({
            fileContent:table,
            // fileDestination:`outputs/table-${base}`,
            fileDestination,
            fileName
        });
       if(showTable) console.log(table);

        (wasCreated)? console.log('File Created!')
        :console.error('File not Created!');



    }
}