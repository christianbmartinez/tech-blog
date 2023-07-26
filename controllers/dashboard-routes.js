const router = require('express').Router()
const { Comment, Post, User } = require('../models')

router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'post_text', 'title', 'created_on'],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: User,
            attributes: ['full_name'],
          },
        },
        {
          model: User,
          attributes: ['full_name'],
        },
      ],
    })

    const posts = allPosts.map((post) => post.get({ plain: true }))

    res.render('dashboard', { posts, logged_in: req.session.logged_in })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
module.exports = router
