import express from 'express'

const app = express()

function middleware1(req,res, next){
    console.log(req.method)

    console.log('this is middleware 1 ')

    next()

}


function middleware2(req,res , next){

    console.log('this is middleware 2')


    next()

}

// app.use(middleware1)

 
app.get('/user', middleware1 , middleware2,  (req,res)=>{
    console.log('this is main function ')

    res.json({
        message:'this is main function....'
    })
})


app.get('/about', (req,res)=>{
    console.log('this is about logic')

    res.json({
        message:'this is about logic'
    })
})



const port =  3000

app.listen(port , ()=>{
    console.log('server has started at port ', port)
})
