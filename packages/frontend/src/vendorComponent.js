import React, { useState, useEffect } from 'react';
import './styleTemplate.css'; 

const VendorComponent = () => {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({
    name: '',
    serviceType: '',
    location: '',
    contact: '',
    description: '',
  });
  
  const fetchVendors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/vendors');
      const data = await response.json();
      setVendors(data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor((prevVendor) => ({ ...prevVendor, [name]: value }));
  };

  const handleCreateVendor = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/vendors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVendor),
      });

      if (response.ok) {
        const createdVendor = await response.json();
        setVendors((prevVendors) => [...prevVendors, createdVendor]);
        setNewVendor({
          name: '',
          serviceType: '',
          location: '',
          contact: '',
          description: '',
        });
      } else {
        console.error('Failed to create vendor:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating vendor:', error);
    }
  };

  return (
    <div>
      <h2>Vendors</h2>
      <ul>
        {vendors.map((vendor) => (
          <p key={vendor.id}>{vendor.name}</p>
        ))}
      </ul>

      <h2>Create Vendor</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={newVendor.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Service Type:
          <input type="text" name="serviceType" value={newVendor.serviceType} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={newVendor.location} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Contact:
          <input type="text" name="contact" value={newVendor.contact} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={newVendor.description} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleCreateVendor}>
          Create Vendor
        </button>
      </form>
    </div>
  );
};

export default VendorComponent;
