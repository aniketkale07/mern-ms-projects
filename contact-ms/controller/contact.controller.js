
import router from "../router/contact.router.js";

const viewpath = path.join(__dirname, "../views");

export const home = (req, res) => {
  res.render("home",{user :{}}); // No need to add .ejs if engine is set
  
};

export const login = (req, res)=>{
    res.render("login", {user : {}});
}