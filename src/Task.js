import React from "react";
import { differenceInDays } from 'date-fns';
import { formatDistance } from "date-fns";

const Task = ({ taskObj, onComplete }) => {

const dateDiffer=differenceInDays(
  new Date(taskObj.deadline),
  new Date(),
  )
//console.log(dateDiffer)
  const result=Math.abs(dateDiffer)

 
  return (
    <div className="p-6 bg-[#fff] rounded-[5px] leading-20 mt-1 shadow-[0_4px_5px_rgb(0,0,0,0.1)]">
      <h3 className="text-[18px] text-[#c8781a] ">{taskObj.title}</h3>
      <div className="text-xm pt-4">son teslim: <span className={`px-[3px] py-[8px] border-solid border rounded-[3px] inline-block ${dateDiffer<=3?"bg-[#ffd9d4]":"bg-[#137ffaf7]"}`}>{dateDiffer>0?dateDiffer+" gün kaldı":result+ " gün geçti"}</span></div>
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
