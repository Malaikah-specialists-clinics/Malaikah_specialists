import React from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from '../Constants/index.js';

const Alerts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlerts] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/alerts`)
      .then((res) => {
        setIsLoading(false);
        setAlerts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log({ message: err });
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      {alert.map((alerts) => (
        <Alert
        className="alert"
          variant="success"
          key={alerts.id}
        >
          
          <p>
            {alerts.title}: {alerts.content}
          </p>
        </Alert>
      ))}
      
    </>
  );
};

export default Alerts;
