/*------------------------------ Starter Code ------------------------------*/
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Post = require('./models/post.js');
const User  = require('./models/user.js')

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries()

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect()

/*----------------------------- Query Functions -----------------------------*/

const createPost = async () => {
  const PostData = {
    caption: "First Post",
    likes: 1, 
    
  };
  const post = await Post.create(PostData);
  console.log("New Post:",Post);
};

const findPosts = async () => {
  const posts = await Post.find({}).populate("account");
  console.log("All Posts:", posts);
};

const createComments = async () => {
    const postId= "6716362cacce4b8494a70f43";
    const post = await Post.findById(postId);

    const  commentData = {
        comment:"Nice",
    };
    const comment = post.comments.push(commentData);
    await post.save();
    console.log("New Comment:", comment);
};
const findComment = async () => {
    const postId= "6716362cacce4b8494a70f43";
    const commentId = '6716386a8c7a181365808a25'; 
  
    const post = await Post.findById(postId);
    const comment = post.comments.id(commentId);
  
    console.log('comment:', comment);
  };

  const removePost = async () => {
    const postId= "6716362cacce4b8494a70f43";
    const commentId = '6716384ae89e5e20d41f05d9'; 
    const post = await Post.findById(postId);
    post.comments.pull(commentId);
    await  post.save();

    console.log('Updated Post:', post);

  };

  const UpdatePost = async () => {
    const postId= "6716362cacce4b8494a70f43";
    const commentId = '6716386a8c7a181365808a25'; 
    
    const post = await Post.findById(postId);
    const comment = post.comments.id(commentId);

    comment.comment = ":)";
    await post.save();
      
    console.log('Updated Post:', post);

  };

  const createUser = async () => {
    const userData = {
      name: "Alex",
      email: "alex@mail.com",
    };
    const user = await User.create(userData);
    console.log("New user:", user);
  };

  const assignPost= async () => {
    const postId= "6716362cacce4b8494a70f43";
    const commentId = '6716386a8c7a181365808a25'; 
  
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { account: userId },
      { new: true }
    );
  
    console.log('Updated Post:', updatedPost);
  };


  
/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
   //await createPost();
   //await createComments();
   //await findComment();
   //await removePost();
   //await UpdatePost();
   //await createUser();
   await findPosts();

};

