import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Sidebar() {


  return (
    <div className="ms-0 w-100 h-100">
        <div className="d-flex flex-column py-2 align-items-center">
         <Link to="/dashboard/tasks" className="d-flex text-dark flex-column align-items-center text-decoration-none">
         <Icon icon="clarity:tasks-line" className="" width="40" height="35"/>
          <span className="text-center">Tasks</span>
          </Link>
      </div>
      <div className="d-flex flex-column  py-2  align-items-center mx-1">
      <Link to="/dashboard/calendar" className="d-flex text-dark flex-column align-items-center text-decoration-none">
        <Icon icon="ion:calendar-outline" className="mx-3 " width="40" height="35" />
        <span className="text-center">Calendar</span>
      </Link>
        </div>
        <div className="d-flex flex-column  py-2 align-items-center mx-1">
          <Icon icon="mdi:report-line"className="mx-3" width="40" height="35"/>
          <span className="text-center">Reports</span>
        </div>
        <div className="d-flex flex-column py-2 align-items-center mx-1">
        <Link to="/dashboard/user" className="d-flex text-dark flex-column align-items-center text-decoration-none">
          <Icon icon="heroicons-outline:users" className="mx-3"  width="40" height="35"/>
          <span className="text-center">Users</span> 
        </Link>
        </div>
        <div className="d-flex flex-column  py-2 align-items-center mx-1">
          <Icon icon="lets-icons:setting-fill" className="mx-3" width="40" height="35"/>          
          <span className="text-center">Settings</span>
        </div>
        <div className="d-flex flex-column align-items-center py-2 mx-1">
          <Icon icon="ic:outline-contact-support"className="mx-3"  width="40" height="35"/>
          <span className="text-center">Support</span>
        </div>
        <div className="d-flex flex-column py-2 align-items-center  mx-1">
          <Icon icon="bi:speedometer2" className="mx-3"  width="40" height="35"/>
          <span className="text-center">Super Admin</span>
        </div>
      </div> 
    
   
  );
}

export default Sidebar;