import React from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const Alerts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlerts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/alerts')
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
    return <div>Loading...</div>;
  }
  return (

    <>
      {alert.map((alerts) => (
          <Alert
            style={{
              width: "60%",
              margin: "auto",
              textAlign: "center",
              backgroundColor: "#414042",
              color: "#ffffff",
              border: "none",
            }}
            key={alerts.id}
          >
            {/* {alerts.title} */}
            <p>{alerts.content}</p>
          </Alert>
))};
    </>
  );
};

export default Alerts;
