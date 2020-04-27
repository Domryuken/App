import React from 'react'
import ApiCalendar from 'react-google-calendar-api';
  


export const Events = () => ApiCalendar.listUpcomingEvents(10).then(({result}) => {
  console.log(result.items);
});