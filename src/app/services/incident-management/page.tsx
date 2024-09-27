/** @format */

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import styles from "./incident-management.module.css";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { useInView } from "react-intersection-observer";

const IncidentManagementPage = () => {
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
        width: "99vw",
      }}
    >
      <div
        style={{
          backgroundImage: "url('/top.png')",
          backgroundSize: "cover",
          width: "99vw",
          height: isMobile ? "55vw" : "45rem",
          mixBlendMode: "overlay",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "99vw",
            height: isMobile ? "55vw" : "45rem",
            backgroundColor: "navy",
            mixBlendMode: "overlay",
          }}
        />
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          marginTop: isMobile ? "4rem" : "12rem",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          alignSelf: "center",
        }}
      >
        <div className={styles.headertxt}>
          Comprehensive{" "}
          <span style={{ color: "#fff", fontWeight: "300" }}>
            Incident <br /> Management{" "}
            <span style={{ fontWeight: "bold" }}>for</span>
          </span>{" "}
          Reliable <br />{" "}
          <span style={{ color: "#fff", fontWeight: "300" }}>Operations</span>
        </div>
        <div
          className={styles.text1}
          style={{
            fontWeight: "300",
            textAlign: "center",
            color: "#fff",
            marginTop: isMobile ? "" : "2rem",
          }}
        >
          Trust our Unique Approach for Effective Incident Resolution
        </div>
      </motion.div>

      <div
        style={{
          backgroundColor: "#06091b",
          height: "auto",
          width: "99vw",
          paddingBottom: "6rem",
        }}
      >
        <div
          className={`${styles.flexRow}  ${styles.alignCenter}`}
          style={{
            justifyContent: "flex-end",
            margin: "0 auto",
            marginTop: "6rem",
            width: isMobile ? "" : "clamp(30rem,99vw,120rem)",
            alignItems: "center",
            gap: "clamp(5rem,20vw,20rem)",
          }}
        >
          <div className={styles.mobColumn} style={{ marginTop: "2.5rem" }}>
            <div
              className={styles.heading1}
              style={{
                fontWeight: "bold",
                color: "#ff88c3",
                width: isMobile ? "" : "40vw",
                maxWidth: "38rem",
              }}
            >
              Experience Proactive{" "}
              <span style={{ fontWeight: "300", color: "#fff" }}>
                Incident Management
              </span>
            </div>

            <div>
              <Image
                alt="exper"
                width={1398}
                height={164}
                src={"/exper.png"}
                className={styles.expCard}
                style={{ marginTop: "2rem" }}
              />
            </div>

            <div
              className={styles.text2}
              style={{
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
                width: isMobile ? "" : "clamp(20rem,30vw,40rem)",
              }}
            >
              Look no further than our incident management service, with a
              unique approach that sets us apart from the competition.
            </div>

            <div
              className={styles.text2}
              style={{ width: isMobile ? "" : "clamp(20rem,30vw,50rem)" }}
            >
              Our approach focuses on two critical components often overlooked
              in traditional incident management strategies: intense
              documentation efforts and the design and execution of chaos
              engineering experiments. By thoroughly documenting your system and
              running simulated chaos scenarios, we ensure that we are fully
              prepared to handle any incident that comes our way.
            </div>
          </div>
          <div>
            <Image
              alt="pro"
              width={1838}
              height={1298}
              src={"/pro.png"}
              className={styles.imageWidthMid}
              style={{}}
            />
          </div>
        </div>
        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ x: -50, y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div
            className={`${styles.gap}  ${styles.mBottom}`}
            style={{
              width: isMobile ? "" : "clamp(30rem,70vw,70rem)",
              textAlign: "center",
              marginTop: "5rem",
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className={styles.heading1}
              style={{
                fontWeight: "bold",
                color: "#fff",
                paddingBottom: 10,
              }}
            >
              Leveraging <span style={{ fontWeight: "200" }}>the Power of</span>
              {!isMobile && <br />}
              <span style={{ color: "#9b86fe" }}> Netflix Dispatch</span>
            </div>
            <div
              className={styles.text2}
              style={{
                marginTop: ".3rem",
                marginBottom: "1.5rem",
                border: "",
                width: isMobile ? "80vw" : "70vw",
                maxWidth: "85rem",
              }}
            >
              Ace8&apos;s Incident Management offering takes full advantage of
              Netflix Dispatch, the revolutionary incident management tool that
              leverages AI, ML, and predictive analytics. It automates incident
              triage, assigns tasks, and suggests resolutions for rapid
              response.
            </div>

            <div
              style={{
                color: "white",
                padding: "10px",
                paddingLeft: "25px",
                paddingRight: "25px",
                background: "linear-gradient(to bottom,  #5D385A,#3F376C)",
                fontSize: isMobile ? "17px" : "1.1rem",
                fontWeight: "200",
                borderRadius: "10px",
                textAlign: isMobile ? "justify" : "unset",
              }}
            >
              By analyzing data, it identifies vulnerbilities, recommends
              preventive measures, and predicts incident impact. Netflix
              Dispatch streamlines operations, ensuring efficient
              problem-solving and maximum productivity. Experience the future of
              incident management and unlock success with Ace&apos;8 Incident
              Management powered by Netflix Dispatch.
            </div>
            <div
              className={styles.text2}
              style={{
                marginTop: "1rem",
              }}
            >
              Additionally, we take care of the setup of database accesses for
              production and non-production environments, {!isMobile && <br />}{" "}
              ensuring controlled access based on role-based policies.
            </div>
          </div>
          <div>
            <Image
              alt="dispatch"
              width={1492}
              height={639}
              src={"/dispatch.png"}
              style={{
                width: isMobile ? "70vw" : "clamp(30rem,70vw,70rem)",
                height: "auto",
                marginTop: "2.5rem",
              }}
            />
          </div>

          <div
            className={`${styles.flexRow} ${styles.alignCenter} `}
            style={{
              width: isMobile ? "80vw" : "clamp(30rem,83vw,83rem)",
              justifyContent: "space-between",
              alignSelf: "flex-start",
              alignItems: "center",
              marginTop: "6vw",
              margin: "0 auto",
            }}
          >
            <div style={{}}>
              <Image
                alt="customer"
                width={1065}
                height={532}
                src={"/customer.png"}
                className={styles.imageWidthmax}
                style={{
                  marginTop: "2.5rem",
                  width: isMobile ? "70vw" : "clamp(30rem,50vw,50rem)",
                }}
              />
            </div>
            <div
              className={styles.alignwidth}
              style={{
                marginLeft: isMobile ? "0vw" : "0",
              }}
            >
              <div
                className={`${styles.heading1}  `}
                style={{
                  color: "#8fd5cc",
                  fontWeight: "bold",
                  width: isMobile ? "50vw" : "clamp(20rem,40vw,30rem)",
                  marginLeft: isMobile ? "4rem" : "",
                }}
              >
                Rapid Response{" "}
                <span style={{ fontWeight: "300", color: "#fff" }}>
                  {" "}
                  and 24/7 Support{" "}
                </span>
              </div>

              <div
                className={`${styles.text2}   ${styles.widthContainer}`}
                style={{
                  marginTop: ".3rem",
                  fontSize: isMobile ? "" : "1.1rem",
                  lineHeight: isMobile ? "" : "1.4rem",
                  width: isMobile ? "" : "clamp(10rem,25vw,25rem)",
                }}
              >
                In addition, our full 24/7 support with a less than 1-hour
                Service Level Agreement (SLA) for Sev 1 incidents means that you
                can trust us to handle even the most critical incidents with
                urgency and efficiency.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          width: "99vw",
          paddingBottom: "6rem",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <motion.div
          ref={ref3}
          animate={controls3}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80vw",
          }}
        >
          <div
            className={styles.heading1}
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#5747a5",
              marginTop: "4rem",
              lineHeight: "4rem",

              fontSize: isMobile ? "" : "4rem",
            }}
          >
            Ace8{" "}
            <span style={{ color: "#000" }}>
              Incident <br />
              <span style={{ fontWeight: "300" }}>Management</span> Plans
            </span>
          </div>

          <div
            style={{
              marginTop: isMobile ? "3vw" : "4rem",
              display: isMobile ? "" : "flex",
              alignItems: "center",
            }}
          >
            {isMobile && (
              <div
                style={{
                  display: "flex",
                  position: isMobile ? "unset" : "absolute",
                  bottom: isMobile ? "" : "15vw",
                  marginTop: "2vw",
                  marginBottom: "2vw",
                }}
                className={styles.contentCard}
              >
                <div
                  className={styles.heading1}
                  style={{
                    fontWeight: "bold",
                    color: "#000",
                    lineHeight: isMobile ? "5.5vw" : "4vw",
                    width: isMobile ? "80vw" : "35vw",
                  }}
                >
                  <span style={{ fontWeight: "300" }}> Streamline </span>
                  <span style={{ color: "#000" }}>Your</span>{" "}
                  <span style={{ color: "#5747a5" }}>
                    Incident{" "}
                    <span style={{ fontWeight: "300" }}> Management</span>{" "}
                  </span>
                  with Ace8
                </div>
              </div>
            )}
            <div>
              <Image
                alt="dash"
                width={900}
                height={663}
                src={"/dash.png"}
                // className={styles.imageWidthMid}
                style={{
                  width: isMobile ? "80vw" : "clamp(30rem,50vw,50rem)",
                  height: "auto",
                }}
              />
            </div>

            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  marginLeft: "-6rem",
                  marginBottom: "10rem",
                }}
                className={styles.contentCard}
              >
                <div
                  className={styles.heading1}
                  style={{
                    fontWeight: "bold",
                    color: "#000",
                    lineHeight: isMobile ? "5.5vw" : "4rem",
                    width: isMobile ? "60vw" : "clamp(10rem,32vw,32rem)",
                    fontSize: isMobile ? "" : "2.7rem",
                  }}
                >
                  <span style={{ fontWeight: "300" }}> Streamline </span>
                  <span style={{ color: "#000" }}>Your</span>{" "}
                  <span style={{ color: "#5747a5" }}>
                    Incident{" "}
                    <span style={{ fontWeight: "300" }}> Management</span>{" "}
                  </span>
                  with Ace8
                </div>
              </div>
            )}
          </div>
          <div
            className={`${styles.flexRow}`}
            style={{
              width: isMobile ? "" : "clamp(40rem,85vw,85rem)",
              justifyContent: "space-between",
              alignItems: isMobile ? "start" : "center",
              marginTop: "6rem",
              gap: "2rem",
            }}
          >
            <div
              className={styles.mobColumn}
              style={{ width: isMobile ? "" : "50%" }}
            >
              <div
                className={styles.heading1}
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  lineHeight: isMobile ? "5.5vw" : "4rem",
                  fontSize: isMobile ? "" : "2.7rem",
                }}
              >
                <span style={{ fontWeight: "300" }}>Understanding</span>{" "}
                {!isMobile && <br />}
                <span>Workflows in</span>
                <span style={{ color: "#FF88C3" }}>
                  &nbsp;Incident Management
                </span>
              </div>

              <div
                className={styles.text2}
                style={{
                  marginTop: ".3rem",
                  marginBottom: "1rem",
                  color: "#000",
                }}
              >
                Workflows can be defined as a sequence of steps and tasks
                followed to achieve a specific goal. In incident management,
                workflows are essential for processing data and ensuring smooth
                progression from one step/task to another. Without the movement
                of data, a workflow does not exist.
              </div>

              <div
                className={styles.text2}
                style={{
                  fontWeight: "500",
                  color: "#000",
                }}
              >
                There are three main types of workflows commonly used:
              </div>

              <div style={{ display: "flex", marginTop: "10px", gap: "10px" }}>
                <Image
                  alt="flow"
                  width={1450}
                  height={558}
                  src={"/flow.png"}
                  style={{
                    width: isMobile ? "" : "40vw",
                    maxWidth: isMobile ? "" : "40rem",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: "1rem",
                marginLeft: "6rem",
              }}
            >
              <Image
                alt="alrt"
                width={1472}
                height={1748}
                src={"/alrt.png"}
                className={styles.imgWidthmin}
              />
            </div>
          </div>

          <div
            style={{
              justifyContent: "space-between",
              marginTop: "5rem",
              width: isMobile ? "" : "clamp(40rem,85vw,85rem)",
              alignItems: "center",
              gap: "10px",
            }}
            className={`${styles.flexRow}`}
          >
            <div>
              <Image
                alt="newdash"
                width={1678}
                height={1364}
                src={"/newdash.png"}
                className={styles.imageWidthMin}
                style={{
                  marginTop: "1rem",
                }}
              />
            </div>

            <div
              className={styles.mobColumn}
              style={{ width: isMobile ? "" : "50%" }}
            >
              <div
                className={styles.heading1}
                style={{
                  fontWeight: "bold",
                  color: "#5747A5",
                  lineHeight: isMobile ? "5.5vw" : "4.5rem",
                  fontSize: isMobile ? "" : "2.7rem",
                }}
              >
                <span style={{ color: "#232323" }}> Ace8</span>&nbsp;Incident{" "}
                <br />
                Management{" "}
                <span style={{ fontWeight: "300", color: "#232323" }}>
                  Workflow
                </span>
              </div>
              <div
                className={styles.text2}
                style={{
                  marginTop: ".3rem",
                  marginBottom: "1rem",
                  color: "#000",
                }}
              >
                Incident management refers to the processes and steps taken to
                respond to anything that disrupts normal system operations. It
                involves detecting incidents, communicating them to
                stakeholders, and utilizing appropriate tools to resolve them.
              </div>

              <div style={{ display: "flex", marginTop: "10px", gap: "10px" }}>
                <Image
                  alt="flow"
                  width={1450}
                  height={558}
                  src={"/inci.png"}
                  style={{
                    width: isMobile ? "" : "40vw",
                    maxWidth: isMobile ? "" : "33rem",
                  }}
                />
              </div>
            </div>
          </div>

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
                width: "99vw",
              }}
            >
              <div
                style={{
                  marginTop: "10vw",
                  width: "100%",
                  alignSelf: "center",
                }}
                className={styles.heading1}
              >
                <span style={{ fontWeight: "lighter" }}>
                  Ready to Streamline Your{" "}
                </span>{" "}
                <span style={{ color: "#8FD5CC" }}>
                  {" "}
                  Incident Management and Experience{" "}
                </span>{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {" "}
                  Efficient Workflows for
                </span>{" "}
                <span style={{ color: "#8FD5CC" }}>
                  {" "}
                  Effective Incident Resolution?
                </span>
              </div>
              <div
                style={{ width: "80%", alignSelf: "center" }}
                className={styles.text2}
              >
                Contact us now and unlock the power of comprehensive incident
                management with Ace8. Trust our unique approach, powered by
                Netflix Dispatch, to handle any incident with urgency,
                precision, and 24/7 support. Don&apos;t wait for critical
                incidents to disrupt your operations—take control and ensure
                reliable operations today.
              </div>
              <motion.button
                onClick={() => scrollToContactForm()}
                style={{
                  marginBottom: "10vw",
                  width: "53%",
                  alignSelf: "center",
                  height: "8vw",
                }}
                key={"id45"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}
              >
                Optimize Your Incident Management
              </motion.button>
            </div>
          ) : (
            <motion.div
              style={{ marginTop: "5rem", marginBottom: "6rem" }}
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              <Image
                alt="stream"
                width={3240}
                onClick={() => scrollToContactForm()}
                height={1148}
                src={"/stream.png"}
                style={{
                  width: "clamp(20rem,90vw,90rem)",
                  height: "auto",
                  marginTop: "1rem",
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
export default IncidentManagementPage;
