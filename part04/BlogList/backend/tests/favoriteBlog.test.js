const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("favorite blog", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
  ];

  const listWithSumLikes9 = [
    {
      title: "Test Blog",
      author: "Jane Doe",
      url: "http://example.com",
      likes: 5,
    },
    {
      title: "Blog for Test",
      author: "Doe",
      url: "http://examplee.com",
      likes: 3,
    },
    {
      title: "Test",
      author: "Jane",
      url: "http://ex.com",
      likes: 1,
    },
  ];


  test("should return null for empty array", () => {
     const result = listHelper.favoriteBlog([]);
        assert.strictEqual(result, null);
  });

  test ("when list has only one blog, equals that blog", () => {
    const result = listHelper.favoriteBlog(listWithOneBlog);
    assert.deepStrictEqual(result, listWithOneBlog[0]);
  });
  
  test("should return the blog with most likes", () => {
     const result = listHelper.favoriteBlog(listWithSumLikes9);
        assert.deepStrictEqual(result, listWithSumLikes9[0]);
  });
});
