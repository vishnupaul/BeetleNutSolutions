import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminProfile() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/admin');
      if (res) {
        setUsers(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`admin/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [deleteUser]);

  return (
    <div>
      <table>
        <tr>
          <th>UserName</th>
          <th>Contact</th>
          <th>searched pin</th>
          <th>Time</th>
          <th>Remove </th>
        </tr>
        {users.map((user) => {
          const { name, contact, pin, createdAt, _id } = user;
          return (
            <>
              <tr>
                <td>{name} </td>
                <td>{contact} </td>
                <td>{pin} </td>
                <td>{new Date(createdAt).toDateString()} </td>
                <td>
                  <button
                    type='submit'
                    className='btn btn-form'
                    onClick={() => deleteUser(_id)}
                  >
                    remove
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default AdminProfile;
