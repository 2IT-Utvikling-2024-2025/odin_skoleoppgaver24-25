import { useState } from "react"
import Student from "./Student"
import "./CSS/ClassList.css";
import "./CSS/Student.css";

export default function ClassList() {
    const [students, setStudents] = useState([
        { name: "Odin", age: 16 },
        { name: "Sara", age: 17 },
        { name: "Lars", age: 17 },
        { name: "Richelle", age: 16 },
        { name: "Karl", age: 18 },
        { name: "Max", age: 19 },
        { name: "Michael", age: 18 },
    ]);

    return (
        <div className="wrapper">
            <h1>Klassekart</h1>
            <div className="classlist-container">
                {students.map((student, index) => (
                    <Student key={index} name={student.name} age={student.age} />
                ))}
            </div>
        </div>
    );
}