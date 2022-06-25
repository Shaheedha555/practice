const express = require('express')
const path = require('path')
const hbs = require('handlebars')

const app = express()

app.set('views',path.join(__dirname))
app.set('view engine','hbs')

image = { 
image1 :("https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
image2 : ("https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
image3 :("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
}

app.get('/',(req,res)=>{
    res.render('carousel',{image})
})
app.listen(3000,(error)=>{
    if(error) throw error
    console.log('success')
})