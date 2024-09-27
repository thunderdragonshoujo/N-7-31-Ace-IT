/** @format */

import React, { useRef } from "react";
import styles from "./contactForm.module.css";
import { colors } from "../../utils/Theme";

import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ containerStyles, id }: any) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const messageRef: any = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  };
  const focusemail = () => {
    if (emailRef.current) {
      emailRef.current?.focus();
    }
  };
  const focusmessage = () => {
    if (messageRef.current) {
      messageRef.current?.focus();
    }
  };

  function handleSubmit(event:any){
    console.log("popping toast");
    event.preventDefault();
    const notify = () => toast('Thank you for your interest, we will contact you soon.', {
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
      Name: inputRef.current?.value || '',
      email: emailRef.current?.value || '',
      messssage: messageRef.current?.value || '',
    };

  axios({
    method: "POST",
    url: 'https://76h86gyo24.execute-api.us-west-2.amazonaws.com/prod/contactUs',
    data: JSON.stringify({
      subject: "This is a Contact Us request from Ace8",
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
    formRef.current?.reset()
  })
  .catch(function (error) {
    // Handle error
    console.error("There was an error!", error);
  });
}

  return (
    <>
      <div style={containerStyles} className={styles.devSection}>
        <div
          id={id}
          style={{
            width: "3rem",
            height: "3rem",
            position: "absolute",
            top: "-8rem",
            left: 0,
          }}
        ></div>
        <div
          style={{
            marginLeft: "2rem",
            position: "relative",
          }}
          className={styles.devContentContainer}
        >
          <div className={styles.contactCard1}>
            Contact<span style={{ color: colors.primary }}>&nbsp;Us</span>
          </div>
          <div style={{ marginBottom: "1rem" }} className={styles.servieText}>
            Contact Us to Speak with One of our Experts
          </div>
          <div className={styles.flexRow}>
            <Image
              className={styles.imgMin}
              alt="bg"
              height={896}
              width={1920}
              src={"/c1.png"}
            />
            <div className={styles.servieText}>info@ace8.io</div>
          </div>

          <div className={styles.flexRow}>
            <Image
              className={styles.imgMin}
              alt="bg"
              height={896}
              width={1920}
              src={"/c2.png"}
            />
            <div className={styles.servieText}>305-204-2607</div>
          </div>
          <div className={styles.flexRow}>
            <Image
              className={styles.imgMin}
              alt="bg"
              height={896}
              width={1920}
              src={"/c3.png"}
            />
            <div className={styles.servieText}>
              66 W. Flagler St. 9th Floor Miami, FL 33130
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <div style={{ display: "flex", gap: "1.2rem" }}>
            <div className={styles.inputItem} style={{ alignItems: "end" }}>
              <div className={styles.name}>
                <Image
                  src={"/contact-logo.png"}
                  alt="email"
                  height={50}
                  onClick={focusInput}
                  width={80}
                  style={{ marginBottom: 30 }}
                  // className={styles.email}
                />
              </div>
              <input
                className={styles.contactInput}
                placeholder="Name"
                ref={inputRef}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className={styles.inputItem} style={{ alignItems: "end" }}>
              <div className={styles.email}>
                <Image
                  src={"/email-logo.png"}
                  alt="email"
                  onClick={focusemail}
                  height={50}
                  width={80}
                  style={{ marginBottom: 30 }}
                />
              </div>
              <input
                className={styles.contactInput}
                placeholder="Email"
                ref={emailRef}
                type="email"
                name=""
                id=""
              />
            </div>
          </div>
          <div className={styles.inputItem} style={{}}>
            <div className={styles.message}>
              <Image
                src={"/chat-logo.png"}
                alt="email"
                onClick={focusmessage}
                height={50}
                width={80}
              />
            </div>
            <textarea
              className={styles.contactTextArea}
              placeholder="Message"
              ref={messageRef}
              name=""
              id=""
              cols={50}
              rows={10}
            ></textarea>
          </div>
          <div className={styles.inputItem} style={{ border: "none" }}>
            <motion.button
              style={{
                background: "linear-gradient(180deg, #FF88C3, #9B86FE)",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.contactCard}
              onClick={handleSubmit}
            >
              Submit
            </motion.button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};
