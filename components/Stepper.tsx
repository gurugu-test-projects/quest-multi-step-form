import React from "react";
import Image from "next/image";

import rainbow from "../images/rainbow.png";
import styles from "./styles/Stepper.module.scss";
import { Step } from "../utils/types";
import { useAppState } from "../context/form-context";

const steps = [
  {
    name: Step.AddNewProject,
  },
  {
    name: Step.ProjectDetails,
  },
  {
    name: Step.CreateProject,
  },
];

interface IProps {
  step: Step;
}

function Stepper({ step }: IProps) {
  const { visitedSteps } = useAppState();

  const isSelected = (s: Step) => {
    return s === step ? styles.selected : "";
  };
  const isVisited = (s: Step) => {
    return visitedSteps.has(s) ? styles.visited : "";
  };
  const getStepClass = (s: Step) => {
    return `${isVisited(s)} ${isSelected(s)}`;
  };

  return (
    <nav className={styles.stepper}>
      <ul className={styles.steps}>
        {steps.map(({ name }) => (
          <li key={name} className={`${styles.step} ${getStepClass(name)}`}>
            <div className={styles.stepContent}>
              <div className={`${styles.stepCircle}`}></div>
              <div className={`${styles.stepName}`}>{name}</div>
            </div>
            <div className={`${styles.stepLine}`} />
          </li>
        ))}
      </ul>
      <Image
        className={styles.stepperImg}
        src={rainbow}
        height={160}
        width={260}
        alt="Rainbow"
      />
    </nav>
  );
}

export { Stepper };
