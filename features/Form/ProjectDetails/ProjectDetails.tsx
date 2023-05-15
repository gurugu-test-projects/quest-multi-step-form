import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "../styles/Form.module.scss";
import { Step, IForm } from "../../../utils/types";
import { Field } from "../../../components/Field";
import { useAppState } from "../../../context/form-context";

const goals = [
  "Grow My Community",
  "Activate Existing Members",
  "Understand My Members",
  "Other",
];

interface IProps {
  handleStepChange: (step: Step) => void;
  formData: {};
  handleFormData: (formData: IForm) => void;
}

function ProjectDetails({
  handleStepChange,
  formData,
  handleFormData,
}: IProps) {
  const { handleSubmit, register, getValues } = useForm<IForm>({
    defaultValues: formData,
  });
  const { addVisitedStep } = useAppState();

  const saveData: SubmitHandler<IForm> = (data) => {
    handleFormData({ ...formData, ...data });
    addVisitedStep(Step.ProjectDetails);
    handleStepChange(Step.CreateProject);
  };

  const previousStep = () => {
    handleFormData(getValues());
    handleStepChange(Step.AddNewProject);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(saveData)}
      autoComplete="off"
    >
      <h1>Project Details</h1>
      <fieldset>
        <legend>What is your main goal with AlphaQuest?</legend>
        <div style={{ marginTop: "24px" }}>
          {goals.map((goal) => (
            <div key={goal} className={styles.radioBtnContainer}>
              <input
                className={styles.radioBtn}
                id={goal}
                type="radio"
                value={goal}
                {...register("goal")}
              />
              <label htmlFor={goal}>{goal}</label>
            </div>
          ))}
        </div>
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
          Continue
        </button>
      </div>
    </form>
  );
}

export { ProjectDetails };
