export const Container = ({ children }: any) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
      flexDirection: "column",
    }}
  >
    {children}
  </div>
);
