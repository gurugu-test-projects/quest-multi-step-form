import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "../styles/Form.module.scss";
import { Step, IForm } from "../../../utils/types";
import { Field } from "../../../components/Field";
import { useAppState } from "../../../context/form-context";

const projectCategory = [
  "NFT",
  "GameFi",
  "DeFi",
  "DAO",
  "SocialFi",
  "Metaverse",
  "Tools",
  "Ecosysystem",
  "Others",
];

interface IProps {
  handleStepChange: (step: Step) => void;
  formData: {};
  handleFormData: (formData: IForm) => void;
}

function AddNewProject({ handleStepChange, formData, handleFormData }: IProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: formData,
  });
  const { addVisitedStep, clearVisitedSteps } = useAppState();

  React.useEffect(() => {
    clearVisitedSteps();
  }, []);

  const saveData: SubmitHandler<IForm> = (data) => {
    handleFormData({ ...formData, ...data });
    addVisitedStep(Step.AddNewProject);
    handleStepChange(Step.ProjectDetails);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(saveData)}
      autoComplete="off"
    >
      <h1>To Create Quest you need firstly create Project</h1>
      <fieldset>
        <legend>Add New Project</legend>
        <Field
          label="Project Name (it can be changed later)"
          error={errors.projectName}
          className={styles.fieldContainer}
        >
          <input id="projectName" {...register("projectName")} />
        </Field>
        <Field
          label="Project URL (it cannot be changed after creation)"
          error={errors.projectUrl}
          className={styles.fieldContainer}
        >
          <div className={styles.urlInput} id="projectUrl">
            <span>Alphaguilty.io/</span>
            <input {...register("projectUrl")} />
          </div>
        </Field>
        <label>Project Category (it cannot be changed after creation)</label>
        <div className={styles.cardBtnContainer}>
          {projectCategory.map((category) => (
            <label
              key={category}
              htmlFor={category}
              className={styles.cardRadioBtn}
            >
              {category}
              <input
                id={category}
                type="radio"
                value={category}
                {...register("projectCategory")}
              />
            </label>
          ))}
        </div>
      </fieldset>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.button} ${styles.btnPrimary}`}
          type="submit"
        >
          Add Project
        </button>
      </div>
    </form>
  );
}

export { AddNewProject };
