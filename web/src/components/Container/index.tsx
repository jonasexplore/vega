export const Container = ({ children }: any) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column",
      marginTop: "32px",
    }}
  >
    {children}
  </div>
);
