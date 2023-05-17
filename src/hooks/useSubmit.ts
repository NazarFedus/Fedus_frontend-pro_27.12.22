import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IData {
  firstName: string;
  email: string;
  phone: string;
}

export function useSubmit() {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate()
  function submit(data: IData, request: string) {
    console.log("Sending data on server:", data);

    if (request === "GET") {
      axios
        .post(`http://localhost:3000/users`, JSON.stringify({...data, timestamp: Date.now()}), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const key = Date.now();
          localStorage.setItem("token", JSON.stringify(key));
          setResponse(response.data);
          navigate('/')
        })
        .catch((error) => {
          console.error(error);
          setResponse(error);
        });
    }
    //     if(request === "POST"){

    //     }
  }

  return { submit, response };
}
