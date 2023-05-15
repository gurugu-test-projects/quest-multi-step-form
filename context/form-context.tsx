import React from "react";
import { IForm, ProjectCategory, Step } from "../utils/types";

interface IFormContext {
  appState: IForm;
  setAppState: React.Dispatch<React.SetStateAction<IForm>>;
  visitedSteps: Set<Step>;
  addVisitedStep: (step: Step) => void;
  removeVisitedStep: (step: Step) => void;
  clearVisitedSteps: () => void;
}

const AppStateContext = React.createContext<IFormContext>({} as IFormContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = React.useState<IForm>({
    goal: "Understand My Members",
    productLaunch: "Pre Product",
    projectCategory: ProjectCategory.NFT,
  });
  const [visitedSteps, setVisitedSteps] = React.useState<Set<Step> | undefined>(
    new Set()
  );

  const addVisitedStep = (step: Step) => {
    const updatedSet = new Set(visitedSteps);
    updatedSet.add(step);
    setVisitedSteps(updatedSet);
  };

  const removeVisitedStep = (step: Step) => {
    const updatedSet = new Set(visitedSteps);
    updatedSet.delete(step);
    setVisitedSteps(updatedSet);
  };

  const clearVisitedSteps = () => {
    setVisitedSteps(new Set());
  };

  return (
    <AppStateContext.Provider
      value={{
        appState,
        setAppState,
        visitedSteps,
        addVisitedStep,
        removeVisitedStep,
        clearVisitedSteps,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateContext);

  if (!context) {
    throw new Error("useForm must be used within a AppProvider");
  }

  return context;
};

export { AppProvider, useAppState };
