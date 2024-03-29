import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import style from "./Skills.module.css";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

function Skills(props) {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  const skills = [
    "React",
    "Redux",
    "RTK query",
    "Styled components",
    "SASS",
    "Jenkins",
    "Docker",
    "Jest/RTL",
    "Javascript",
    "Typescript",
    "MaterialUI",
    "CSS",
    "Tailwind",
    "HTML",
    "GitHub",
    "Firebase",
    "Python",
    "SQL",
  ];

  return (
    <Stack
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        // backgroundColor: "yellow",
        background:
          props.theme == "light"
            ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
            : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontFamily: "monospace",
          width: "100%",
          textAlign: "center",
          fontWeight: "800",

          color:
            props.theme === "light"
              ? // ? "rgb(67, 61, 61)"
                "rgba(0, 0, 0,0.5)"
              : "rgb(255, 255, 230)",
          backgroundColor: props.theme === "light" ? "white" : "#8c999a",
          borderRadius: "0ch 0ch 50% 50%",
          width: "min-content",
          placeSelf: "center",
          padding: "1ch",
        }}
      >
        SKILLS
      </Typography>
      <motion.div
        variants={{
          // hidden: { opacity: 0, x: "100%" },
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1],
            // rotate: [0, 360],
            // borderRadius: ["50%", "50%"],
            borderRadius: ["2%", "2%"],
            // padding: ["20ch", "10ch"],
            padding: ["2ch", "2ch"],
            // x: [300, 0],
          },
        }}
        animate={mainControls}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        // className={style.skillsMainContainer}
        style={{
          margin: "auto",
          background:
            props.theme == "light"
              ? "linear-gradient(153deg, rgba(226,135,22,1) 0%, rgba(190,212,38,1) 16%, rgba(40,204,40,1) 32%, rgba(6,185,150,1) 48%, rgba(81,130,189,1) 64%, rgba(162,94,163,1) 81%, rgba(173,29,51,1) 100%)"
              : "linear-gradient(236deg, rgba(1,1,1,1) 0%, rgba(54,49,49,1) 16%, rgba(98,99,98,1) 32%, rgba(122,135,133,1) 48%, rgba(105,104,104,1) 64%, rgba(55,51,55,1) 81%, rgba(10,10,10,1) 100%)",
          boxShadow:
            props.theme == "light"
              ? `0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)`
              : `0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)`,
        }}
      >
        <Stack style={{ justifyContent: "center" }}>
          <span
            style={{
              fontSize: "1.3rem",
              fontWeight: "700",
              letterSpacing: "0.1ch",
              color:
                props.theme !== "light"
                  ? // ? "rgb(67, 61, 61)"
                    "rgba(0, 0, 0,0.5)"
                  : "rgb(255, 255, 230)",
              textAlign: "center",
              marginBottom: "1.5ch",
            }}
          >
            {" "}
            My skills{" "}
          </span>
        </Stack>
        <div className={style.skillsContainer}>
          {skills.map((element, index) => (
            <span
              key={element}
              className={
                props.theme === "dark" ? style.skillDark : style.skillLight
              }
              style={{ textAlign: "center" }}
            >
              {element}
            </span>
          ))}
        </div>
        <div ref={skillsRef}></div>
      </motion.div>
    </Stack>
  );
}

export default Skills;
