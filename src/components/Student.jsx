import React, { useState, useEffect } from 'react'
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';
import StudentContext from '../context/StudentContext';
import AddStudent from './AddStudent';


const userList=[
  {
    id: 1,
    name: "Padam",
    email: "prakash@nepalexample.com",
    phone: "+977 123 4567",
    location: "Kathmandu, Nepal",
    hobbies: ["Playing Guitar", "Coding", "Reading Books"],
    bio: "Hi, I'm Padam, a passionate computer science student with a love for coding and technology. I'm always eager to learn new things and take on challenging projects. In my free time, I enjoy playing guitar, reading, and experimenting with new programming languages.",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglGRHUhua62jZs5vDUoQVPo4ERrhjCugvmg&s",
  },
  {
    id: 2,
    name: "Arati",
    email: "Arati@nepalexample.com",
    phone: "+977 987 6543",
    location: "Pokhara, Nepal",
    hobbies: ["Painting", "Hiking", "Swimming"],
    bio: "Hello, I'm Arati. I'm a creative thinker who loves working on visual projects. I enjoy painting, hiking, and exploring new places. I am always looking for inspiration in nature and art.",
    profilePic: "https://i.pinimg.com/originals/6e/be/6b/6ebe6bd46b558872dbf322de918a1e65.jpg",
  },
  {
    id: 3,
    name: "Bibek",
    email: "bibek@nepalexample.com",
    phone: "+977 555 6789",
    location: "Lalitpur, Nepal",
    hobbies: ["Gaming", "Cycling", "Photography"],
    bio: "Hey, I'm Bibek. I'm a tech enthusiast and gamer. I love cycling around the city and capturing moments with my camera. My passion for gaming has led me to explore game development as a hobby.",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfdt_5sVONbL1TLdUWBvgkOG2FDJoz7h51g&s"
  }
];


function Student() {
  const [users, setUsers] = useState(userList);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [search, setSearch] = useState("");

    //updates doc title and name of selected user 
    useEffect(() => {
      document.title = selectedUser.name;
    }, [selectedUser]);

  const showUserDetails=(user)=>{
    setSelectedUser(user);
  }


  //this code runs whenever search changes
  useEffect(()=>{
    const filteredUsers = userList.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredUsers.length > 0) {
      setUsers(filteredUsers);
      setSelectedUser(filteredUsers[0]);
    } else {
      setUsers([]);
      setSelectedUser({});
    }    
  }, [search]);


  //for adding a new student
  const addUser = (e)  =>{
    e.preventDefault();
    const userData =  new FormData(e.target);

    console.log(userData.get('name'));
    let newUser = {
      id: users.length + 1,
      name: userData.get('name'),
      email: userData.get('email'),
      phone: userData.get('phone')
    }
    userList.push(newUser);
    setUsers([...userList]);
    e.target.reset();
}

  return (
    <div className="container mt-5">
        <div className="row mb-5">
        <div className="col-md-12">
        <AddStudent addUser={addUser}></AddStudent>
        </div>
      </div>
         <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="Search Student"
          />
        </div>
      </div>
      <div className="row mt-3">
      <div className="col-md-3">
        <StudentList
          users={users}
          showUserDetails={showUserDetails}
        />
      </div>
      <div className="col-md-6">
        <StudentContext.Provider value={selectedUser}>
          {selectedUser.id && (<StudentDetails></StudentDetails>) }
        </StudentContext.Provider>
      </div>
    </div>
    </div>

 
  );
}


export default Student;
