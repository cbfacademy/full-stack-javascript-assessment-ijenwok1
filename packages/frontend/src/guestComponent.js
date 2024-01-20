import React, { useState, useEffect } from 'react';
import './styleTemplate.css'; 

const GuestComponent = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    phonenumber: '',
    rsvp: '',
  });

  const fetchGuests = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/guests');
      const data = await response.json();
      setGuests(data);
    } catch (error) {
      console.error('Error adding guests:', error);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGuest((prevGuest) => ({ ...prevGuest, [name]: value }));
  };

  const handleCreateGuest = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/guests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGuest),
      });

      if (response.ok) {
        const createdGuest = await response.json();
        setGuests((prevGuests) => [...prevGuests, createdGuest]);
        setNewGuest({
          name: '',
          email: '',
          phonenumber: '',
          rsvp: '',
        });
      } else {
        console.error('Failed to add guest:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding guest:', error);
    }
  };

  return (
    <div>
      <h2>Guests</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>{guest.name}</li>
        ))}
      </ul>

      <h2>Add a Guest</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={newGuest.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={newGuest.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phone number" value={newGuest.phoneNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          RSVP:
          <input type="text" name="rsvp" value={newGuest.rsvp} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleCreateGuest}>
          Add Guest
        </button>
      </form>
    </div>
  );
};

export default GuestComponent;
