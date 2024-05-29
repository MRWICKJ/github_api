const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
let URL = "https://api.github.com/users/"
app.get('/',(req,res)=>{
    
    let Data = async (username) =>{
    let Response = await fetch(URL + username)
    let data = await Response.json()
    res.render('index',{data})
}
    Data("")  
})
app.post('/',(req,res)=>{
    let { username } = req.body
    let Data = async (username) =>{
        let Response = await fetch(URL + username)
        let data = await Response.json()
        res.render('index',{data})
    }
        Data(username)  
})

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})