const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //update the post collection basis
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(400).json({
      err: "Error while fetching post",
    });
  }
};

//unlike post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //find and delete
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
    //if both post is similar to post id==id

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(400).json({
      err: "Error while Unliking Post",
    });
  }
};

exports.dummyLink = (req, res) => {
  res.send("this is your dummy page");
};
