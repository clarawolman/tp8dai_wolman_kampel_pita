import 'dotenv/config'
import fs from 'fs';
class LogHelper {

    constructor() {
        this.filePath            = process.env.LOG_FILE_PATH;
        this.fileName            = process.env.LOG_FILE_NAME;
        this.logToFileEnabled    = process.env.LOG_TO_FILE_ENABLED.toLowerCase() === 'true';
        this.logToConsoleEnabled = process.env.LOG_TO_CONSOLE_ENABLED.toLowerCase() === 'true';
    }


    /**

     * Este método almacena en un archivo de texto y/o por muestra consola información del Error.

     * @param {*} errorObject

     */

    logError = (errorObject) => {

            const fecha = new Date().toISOString();

        const mensajeError = `
        ${fecha}: error - ${errorObject.message}
            Stack Trace:
        ${errorObject.stack}
        --------------------------------------------------
        `;

        if (this.logToConsoleEnabled) {
            console.log(mensajeError);
        }

        if (this.logToFileEnabled) {
            if (!fs.existsSync(this.filePath)) {
                fs.mkdirSync(this.filePath, { recursive: true });
            }

            fs.appendFileSync(this.filePath + this.fileName, mensajeError);
        }
    }
}

export default new LogHelper();