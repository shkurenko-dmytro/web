import CreateCarForm from "./create-car-form/CreateCarForm";
import { CarService } from "../../../services/car.service";
import { useQuery } from "@tanstack/react-query";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
import VideoPlayer from "./Player";

function Home() {
  const { data, isLoading } = useQuery(["cars"], () => CarService.getAll());

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Cars Catalog</h1>

      <VideoPlayer />

      <Header />
      
      <CreateCarForm />

      <Catalog data={data} />
    </div>
  );
}

export default Home;
