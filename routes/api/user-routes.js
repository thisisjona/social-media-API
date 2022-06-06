const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    addFriend,
    removeFriend,
    deleteUserById
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;