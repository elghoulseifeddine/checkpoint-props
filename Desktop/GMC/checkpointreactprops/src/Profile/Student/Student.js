import React from 'react';
import Carde from '../Carde/Carde';

const Student = (props) => {

  return (
    <div className="student">
     {props.data.map((s)=> (<Carde name={s.FullName} age={s.age} prof={s.Profession} />))} 
    </div>
  );
}
 
export default Student;
