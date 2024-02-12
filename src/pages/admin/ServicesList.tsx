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
import { Trash2 } from "lucide-react";

const ServicesList = () => {
  const { data: services, isLoading, isError } = useGetServices();

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

  console.log(services);

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
      </Container>
    </div>
  );
};

export default ServicesList;
