const router = require('express').Router()
const { Comment } = require('../../models')

router.post('/:id', async (req, res) => {
  try {
    const createdComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.params.id,
      user_id: req.session.user_id,
    })
    res.redirect('/')
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
