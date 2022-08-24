const {PDFDocument} = require('pdf-lib');
const fs = require('fs');
// const { runInContext } = require('vm');
const pdf=require('html-pdf');

const express = require('express');

const app =express();

const PORT=8000;

app.post('/merge',(req,res)=>{
    convert();
    async function convert(){
        var html= fs.readFileSync('./card2.html','utf-8');

    let options={
        format:'Letter'
    }

    pdf.create(html,options).toFile('./new2.pdf', function(err,res){
        if(err) return console.log(err);
        console.log(res);
    })

    var html1= fs.readFileSync('./card1.html','utf-8');

   

    pdf.create(html1,options).toFile('./new1.pdf', function(err,res){
        if(err) return console.log(err);
        console.log(res);
    })

    res.send("rahul");
    }
     merge().catch(err=>console.log(err));
    // res.send("merge");

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

})


// app.get('/',(req,res)=>{
    

//     var html=fs.readFileSync('./card1.html','utf-8');

//     let options={
//         format:'Letter'
//     }

//     pdf.create(html,options).toFile('./new1.pdf',function(err,res){
//         if(err) return console.log(err);
//         console.log(res);
//     })
//     res.send("<h1>Shitish</h1>");
// });

// app.post('/file',(req,res)=>{

//     var html=fs.readFileSync('./card2.html','utf-8');

//     let options={
//         format:'Letter'
//     }

//     pdf.create(html,options).toFile('./new2.pdf',function(err,res){
//         if(err) return console.log(err);
//         console.log(res);
//     })

//     res.send("rahul");
// })





// async function run(){
//     const cover= await PDFDocument.load(fs.readFileSync('./new1.pdf'));
//     const content= await PDFDocument.load(fs.readFileSync('./new2.pdf'));

//     const doc = await PDFDocument.create();

//     const contentPages1=await doc.copyPages(cover,cover.getPageIndices());
//     for(const page of contentPages1){
//         doc.addPage(page);
//     }

//     const contentPages2=await doc.copyPages(content,content.getPageIndices());
//     for(const page of contentPages2){
//         doc.addPage(page);
//     }

//     fs.writeFileSync('./test.pdf',await doc.save());
// }


app.listen(PORT,()=>{
    console.log(`listening to the port no ${PORT}`);
});



