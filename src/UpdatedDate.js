import React from "react";

export default function UpdatedDate(props) {
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
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    if (minutes === 0) {
      minutes = `00`;
    } else {
      minutes = `0${minutes}`;
    }
  }

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
      <li>{dayOfWeek}, {hours}:{minutes}</li>
      <li>{dayOfMonth}, {month}</li>
    </ul>
  </div>)
}
