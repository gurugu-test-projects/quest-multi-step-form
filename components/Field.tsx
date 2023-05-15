import React from "react";
import { FieldError } from "react-hook-form";

import { ErrorMessage } from "./ErrorMessage";

interface IProps {
  label?: string;
  children: React.ReactNode;
  htmlFor?: string;
  error?: FieldError;
}

function Field({ label, children, htmlFor, error }: IProps) {
  const id = htmlFor || getChildId(children);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {label && (
        <label style={{ margin: "10px 0 5px" }} htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {!!error && <ErrorMessage error={{ message: error.message }} />}
    </div>
  );
}

const getChildId = (children: React.ReactNode): string | undefined => {
  const child = React.Children.only(children) as React.ReactElement;

  if ("id" in child?.props) {
    return child.props.id;
  }
};

export { Field };
