import fs from "node:fs"; //gestione di files e cartelle
import path from "node:path"; //percorsi
import { DateTime } from "luxon"; //gestione date
import chalk from "chalk"; //gestione colore

export default () => {

    try {
        let dir: string = "C:\\Users\\samul\\Desktop\\Corso-front-end\\Modulo Node.JS\\Esercizi\\primo esercizio\\Utilities\\documenti";
        
        function functionLista(dir: string){
            let source: string[] = fs.readdirSync(dir);
            const date = fs.statSync(path.join(dir));

            for (const sources of source) {
                    let lista: string = path.join(dir, sources);
                    let stat = fs.statSync(lista);
                    let dataModifica = DateTime.fromMillis(date.ctimeMs);
                    if(stat.isDirectory()){
                        console.log(chalk.green("|  |--" + sources + dataModifica.setLocale("it").toFormat("(dd MMMM yyyy HH:mm)")));
                        functionLista(lista)
                    }else {
                        console.log(chalk.white("|--" + sources)+ dataModifica.setLocale("it").toFormat("(dd MMMM yyyy HH:mm)"));
                    } 
            }
        }

        functionLista(dir)
    
    } catch (errore) {
        console.error('Errore nella lettura della directory:', errore);
    };
}; 

                       