export enum Step {
  AddNewProject = "Add New Project",
  CreateProject = "Create Project",
  ProjectDetails = "Project Details",
}

export enum ProjectCategory {
  NFT = "NFT",
  GameFi = "GameFi",
  DeFi = "DeFi",
  DAO = "DAO",
  SocialFi = "SocialFi",
  Metaverse = "Metaverse",
  Tools = "Tools",
  Ecosystem = "Ecosysystem",
  Others = "Others",
}

interface IForm {
  projectName?: string;
  projectUrl?: string;
  projectCategory: ProjectCategory;
  goal: string;
  workers: number;
  productLaunch: string;
  contactEmail?: string;
}

export type { IForm };
