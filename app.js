const express = require("express");
const app = express();
const db = require("./db")


const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

app.get('/',(req,res)=>{
    res.send("Welcome to My Hotel");
})

//person schema
// app.post('/person', async (req,res)=>{
//     try {
//         const person = req.body;
//         const newPerson = new Person(person);
//         const savedPerson = await newPerson.save();
//         console.log('data saved');
//         res.status(201).json(savedPerson);
        

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: "Internal Server Error"});    
//     }
    
// })

// app.get('/person', async(req,res)=>{
//     try {
//         const data = await Person.find();
//         console.log("Data fetched");
//         res.status(200).json(data);
        
//     } catch (error) {
//         console.log(err);
//         res.status(500).json({error: "Internal Server Error"});
        
//     }
// })

//menu item schema
// app.post('/menu', async(req,res)=>{
//     try {
//         const item = req.body;
//         const newItem = new MenuItem(item);
//         const newMenu = await newItem.save();
//         console.log("menu item saved");
//         res.status(201).json(newMenu);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: "Internal Server Error"}); 
//     }
// })

// app.get('/menu', async(req,res)=>{
//     try {
//         const data = await MenuItem.find();
//         console.log("Data fetched");
//         res.status(200).json(data); 
//     } catch (error) {
//         console.log(err);
//         res.status(500).json({error: "Internal Server Error"})
//     }
// })

//parameter route : query params
// app.get('/person/:workType',async (req,res)=>{
//     try {
//         const workType = req.params.workType;
//         if(workType == 'chef'|| workType =='waiter' || workType =='manager'){
//             const response = await Person.find({work: workType});
//             console.log("response fetched");
//             res.status(200).json(response);
            

//         } else{
//             res.status(404).json({error:"Invalid work type"})
//         }
//     } catch (error) {
//         console.log(err);
//         res.status(500).json({error: "Internal Server Error"})
//     }
// })

app.get("/chicken", (req,res)=>{
    res.send("Cluck cluck");
})

const personRoutes = require("./routes/person.route.js");
const menuItemRotes = require("./routes/menuItem.route.js");

app.use('/person', personRoutes);
app.use('/menu',menuItemRotes);

app.listen(2000, (req,res)=>{
    console.log("Listening on port 2000");   
})

//Comment added for testing purpose