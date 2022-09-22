const posts = [
  {
    id: 1,
    title: "Sample Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "Sample Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "Sample Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

// ES2016+
// Create new array of post IDs. I.e. [1,2,3]
let postIds = posts.map((post) => post.id);
console.log(postIds);

// Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
let postSummaries = posts.map((post) => ({ id: post.id, title: post.title }));
console.log(postSummaries);

// ES2015
// Create new array of post IDs. I.e. [1,2,3]
postIds = posts.map(function (post) {
  return post.id;
});

// Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
postSummaries = posts.map(function (post) {
  return { id: post.id, title: post.title };
});
