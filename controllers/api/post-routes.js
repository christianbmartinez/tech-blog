const router = require('express').Router()
const { Comment, Post, User } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ['id', 'post_text', 'title', 'created_on'],
      order: [['created_on', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['full_name'],
        },
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
      ],
    })

    if (!posts) {
      res.status(404).json({ message: 'No posts found' })
      return
    }

    res.redirect('/dashboard')
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'post_text', 'title', 'created_on'],
      include: [
        {
          model: User,
          attributes: ['full_name'],
        },
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
      ],
    })

    if (!post) {
      res.status(404).json({ message: 'No post found with this id' })
      return
    }

    const allComments = post.comments.map((data) => data.dataValues)

    if (req.session.logged_in) {
      res.render('view-post', {
        post,
        allComments,
        logged_in: true,
      })
    } else {
      res.redirect('/login')
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      user_id: req.session.user_id,
    })

    res.redirect('/dashboard')
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.post('/:id', async (req, res) => {
  try {
    const posts = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!posts) {
      res.status(404).json({ message: 'No post found to update' })
      return
    }

    res.redirect('/dashboard')
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.redirect('/dashboard')
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
