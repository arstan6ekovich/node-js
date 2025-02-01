import { buildServer } from "./app";

const server = buildServer();

const start = async () => {
  const PORT = process.env.PORT || 3000;
  const httpHost = server.listen(
    {
      port: PORT,
      host: "0.0.0.0",
    },
    () => {
      console.log(`${new Date()}`);
      console.log(`server run in: http://localhost:${PORT}`);
    }
  );
};

start();
