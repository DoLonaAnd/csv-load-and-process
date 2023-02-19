# csv-load-and-process

## Contents

This node module can read csv and process them.

return Two-dimensional array of String type.

Made by DoLonaAnd.

---
## Usage

```js
// import
const clap = require('csv-load-and-process');

// use
// read
let path = "./text_1.csv",
    csvArray = clap.getCSV(path);
// write
let path = "./text_2.csv",
    opt = 0 or 1;
clap.setCSV(path, csvArray, opt);
    /* opt == 0 -> overwrite or write new.
     *             This is default.
     *             You have not to set opt.
     * opt == 1 -> postscript.
     */

/*
 * csvArray = [
 *  [txt,txt], //line
 *  [txt,txt,txt], //line
 *  [txt]  //line
 * ];
 */

```

---
## Link

### ・<a href = "https://twitter.com/Android_g_o_d">Twitter</a>

### ・<a href = "https://www.npmjs.com/package/csv-load-and-process">npm</a>
