const express = require('express');
const app = express.Router()

function vendorsRoutes(mongodb)
{
    //Create a new Vendor
    app.post('/',(req,res) => {
        const newVendor = {id: vendors.length +1, ...req.body };
        vendors.push(newVendor);
        res.status(201).json(newVendor);
    });
    
    //Show all vendors
    app.get('/', async(req,res) => {
        try {
            const vendors = await mongodb.db('WeddingPlan').collection('Vendors').find().toArray();
            res.status(200).json(vendors)
            }catch(err) {
             console.log({err})
            }
    });
    
    //filter vendor by name
    app.get('/:id', (req, res) => {
        const vendorId = parseInt(req.params.id);
        const vendor = vendors.find((v) => v.id === vendorId);
    
        if (vendor) {
            res.json(vendor);
                } else {
                    res.status(404).json({ error: 'Vendor not found'});
                }
    });
    
    //Update vendor by name/ID
    app.put('/:id', (req,res) => {
        const vendorId = parseInt(req.params.id);
        const index = vendors.findIndex((v) => v.id === vendorId);
    
        if (index !==-1) {
            vendors[index] = {...vendors[index], ...req.body };
            res.json(vendors[index]);
        }else {
            res.status(404).json({ error: 'Vendor not found'});
        }
    });
    
    //delete vendor by name/ID
    app.delete('/:id', (req,res) => {
        const vendorID = parseInt(req.params.id);
        const index = vendors.findIndex((v) => v.id ===vendorID);
    
        if (index !== -1) {
            const deletedVendor = vendors.splice(index,1);
            res.json(deletedVendor[0]);
        } else {
            res.status(404).json({error: 'Vendor not found'})
        }
        });
        return app 
    }

    module.exports = vendorsRoutes;
