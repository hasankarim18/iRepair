import { getServices } from "@/adminApi/services/service.api";
import { useQuery } from "@tanstack/react-query";

const ServicesList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>Services list</h1>
      <ul className="mt-2">
        {!isLoading && data.data.map((item, i) => <li key={i}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default ServicesList;
