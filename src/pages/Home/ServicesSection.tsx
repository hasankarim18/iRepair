import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

const ServicesSection = () => {
  return (
    <div>
      <Container className="my-40">
        <div className="text-center">
          <h1>
            <span>Service</span>
            <span> that we provide.</span>
          </h1>
          <div className="flex w-full  justify-center mt-10">
            <p className="max-w-[80ch] text-center">
              We provide various computer repair services and solutions for our
              new and regular customers. Feel free to find out more below.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[20px]">
          <BatteryReplacement />
          <ChipsetReplacement />
          <DataRecovery />
          <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
          <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
          <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
          <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
