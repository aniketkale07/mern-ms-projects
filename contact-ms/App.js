import path from 'path';
import router from "./router/contact.router.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

app=express();

// public path
app.use(express.static(path.join(__dirname, 'public' )));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/style", express.static(path.join(__dirname, "public/style")));

// router 
app.use(router);