import mongoose, { modelNames } from "mongoose";
mongoose.set("strictQuery", false);

const PostSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            types: Array,
            default : [],
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;