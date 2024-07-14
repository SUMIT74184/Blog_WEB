//import the models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body;
    //creating the comment object
    const comment = new Comment({
      post,
      user,
      body,
    });
    const savedComment = await comment.save();

    //find the post by ID,add the new comment to its comment arrays
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true } //updated post will be returned
    )
      .populate("comments") //populate the comments array with comment document
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      err: "error while creatinf comment",
    });
  }
};
