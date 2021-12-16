import { Router } from "express";
import { TypeUserController } from "./controllers/TypeUserController";

import {UserController} from "./controllers/UserController";


const router = Router();

router.post("/types", new TypeUserController().create);

router.post("/login", new UserController().create)

export { router };
