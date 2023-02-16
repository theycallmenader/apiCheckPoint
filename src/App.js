import './App.css';
import UserList from './UserList';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);
  const image = [
    { 
  poster : "https://media.licdn.com/dms/image/C4E03AQHADJMuZIYNAQ/profile-displayphoto-shrink_200_200/0/1657188762769?e=1677715200&v=beta&t=7e-S_zmQYJRcuSRgQfwX6LPOGJ5bXQC0N4UW2ksRsMA"     
},
{  poster : "https://media.licdn.com/dms/image/C4E03AQHADJMuZIYNAQ/profile-displayphoto-shrink_200_200/0/1657188762769?e=1677715200&v=beta&t=7e-S_zmQYJRcuSRgQfwX6LPOGJ5bXQC0N4UW2ksRsMA"     
}

  ]
  
  useEffect(() => {
    try
  {  axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        console.log(res);
        setUsers(res.data)
      });}
  catch (error) {
    console.log(error)}},
     []);
  console.log(users);
  return (
    < >
      <div>
        
        <UserList users={users} image={image}  />
        
      </div>

    </>
  );
}
export default App;
