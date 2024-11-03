const fs= require('fs');
const path= require('path');

const filePath= '.data/tasks.json';
exports.writeTask=(task)=>{
    fs.writeFileSync(filePath,JSON.stringify(task , null , 2));
    
}
exports.readTask=()=>{
    if (!fs.existsSync(filePath)) {
        this.writeTask([]);
        
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}