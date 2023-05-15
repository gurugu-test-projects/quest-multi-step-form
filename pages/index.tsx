import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.scss";
import { Step } from "../utils/types";
import { Stepper } from "../components/Stepper";
import { AddNewProject, CreateProject, ProjectDetails } from "../features/Form";
import { useAppState } from "../context/form-context";

export default function Home() {
  const { appState } = useAppState();
  const [step, setStep] = React.useState(Step.AddNewProject);
  const [formData, setFormData] = React.useState(appState);

  return (
    <div>
      <Head>
        <title>Alpha Quest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Stepper step={step} />
        {step === Step.AddNewProject && (
          <AddNewProject
            handleStepChange={setStep}
            formData={formData}
            handleFormData={setFormData}
          />
        )}
        {step === Step.CreateProject && (
          <CreateProject
            handleStepChange={setStep}
            formData={formData}
            handleFormData={setFormData}
          />
        )}
        {step === Step.ProjectDetails && (
          <ProjectDetails
            handleStepChange={setStep}
            formData={formData}
            handleFormData={setFormData}
          />
        )}
      </main>
    </div>
  );
}
