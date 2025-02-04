import './CSS/App.css';
import Layout from './Layout';
import ClassList from './ClassList';
import StudentList from './ClassList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<ClassList />} />
          <Route path="/student/:id" element={<ClassList />} />
          <Route path="/api/" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
