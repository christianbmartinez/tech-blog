const { Post } = require('../models')

const postData = [
  {
    title: 'What is React?',
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit vel metus volutpat malesuada a ut sapien. Sed ac elit dui. Proin ornare aliquet interdum. Pellentesque eu urna vulputate, venenatis tortor quis, tristique massa. Curabitur blandit eu lacus congue ullamcorper. Vestibulum in imperdiet quam. Proin dignissim porttitor neque congue eleifend. Nam urna nibh, egestas a nisi blandit, aliquet fermentum leo. Donec dignissim finibus nisl, et posuere lorem vulputate sed.',
    user_id: 1,
  },
  {
    title: 'What is NextJs?',
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit vel metus volutpat malesuada a ut sapien. Sed ac elit dui. Proin ornare aliquet interdum. Pellentesque eu urna vulputate, venenatis tortor quis, tristique massa. Curabitur blandit eu lacus congue ullamcorper. Vestibulum in imperdiet quam. Proin dignissim porttitor neque congue eleifend. Nam urna nibh, egestas a nisi blandit, aliquet fermentum leo. Donec dignissim finibus nisl, et posuere lorem vulputate sed.',
    user_id: 2,
  },
  {
    title: 'Object Oriented Programming',
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit vel metus volutpat malesuada a ut sapien. Sed ac elit dui. Proin ornare aliquet interdum. Pellentesque eu urna vulputate, venenatis tortor quis, tristique massa. Curabitur blandit eu lacus congue ullamcorper. Vestibulum in imperdiet quam. Proin dignissim porttitor neque congue eleifend. Nam urna nibh, egestas a nisi blandit, aliquet fermentum leo. Donec dignissim finibus nisl, et posuere lorem vulputate sed.',
    user_id: 3,
  },
  {
    title: 'Authentication Vs Authorization',
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit vel metus volutpat malesuada a ut sapien. Sed ac elit dui. Proin ornare aliquet interdum. Pellentesque eu urna vulputate, venenatis tortor quis, tristique massa. Curabitur blandit eu lacus congue ullamcorper. Vestibulum in imperdiet quam. Proin dignissim porttitor neque congue eleifend. Nam urna nibh, egestas a nisi blandit, aliquet fermentum leo. Donec dignissim finibus nisl, et posuere lorem vulputate sed.',
    user_id: 4,
  },
  {
    title: 'Object-Relational Mapping',
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit vel metus volutpat malesuada a ut sapien. Sed ac elit dui. Proin ornare aliquet interdum. Pellentesque eu urna vulputate, venenatis tortor quis, tristique massa. Curabitur blandit eu lacus congue ullamcorper. Vestibulum in imperdiet quam. Proin dignissim porttitor neque congue eleifend. Nam urna nibh, egestas a nisi blandit, aliquet fermentum leo. Donec dignissim finibus nisl, et posuere lorem vulputate sed.',
    user_id: 5,
  },
  {
    title: 'Model View Controllers',
    post_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec velit vel metus volutpat malesuada a ut sapien. Sed ac elit dui. Proin ornare aliquet interdum. Pellentesque eu urna vulputate, venenatis tortor quis, tristique massa. Curabitur blandit eu lacus congue ullamcorper. Vestibulum in imperdiet quam. Proin dignissim porttitor neque congue eleifend. Nam urna nibh, egestas a nisi blandit, aliquet fermentum leo. Donec dignissim finibus nisl, et posuere lorem vulputate sed.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
