const router = require('express').Router();
const { Post, Comment } = require('../../models');

// TODO: SET one comment
router.post('/:post_id', async (req, res) => {


    if (req.session.loggedIn)
    {
        console.log("Got to the route. Logged in.");
        try {
            // TODO: Figure out how to write to the database here.
            const dbCommentData = await Comment.create({
                post_id: req.body.post_id,
                title: req.body.title,
                date: Date.now(),
                content: req.body.content,
                user_id: req.session.user_id
            });
            res.status(200).json(dbCommentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    else
    {
        // User is not logged in.
        res.status(500).json("Please log in.");
    }
});

module.exports = router;