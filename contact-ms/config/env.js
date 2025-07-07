
import dotenv from "dotenv";
import zod from "zod";

dotenv.config();

const PORT = process.env.PORT || 3000;

const MONOGODB_URL = process.env.MONOGODB_URL;

export {PORT, MONOGODB_URL}