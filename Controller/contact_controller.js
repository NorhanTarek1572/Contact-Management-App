const async_handler =require("express-async-handler")
const Contact = require('../models/contsct_model')


const createContact =async_handler(async (req ,res)=>{
   // Create Operation
    const {name , email , phone} = req.body ; // it to return data from client(APis), then save it in the server   
    // to make sure that the client send data 
    if(!name || !phone || !email){
        res.status(400);
       throw new Error ("Enter this field !!")
    }

    const contact = await Contact.create({
        name,
        email,
        phone,

       // user_id: req.user.id,
      });
      res.status(201).json(contact);
 
 })
const getContact =async_handler(async(req ,res)=>{
   // Read  Operation
    const allContacts = await Contact.find(); // get all data in this collection (contact)
     res.status(200).json(allContacts)
 })
const updateContact =async_handler(async(req ,res)=>{
    // Update Operation 
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
  
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
  
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedContact);

    // res.status(200).json({"message" :`update  contact of id : ${req.params.id}`})
 })
const deleteContact =async_handler(async(req ,res)=>{
    // delete Operation
    // res.send("<h1>get all contact </h1>")
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
 })
const SearchForContact =async_handler(async(req ,res)=>{
    //Search Operation
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);

     //res.status(200).json({"message" :`get contact of id : ${req.params.id}`})
 })

 module.exports={getContact ,SearchForContact,updateContact,deleteContact,createContact}