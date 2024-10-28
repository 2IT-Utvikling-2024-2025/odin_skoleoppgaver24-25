import "./CSS/ClassList.css";
import "./CSS/Student.css";

export default function Student(props) {
    return (
        <div className="student_wrapper">
        <div className="student">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
        </div>
    );
}
