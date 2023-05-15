import React from "react";
import { IForm, ProjectCategory, Step } from "../utils/types";

interface IFormContext {
  appState: IForm;
  setAppState: React.Dispatch<React.SetStateAction<IForm>>;
  visitedSteps: Set<Step>;
  setVisitedSteps: React.Dispatch<React.SetStateAction<Set<Step>>>;
}

const AppStateContext = React.createContext<IFormContext>({} as IFormContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = React.useState<IForm>({
    goal: "Understand My Members",
    productLaunch: "preProduct",
    projectCategory: ProjectCategory.NFT,
  });
  const [visitedSteps, setVisitedSteps] = React.useState<Set<Step>>(new Set());

  return (
    <AppStateContext.Provider
      value={{ appState, setAppState, visitedSteps, setVisitedSteps }}
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
