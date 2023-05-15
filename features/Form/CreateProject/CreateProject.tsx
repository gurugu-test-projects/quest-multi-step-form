import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { Step, IForm } from "../../../utils/types";
import { Field } from "../../../components/Field";
import { useAppState } from "../../../context/form-context";

interface IProps {
  handleStepChange: (step: Step) => void;
  formData: {};
  handleFormData: (formData: IForm) => void;
}

function CreateProject({ handleStepChange, formData, handleFormData }: IProps) {
  const { handleSubmit, register, getValues } = useForm<IForm>({
    defaultValues: formData,
  });
  const router = useRouter();
  const { setAppState, visitedSteps, setVisitedSteps } = useAppState();

  const saveData: SubmitHandler<IForm> = (data) => {
    setAppState({ ...formData, ...data });
    setVisitedSteps(visitedSteps.add(Step.CreateProject));
    router.push("/summary");
  };

  const previousStep = () => {
    handleFormData(getValues());
    handleStepChange(Step.ProjectDetails);
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <h2>Create Project</h2>
      <fieldset>
        <legend>How many full-time workers on the project?</legend>
        <Field>
          <div id="workers">
            <div onClick={() => console.log("minus")}>-</div>
            <input
              type="number"
              {...register("workers")}
              placeholder="0"
              min="0"
            />
            <div onClick={() => console.log("minus")}>+</div>
          </div>
        </Field>
      </fieldset>
      <fieldset>
        <legend>Are you pre or post product launch?</legend>
        <Field label="Pre Product">
          <input
            id="preProduct"
            type="radio"
            {...register("productLaunch")}
            value="preProduct"
          />
        </Field>
        <Field label="Post Product">
          <input
            id="postProduct"
            type="radio"
            {...register("productLaunch")}
            value="postProduct"
          />
        </Field>
      </fieldset>
      <fieldset>
        <legend>Contact Email</legend>
        <Field>
          <input type="text" id="contactEmail" {...register("contactEmail")} />
        </Field>
      </fieldset>
      <button onClick={previousStep}>Back</button>
      <button type="submit">Create Project</button>
    </form>
  );
}

export { CreateProject };
