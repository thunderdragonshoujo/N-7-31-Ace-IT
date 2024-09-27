/** @format */

"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./automation.module.css";
import { colors } from "../../../utils/Theme";
import Link from "next/link";
import { clamp, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "@/components/contactForm/ContactForm";

const AutomationPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Animation Controls //
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  // Animation InViews //

  const [ref, InView] = useInView();
  const [ref1, InView1] = useInView();
  const [ref2, InView2] = useInView();
  const [ref3, InView3] = useInView();
  const [ref4, InView4] = useInView();

  if (InView) {
    control.start({ opacity: 1, x: 0 });
  }
  if (InView1) {
    control1.start({ opacity: 1, y: 0, x: 0 });
  }
  if (InView2) {
    control2.start({ opacity: 1, x: 0 });
  }
  if (InView3) {
    control3.start({ opacity: 1, x: 0, y: 0 });
  }
  if (InView4) {
    control4.start({ opacity: 1, x: 0 });
  }
  function scrollToContactForm() {
    // useEffect(() => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      if (typeof window !== undefined) {
        const offset = -100; // Adjust this value as needed
        window.scrollBy({ top: offset, behavior: "smooth" });
      }
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
    // }, []);
  }
  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 870) {
        setIsMobile(true);
        console.log("True", isMobile);
      } else {
        setIsMobile(false);
        console.log("False", isMobile);
      }
    };

    if (typeof window !== "undefined") {
      handleSize();
      window.addEventListener("resize", handleSize);

      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "99vw",
        backgroundColor: "#0d111c",
        alignSelf: "center",
        // alignItems: "center",
      }}
    >
      <motion.div
        animate={control}
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          height: isMobile ? "50rem" : "70vw",
          maxHeight: "90rem",
        }}
      >
        {" "}
        <div
          style={{
            width: "clamp(20rem, 100%, 110.6rem)",
            height: isMobile ? "30rem" : "40vw",
            maxHeight: "50rem",
            backgroundColor: "#050717",
            borderBottomLeftRadius: "60vw",
            borderBottomRightRadius: "60vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isMobile ? (
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                // width: '75vw',
                width: "clamp(18rem, 75vw, 80.6rem)",
                height: "auto",
                marginTop: "",
              }}
              src={"/autoHeaderMob.png"}
            />
          ) : (
            <Image
              alt="abt"
              height={933}
              width={2804}
              style={{
                width: "clamp(30rem, 60vw, 70rem)",
                height: "auto",
                alignSelf: "center",
                // marginTop: "clamp(5rem , 10vw, 10rem)",
                // borderRadius: "3vw",
              }}
              src={"/automatedd.png"}
            />
          )}

          {isMobile ? (
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                // width: "85vw",
                width: "clamp(18rem, 85vw, 80.6rem)",
                height: "auto",
                marginTop: "clamp(5rem, 28vw, 30rem)",
                alignSelf: "center",
                position: "absolute",
                zIndex: 11,
                bottom: 0,
              }}
              src={"/autoMobCode.png"}
            />
          ) : (
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                // width: "60vw",
                width: "clamp(20rem, 60vw, 80.6rem)",
                height: "auto",
                alignSelf: "center",
                // marginTop: "10rem",
                position: "absolute",
                zIndex: 11,
                bottom: "clamp(1rem,3vw,3rem)",
              }}
              src={"/automationCode.png"}
            />
          )}
        </div>
      </motion.div>
      {/* Container1 */}
      <div className={styles.contentContainerColumn}>
        <motion.div
          animate={control1}
          initial={{ opacity: 0, x: -50, y: -50 }}
          transition={{ duration: 1 }}
          ref={ref1}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className={`${styles.heading1} ${styles.manualsContainer}`}
              style={{ fontSize: "3.5rem" }}
            >
              Are You <span style={{ fontWeight: "lighter" }}> Tired of</span>{" "}
              <span style={{ color: colors.secondary }}> Manual Testing?</span>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: isMobile ? "" : "1.1rem",
              }}
              className={`${styles.text2} ${styles.contentWidth}`}
            >
              Are you tired of manually testing your e-commerce application,
              wasting valuable time and resources on tedious and{" "}
              {!isMobile && <br />}repetitive tasks? Our automated testing
              service offers a unique approach that sets us apart from the
              competition.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className={styles.contentContainerRow}
              style={{
                alignItems: isMobile ? "center" : "center",
                // width: "65vw",
                // width: "clamp(20rem, 65vw, 80.6rem)",
                marginTop: "clamp(1rem, 2vw, 2rem)",
                justifyContent: "space-between",
                flexWrap: "wrap",
                // gap: "6rem",
                // width: "80rem",
                gap: "6rem",
                // backgroundColor: "red",
              }}
            >
              {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
              <div className={styles.heading1} style={{ fontSize: "3.5rem" }}>
                {" "}
                <span
                  style={{ fontWeight: "lighter", color: colors.secondary }}
                >
                  Our
                </span>{" "}
                Offerings
              </div>
              {/* <div
                  style={{ lineHeight: 'clamp(2rem, 4vw, 4rem)' }}
                  className={styles.text1}>
                  Our offerings include:
                </div> */}
              {/* </div> */}
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  className={styles.imageFlow}
                  style={{
                    height: "auto",
                    // alignSelf: "center",
                  }}
                  src={"/contaut1.png"}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ x: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}
          className={styles.parentColumn}
        >
          <div
            style={{
              // width: "80rem",
              // minWidth: "50rem",
              position: "relative",
              // left: "clamp(-2rem, -5vw, -5rem)",
              flexWrap: "wrap",
              // backgroundColor: "red",
              height: "auto",
              // justifyContent: "center",
            }}
            className={styles.contentContainerRow}
          >
            <div
              className={styles.containerWidth}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={`${styles.heading1} ${styles.widthH}`}>
                <span style={{ fontWeight: "lighter" }}>Thorough</span>{" "}
                <span style={{ color: "#8FD5CC" }}></span>{" "}
                <span style={{ color: "#8FD5CC" }}>Testing</span>{" "}
                <span style={{ fontWeight: "lighter" }}>with</span> Three
                Critical
                <span style={{ color: "#8FD5CC" }}> Components</span>
              </div>
              <div
                style={{
                  marginTop: isMobile ? "" : "clamp(.5rem, 1vw, 1rem)",
                  fontSize: isMobile ? "" : "1rem",
                  // width: "26rem",
                  // backgroundColor: "green",
                }}
                className={styles.text2}
              >
                Our approach includes three critical components that ensure
                {!isMobile && <br />} your e-commerce application is thoroughly
                tested:
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  className={styles.lineWidth}
                  style={{
                    height: "auto",
                    alignSelf: "center",
                  }}
                  src={"/autoLine1.png"}
                />
              </div>
              <div
                style={{
                  fontSize: isMobile ? "" : "1rem",
                  width: "clamp(25rem,70vw,41rem)",
                  // backgroundColor: "green",
                }}
                className={styles.text2}
              >
                Through crowd-sourced development of test cases, we bring{" "}
                together a community of {!isMobile && <br />} testers to create
                comprehensive and diverse test cases for your application. Our
                AI-{!isMobile && <br />}enhanced test code then ensures that
                these test cases are efficient and effective, saving you time
                and resources.
              </div>
            </div>
            <div>
              <Image
                className={styles.autoImageWidth}
                alt="abt"
                height={896}
                width={1920}
                style={{
                  height: "auto",
                  marginTop: "clamp(3rem, 3vw, 3rem)",
                  alignSelf: "center",
                  position: "relative",
                }}
                src={"/codeauto.png"}
              />
            </div>
          </div>
          <div
            style={{
              gap: "clamp(3rem, 3vw, 3rem)",
              alignItems: "center",
              // width: "clamp(20rem, 80vw, 80.6rem)",
              alignSelf: "center",
              marginTop: isMobile ? "" : "clamp(2rem, 5vw, 5rem)",
              flexWrap: "wrap",
            }}
            className={styles.contentContainerRow}
          >
            <div>
              <Image
                alt="abt"
                height={896}
                width={1920}
                className={styles.cicd}
                style={{
                  height: "auto",
                  alignSelf: "center",
                }}
                src={"/cicd.png"}
              />
            </div>
            <div
              className={styles.containerWidth}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className={styles.heading1}>
                <span style={{ fontWeight: "lighter" }}>Seamless</span>{" "}
                <span style={{ color: colors.secondary }}>Integration</span>
                <br /> and Support
              </div>
              <div
                style={{
                  marginTop: "clamp(.5rem,.95vw,1rem)",
                  fontSize: isMobile ? "" : "1.2rem",
                  width: isMobile ? "" : "clamp(20rem, 70vw, 40rem)",
                  // backgroundColor: "red",
                }}
                className={styles.text2}
              >
                Finally, we seamlessly integrate the execution of these
                automated
                {!isMobile && <br />}tests into your existing CI/CD pipeline,
                ensuring that your application {!isMobile && <br />}is
                thoroughly tested with every update. And if you don&apos;t have
                a CI/CD pipeline, we can help you get started on the path to
                more efficient and reliable software delivery.
              </div>
            </div>
          </div>
        </motion.div>
        {/* CARD CONTAINER  */}

        <motion.div
          className={styles.cardWidth}
          ref={ref3}
          animate={control3}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          {isMobile ? (
            <Image
              alt="abt"
              height={896}
              width={1920}
              className={styles.cardWidth}
              style={{
                height: "auto",
                marginTop: "clamp(1rem, 3vw, 3rem)",
                alignSelf: "center",
              }}
              src={"/mobileCardAutomation.png"}
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => scrollToContactForm()}
              style={{
                marginBottom: "4rem",
              }}
              className={styles.autoCardWidth}
            >
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  width: "clamp(20rem, 80vw, 80.6rem)",
                  height: "auto",
                  marginTop: "clamp(1rem, 3vw, 3rem)",
                }}
                src={"/automationCard1.png"}
              />
            </motion.div>
          )}

          {/* CONTACT CONTAINER */}
        </motion.div>
        <ContactForm
          id="contactForm"
          // containerStyles={{
          //   margin: "6rem auto",
          //   marginLeft: isMobile ? "" : "-4rem",
          // }}
        />
      </div>
    </div>
  );
};
export default AutomationPage;
