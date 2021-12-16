import { Router } from "express";
import { TypeUserController } from "./controllers/TypeUserController";
const router = Router();

router.post("/types", new TypeUserController().create);

export { router };
