import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

function MyApp() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
 
    axios.get('http://localhost:3002/api/calender', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcxMDczODcyMywiZXhwIjoxNzEwODI1MTIzfQ.iYot3QmgpcgYLQN7KECzjn4utb1yw0HCPMf1m-Z5pHI`
      }
    }).then(response => {
       const form = response.data.map(({ StartTime, EndTime, Title }) => ({
          start: StartTime,
          end: EndTime,
          title: Title
        }));
        setEvents(form);
      }) 
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []); 

  return (
    <div className='mt-2'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}

export default MyApp;
