import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddServices = () => {
  const [serviceName, setServiceName] = useState("");

  const {
    mutateAsync,
    isError: postError,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
    //   mutationKey: "addService",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "Replace Any Chipset",
      devices: ["Smartphone", "Laptop", "Tablet"],
      price: 400.0,
    };
    console.log(serviceData);
    await mutateAsync(serviceData);
    console.log("done");
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center">ADD Services</h2>
      <Container className="">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-4">
            <form
              className="flex justify-start flex-col gap-2"
              action=""
              onSubmit={handleSubmit}
            >
              <label htmlFor="serviceName">Service Name</label>
              <input
                id="serviceName"
                className="border p-2 rounded-xl"
                type="text"
                onChange={(e) => {
                  setServiceName(e.target.value);
                }}
              />
              <Button className="rounded-xl" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddServices;
