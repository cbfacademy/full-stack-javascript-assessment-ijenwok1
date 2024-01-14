const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

let vendors = [];

app.use(bodyParser.json());

//Create a new Vendor

app.post('/vendors',(req,res) => {
    const newVendor = {id: vendors.length +1, ...req.body };
    vendors.push(newVendor);
    res.status(201).json(newVendor);
});

//Show all vendors
app.get('/vendors', (req,res) => {
    res.json(vendors)
});

//filter vendor by name
app.get('/vendors/:id', (req, res) => {
    const vendorId = parseInt(req.params.id);
    const vendor = vendors.find((v) => v.id === vendorId);

    if (vendor) {
        res.json(vendor);
            } else {
                res.status(404).json({ error: 'Vendor not found'});
            }
});

//Update vendor by name/ID
app.put('/vendors/:id', (req,res) => {
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
app.delete('/vendors/:id', (req,res) => {
    const vendorID = parseInt(req.params.id);
    const index = vendors.findIndex((v) => v.id ===vendorID);

    if (index !== -1) {
        const deletedVendor = vendors.splice(index,1);
        res.json(deletedVendor[0]);
    } else {
        res.status(404).json({error: 'Vendor not found'})
    }
    });

//start the server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});
