import { checkPrime } from "crypto";
import express, { router } from "express";

import {home, login, signup,logout, checkLogin, checkSignup, viewcontact, viewallcontact, addcontact} from '../controller/contact.controller.js';


const router = express.Router();

router.get("/", home);
router.get("/home", home);
router.get("/login", login);
router.get("/signup",signup);
router.get("/logout", logout);

router.post("/checkLogin", checkLogin);
router.post("/checkSignup", checkSignup);

// operation on the contact
router.get("/viewcontact" , viewcontact);
router.post("/addcontact", addcontact);
router.post("/updatecontact", updatecontact);
router.get("/deletecontact", deletecontact);
router.get("/viewallcontact", viewallcontact);

export default router;