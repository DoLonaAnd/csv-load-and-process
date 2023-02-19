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

function toCSV(array) {
    let csv = "",
        line,
        txt;
    if (typeof array != "object") {
        return null;
    }
    if (typeof array[0] != "object") {
        return null;
    }
    for (num_1 in array) {
        line = array[num_1];
        for (num_2 in line) {
            txt = line[num_2];
            csv += txt + ",";
        }
        csv = csv.substring(0, csv.length - 1) + "\n";
    }
    csv = csv.substring(0, csv.length - 1);
    return csv;
}

function writeCSV(path, str, opt = 0) {
    switch (opt) {
        case 0:
            // 新規書き込み/上書き デフォルト
            fs.writeFileSync(path, str);
            break;
        case 1:
            // 追記
            fs.appendFileSync(path, str);
            break;
        default:
            console.log("\u001b[31mError: Third option is 0 or 1!!\u001b[0m");
            return false;
    }
}

function setCSV(path, array, opt = 0) {
    writeCSV(path, toCSV(array), opt);
}

exports.getLoadingCSV = getLoadingCSV;
exports.getProcessedCSV = getProcessedCSV;
exports.getCSV = getCSV;
exports.toCSV = toCSV;
exports.writeCSV = writeCSV;
exports.setCSV = setCSV;