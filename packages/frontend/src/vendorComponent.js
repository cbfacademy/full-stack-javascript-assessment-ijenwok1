import React, { useState, useEffect } from 'react';
import './styleTemplate.css';

const VendorComponent = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredVendors = vendors.filter((vendor) =>
  vendor.service.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div>
      <h2>Vendors</h2>

      <input
        type="text"
        placeholder="Search by service..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredVendors.map((vendor) => (
          <p key={vendor.id}>{vendor.name} - {vendor.service}</p>
        ))}
      </ul>
    </div>
  );
};

export default VendorComponent;
