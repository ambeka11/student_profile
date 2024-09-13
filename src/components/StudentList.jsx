function StudentList({ users, showUserDetails }) {
  return (
    <div className="card">
          <div className="card-header">
          <h4>Students</h4>
          </div>
          <div className="card-body">
          <ul className="list-group">
              {users.map((user) => (
              <li
                  key={user.id}
                  className="list-group-item"
                  onClick={() => showUserDetails(user)}
              >
                  {user.name}
              </li>
              ))}
          </ul>
          </div>
    </div>
  );
}

export default StudentList;
