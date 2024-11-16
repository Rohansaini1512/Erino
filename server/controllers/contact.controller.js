import AppError from "../utils/error.utils.js";
// import Contact from "../models/contact.model.js";
import Contact from "../models/contact.model.js";

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({}).select('-password');

        res.status(200).json({
            success: true,
            message: 'All contacts retrieved successfully',
            contacts,
        });
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
};


const createContact = async (req, res, next) => {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;

    console.log(firstName);
    if (!firstName || !lastName || !email || !phone || !company || !jobTitle) {
        return next(new AppError('All fields are required', 400));  
    }

    try {
        const contact = await Contact.create({
            firstName, 
            lastName, 
            email, 
            phone, 
            company, 
            jobTitle
        });

        if (!contact) {
            return next(new AppError('Contact could not be created, please try again', 500));
        }

        await contact.save();

        res.status(201).json({
            success: true,
            message: 'Contact created successfully',
            contact,  
        });
    } catch (error) {
        return next(new AppError(error.message, 502));
    }
};

const updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;

       
        const contact = await Contact.findByIdAndUpdate(
            id,
            {
                $set: req.body
            },
            {
                new: true,         
                runValidators: true 
            }
        );

   
        if (!contact) {
            return next(new AppError('Contact with given id does not exist', 404));
        }

        
        res.status(200).json({
            success: true,
            message: 'Contact updated successfully!',
            contact,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
};

const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;

    
        const contact = await Contact.findById(id);

      
        if (!contact) {
            return next(
                new AppError('Contact with the given id does not exist', 404)
            );
        }

     
        await Contact.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Contact deleted successfully',
        });
    } catch (e) {
        return next(
            new AppError(e.message, 500)
        );
    }
};


export {
    createContact,
    getAllContacts,
    updateContact,
    deleteContact
};
