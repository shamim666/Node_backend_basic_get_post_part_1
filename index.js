const express = require('express') ;
const cors = require('cors')
const app = express() ; 
app.use(cors());
const port = 5000 ;

const cars = [
    {id:10 , name:"toyota" , price: 10000},
    {id:20 , name:"BMW" , price: 20000},
    {id:30 , name:"Audi" , price: 30000}
]


// data send from backend to frontend using get method


// if you type url like this http://localhost:3000/
// you will get response => you have not made any request 

app.get('/' , (req,res) =>{
    res.send("you have not made any request")
})


// if you type only /cars like this http://localhost:3000/cars
// that means you have not made any request 
// you will get response cars as a  full array

app.get('/cars' , (req,res) =>{
    res.send( cars )
})

// if you type url like this http://localhost:3000/cars/1
// that means dynamic API , you will get specific response of that variable
// like {"id":20,"name":"BMW","price":20000}

app.get('/cars/:variable' , (req,res) =>{
    const variable = req.params.variable 
    const car  = cars[variable]
    res.send(car)
})

// if you type url like this  http://localhost:3000/cars?search=bmw
// you will get only  {id:20 , name:"BMW" , price: 20000} (if block will work)
// if you type url like this  http://localhost:3000/cars
// you will get full cars array ( else block will work)

app.get('/cars' , (req,res) =>{
    const search = req.query.search

    if(search){
        const searchResult = cars.filter(car => car.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(cars)
    }
})


// data come from frontend to backend using post method
app.post( '/cars' , (req,res)=>{
 res.send('post successful')
})

app.listen(port, ()=>{
    console.log('listening to port' , port)
});