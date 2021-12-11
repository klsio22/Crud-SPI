import { Router } from "express";

const router = Router();

/* 
Não peciso usar os paremetros no metodo handle pois o express repassa esses parametros automaticamente 
 */

/* router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle); */


export { router };