mport express from "express";
import {register, login} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register); // accesses the function the user will log to
router.post("/login", login); 

export default router;

