import { Router } from "express";
import { CreatePatientController } from "./controllers/CreatePatientController";
import { TypeUserController } from "./controllers/TypeUserController";

import {UserController} from "./controllers/UserController";


const router = Router();

router.post("/types", new TypeUserController().create);

router.post("/login", new UserController().create)

router.post("/register", new CreatePatientController().create)

export { router };
