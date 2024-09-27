/** @format */

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./obaas.module.css";
import { colors } from "../../../utils/Theme";
import { clamp, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "@/components/contactForm/ContactForm";
import Link from "next/link";

const ObaasCards = [
  {
    id: 1,
    image: 1,
    heading: "Rapid ROI",
    content:
      ": OBaaS not only accelerates onboarding but also pays\nfor itself with the time saved waiting for provisioning.",
  },
  {
    id: 2,
    image: 4,
    heading: "Integrated with Enterprise Systems",
    content:
      ": Seamlessly connect with your other enterprise systems, creating a cohesive development environment.",
  },
  {
    id: 3,
    image: 2,
    heading: "Swift Onboarding into Any Cloud",
    content:
      ": Our solution provides a fast and painless onboarding experience into any cloud environment, ensuring developers can dive into meaningful work promptly.",
  },
  {
    id: 4,
    image: 5,
    heading: "Fully Managed and Running on Your Infrastructure",
    content:
      ": Enjoy the advantages of a fully managed service while running on your infrastructure, providing flexibility and control",
  },
  {
    id: 5,
    image: 3,
    heading: "Comprehensive Developer Toolkit",
    content:
      ": Equip your developers with the full suite of tools needed for their tasks, enhancing their efficiency from day one.",
  },
];
const Obaas = () => {
  const [isMobile, setIsMobile] = useState(false);
  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();
  const [ref9, inView9] = useInView();

  // Animation trigger
  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ y: 0, opacity: 1 });
  }
  if (inView3) {
    controls3.start({ x: 0, opacity: 1 });
  }
  if (inView4) {
    controls4.start({ x: 0, opacity: 1 });
  }
  if (inView5) {
    controls5.start({ x: 0, opacity: 1 });
  }
  if (inView6) {
    controls6.start({ x: 0, opacity: 1 });
  }
  if (inView7) {
    controls7.start({ x: 0, opacity: 1 });
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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "99vw",
        backgroundColor: "white",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        className={`${styles.header} ${styles.alignCenter}`}
      >
        <div className={styles.headerContentContainer}>
          <span className={styles.head1}>
            Unlock <span className={styles.normal}> Developer </span>
            <span style={{ color: colors.primary }}> Productivity</span> <br />
            <span className={styles.normal}> with </span>
            <span style={{ color: "#fff" }}>Onboarding as a Service</span>
            <br />
            (OBaaS)
          </span>
        </div>

        <span className={styles.line1}>
          Fast-Track Onboarding for Immediate Impact
        </span>
      </motion.div>

      {/* Container1 */}
      <motion.div
        ref={ref2}
        initial={{ y: -50, opacity: 0 }}
        animate={controls2}
        transition={{ duration: 1 }}
        className={styles.contentContainerColumn}
        style={{ alignSelf: "center" }}
      >
        <Image
          alt="abt"
          height={896}
          width={1920}
          className={`${styles.coverCodeimge}  `}
          src={"/obaascode.png"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "clamp(20rem,75vw,80rem)",
            // backgroundColor: "red",
          }}
        >
          <div
            style={{ marginBottom: "5rem" }}
            className={styles.contentContainerRow}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={`${styles.text1} ${styles.obaasPara}`}>
                At Ace8, we acknowledge a critical industry
                <br /> challenge—delayed developer productivity due to
                <br /> lengthy onboarding processes, leading to significant
                <br /> financial losses. Developers often remain idle,
                <br /> costing businesses millions annually.
              </div>
            </div>
            <div>
              <Image
                alt="abt"
                height={896}
                width={1920}
                className={styles.flowImage}
                src={"/flowobaas.png"}
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* CONTENT  */}

      <motion.div
        ref={ref3}
        initial={{ x: -50, opacity: 0 }}
        animate={controls3}
        transition={{ duration: 1 }}
        style={{
          background: "black",
          width: "99vw",
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <div
          style={{
            width: "80vw",
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <div
            className={styles.contentContainerColumn}
            style={{ alignItems: "center" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "clamp(20rem,90vw,110rem)",
              }}
            >
              <div className={styles.contentContainerRow}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={`${styles.headSolution}  ${styles.heading1}`}>
                    <span style={{ fontWeight: "300" }}>Our</span> Solution:
                  </div>
                  <div
                    style={{ color: "white", marginBottom: "2rem" }}
                    className={`${styles.heading2}  ${styles.headingWidth}`}
                  >
                    <span style={{ color: colors.secondary }}>
                      Dev Containers
                    </span>{" "}
                    <span style={{ fontWeight: "200" }}>
                      for Swift,
                      <br /> Customized
                    </span>{" "}
                    Onboarding
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "" : "1.2rem",
                    }}
                    className={styles.text1}
                  >
                    Enter a solution-oriented approach! We advocate for
                    &quot;dev containers&quot; {!isMobile && <br />} to
                    seamlessly connect developers to cloud environments within{" "}
                    {!isMobile && <br />} hours, not weeks. This revolutionary
                    method customizes dev-{!isMobile && <br />}containers to fit
                    the specific roles of your developers, ensuring rapid
                    {!isMobile && <br />}
                    onboarding and substantial cost savings.
                  </div>
                  {/* Cards small */}

                  <div style={{ marginTop: "4rem" }} className={styles.flexRow}>
                    <div className={styles.infoCards}>
                      <div className={styles.heading3} style={{}}>
                        <span style={{ fontWeight: "200" }}>Customized</span>{" "}
                        Dev- {!isMobile && <br />}
                        Containers:
                      </div>
                      <div
                        className={styles.text2}
                        style={{
                          marginTop: "1.5rem",
                          width: isMobile ? "" : "clamp(10rem,20vw,20rem)",
                        }}
                      >
                        Tailored to fit the unique roles of your
                        {!isMobile && <br />} developers, our solution ensures
                        they {!isMobile && <br />}get to meaningful work
                        swiftly, saving{!isMobile && <br />} both time and
                        resources.
                      </div>
                    </div>
                    <div className={styles.infoCards}>
                      <div className={styles.heading3} style={{}}>
                        Fast and{" "}
                        <span style={{ fontWeight: "200" }}>Painless</span>{" "}
                        {!isMobile && <br />}
                        Onboarding
                      </div>
                      <div
                        className={styles.text2}
                        style={{
                          marginTop: "1.5rem",
                          width: isMobile ? "" : "clamp(10rem,20vw,20rem)",
                        }}
                      >
                        A streamlined process that equips{!isMobile && <br />}{" "}
                        developers with all necessary tools,
                        {!isMobile && <br />} eliminating idle time and
                        expediting{!isMobile && <br />}
                        their journey to productivity.
                      </div>
                    </div>
                  </div>
                </div>

                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  className={`${styles.codeImg} ${styles.mTop}   ${styles.mbottom}`}
                  src={"/code2Obaas.png"}
                />
              </div>

              <div style={{ marginTop: "3rem" }} className={styles.flexRow}>
                <div className={styles.infoCards}>
                  <div className={styles.heading3}>
                    {" "}
                    <span style={{ fontWeight: "200" }}>SecOps</span>
                    -Vetted {!isMobile && <br />}Tooling:
                  </div>
                  <div
                    className={styles.text2}
                    style={{
                      marginTop: "1.5rem",
                      width: isMobile ? "" : "clamp(10rem,20vw,20rem)",
                    }}
                  >
                    Trust in a mix of tools vetted by your{!isMobile && <br />}{" "}
                    Security Operations (SecOps) team,{!isMobile && <br />}{" "}
                    ensuring a secure and compliant{!isMobile && <br />}{" "}
                    onboarding experience.
                  </div>
                </div>{" "}
                <div style={{}} className={styles.infoCards}>
                  <div className={styles.heading3}>
                    Integration with {!isMobile && <br />}
                    <span style={{ fontWeight: "200" }}> Enterprise </span>{" "}
                    Systems
                  </div>
                  <div
                    className={styles.text2}
                    style={{
                      marginTop: "1.5rem",
                      width: isMobile ? "" : "clamp(10rem,20vw,20rem)",
                    }}
                  >
                    Seamlessly integrate with your{!isMobile && <br />} existing
                    enterprise systems, including {!isMobile && <br />}AWS
                    Cloud, Jira, Bitbucket, GitHub,{!isMobile && <br />} and
                    more.
                  </div>
                </div>{" "}
                <div className={styles.infoCards}>
                  <div className={styles.heading3}>
                    Fully <span style={{ fontWeight: "200" }}> Managed </span>
                    {!isMobile && <br />} Service
                  </div>
                  <div
                    className={styles.text2}
                    style={{
                      marginTop: "1.5rem",
                      width: isMobile ? "" : "clamp(10rem,20vw,20rem)",
                    }}
                  >
                    Enjoy the benefits of a fully managed{!isMobile && <br />}{" "}
                    service running on your infrastructure,{!isMobile && <br />}{" "}
                    minimizing the burden on your team.
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{}}
              className={`${styles.headOnboarding} ${styles.heading1}`}
            >
              Why <span style={{ fontWeight: "200" }}>Choose </span>
              <span style={{ color: colors.primary }}> OBaaS</span> for{" "}
              <span style={{ fontWeight: "200" }}>Developer </span>
              <br /> Onboarding?
            </div>
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "clamp(30rem,80vw,95rem)",
                height: "auto",
                alignSelf: "center",
                marginTop: "3rem",
              }}
              className={`${styles.mTop} `}
              src={"/heroku.png"}
            />
            <div
              className={styles.cardsContainer}
              style={{
                width: "clamp(50rem,80vw,95rem)",
                justifyContent: "space-between",
              }}
            >
              {ObaasCards.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    style={{ marginTop: item.id === 4 ? "2rem" : "" }}
                    className={styles.obaasCard}
                  >
                    <div className={styles.alignCenter}>
                      {" "}
                      <div
                        style={{
                          color: "rgba(121, 114, 189, 1)",
                        }}
                        className={styles.numberStyles}
                      >
                        {item.image}
                      </div>
                    </div>
                    <div className={styles.text2}>
                      <span style={{ fontWeight: "bold" }}>{item.heading}</span>
                      {item.content}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.btnContainer}>
              <Link href={"/contact"}>
                <motion.button
                  key={"id45"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.91 }}
                  className={styles.btnSignup}
                >
                  Propel Your Developers to Productivity with OBaaS
                </motion.button>
              </Link>
            </div>
            {/* <div className={styles.infoText}>
              <span style={{ color: colors.secondary }}>
                Accelerate onboarding,
              </span>{" "}
              <span style={{ fontWeight: "200" }}>reduce </span>
              idle time, and{" "}
              <span style={{ fontWeight: "200" }}>witness immediate </span>
              productivity gains.{" "}
              <span style={{ fontWeight: "200" }}>Choose </span>
              <span style={{ color: colors.secondary }}>OBaaS</span> for a
              customized, fully managed,
              <span style={{ fontWeight: "200" }}> and </span>
              swift onboarding experience.
            </div> */}
          </div>
        </div>
      </motion.div>
      {/* CARD CONTAINER  */}

      <motion.div
        ref={ref4}
        initial={{ x: -50, opacity: 0 }}
        animate={controls4}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              gap: "4rem",
              textAlign: "center",
              marginTop: "10rem",
            }}
          >
            <div
              style={{ marginTop: "10rem", width: "80%", alignSelf: "center" }}
              className={styles.heading1}
            >
              <span style={{ color: "#8FD5CC" }}> Ready to revolutionize</span>{" "}
              your <span style={{ fontWeight: "lighter" }}> developer </span>{" "}
              onboarding and unlock unparalleled
              <span style={{ fontWeight: "lighter" }}>
                {" "}
                productivity?{" "}
              </span>{" "}
            </div>
            <div
              style={{ width: "80%", alignSelf: "center" }}
              className={styles.text2}
            >
              Choose Ace8&apos;s OBaaS for swift, customized onboarding that
              delivers immediate impact. Accelerate your developers&apos;journey
              to meaningful work, eliminate idle time, and enjoy the benefits of
              a fully managed service running on your infrastructure. Don&apos;t
              let delayed onboarding hinder your productivity and cost your
              business millions. Contact us today to explore how &rdquoDev
              Containers&rdquo can fast-track your onboarding process and
              maximize your ROI.
            </div>
            <motion.button
              style={{
                marginBottom: "10rem",
                width: "65%",
                alignSelf: "center",
                height: "8rem",
              }}
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.btnSignup}
            >
              Transform Developer Onboarding with OBaaS
            </motion.button>
          </div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => scrollToContactForm()}
            style={{ width: "clamp(40rem,80vw,100rem)", alignSelf: "center" }}
          >
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "100%",
                height: "auto",
                alignSelf: "center",
                marginTop: "4rem",
              }}
              src={"/obaasCard1.png"}
            />
          </motion.div>
        )}

        {/* CONTACT CONTAINER */}

        <ContactForm
          id="contactForm"
          containerStyles={{ marginTop: "8rem", marginBottom: "6rem" }}
        />
      </motion.div>
    </div>
  );
};
export default Obaas;
