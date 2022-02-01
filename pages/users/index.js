import { useEffect, useState } from "react";

const Users = ({users}) => {
  // const [users, setUsers] = useState([])
  // useEffect(async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users")
  //   const data = await response.json()
  //   setUsers(data)
  // }, [])
  
  return (  
    <>
    <h1>Users</h1>
    {users && users.map(user => {
      return <p>{user.name}</p>
    })}
    </>
  );
}
 
export default Users;

Users.getInitialProps = async (context) => {
    console.log(context.params);
    console.log("jjjjjjjj");
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return{
      users:data
    }
 }