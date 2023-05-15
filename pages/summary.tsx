import React from "react";
import Link from "next/link";

import { useAppState } from "../context/form-context";

const Summary = () => {
  const { appState } = useAppState();

  return (
    <div>
      <pre>{JSON.stringify(appState)}</pre>
      <Link href="/">Go back to AlphaQuest Form</Link>
    </div>
  );
};

export default Summary;
