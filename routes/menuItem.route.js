const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/Menu.js");

router.post('/', async(req,res)=>{
    try {
        const item = req.body;
        const newItem = new MenuItem(item);
        const newMenu = await newItem.save();
        console.log("menu item saved");
        res.status(201).json(newMenu);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"}); 
    }
})

router.get('/', async(req,res)=>{
    try {
        const data = await MenuItem.find();
        console.log("Data fetched");
        res.status(200).json(data); 
    } catch (error) {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get('/:taste',async(req,res)=>{
    try {
        const taste = req.params.taste;
        if(taste == 'spicy'|| taste =='sour' || taste =='sweet'){
            const response = await MenuItem.find({taste: taste});
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
        const itemId = req.params.id;
        const updatedItem = req.body;

        const response = await MenuItem.findByIdAndUpdate(itemId, updatedItem,{
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({error: "Item not found"});
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
        const itemId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(itemId);

        if(!response){
            return res.status(404).json({error: "Item Not Found"});
        }

        console.log("Item Deleted");
        res.status(200).json({message: "Item deleted Successfully"});
        

    } catch (error) {
        
    }
})

module.exports = router;