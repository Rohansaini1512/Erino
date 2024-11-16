import { Router } from "express";
import { createContact, deleteContact, getAllContacts, updateContact } from "../controllers/contact.controller.js"; 

const router = Router();

router.post('/register' , createContact);
router.get('/getAllContacts' , getAllContacts);
router.put('/update/:id' , updateContact);
router.delete('/delete/:id' , deleteContact);

export default router;