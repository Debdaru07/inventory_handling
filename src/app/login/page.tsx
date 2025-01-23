"use client";
import React from "react";
import styles from "../Login.module.css";

const LoginPage = () => {
  
    return (
        <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logo}>
            <img src="assets/logo_perfect.png" />
          </div>
          <h1 className="text-white">Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
            />
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

export default LoginPage;
