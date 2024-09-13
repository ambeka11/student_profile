import { useContext } from "react";
import StudentContext from "../context/StudentContext";

function StudentBio(){
    const student = useContext(StudentContext)
    return(
        <div className="card mt-5">
                    <div className='card-header'>
                        <h4>Student Bio</h4>
                    </div>
                    <div className='card-body'>
                        <p>{student.bio}</p>
                    </div>
              </div>
    )
}

export default StudentBio;