const Comment = require('./Comment')
const Post = require('./Post')
const User = require('./User')

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true,
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'cascade',
  hooks: true,
})

Post.belongsTo(User, {
  foreignKey: 'user_id',
})

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'cascade',
  hooks: true,
})

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true,
})

User.hasMany(Post, {
  foreignKey: 'user_id',
})

module.exports = { Comment, Post, User }
