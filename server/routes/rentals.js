const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('',function(req,res){
    Rental.find({},function(err,foundRental){
        res.json(foundRental);
    })
    
});
router.get('/:id',function(req,res){
    const rentalid=req.params.id;
    Rental.findById(rentalid,function(err,foundRental){
        if(err){
            res.status(422).send({error:[{title:'Rental Error',detail:'Could not find rental'}]});
        }
        res.json(foundRental);
    })
    
});
module.exports = router;