import useScrollGrowHook from "@/hooks/useScrollGrowHook";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrowHook();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    >
      <h1>Battery BatteryReplacement</h1>
    </motion.div>
  );
};

export default BatteryReplacement;
