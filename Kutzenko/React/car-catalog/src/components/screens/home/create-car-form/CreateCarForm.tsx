import styles from "./CreateCarForm.module.css";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { useCreateCar } from "./useCreateCar";
import { ICarData } from "../../../../types/car.interface";

const CreateCarForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICarData>({
    mode: "onChange",
  });

  const {createCar} = useCreateCar(reset);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder="Name"
      />

      <ErrorMessage error={errors?.name?.message} />

      <input
        {...register("price", { required: "Price is required" })}
        type="number"
        placeholder="Price"
      />

      <ErrorMessage error={errors?.price?.message} />

      <input
        {...register("image", { required: "Image is required" })}
        type="text"
        placeholder="Image"
      />

      <ErrorMessage error={errors?.image?.message} />

      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
