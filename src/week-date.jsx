import React from "react";

export default function WeekDate() {
  const dates = [
    {
      day: "MON",
      date: 9,
    },
    {
      day: "TUE",
      date: 10,
    },
    {
      day: "WED",
      date: 11,
    },
    {
      day: "THU",
      date: 12,
    },
    {
      day: "FRI",
      date: 13,
    },
    {
      day: "SAT",
      date: 14,
    },
    {
      day: "SUN",
      date: 15,
    },
  ];
  return (
    <>
      <div className="items">
        {dates.map((item) => (
          <Dates item={item} key={item.day} />
        ))}
      </div>
    </>
  );
}

const Dates = ({ item }) => {
  return (
    <div className="item">
      <div className="item-day"> {item.day}</div>
      <div className="item-date">{item.date}</div>
    </div>
  );
};
