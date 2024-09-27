/** @format */

"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {

  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event:any){
    console.log("popping toast");
    event.preventDefault();
    const notify = () => toast('Thanks for subscribing.', {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      });

      // Collect form data
    const formData = {
      email: emailRef.current?.value || '',
    };

  axios({
    method: "POST",
    url: 'https://76h86gyo24.execute-api.us-west-2.amazonaws.com/prod/contactUs',
    data: JSON.stringify({
      subject: "This is a News letter subscription from Ace8",
      message: formData,
      toaddress: "randall.mcclure@acemq.com",
      toaddress2: "info@ace8.io"
    }),
    headers: {
      "Content-Type": "application/json",
    }
  }).then(function (response) {
    // Handle success
    notify();
  })
  .catch(function (error) {
    // Handle error
    console.error("There was an error!", error);
  });
}

  return (
    <div className={styles.footerContainer}>
      <div
        className={styles.footerContent}
        style={{
          display: "flex",
          width: "80vw",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.footerItem} style={{}}>
          <div
            className={`${styles.widthMin} ${styles.ok}`}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <Image
                alt="aceLOGO"
                height={896}
                width={1920}
                className={styles.aceLogo}
                src={"/AceITn.png"}
              />
            </div>
          </div>

          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",

              marginTop: "1rem",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                className={styles.icon}
                alt="aceLOGO"
                height={896}
                width={1920}
                src={"/call.png"}
              />
            </motion.div>
            <div
              className={styles.text1}
              style={{
                fontWeight: "300",
                // fontSize: "1vw",
              }}
            >
              305-204-2607
            </div>
          </div>
          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",

              marginTop: "1.5rem",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                className={styles.icon}
                alt="aceLOGO"
                height={896}
                width={1920}
                src={"/email.png"}
              />
            </motion.div>
            <div
              className={styles.text1}
              style={{
                fontWeight: "300",
                // fontSize: "1vw",
              }}
            >
              info@ace8.io
            </div>
          </div>

          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "1.5rem",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                alt="aceLOGO"
                height={896}
                width={1920}
                className={styles.icon2}
                src={"/location.png"}
              />
            </motion.div>
            <div
              className={`${styles.text2} ${styles.ok3}`}
              style={{
                fontWeight: "300",
              }}
            >
              66 W. Flagler St. 9th Floor <br /> Miami, FL 33130
            </div>
          </div>
        </div>

        <div className={`${styles.footerItem} ${styles.ok2}`}>
          <div className={styles.heading3}>Navigate</div>
          <Link href={"/"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: "2vw",
                fontWeight: "200",
              }}
            >
              Home
            </div>
          </Link>
          <Link href={"/about"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8rem",
                fontWeight: "200",
              }}
            >
              About Us
            </div>
          </Link>
          <Link href={"/services"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8rem",
                fontWeight: "200",
              }}
            >
              Services
            </div>
          </Link>
          <Link href={"/blog"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8rem",
                fontWeight: "200",
              }}
            >
              Blog
            </div>
          </Link>
          <Link href={"/stories"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8rem",
                fontWeight: "200",
              }}
            >
              Customer Service
            </div>
          </Link>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.heading3}>Newsletter</div>

          <input
            className={`${styles.text2} ${styles.widthMin}  ${styles.inputContainer}`}
            placeholder="Enter Your Email"
            type="text"
            ref={emailRef}
          />

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.button}
          >
            <Image
              height={100}
              width={100}
              style={{ width: "100%", height: "auto" }}
              alt="Link"
              src={"/submit-btn.png"}
              onClick={handleSubmit}
            />
          </motion.div>
          <ToastContainer />
        </div>

        <div
          className={`${styles.footerItem}  ${styles.marginl}`}
          // style={{ background: "red" }}
        >
          <div className={`${styles.heading3} `}>Connect With Us</div>
          <Link href={"https://www.linkedin.com/company/ace8tech/"}>
            <motion.div
              className={styles.icon3}
              style={{ marginTop: "2.5rem" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height={100}
                width={100}
                style={{ width: "100%", maxWidth: "4rem", height: "auto" }}
                alt="Link"
                src={"/link.png"}
              />
            </motion.div>{" "}
          </Link>
        </div>
      </div>
      <div
        className={`${styles.text1}  ${styles.copyWritsContainer}`}
        style={{ marginLeft: 0 }}
      >
        <span style={{ marginRight: ".5rem" }}>©</span> Copyright Ace8.io 2024.
        All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
