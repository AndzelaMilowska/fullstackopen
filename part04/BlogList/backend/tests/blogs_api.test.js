const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
  {
    "_id": "68f291cbecbb296230b0c350",
    "title": "Test Blog",
    "author": "Jane Doe",
    "url": "http://example.com",
    "likes": 5,
    "__v": 0
  },
  {
    "_id": "68f29223ee57fd870b0ffcb2",
    "title": "Testeee Blog",
    "author": "Janaee Doe",
    "url": "http://exampleee.com",
    "likes": 5,
    "__v": 0
  }
]

  beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})


test.only('blogs are returned as json in correct amount', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    .expect((response) => {
      if (response.body.length !== initialBlogs.length) {
        throw new Error(`Expected ${initialBlogs.length} blogs, but got ${response.body.length}`)
      }
    })
})

test.only('unique identifier property of the blog posts is named id', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect((response) => {
      if (!response.body[0].id || !response.body[1].id) {
        throw new Error('Blog posts do not have an id property')
      }
      if (response.body[0]._id || response.body[1]._id) {
        throw new Error('Blog posts have _id property instead of id')
      }
    })
})

test.only('a valid blog can be added ', async () => {
  const newBlog = {
    "title": "Test",
    "author": "Dave",
    "url": "http://example.com",
    "likes": 7,
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  const title = response.body.map(r => r.title)

  assert.strictEqual(response.body.length, initialBlogs.length + 1)

  assert(title.includes("Test"))
})

after(async () => {
  await mongoose.connection.close()
})