import React, { useState } from 'react';

export default function JobSeekerLogin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('TUTOR');
  const [yearOfExp, setYearOfExp] = useState('');
  const [isActivelyLooking, setIsActivelyLooking] = useState(true);
  const [pincode, setPincode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data for the cURL request
    const data = {
      firstName,
      lastName,
      password,
      email,
      role,
      yearOfExp,
      isActivelyLooking,
      pincode
    };

    try {
      // Send a POST request to the registration API
      const response = await fetch('https://edu-link-production.up.railway.app/teachers-adda/api/v1/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Handle the response as needed (e.g., show success message or handle errors)
      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        // Add your logic here to redirect to the teacher's dashboard or other pages.
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Teacher Login or Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="TUTOR">Tutor</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="yearOfExp">Years of Experience:</label>
          <input
            type="number"
            id="yearOfExp"
            value={yearOfExp}
            onChange={(e) => setYearOfExp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="isActivelyLooking">Actively Looking for Jobs:</label>
          <input
            type="checkbox"
            id="isActivelyLooking"
            checked={isActivelyLooking}
            onChange={(e) => setIsActivelyLooking(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        <button type="button">Login</button>
      </form>
    </div>
  );
}
