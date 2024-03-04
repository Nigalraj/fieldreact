import { Icon } from '@iconify/react';
import Content_1 from "./Content_1";
import Content_2 from "./Content_2";

function Sidebar() {
  return (
    <div className="  font ">
        <div className="d-flex flex-column py-2 mx-1">
          <Icon icon="clarity:tasks-line" className="mx-3" width="40" height="35"/>
          <span className="text-center">Tasks</span>
        </div>
        <div className="d-flex flex-column  py-2 mx-1">
          <Icon icon="ion:calendar-outline" className="mx-3" width="40" height="35"/>
          <span className="text-center">Calendar</span>
        </div>
        <div className="d-flex flex-column  py-2 mx-1">
          <Icon icon="mdi:report-line"className="mx-3" width="40" height="35"/>
          <span className="text-center">Reports</span>
        </div>
        <div className="d-flex flex-column py-2 mx-1">
          <Icon icon="heroicons-outline:users" className="mx-3"  width="40" height="35"/>
          <span className="text-center">Users</span> 
        </div>
        <div className="d-flex flex-column  py-2 mx-1">
          <Icon icon="lets-icons:setting-fill" className="mx-3" width="40" height="35"/>          
          <span className="text-center">Settings</span>
        </div>
        <div className="d-flex flex-column  py-2 mx-1">
          <Icon icon="ic:outline-contact-support"className="mx-3"  width="40" height="35"/>
          <span className="text-center">Support</span>
        </div>
        <div className="d-flex flex-column py-2 mx-1">
          <Icon icon="bi:speedometer2" className="mx-3"  width="40" height="35"/>
          <span className="text-center">Super Admin</span>
        </div>
      </div>
  );
}

export default Sidebar;