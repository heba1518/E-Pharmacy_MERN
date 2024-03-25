// // import { notification } from "antd";
// import { notification } from 'antd';

// const openNotification = (type, title, description) => {
//   notification.open({
//     message: title,
//     description:
//       description,
//     duration: 3, // Duration in seconds
//     placement: 'topRight', // Placement of the notification
//     onClick: () => {
//       console.log('Notification Clicked!');
//     },
//   });
// };

// export default openNotification;
import React, { useState, useEffect } from "react";
import "./Notification.css"; // Import your CSS file for styling

const Notification = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`notification ${type} ${isVisible ? "show" : "hide"}`}>
      <div className="notification-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
