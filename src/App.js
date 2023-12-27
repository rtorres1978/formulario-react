import React from 'react'
import UserTable from './components/UserTable';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  // useState
  const [users, setUsers] = useState(usersData);

  // Agregar Usuarios
  const addUser = (user) =>{
    users.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar usuario
 const deleteUser = (id) => {
   console.log(id)
   const arrayFiltrado = users.filter(user => user.id !== id)
   setUsers(arrayFiltrado)
 }
// Edit User
const [editting, setEditting] = useState(false);
const initialFormState = { id: null, name: '', username: '' }
const [currentUser, setCurrentUser] = useState(initialFormState);

const editRow = (user) => {
  setEditting(true)
 setCurrentUser({
  id: user.id,
  name: user.name,
  username: user.username
 })

}

const updateUser = (id, updatedUser) => {
  setEditting(false);
  setUsers(users.map(user => (user.id === id ? updatedUser : user)))

}

  return (
 
       <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

  { 
  editting ? (
    <div>
     <h2>Edit user</h2>
          <EditUserForm
          currentUser={currentUser}
          updateUser={updateUser}
          />
         
    </div>
   ) : (
    <div>
     <h2>Add user</h2>
      <AddUserForm addUser={addUser}/>
    </div>
   )
  
  }

 

           
          
         
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
       
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  
  );
}

export default App;
