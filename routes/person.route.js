const express = require("express");
const router = express.Router();

const Person = require("./../models/person.js");

router.post('/', async (req,res)=>{
    try {
        const person = req.body;
        const newPerson = new Person(person);
        const savedPerson = await newPerson.save();
        console.log('data saved');
        res.status(201).json(savedPerson);
        

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});    
    }
    
})

router.get('/', async(req,res)=>{
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);
        
    } catch (error) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
        
    }
})

router.get('/:workType',async (req,res)=>{
    try {
        const workType = req.params.workType;
        if(workType == 'chef'|| workType =='waiter' || workType =='manager'){
            const response = await Person.find({work: workType});
            console.log("response fetched");
            res.status(200).json(response);
            

        } else{
            res.status(404).json({error:"Invalid work type"})
        }
    } catch (error) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.put('/:id', async(req,res)=>{
    try {
        const personId = req.params.id;
        const updatedPerson = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPerson,{
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({error: "Person not found"});
        }

        console.log('data updated');
        res.status(200).json(response);

    } catch (error) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: "Person not found"});
        }

        console.log('data deleted');
        res.status(200).json({message : "Person deleted success"});
    } catch (error) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})



module.exports = router;