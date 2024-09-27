/** @format */

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { duration } from "@mui/material";
import styles from "./message-brokers.module.css";
import { ContactForm } from "@/components/contactForm/ContactForm";
import Link from "next/link";

const Messagebroker = () => {
  const [Box1, setBox1] = useState(false);
  const [Box2, setBox2] = useState(false);
  const [Box3, setBox3] = useState(false);
  const [Box4, setBox4] = useState(false);
  const [Box5, setBox5] = useState(false);
  const [Box6, setBox6] = useState(false);
  const [Box7, setBox7] = useState(false);
  const [Box8, setBox8] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  // Animation trigger
  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ x: 0, y: 0, opacity: 1 });
  }
  if (inView3) {
    controls3.start({ x: 0, opacity: 1 });
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
        backgroundColor: "#fff",
        width: "99vw",
        alignItems: "center",
      }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        {isMobile ? (
          <Image
            alt="headerr"
            width={860}
            height={1260}
            draggable={false}
            style={{
              width: "80vw",
              height: "auto",
              marginTop: "-5vw",
            }}
            src={"/brokerheaading.png"}
          />
        ) : (
          <Image
            alt="headerr"
            width={3840}
            height={2148}
            draggable={false}
            style={{
              width: "90rem",
              height: "auto",
            }}
            src={"/headerr.png"}
          />
        )}
      </motion.div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            color: "#000",
            textAlign: isMobile ? "justify" : "center",
            width: "clamp(20rem,75vw,1227px)",
          }}
          className={styles.text2}
        >
          At AceMQ, we have developed a comprehensive practice around message
          brokers. Our engineers possess extensive experience working closely
          with message broker products, including RabbitMQ. Their in-depth
          knowledge and architectural understanding of RabbitMQ allow us to
          seamlessly integrate it into your unique technology stack. As an{" "}
          <Link href={"https://www.rabbitmq.com/commercial-offerings"}>
            <span style={{ fontWeight: "bold" }}>
              internationally accredited partner of RabbitMQ
            </span>
          </Link>
          , we are the go-to choice for all your message broker service needs.
        </div>
        <div>
          <Link href={"https://ace-mq-innovatives.vercel.app/"}>
            <motion.button
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
              className={`${styles.text2} ${styles.learnBtn}`}
            >
              Learn More
            </motion.button>{" "}
          </Link>
          {/* </Link> */}
        </div>
      </div>

      <div
        style={{
          width: isMobile ? "80vw" : "70vw",
          alignSelf: "center",
        }}
      >
        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ opacity: 0, x: -50, y: -50 }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "" : "clamp(40rem,80vw,80rem)",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                color: "#000",
                fontWeight: "bold",
              }}
              className={`${styles.headinglg} ${styles.headingMargin}`}
            >
              Technologies
            </div>

            <div className={styles.techContainer}>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  initial={{ y: 0 }}
                  animate={Box1 ? { y: 7 } : { y: 0 }}
                >
                  <Image
                    alt="rabbitmqr"
                    width={158}
                    height={152}
                    draggable={false}
                    className={styles.rabbitImg}
                    src={"/rabbitmqr.png"}
                    onMouseEnter={() => setBox1(true)}
                    onMouseLeave={() => setBox1(false)}
                  />
                </motion.div>
                <motion.div
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box1 ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                  className={styles.techHeading}
                >
                  RabbitMQ
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: isMobile ? "" : "6rem",
                }}
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  animate={Box2 ? { y: 7 } : { y: 0 }}
                  onMouseEnter={() => {
                    setBox2(true);
                  }}
                  onMouseLeave={() => {
                    setBox2(false);
                  }}
                >
                  <Image
                    alt="awssqs"
                    width={158}
                    draggable={false}
                    height={152}
                    src={"/awssqs.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    transition: "opacity 0.5s ease",
                    opacity: Box2 ? 1 : 0,
                  }}
                >
                  AWS SQS
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  animate={Box3 ? { y: 7 } : { y: 0 }}
                  onMouseEnter={() => {
                    setBox3(true);
                  }}
                  onMouseLeave={() => {
                    setBox3(false);
                  }}
                >
                  <Image
                    alt="pubsub"
                    width={158}
                    draggable={false}
                    height={152}
                    src={"/pubsub.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box3 ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  Google <br />
                  PubSub
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: isMobile ? "" : "6.5rem",
                }}
              >
                <motion.div
                  animate={Box4 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox4(true);
                  }}
                  onMouseLeave={() => {
                    setBox4(false);
                  }}
                >
                  <Image
                    alt="pulsar"
                    width={158}
                    draggable={false}
                    height={152}
                    src={"/pulsar.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box4 ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  Apache <br />
                  Pulsar
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: isMobile ? "" : "6.5rem",
                }}
              >
                <motion.div
                  animate={Box5 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox5(true);
                  }}
                  onMouseLeave={() => {
                    setBox5(false);
                  }}
                >
                  <Image
                    alt="Kafka"
                    width={158}
                    draggable={false}
                    height={152}
                    src={"/kafka.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box5 ? 1 : 0,

                    transition: "opacity 0.5s ease",
                  }}
                >
                  Kafka
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: isMobile ? "" : "12.5rem",
                }}
              >
                <motion.div
                  animate={Box6 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox6(true);
                  }}
                  onMouseLeave={() => {
                    setBox6(false);
                  }}
                >
                  <Image
                    alt="ibm"
                    width={158}
                    height={152}
                    draggable={false}
                    src={"/ibm.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box6 ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  IBM <br />
                  ActiveMQ
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: isMobile ? "" : "6.5rem",
                }}
              >
                <motion.div
                  animate={Box7 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox7(true);
                  }}
                  onMouseLeave={() => {
                    setBox7(false);
                  }}
                >
                  <Image
                    alt="awss"
                    width={158}
                    height={152}
                    draggable={false}
                    src={"/awss.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box7 ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  AWS
                </motion.div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  marginTop: isMobile ? "" : "12.5rem",
                  marginRight: isMobile ? "26vw" : "",
                }}
              >
                <motion.div
                  animate={Box8 ? { y: 7 } : { y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => {
                    setBox8(true);
                  }}
                  onMouseLeave={() => {
                    setBox8(false);
                  }}
                >
                  <Image
                    alt="others"
                    width={158}
                    draggable={false}
                    height={152}
                    src={"/others.png"}
                    className={styles.techImage}
                  />
                </motion.div>
                <motion.div
                  className={styles.techHeading}
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    opacity: Box8 ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  Others
                </motion.div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: isMobile ? "" : "clamp(40rem,80vw,80rem)",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: isMobile ? "" : "clamp(40rem,80vw,80rem)",
                justifyContent: "space-between",
                marginTop: isMobile ? "" : "2rem",
              }}
              className={styles.flexRow}
            >
              <div style={{ marginTop: isMobile ? "" : "2rem" }}>
                <div
                  className={styles.headinglg}
                  style={{
                    fontWeight: "600",
                    color: "#5747A5",
                    fontSize: "4.5rem",
                  }}
                >
                  <span style={{ color: "#000", fontWeight: "normal" }}>
                    Our
                  </span>{" "}
                  Services
                </div>
                <div style={{ color: "#000" }} className={styles.text2}>
                  We offer a range of services to address all your messaging and
                  {!isMobile && <br />}
                  queuing requirements. Our team of seasoned professionals
                  {!isMobile && <br />} excels in delivering top-notch solutions
                  to enhance the reliability,
                  {!isMobile && <br />}
                  scalability, and performance of your MQ systems
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div
                  className={`${styles.serviceCardTop}  ${styles.assessmentsWidth}`}
                  style={{
                    borderRadius: "1rem",
                    height: isMobile ? "73vw" : "22rem",
                    background: "#111518",
                  }}
                />
                <Image
                  alt="cons"
                  width={946}
                  draggable={false}
                  height={968}
                  style={{
                    width: isMobile ? "12vw" : "3.8rem",
                    maxWidth: "10rem",
                    height: "auto",
                    position: "absolute",
                    top: "8%",
                    left: "8%",
                  }}
                  src={"/icon-msg.png"}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "29%",
                    color: "white",
                    fontSize: isMobile ? "5vw" : "2rem",
                    fontWeight: "200",
                    left: "8%",
                    width: isMobile ? "83%" : "85%",
                  }}
                >
                  Assessments{" "}
                  <span style={{ fontWeight: "700" }}>
                    {" "}
                    & <br />
                    <span style={{ color: "#9B88FE" }}>Advisory</span> Role
                  </span>
                  <br />
                  <div
                    style={{
                      fontWeight: "300",
                      fontSize: isMobile ? "3vw" : "0.98rem",
                      // textAlign: "justify",
                      marginTop: "0.5rem",
                    }}
                  >
                    Assesments of existing and planned enviornments based on
                    tool best practices and years of industry expertise. We
                    assess your enviornments on client connectivity, application
                    code, best practices, and current design/development
                    concepts including agile and continous integration.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                justifyContent: "space-between",
                marginTop: "2rem",
                width: isMobile ? "" : "clamp(37rem,80vw,80rem)",
                flexWrap: "wrap",
              }}
              className={styles.flexRow}
            >
              <div style={{ position: "relative" }}>
                <Image
                  alt="cons"
                  width={946}
                  draggable={false}
                  height={968}
                  className={styles.serviceCard}
                  src={"/msgbrokerbox.png"}
                  style={{
                    borderBottomRightRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    color: "white",
                    fontSize: isMobile ? "5.2vw" : "2rem",
                    fontWeight: "200",
                    left: "10%",
                    width: isMobile ? "68%" : "78%",
                  }}
                >
                  <span style={{ fontWeight: "700" }}>
                    <span style={{ color: "#9B88FE" }}>Consulting</span> &{" "}
                    <br />{" "}
                  </span>
                  Troubleshooting
                  <br />
                  <div
                    style={{
                      fontWeight: "300",
                      fontSize: isMobile ? "3vw" : "0.98rem",
                      // textAlign: "justify",

                      marginTop: "1rem",
                      // backgroundColor: "red",
                      // width: "15rem",
                      width: "18rem",
                    }}
                  >
                    Immediate access to Senior MQ Expertise. We have MQ experts
                    on hand to troubleshoot production issues or to consult you
                    on your enviornment.
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Image
                  alt="supp"
                  width={946}
                  draggable={false}
                  height={968}
                  className={styles.serviceCard}
                  src={"/msgbrokerbox4.png"}
                  style={{
                    borderBottomRightRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    color: "white",
                    fontSize: isMobile ? "5.2vw" : "2rem",
                    fontWeight: "200",
                    left: "10%",
                    width: isMobile ? "68%" : "78%",
                  }}
                >
                  <span style={{ fontWeight: "700" }}>
                    <span style={{ color: "#9B88FE" }}>Consulting</span>
                  </span>

                  <br />
                  <div
                    style={{
                      fontWeight: "300",
                      fontSize: isMobile ? "3vw" : "0.98rem",
                      // textAlign: "justify",
                      marginTop: "1rem",
                      width: "18rem",
                      // backgroundColor: "red",
                    }}
                  >
                    Operation and Sustainment of your enviornment. We provide
                    customized solutions to supply you with the support you
                    need. Including Service Level Agreements, Response and
                    Resolution Times, and dedicated support specialists.
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Image
                  alt="train"
                  width={946}
                  draggable={false}
                  height={968}
                  className={styles.serviceCard}
                  src={"/msgbrokerbox3.png"}
                  style={{
                    borderBottomRightRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    color: "white",
                    fontSize: isMobile ? "5.2vw" : "2rem",
                    fontWeight: "200",
                    left: "10%",
                    width: isMobile ? "68%" : "78%",
                  }}
                >
                  <span style={{ fontWeight: "700" }}>
                    <span style={{ color: "#9B88FE" }}>Training</span> & <br />{" "}
                  </span>
                  Mentorship
                  <br />
                  <div
                    style={{
                      fontWeight: "300",
                      fontSize: isMobile ? "3vw" : "0.98rem",
                      // textAlign: "justify",
                      marginTop: "1rem",
                      width: "18rem",
                      // backgroundColor: "red",
                    }}
                  >
                    We provide training, coaching, and advisory on all Messaging
                    and Queuing toolsets. Our goal is to enable your team.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5vw",
                marginTop: "5vw",
              }}
            >
              <Image
                alt="orbit"
                draggable={false}
                width={3084}
                height={1570}
                style={{ width: "80vw", height: "auto" }}
                src={"/msgGlobe.png"}
              />{" "}
              <div
                className={styles.text1}
                style={{ fontWeight: "bold", color: "black" }}
              >
                RabbitMQ Premier Global Services Partner. Recognized by RabbitMQ
                as a Go-To services partner, AceMQ maintains a global footprint,
                but with our headquarters in North America, we are widely
                recognized as the{" "}
                <Link href={"https://www.rabbitmq.com/commercial-offerings"}>
                  <span className={styles.premerTxt}>
                    Premier North American RabbitMQ Partner.
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: isMobile ? "" : "clamp(40rem,80vw,80rem)",
                margin: "0 auto",
              }}
            >
              <Link href={"https://www.rabbitmq.com/commercial-offerings"}>
                <Image
                  alt="orbit"
                  width={3084}
                  height={1570}
                  style={{ width: "90rem", height: "auto" }}
                  src={"/orbit.png"}
                  className={styles.headingMargin}
                />
              </Link>
            </div>
          )}
        </motion.div>
        <motion.div
          ref={ref3}
          animate={controls3}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#000",

              fontWeight: "bold",

              textAlign: "center",
            }}
            className={styles.headinglg}
          >
            <span>
              {" "}
              Our <span style={{ color: "#5747A5" }}>Differentiator</span>
              <br /> &{" "}
            </span>
            <span style={{ fontWeight: "lighter" }}> Value</span>
          </div>

          {!isMobile && (
            <div>
              <Image
                alt="perfomance"
                width={3840}
                height={4024}
                className={styles.valueImg}
                style={{
                  // right: isMobile ? "-1rem" : "-3rem",
                  marginLeft: isMobile ? "-1rem" : "-3rem",
                }}
                src={"/perfomance.png"}
              />
            </div>
          )}
          {isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "5vw",
              }}
            >
              <Image
                alt="perfomance"
                width={1110}
                height={396}
                style={{ width: "80vw", height: "auto" }}
                src={"/diftrouble.png"}
              />
              <Image
                alt="perfomance"
                width={1028}
                height={872}
                style={{ width: "80vw", height: "auto" }}
                src={"/troubledesc.png"}
              />
              <Image
                alt="perfomance"
                width={1110}
                height={396}
                style={{ width: "80vw", height: "auto", marginTop: "5vw" }}
                src={"/consulasses.png"}
              />
              <Image
                alt="perfomance"
                width={1424}
                height={816}
                style={{ width: "80vw", height: "auto", marginTop: "5vw" }}
                src={"/consulassesdesc.png"}
              />

              <Image
                alt="perfomance"
                width={1000}
                height={324}
                style={{ width: "80vw", height: "auto", marginTop: "5vw" }}
                src={"/suppcon.png"}
              />
              <Image
                alt="perfomance"
                width={1496}
                height={776}
                style={{ width: "80vw", height: "auto", marginTop: "5vw" }}
                src={"/suppcondesc.png"}
              />
            </div>
          )}
          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                gap: "4vw",
                textAlign: "center",
                marginBottom: "10vw",
                marginTop: "10vw",
              }}
            >
              <div
                style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
                className={styles.heading1}
              >
                {" "}
                <span style={{ fontWeight: "lighter" }}>
                  Ready to Optimize Your
                </span>{" "}
                <span style={{ color: "#8FD5CC" }}>Messaging and Queuing </span>
                Implementation with{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {" "}
                  Expert Support and{" "}
                </span>
                Power of
                <span style={{ color: "#8FD5CC" }}>Value-Driven Solutions</span>
              </div>
              <div
                style={{ width: "80%", alignSelf: "center" }}
                className={styles.text2}
              >
                Partner with AceMQ, your trusted messaging and queuing services
                provider. Our team of experienced engineers specializes in
                message brokers, including RabbitMQ, and seamlessly integrates
                them into your unique technology stack. As an internationally
                accredited partner of RabbitMQ, we offer comprehensive
                troubleshooting, consulting, and support services tailored to
                your specific requirements.
              </div>
              <motion.button
                style={{
                  marginBottom: "10vw",
                  width: "57%",
                  alignSelf: "center",
                  height: "8vw",
                }}
                key={"id45"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}
              >
                Get Started with AceMQ
              </motion.button>
            </div>
          ) : (
            <motion.div
              style={{ marginTop: "5rem", alignSelf: "center" }}
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              <Image
                alt="optimize"
                width={3240}
                height={1148}
                onClick={() => scrollToContactForm()}
                src={"/optimize.png"}
                style={{
                  width: "clamp(40rem,80vw,105rem)",
                  height: "auto",
                  marginTop: "1rem",
                  marginBottom: "8rem",
                }}
              />
            </motion.div>
          )}

          <ContactForm id="contactForm" />
        </motion.div>
      </div>
    </div>
  );
};

export default Messagebroker;
