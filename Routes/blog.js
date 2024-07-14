const express = require("express");
const router = express.Router();

// Import controller
const {
  dummyLink,
  likePost,
  unlikePost,
} = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");

// Mapping route to controller method
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
// 1.57.41 video time
// Export the router
module.exports = router;
