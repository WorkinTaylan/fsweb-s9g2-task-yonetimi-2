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
    <div className="p-6 bg-[#fff] rounded-[5px] leading-20 mt-1 shadow-[0_4px_5px_rgb(0,0,0,0.1)]">
      <h3 className="text-[18px] text-[#c8781a] ">{taskObj.title}</h3>
      <div className="text-xm pt-4">son teslim: <span className="px-[3px] py-[8px] border-solid border rounded-[2px] bg-[rgb(255,141,7)] inline-block">{result>0?result+" gün geçti":result*-1 + " gün kaldı"}</span></div>
      <p className="text-[#444] text-[14px] px-[8px] py-[12px]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-[5px] px-[12px] text-[14px] border-solid border border-[#ccc] mr-4 mb-6 rounded-[30px]" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="block py-[8px] px-[12px] ml-[auto] bg-[#fecc91] shadow-[0_4px_5px_rgb(0,0,0,0.05)] rounded-[3px] border-none cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
