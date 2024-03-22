import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import headers from '../utils/data';

function MyApp() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
 
    axios.get('http://localhost:3002/api/calender', {
      headers:headers
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
