const fs =require('fs');
const path=require('path');

const packageFilePath= path.join(__dirname,"../data/tour.js");
const getAll =()=>{
    const data=fs.readFileSync(packageFilePath,'utf-8');
    return JSON.parse(data);
}
const getById=(id)=>{
    const data=fs.readFileSync(packageFilePath,'utf-8');
    const packages=JSON.parse(data);
    return packages.find(pkg=> pkg.id ===id);
}


module.exports={
    getAll,
    getById
};