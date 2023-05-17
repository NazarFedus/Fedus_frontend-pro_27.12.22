import React from "react";
import styles from "./Home.module.scss";

import { useLoaderData } from "react-router-dom";

function Home() {
  const user = useLoaderData();
  console.log(user)
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Welcome to the Home Page!</h3>
        <p style={{color: 'green'}}>You have successfully registered</p>
      </div>
      <div>
        <p>Your personal information:</p>
        <ul>
          <li>Name: {user.firstName}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
