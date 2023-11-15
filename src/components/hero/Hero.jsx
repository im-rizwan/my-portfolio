import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-490%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MOHAMED RIZWAN R</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Development Engineer
          </motion.h1>
          <motion.p>My unmatched perspicacity coupled with sheer indefatigability makes me a feared opponent in any realm of human endeavour.</motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://fliphtml5.com/api/download/download-file?bookId=89685677&type=1">My Resume</a>
            </motion.button>
            <motion.button variants={textVariants} > <a href="#Contact">Contact Me</a> </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer Writer 
      </motion.div>
      <div className="imageContainer">
        <img src="/myImage.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
