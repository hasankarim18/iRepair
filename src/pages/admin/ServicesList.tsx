import { useGetServices } from "@/adminApi/services/service.hook";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";

const ServicesList = () => {
  const { data: services, isLoading, isError } = useGetServices();

  const [serviceName, setServiceName] = useState("");

  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isError: postError,
    isSuccess: isPostSuccess,
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
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
    alert("success");
  };

  if (isError) {
    return (
      <p className="text-center h-screen flex items-center justify-center font-semibold p-4 bg-rose-400 text-white text-2xl">
        Some thing went wrong!!!
      </p>
    );
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <Container className="mt-20 border-[1px] p-0 border-gray rounded-xl overflow-hidden">
        <h2 className="text-3xl p-2">Services list</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Service Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      className="bg-red-400 rounded-xl p-2 text-white"
                      variant="destructive"
                    >
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className="bg-light-gray">
            <TableRow>
              <TableHead className="w-[100px]">Total Services</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right">{services.length}</TableHead>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="mt-10 p-4">
          <h2>Add a service</h2>
        </div>
      </Container>

      <Container className="">
        <div className="mt-10">
          <h2>Add a service</h2>
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
        </div>
      </Container>
    </div>
  );
};

export default ServicesList;
