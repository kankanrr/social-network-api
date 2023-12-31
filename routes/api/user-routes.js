const router = require("express").Router();

// Set requirements
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

router.route("/").get(getAllUsers).post(createUsers);

// route pathing
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
