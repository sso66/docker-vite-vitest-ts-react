import { useState } from 'react'
import './classroom.css'

import { ISchoolame, IStudent, Level } from './interfaces'
import { studentList, courseList } from './data'
import { DisplayData } from './DisplayData'
import { GenericSort } from './GenericSort'

function Classroom({ name }: ISchoolame) {
  const [student, setStudent] = useState<IStudent | null>(null)
  const [courses, setCourses] = useState(studentList)

  const addStudent = () => {
    setStudent({
      name: 'Sun Stephen',
      surname: 'Oo',
      age: 20,
      level: 'Undergraduate',
    })
  }
  const sortData = () => {
    GenericSort(studentList, 'age')
    setCourses([...studentList])
  }

  return (
    <div className="classroom">
      <h2>{name}</h2>
      <p>
        <b>
          {student?.name} {student?.surname}
        </b>
      </p>
      {student?.level === Level.Undergraduate && (
        <p>
          <b>
            Age: {student.age}: {student.level}
          </b>
        </p>
      )}
      <button onClick={addStudent}>Add Student</button>
      <br />
      <button onClick={sortData}>Sort Data</button>
      <br />
      <h3>List of Students (React State)</h3>
      <div>
        {/* State  */}
        <DisplayData items={courses} />
      </div>
      <h3>List of Courses (React Props)</h3>
      <div>
        {/* Props */}
        <DisplayData items={courseList} />
      </div>
    </div>
  )
}

export default Classroom
