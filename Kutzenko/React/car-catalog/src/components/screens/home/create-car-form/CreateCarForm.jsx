import { useState } from "react";
import styles from "./CreateCarForm.module.css";
import { useForm } from "react-hook-form";

const clearData = {
  name: "",
  price: "",
  image: "",
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const createCar = (data) => {
    console.log(data);
    setCars((prev) => [
      {
        id: prev.length + 1,
        ...data,
      },
      ...prev,
    ]);

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Name"
      />
      <input
        {...register("price", { required: true })}
        type="text"
        placeholder="Price"
      />
      <input
        {...register("image", { required: true })}
        type="text"
        placeholder="Image"
      />

      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
