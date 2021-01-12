const { Comment } = require('../models');

const commentdata = [
  {
    title: "First comment on the first post!",
    date: "1/1/21",
    content: "Heck yeah! Dudditz!",
    post_id: "1",
    user_id: "2"
  },
  {
    title: "Indeed, hello world.",
    date: "1/2/21",
    content: "I approve of this new website.",
    post_id: "1",
    user_id: "3"
  },
  {
    title: "Surprisingly challenging.",
    date: "1/3/21",
    content: "I did this assignment in about 4 days. There were a lot of challenges on things I thought I knew how to do.",
    post_id: "2",
    user_id: "1"
  },
  {
    title: "Nothing yet.",
    date: "1/4/21",
    content: "I am still looking myself but times are tough right now. I'll keep my eye out for anything that I can't take myself. ;)",
    post_id: "3",
    user_id: "1"
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;