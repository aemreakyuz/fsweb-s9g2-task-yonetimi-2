import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline);

  const distance = formatDistanceToNow(deadline, {
    locale: tr,
    addSuffix: true,
  });

  const today = new Date();

  function getClassName(date) {
    const difference = differenceInDays(date, today);

    return difference > 3 ? "normal" : "urgent";
  }
  const bg = getClassName(deadline);

  return (
    <div className="p-6 bg-white rounded leading-normal mt-4 shadow-md ">
      <h3 className="text-lg text-orange">{taskObj.title}</h3>
      <div className="text-[12px] pt-1">
        son teslim:{" "}
        <span className={`py-1.5 px-2 rounded inline-block ${bg}`}>
          {distance}
        </span>
      </div>
      <p className="pt-2 px-0 pb-3 text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1.5 px-3 text-m mr-1 mb-1.5 rounded-3xl border-2 border-[#ccc] border-solid "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="py-2 px-3 block ml-auto bg-yellow shadow-md rounded border-0  cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
