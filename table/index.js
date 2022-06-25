const express = require('express')
const path = require('path')
const hbs = require('handlebars')

const app = express()

app.set('views',path.join(__dirname))
app.set('view engine','hbs')

person ={
   first : { 
    Number : 1,
    Name : "Muhsin",
    Age : 28,
    Qualification : "Plus Two",
    Place : "Vengara"
     },
   second : { 
    Number : 2,
    Name : "Usama",
    Age : 21,
    Qualification : "BCA",
    Place : "Kondotty"
     },
   third : { 
    Number : 3,
    Name : "Irfana",
    Age : 25,
    Qualification : "BA",
    Place : "Thalappara"
     },
   forth : { 
    Number : 4,
    Name : "Arifa",
    Age : 20,
    Qualification : "BA",
    Place : "Kadappadi"
      }
}

app.get('/',(req,res)=>{
    res.render('table',{person})
})
app.listen(3000,(error)=>{
    if(error) throw error
    console.log('success')
})