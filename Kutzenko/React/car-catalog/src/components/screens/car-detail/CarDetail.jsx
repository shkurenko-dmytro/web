import { useParams } from "react-router";

const CarDetail = () => {
  const { id } = useParams()

  return <div>Car Detail {id}</div>
}

export default CarDetail;