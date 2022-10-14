import React from 'react';
import {StudentType} from './../App';

type StudentsComponentType = {
    students: Array<StudentType>
}

export const StudentsComponent = (props: StudentsComponentType) => {
    return (
        <>
            <ul>
                {props.students.map((student: StudentType) => {
                    return (
                        <li key={student.id}>
                            <span><b>{student.name}</b> age: {student.age}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};
