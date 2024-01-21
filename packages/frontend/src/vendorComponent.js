import React, { useState, useEffect } from 'react';
import './styleTemplate.css';

const VendorComponent = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);

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

  const handleVendorClick = (vendor) => {
    setSelectedVendor(vendor);
  };

  return (
    <div className="vendor-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ul className="vendor-list">
        {filteredVendors.map((vendor) => (
          <p
            key={vendor.id}
            onClick={() => handleVendorClick(vendor)}
            style={{
              cursor: 'pointer',
              color: selectedVendor === vendor ? 'red' : 'white',
            }}
          >
            {vendor.name} - {vendor.service}
          </p>
        ))}
      </ul>

      {selectedVendor && (
        <div>
          <h3>Details for {selectedVendor.name}</h3>
          <p>Service: {selectedVendor.service}</p>
          <p>Location: {selectedVendor.location}</p>
          <p>Contact: {selectedVendor.contact}</p>
          <p>Description: {selectedVendor.description}</p>
        </div>
      )}
    </div>
  );
};

export default VendorComponent;
