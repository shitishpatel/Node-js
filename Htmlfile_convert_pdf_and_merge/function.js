const fs = require('fs');
const pdf=require('html-pdf');
const {PDFDocument} = require('pdf-lib');

async function convert(){
    var html= fs.readFileSync('./card2.html','utf-8');

let options={
    format:'Letter'
}

pdf.create(html,options).toFile('./new2.pdf', (err,res)=>{
    if(err) return console.log(err);
    console.log(res);
})

}

async function merge(){
    const cover= await PDFDocument.load(fs.readFileSync('./new1.pdf'));
    const content= await PDFDocument.load(fs.readFileSync('./new2.pdf'));

    const doc = await PDFDocument.create();

    const contentPages1=await doc.copyPages(cover,cover.getPageIndices());
    for(const page of contentPages1){
        doc.addPage(page);
    }

    const contentPages2=await doc.copyPages(content,content.getPageIndices());
    for(const page of contentPages2){
        doc.addPage(page);
    }

    fs.writeFileSync('./test.pdf',await doc.save());
}

module.exports={merge,convert};
