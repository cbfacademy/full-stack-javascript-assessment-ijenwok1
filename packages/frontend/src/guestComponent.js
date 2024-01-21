import React, { useState, useEffect } from 'react';
import './styleTemplate.css';

const GuestComponent = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    rsvp: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const fetchGuests = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/guests');
      const data = await response.json();
      setGuests(data);
    } catch (error) {
      console.error('Error fetching guests:', error);
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
    console.log(newGuest);
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
        console.log(createdGuest);
        console.log([...guests, createdGuest]);
        setGuests((prevGuests) => [...prevGuests, createdGuest]);
        setNewGuest({
          name: '',
          email: '',
          phoneNumber: '',
          rsvp: '',
        });
      } else {
        console.error('Failed to add guest:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding guest:', error);
    }
  };

  const handleUpdateGuest = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:5000/api/guests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGuest),
      });

      if (response.ok) {
        const updatedGuest = await response.json();
        console.log(updatedGuest);
        setGuests((prevGuests) =>
          prevGuests.map((guest) => (guest._id === id ? updatedGuest : guest))
        );
        setNewGuest({
          name: '',
          email: '',
          phoneNumber: '',
          rsvp: '',
        });
      } else {
        console.error('Failed to update guest:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating guest:', error);
    }
  };

  const handleDeleteGuest = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/guests/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setGuests((prevGuests) => prevGuests.filter((guest) => guest._id !== id));
      } else {
        console.error('Failed to delete guest:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };

  const filteredGuests = guests.filter((guest) =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>{newGuest.id ? 'Update' : 'Add'} a Guest</h2>
      <div className="form-container">
        <form>
          <label>
            Name:
            <input type="text" name="name" value={newGuest.name} onChange={handleInputChange} className="form-input" />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" value={newGuest.email} onChange={handleInputChange} className="form-input" />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={newGuest.phoneNumber}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            RSVP:
            <input type="text" name="rsvp" value={newGuest.rsvp} onChange={handleInputChange} className="form-input" />
          </label>
          <br />
          <button
            className="form-button"
            type="button"
            onClick={() => {
              console.log(newGuest);
              newGuest._id ? handleUpdateGuest(newGuest._id) : handleCreateGuest();
            }}
          >
            {newGuest._id ? 'Update' : 'Add'} Guest
          </button>
        </form>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ul>
        {filteredGuests.map((guest) => (
          <div key={guest._id}>
            <p>
              {guest.name} - {guest.rsvp}
            </p>
            <button
              onClick={() => {
                setNewGuest({
                  name: guest.name,
                  email: guest.email,
                  phoneNumber: guest.phonenumber,
                  rsvp: guest.rsvp,
                  _id: guest._id,
                });
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDeleteGuest(guest._id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GuestComponent;

