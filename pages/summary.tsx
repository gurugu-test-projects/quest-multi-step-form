import React from "react";
import Link from "next/link";

import styles from "../styles/Summary.module.scss";
import { useAppState } from "../context/form-context";

const Summary = () => {
  const { appState } = useAppState();

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div>
          <h3>Project Name</h3>
          <p>
            {appState.projectName ? appState.projectName : <span>N/A</span>}
          </p>
        </div>
        <div>
          <h3>Project URL</h3>
          <p>{appState.projectUrl ? appState.projectUrl : <span>N/A</span>}</p>
        </div>
        <div>
          <h3>Project Category</h3>
          <p>{appState.projectCategory}</p>
        </div>
        <div>
          <h3>Main Goal</h3>
          <p>{appState.goal}</p>
        </div>
        <div>
          <h3>Full-time Workers</h3>
          <p>{appState.workers}</p>
        </div>
        <div>
          <h3>Product Launch Type</h3>
          <p>{appState.productLaunch}</p>
        </div>
        <div>
          <h3>Contact Email</h3>
          <p>{appState.contactEmail}</p>
        </div>
      </div>
      <Link href="/" className={styles.button}>
        Go back to AlphaQuest Form
      </Link>
    </div>
  );
};

export default Summary;
