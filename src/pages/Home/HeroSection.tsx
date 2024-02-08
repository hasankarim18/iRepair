import macbookExpose from "@/assets/images/macbook-exposed.png";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { duration: 0.5, type: "spring" },
      },
    },
  };

  const laptop = {
    initial: { y: 0, rotate: 0, scale: 6 },
    animate: {
      y: 50,
      rotate: -30,
      scale: 0.8,
      transition: {
        duration: 10,
        scale: {
          duration: 0.3,
        },
        rotate: {
          duration: 0.3,
          delay: 0.3,
        },
        y: {
          repeat: Infinity,
          duration: 2,
          delay: 5,
          repeatType: "reverse",
          ease: "linear",
        },
      },
    },
  };

  return (
    <Container className="grid lg:grid-cols-2 grid-cols-1  h-screen justify-center place-content-center ">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          variants={introChildren}
          className="text-8xl w-full pt-16 flex flex-col text-nowrap"
        >
          <span className="text-gray">Don't worry,</span>
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p variants={introChildren} className="max-w-[50ch]">
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Macbook repairs</span> and diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button> Book a service</Button>
        </motion.div>
      </motion.div>
      <div>
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className=" w-full"
        >
          <img
            className=" mx-auto mt-[50px] lg:mt-0 object-contain h-[50%] w-[90%]"
            src={macbookExpose}
            alt=""
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
