const { Comment } = require('../models')

const commentData = [
  {
    comment_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis odio a.',
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis odio a.',
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text:
      'ILorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis odio a.',
    post_id: 4,
    user_id: 2,
  },
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments
