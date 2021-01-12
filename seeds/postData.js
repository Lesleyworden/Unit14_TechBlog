const { Post } = require('../models');

const postdata = [
  {
    title: "Hello World!",
    date: "1/1/21",
    content: "Just posting to be the first one to post on this Tech Blog! Nice job!.",
    user_id: "1",
  },
  {
    title: "Lets get down to business.",
    date: "1/3/21",
    content: "How long did it take you guys to get done with this assignment?",
    user_id: "2",
  },
  {
    title: "Job Search.",
    date: "1/4/21",
    content: "Looking for jobs! Let me know if you hear anything useful!",
    user_id: "3",
  },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;