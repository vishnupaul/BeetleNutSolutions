import React, { useState } from 'react';
import axios from 'axios';

function Nutsearch() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [pin, setPin] = useState('');
  const [branchs, setBranchs] = useState([]);
  const SearchData = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name,
        contact,
        pin,
      };
      await axios.post('/data/user', newUser);
      // window.alert('user created');
    } catch (error) {
      console.log(error);
    }
    setName('');
    setContact(' ');

    try {
      const res = await axios.get(`/data/user/${pin}`);
      if (res.data.length == 0) {
        window.alert('Bad Bad luck, No Donut for ypo!!');
      }
      setBranchs(res.data);
      setPin('');
    } catch (error) {
      console.log(error);
    }
  };
  var filltable = false;
  if (branchs.length > 0) {
    filltable = true;
  }

  return (
    <div className='beetleNut'>
      <div className='ditails'>
        {filltable ? (
          <table>
            <tr>
              <th>Branch_Name</th>
              <th>Address</th>
              <th>Contact_Number</th>
              <th>Branch_Incharge</th>
            </tr>
            {branchs.map((branch) => {
              const { Branch_Name, Address, Contact_Number, Branch_Incharge } =
                branch;
              return (
                <>
                  <tr>
                    <td>{Branch_Name} </td>
                    <td>{Address} </td>
                    <td>{Contact_Number} </td>
                    <td>{Branch_Incharge} </td>
                  </tr>
                </>
              );
            })}
          </table>
        ) : (
          <p className='showDummy'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            temporibus tenetur modi aut velit labore, earum magni mollitia
            necessitatibus corporis. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Veniam temporibus tenetur modi aut velit labore,
            earum magni mollitia necessitatibus corporis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis laboriosam minima at
            molestias labore, eius tempora nihil molestiae magnam sequi!
          </p>
        )}

        {/*  */}
      </div>
      <div className='formStyle'>
        <form method='POST' className='contact-form'>
          <div className='section-title contact-head'>
            <h2>
              Search<span> BeetleNut</span>
            </h2>
          </div>
          {/* form control */}
          <div className='form-control'>
            <label htmlFor='username'>Name</label>
            <input
              type='text'
              placeholder='Enter your username'
              name='name'
              className='form-input'
              id='username'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <label htmlFor='contact'>phone</label>
            <input
              type='text'
              placeholder='Enter your phone'
              name='contact'
              id='contact'
              className='form-input'
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              required
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <label htmlFor='pin'>Pin-Code</label>
            <input
              type='text'
              placeholder='Enter your PinCode'
              name='pin'
              id='pin'
              className='form-input'
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
              required
            />
          </div>
          <button type='submit' className='btn btn-form' onClick={SearchData}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nutsearch;
