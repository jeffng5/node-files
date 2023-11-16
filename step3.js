const fs = require('fs')
const process = require('process')
const axios = require('axios')


function cat(path){

fs.readFile(path, 'utf8', (err, data) => {
if (err){
    console.log('ERROR=:', err)
    process.exit(1)
}
else {console.log('data:', data)
}}
)};




async function webCat(url){
const data = await axios.get(url)
console.log(data)

}

let urls = process.argv[2]



if (urls.slice(0,4)==='http'){
    webCat(urls)}
else {
    cat(urls)}
;


