const router = require('express').Router()
const { Comment, Post, User } = require('../../models')

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body)
    req.session.save(() => {
      req.session.user_id = userData.dataValues.id
      req.session.logged_in = true
      res.redirect('/login')
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
      res.status(404).json({ message: 'No user found' })
      return
    }

    const validPassword = userData.checkPassword(req.body.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' })
      return
    }

    req.session.save(() => {
      req.session.user_id = userData.dataValues.id
      req.session.logged_in = true
    })

    const allPosts = await Post.findAll({
      where: {
        user_id: userData.dataValues.id,
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

    res.render('dashboard', { posts, logged_in: true })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
})

module.exports = router
