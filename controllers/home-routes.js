const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll();

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    // console.log(posts);
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get dashboard posts
router.get('/dashboard', async (req,res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    // console.log("RAW DATA: " + dbPostData);

    const posts = dbPostData.map((post) => {
      post.get({ plain: true });
    });
    
    // console.log("FILTERED DATA: " + posts);

    res.render('dashboard', { 
      posts, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log('ERROR | ' + err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, 
    // EXAMPLE INCLUDE 
      {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'title',
              'date',
              'content',
              'user_id',
            ],
            // TODO: How do we include the user that made the comment? Do we have to make a new query?
            },
        ],
      }
    );

    const posts = dbPostData.get({ plain: true });

    const dbPostUsername = await User.findByPk(posts.user_id);
    const postUsername = dbPostUsername.get({plain: true}).username;

    posts.comments.forEach(async element => {
      const dbCommentUser = await User.findByPk(element.user_id);
      const commentUsername = dbCommentUser.get({plain: true}).username;

      element.username = commentUsername;
    });


    
    console.log(posts);
    // Send over the 'loggedIn' session variable to the 'post' template
    // posts is the name of the .handlebars file that we want to render.
    res.render('posts', { posts, postUsername, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('signup');
});

module.exports = router;
