const router = require('express').Router()
const { Comment, Post, User } = require('../models')

router.get('/', async (req, res) => {
  if (req.session.logged_in || req.session.user_id) {
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
              'created_on',
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
  } else {
    res.redirect('/login')
  }
})

router.get('/edit/:id', async (req, res) => {
  try {
    const findPost = await Post.findOne({
      where: {
        id: req.params.id,
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
            'created_on',
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

    if (!findPost) {
      res.status(404).json({ message: 'No post found' })
      return
    }

    const post = findPost.get({ plain: true })

    res.render('edit-post', { post, logged_in: req.session.logged_in })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
