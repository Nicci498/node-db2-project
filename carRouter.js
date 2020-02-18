const express = require('express');

const router = express.Router();

const db = require('./data/dataConfig.js');

router.post('/', (req, res) => {
    if(!req.body.VIN ||!req.body.Make || !req.body.Model || !req.body.Mileage){
                res.status(400).json({errorMessage:"Make, Model, and VIN required"})
        }else{    
            db('cars').insert(req.body, 'id')
            .then(ids =>{
                res.status(201).json(ids)
            })
            .catch(err =>{
                res.status(500).json({error:'Failed to add vehicle'})
                })}
});//working

router.get('/', (req, res) =>{
    db('cars')
    .then(cars =>{
        res.status(200).json(cars)
    })
    .catch(err =>{
        res.status(500).json({errorMessage:'Failed to get cars'})
    })
})//working

module.exports = router;

// function ValidateCar(){
//     if(!req.body.VIN ||!req.body.Make || !req.body.Model || !req.body.Mileage){
//         res.status(400).json({errorMessage:"Make, Model, and VIN required"})
//     }else{
//     next()
// }

