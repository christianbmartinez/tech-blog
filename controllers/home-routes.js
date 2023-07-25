const router = require('express').Router()
const { Post, User, Comment } = require('../models')

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'post_text', 'title', 'created_on'],
    order: [['created_on', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['full_name'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['full_name'],
        },
      },
    ],
  })
    .then((posts) => {
      const allPosts = posts.map((post) => post.get({ plain: true }))
      res.render('home', {
        allPosts,
        logged_in: req.session.logged_in,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return
  }
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

module.exports = router
