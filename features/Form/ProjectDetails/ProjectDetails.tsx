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
    <form className={styles.form} onSubmit={handleSubmit(saveData)}>
      <h1>Project Details</h1>
      <fieldset>
        <legend>What is your main goal with AlphaQuest?</legend>
        {goals.map((goal) => (
          <Field label={goal} key={goal}>
            <input id={goal} type="radio" {...register("goal")} value={goal} />
          </Field>
        ))}
      </fieldset>
      <div className={styles.btnContainer}>
        <button className={styles.btnSecondary} onClick={previousStep}>
          Back
        </button>
        <button className={styles.btnPrimary} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
}

export { ProjectDetails };
