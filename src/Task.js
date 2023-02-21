import React from "react";
import { differenceInDays } from 'date-fns';
import { formatDistance } from "date-fns";

const Task = ({ taskObj, onComplete }) => {

const result=differenceInDays(
  new Date(),
  new Date(taskObj.deadline),
  )

  const result2=formatDistance(
    new Date(taskObj.deadline), 
    new Date(), {
      addSuffix:true
    }
  )
 
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{result>0?result+" gün geçti":result*-1 + " gün kaldı"}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
