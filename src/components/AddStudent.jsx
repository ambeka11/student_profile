import PropTypes from 'prop-types'

function AddStudent({addUser}){
    return (
        <div className="card">
            <div className='card-header'>
                <h4> Add Student</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={addUser}>
                  <div  className='row'>
                    <div className="col">
                      <label> Name</label>
                      <input type="text" className="form-control" name="name" placeholder="Name"/>
                    </div>
                    <div className="col">
                      <label> Email</label>
                      <input type="text" className="form-control" name="email" placeholder="Email"/>
                    </div>
                    <div className="col">
                      <label> Phone Number</label>
                      <input type="text" className="form-control" placeholder="Phone Number"/>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Add Student</button>
              </form>
          </div>
        </div>
    );
}

AddStudent.propTypes = {
    addUser: PropTypes.func.isRequired
}

export default AddStudent;


//The onSubmit event is bound to addUser, which means when the form is submitted, the addUser function will be called.
//PropTypes is used for type-checking the props that are passed to the component.
//addUser is expected to be a function (PropTypes.func.isRequired) and must be provided (isRequired).