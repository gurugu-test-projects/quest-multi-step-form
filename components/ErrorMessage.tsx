import styles from "./styles/ErrorMessage.module.scss";

interface Error {
  message: string | undefined;
}

function ErrorMessage({ error, ...props }: { error: Error }) {
  return (
    <div role="alert" className={styles.alert} {...props}>
      <pre
        style={{
          whiteSpace: "break-spaces",
          margin: "0",
          marginBottom: -5,
          display: "inline-block",
        }}
      >
        {error.message ?? "Something bad happened!"}
      </pre>
    </div>
  );
}

export { ErrorMessage };
