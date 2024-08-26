// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


// Solution

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "D:\\Full Stack Web Dev\\Css_Variables\\ExpressJs_Challenge15"



let files= await fs.readdir(basepath)


for (const i of files) {
    let ext= i.split(".")[i.split(".").length -1]


    if(ext != "js" && ext != "json" && i.split(".").length>1) {
        
    if(fsn.existsSync(path.join(basepath, ext))) {

        // moving the files to directories if they are not json or js files
        fs.rename(path.join(basepath, i), path.join(basepath, ext, i))
        
    }
    else {
        fs.mkdir(ext)
    }
}
  
}

