import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import styles from "../styles/Form.module.scss";
import { Step, IForm } from "../../../utils/types";
import { Field } from "../../../components/Field";
import { useAppState } from "../../../context/form-context";

const productLaunch = ["Pre Product", "Post Product"];

interface IProps {
  handleStepChange: (step: Step) => void;
  formData: {};
  handleFormData: (formData: IForm) => void;
}

function CreateProject({ handleStepChange, formData, handleFormData }: IProps) {
  const { handleSubmit, register, getValues, setValue } = useForm<IForm>({
    defaultValues: formData,
  });
  const router = useRouter();
  const { setAppState, addVisitedStep, removeVisitedStep } = useAppState();

  const saveData: SubmitHandler<IForm> = (data) => {
    setAppState({ ...formData, ...data });
    addVisitedStep(Step.CreateProject);
    router.push("/summary");
  };

  const previousStep = () => {
    handleFormData(getValues());
    removeVisitedStep(Step.ProjectDetails);
    handleStepChange(Step.ProjectDetails);
  };

  const increaseWorkers = () => {
    const workers = getValues("workers");
    setValue("workers", Number(workers) + 1);
  };

  const decreaseWorkers = () => {
    const workers = getValues("workers");

    if (workers > 0) {
      setValue("workers", workers - 1);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(saveData)}
      autoComplete="off"
    >
      <h1>Create Project</h1>
      <fieldset>
        <legend>How many full-time workers on the project?</legend>
        <Field className={styles.fieldContainer}>
          <div id="workers" className={styles.workerInputContainer}>
            <div
              className={`${styles.button} ${styles.btnSecondary} ${styles.btnWorkers}`}
              onClick={decreaseWorkers}
            >
              -
            </div>
            <input
              type="number"
              {...register("workers")}
              placeholder="0"
              min="0"
            />
            <div
              className={`${styles.button} ${styles.btnSecondary} ${styles.btnWorkers}`}
              onClick={increaseWorkers}
            >
              +
            </div>
          </div>
        </Field>
      </fieldset>
      <fieldset>
        <legend>Are you pre or post product launch?</legend>
        {productLaunch.map((launch) => (
          <div key={launch} className={styles.radioBtnContainer}>
            <input
              className={styles.radioBtn}
              id={launch}
              type="radio"
              value={launch}
              {...register("productLaunch")}
            />
            <label htmlFor={launch}>{launch}</label>
          </div>
        ))}
      </fieldset>
      <fieldset>
        <legend>Contact Email</legend>
        <Field className={styles.fieldContainer}>
          <input type="text" id="contactEmail" {...register("contactEmail")} />
        </Field>
      </fieldset>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.button} ${styles.btnSecondary}`}
          onClick={previousStep}
        >
          Back
        </button>
        <button
          className={`${styles.button} ${styles.btnPrimary}`}
          type="submit"
        >
          Create Project
        </button>
      </div>
    </form>
  );
}

export { CreateProject };
