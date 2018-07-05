const axios = require('axios')

/* new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
})
  .then(result => {
    console.log(` Result = ${result}`);
    return result + 2;
  })
  .then(result => {
    throw new Error("FAILED HERE");
    console.log(` Result = ${result}`);
    return result + 2;
  })
  .then(result => {
    alert(result);
    return result + 2;
  })
  .catch(e => {
    console.log("error: ", e);
  });
*/

function doubleAfter2Seconds (x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2)
    }, 2000)
  })
}

// function addPromise (x) {
//   return new Promise(resolve => {
//     doubleAfter2Seconds(10).then(a => {
//       doubleAfter2Seconds(20).then(b => {
//         doubleAfter2Seconds(30).then(c => {
//           resolve(x + a + b + c)
//         })
//       })
//     })
//   })
// }

// addPromise(10).then((sum) => {
//   //console.log(`Add Promise Sum=${sum}`);
// });

async function addAsync (x) {
  const a = await doubleAfter2Seconds(10)
  const b = await doubleAfter2Seconds(20)
  const c = await doubleAfter2Seconds(30)
  return x + a + b + c
}

// addAsync(10).then((sum) => {
//   //console.log(`Add Async Sum=${sum}`);
// });

// axios
//   .get('http://localhost:3000/comments/1')
//   .then(function (response) {
//     // handle success
//     axios
//       .get(`http://localhost:3000/posts/${response.data.postId}`)
//       .then(response => {
//         console.log(response.data)
//       })
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error)
//   })

const getPostFromComment = async commentId => {
  console.log(`Yo! from ${commentId}`)
  try {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/comments/${commentId}`
    )
    const postResponse = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${response.data.postId}`
    )
    return postResponse.data
  } catch (error) {
    console.error(`Found Error ${error}`)
  }
}

module.exports = getPostFromComment

// getPostFromComment(1)

// getPostFromComment(1000)
