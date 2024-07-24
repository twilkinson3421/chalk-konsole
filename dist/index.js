import chalk from "chalk";
var konsole;
(function (konsole) {
    let internal;
    (function (internal) {
        function logReason(reason) {
            return `${reason
                ? `\n${chalk.bgBlue(chalk.bold(" REASON "))} ${chalk.grey(chalk.italic(reason))}\n`
                : `\n`}`;
        }
        internal.logReason = logReason;
    })(internal = konsole.internal || (konsole.internal = {}));
    function err(message, reason) {
        console.error(`${chalk.bgRed(chalk.bold(" ERROR "))} ${message}${konsole.internal.logReason(reason)}`);
    }
    konsole.err = err;
    function warn(message, reason) {
        console.warn(`${chalk.bgYellow(chalk.black(chalk.bold(" WARN ")))} ${message}${konsole.internal.logReason(reason)}`);
    }
    konsole.warn = warn;
    function info(message) {
        console.info(`${chalk.bgBlue(chalk.bold(" INFO "))} ${message}\n`);
    }
    konsole.info = info;
    function success(message) {
        console.info(`${chalk.bgGreen(chalk.bold(" SUCCESS "))} ${message}\n`);
    }
    konsole.success = success;
})(konsole || (konsole = {}));
export default konsole;
