const fs = require('fs');

function getLoadingCSV(path) {
    return fs.readFileSync(path, "utf-8");
}

function getProcessedCSV(str) {
    let arrayCSV = [],
        lines = [],
        line = [];
    lines = str.split("\n");
    for (let i = 0; i < lines.length; i++) {
        line = lines[i].split(",");
        if (line != "") {
            arrayCSV.push(line);
        }
    }
    return arrayCSV;
}

function getCSV(path) {
    return getProcessedCSV(getLoadingCSV(path));
}

module.exports = getLoadingCSV, getProcessedCSV, getCSV;
module.exports.default = getLoadingCSV, getProcessedCSV, getCSV;