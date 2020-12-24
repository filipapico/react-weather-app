import React from "react";

export default function UpdatedForecastDate(props) {
  let date = new Date(props.newDate)
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = days[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayOfMonth = date.getDate();
  let month = months[date.getMonth()];

  return (
  <div>
    <ul>
      <li>{dayOfMonth} {month} </li>
    </ul>
  </div>)
}
