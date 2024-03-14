import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

function MyApp() {
  const [events, setEvents] = useState([]);
  const eventse = [
    {
      title: 'Event 1',
      date: '2024-03-11',
    },
    {
      title: 'jaavith',
      date: '2024-03-17',
    }
  ];

  useEffect(() => {
 
    axios.get('http://localhost:3002/api/calender', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMDM5OTU5MCwiZXhwIjoxNzEwNDAzMTkwfQ.Hwok_bJIfwAKwEEYyZ6k_TkAMTNHfXQYxfWkU2AICrE` // Include token in the 'Authorization' header
      }
    })
      .then(response => {
       const form = response.data.map(({ StartTime, EndTime, Title,Date }) => ({
          start: StartTime,
          end:EndTime,
          title: Title
        }));
        console.log(eventse);
        console.log(form);
        setEvents(form);
      }) 
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []); 

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}

export default MyApp;
