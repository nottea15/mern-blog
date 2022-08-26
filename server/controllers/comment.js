import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const createComment = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const user = await User.findById(req.userId);

    if (!comment) {
      return res.json({ message: { type: "error", content: "No comments" } });
    }

    const newComment = new Comment({
      comment,
      username: user.username,
      author: req.userId,
    });
    await newComment.save();

    try {
      await Post.findByIdAndUpdate(postId, {
        $push: { comments: newComment._id },
      });

      res.json(newComment);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
