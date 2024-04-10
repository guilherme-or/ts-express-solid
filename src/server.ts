import environment from "dotenv";
import app from "./app";

// Setup .env file in "process.env" global
environment.config();

const serverPort: Number = Number(process.env.SERVER_PORT) || 3333;

// Serve app
app.listen(serverPort, () =>
  console.log(`🚀 Server online at port ${serverPort}`)
);
