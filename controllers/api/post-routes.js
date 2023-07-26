const router = require('express').Router()
const { Post } = require('../../models')

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

module.exports = router
