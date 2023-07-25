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

    if (!allPosts) {
      res.status(404).json({ message: 'No posts found!' })
      return
    }

    const posts = allPosts.map((post) => post.get({ plain: true }))
    res.render('dashboard', { posts, logged_in: req.session.logged_in })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
