import React  from 'react';
import UserForm from './UserForm';

function User(){
  const list = [
    {name: 'John', email: 'john@example.com'},
    {name: 'Luiz', email: 'luiz@example.com'}
  ];

  return (
    <div>
      <UserForm />
      
      <table border='1' cellSpacing='5' cellPadding='5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default User;