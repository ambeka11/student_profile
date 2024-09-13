import { createContext } from "react";

const StudentContext = createContext();

export default StudentContext;

//Context helps in avoiding the need to pass data through several layers of components.
//Context allows unrelated components to access and modify shared data without prop drilling.