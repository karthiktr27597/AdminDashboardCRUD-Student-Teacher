import { createContext, useState } from "react";
import React from 'react'
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export const MyContext = createContext();

function ContextProvider({ children }) {

    const [student, setStudent] = useState(Student)
    const [teacher, setTeacher] = useState(Teacher)


    return (
        <MyContext.Provider value={{ student, setStudent, teacher, setTeacher }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider

