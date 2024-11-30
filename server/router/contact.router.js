import { Router } from "express";
import { createContact, deleteContact, getAllContacts, updateContact } from "../controllers/contact.controller.js"; 
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router();

router.route('/')
    .get(getAllContacts)
    .post(isLoggedIn , createContact);
router.route('/:id')
    .put(isLoggedIn , updateContact)
    .delete(isLoggedIn , deleteContact);

export default router;