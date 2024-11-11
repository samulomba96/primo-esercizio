import fs from "node:fs"; //gestione di files e cartelle
import path from "node:path"; //percorsi
//import { DateTime } from "luxon"; //gestione date
import chalk from "chalk"; //gestione colore
export default () => {
    //servirebbe una "funzione ricorsiva"
    try {
        const dir = "C:\\Users\\samul\\Desktop\\Corso-front-end\\Modulo Node.JS\\Esercizi\\primo esercizio\\Utilities\\documenti";
        const source = fs.readdirSync(dir);
        function functionLista() {
            for (const sources of source) {
                const lista = path.join(dir, sources);
                const stat = fs.statSync(lista);
                if (stat.isDirectory()) {
                    console.log(chalk.yellow(("|  |--" + sources)));
                    const subDir = fs.readdirSync(lista);
                    subDir.forEach(subItem => {
                        console.log("|  |  |-- " + subItem);
                    });
                }
                else {
                    console.log("|--" + sources);
                }
            }
        }
        functionLista();
    }
    catch (err) {
        console.error('Errore nella lettura della directory:', err);
    }
};
