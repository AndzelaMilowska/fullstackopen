const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

describe("total likes", () => {
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
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test("empty list should return zero", () => {
    const result = listHelper.totalLikes([]);
    assert.strictEqual(result, 0);
  });

  test("should return 9", () => {
     const result = listHelper.totalLikes(listWithSumLikes9);
        assert.strictEqual(result, 9);
  });
});
