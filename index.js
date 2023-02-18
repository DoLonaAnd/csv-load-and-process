const fs = require('fs');

function getLoadingCSV(path) {
    return fs.readFileSync(path, "utf-8");
}

function getProcessedCSV(str) {
    let arrayCSV = [],
        lines = [],
        line = [],
        start = 0,
        count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (str.substr(i, 1) == "\n") {
            lines.push(str.substr(start, count - 1));
            start = i + 1;
            count = 0;
        }
    }
    lines.push(str.substr(start));
    for (let i = 0; i < lines.length; i++) {
        start = 0;
        count = 0;
        line = [];
        for (let j = 0; j < lines[i].length; j++) {
            count++;
            if (lines[i].substr(j, 1) == ",") {
                line.push(lines[i].substr(start, count - 1));
                start = j + 1;
                count = 0;
            }
        }
        line.push(lines[i].substr(start, count));
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