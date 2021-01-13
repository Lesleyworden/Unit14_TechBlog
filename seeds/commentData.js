const { Comment } = require('../models');

const commentdata = [
  {
    title: "First comment on the first post!",
    date: "1/1/21",
    content: "Welcome! Thanks!!",
    post_id: "1",
    user_id: "2"
  },
  {
    title: "Indeed, hello world.",
    date: "1/2/21",
    content: "This site is great!",
    post_id: "1",
    user_id: "3"
  },
  {
    title: "Surprisingly challenging.",
    date: "1/3/21",
    content: "This project was a bit difficult for me. I took a while for it to work.",
    post_id: "2",
    user_id: "1"
  },
  {
    title: "Nothing yet.",
    date: "1/4/21",
    content: "Looking forward to applying when I finish school.",
    post_id: "3",
    user_id: "1"
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;