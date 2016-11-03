fs = require('fs');
const IMPORT_STATEMENT_NAME = "IMPORT";
function run(){
    //read config file
    let child = fs.readFileSync('./Dockerfile.template');
    let lines = child.toString().split('\n');
    let importPaths = lines.map((line)=>{
        if(line.split(' ')[0] === IMPORT_STATEMENT_NAME){
            return line.split(' ')[1];
        }
    }).filter(path => path)

    //join files
    let joinedFiles = importPaths.map((path)=>{
       return fs.readFileSync(path).toString();
    })
    //remove import statements from template file
    let formattedChild = child.toString().split('\n').filter((line) => {
        return line.split(' ')[0] !== IMPORT_STATEMENT_NAME;
    }).join('\n');
    joinedFiles.push(formattedChild);

    let dockerfile = "";
    joinedFiles.forEach((file)=>{
        dockerfile += file;
    })
    fs.writeFileSync('./Dockerfile',dockerfile);
}
run();
