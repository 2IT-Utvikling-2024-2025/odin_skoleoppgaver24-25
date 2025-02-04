import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CSS/ClassList.css";
import "./CSS/Student.css";

export default function ClassList() {
    const { id } = useParams(); 
    const [students] = useState([
        { id: 1, name: "Odin", age: 16 },
        { id: 2, name: "Sara", age: 17 },
        { id: 3, name: "Lars", age: 17 },
        { id: 4, name: "Richelle", age: 16 },
        { id: 5, name: "Karl", age: 18 },
        { id: 6, name: "Max", age: 19 },
        { id: 7, name: "Michael", age: 18 },
    ]);

    if (id) {
        
        const student = students.find((student) => student.id === parseInt(id));

        return (
            <div className="wrapper">
                <h1>{student.name}</h1>
                <div className="student_wrapper">
                    <div className="student">
                        <h2>{student.name}</h2>
                        <p><strong>Age:</strong> {student.age}</p>
                    </div>
                </div>
                <Link to="/" className="back-link">Tilbake til Klasseliste</Link>
            </div>
        );
    }

   
    return (
        <div className="wrapper">
            <h1>Klasseliste</h1>
            <div className="classlist-container">
                {students.map((student) => (
                    <div key={student.id} className="student_wrapper">
                        <Link to={`/student/${student.id}`} className="student">
                            <h2>{student.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
