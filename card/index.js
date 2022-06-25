const express = require('express')
const path = require('path')
const hbs = require('handlebars')

const app = express()

app.set('views',path.join(__dirname))
app.set('view engine','hbs')

card ={
   first : { 
       name : "APPLE",
       image : "https://static.toiimg.com/thumb/resizemode-4,msid-79058673,imgsize-200,width-1200/79058673.jpg",
       description : "Check out iPhone 13 Pro, iPhone 13 Pro Max, iPhone 13, iPhone 13 mini and iPhone SE."
   },
   second : { 
       name : "HONOR",
       image : "https://5.imimg.com/data5/ZF/SO/IL/ANDROID-86420941/1557977769973-jpg-500x500.jpg",
       description : "Discover high quality smartphones, tablets, laptops and wearables, accessories in HONOR official site."
   },
   third : { 
       name : "SAMSUNG",
       image : "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg",
       description : "Buy 3G, 4G, dual sim, touch screen smartphone at best prices in India."
   },
   forth : { 
       name : "NOKIA",
       image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS64-s9gSVicUk3pXFFu9ePWj_YT83csoFrGg&usqp=CAU",
       description : "Explore Nokia Android phones, including mobile phones with Android™ 12."
   }
}

app.get('/',(req,res)=>{
    res.render('card',{card})
})
app.listen(3000,(error)=>{
    if(error) throw error
    console.log(`success: http://localhost:3000`)
})