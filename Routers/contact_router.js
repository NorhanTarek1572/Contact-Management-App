const express = require('express');
const {getContact ,SearchForContact,updateContact,deleteContact,createContact} = require('../Controller/contact_controller')
let router = express();
// ======================CRUDS Operations========================

// Create Operation
router.post('/',createContact)
// Read  Operation
router.get('/',getContact)
// Update Operation 
 router.put('/:id',updateContact)
// delete Operation
 router.delete('/:id', deleteContact)
//Search Operation
router.get('/:id',SearchForContact)


module.exports = router ;