const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

// function sendHttpRequest(method, url, data) {//   // const promise = new Promise((resolve) => {
//   //   const xhr = new XMLHttpRequest();
//   //   xhr.setRequestHeader("Content-Type", "application/json");

//   //   xhr.open(method, url);
//   //   xhr.responseType = "json";
//   //   xhr.onload = function () {
//   //     if (xhr.status >= 200 && xhr.stats < 300) {
//   //       resolve(xhr.response);
//   //     } else {
//   //       reject(new Error("Something went wrong!"));
//   //     }
//   //     // const listOfPosts = JSON.parse(xhr.response);
//   //   };
//   //   xhr.onerror = function () {
//   //     reject(new Error("Failed to send request!"));
//   //   };
//   //   xhr.send(JSON.stringify(data));
//   // });
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.status >= 200 && response.status < 300) {
//         return response.json();
//       } else {
//         return response.json().then((errData) => {
//           console.log(errData);
//           throw new Error("Something went wrong - server-side");
//         });
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const listOfPosts = response.data;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData();
  // fd.append("title", title);
  // fd.append("body", content);
  fd.append("userId", userId);

  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
  // enteredTitle.value = "";
  // enteredContent.value = "";
});

listElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
