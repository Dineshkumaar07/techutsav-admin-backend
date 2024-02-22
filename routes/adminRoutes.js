const { Router } = require("express");
const adminController = require("../controllers/adminControllers");

const router = Router();

router.get("/getEvents", adminController.getEvents_get);
router.post("/createEvent", adminController.createEvent_post);
router.put("/updateEvent", adminController.updateEventDetails_put);
router.post("/getEventData", adminController.getEventData_post);
router.put("/deleteEvent", adminController.remove_delete);
router.get("/getStudents", adminController.getStudents_get);

module.exports = router;
