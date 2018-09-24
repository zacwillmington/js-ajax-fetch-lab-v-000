<<<<<<< HEAD
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';

}
=======
>>>>>>> 0f83b6adad2c0a1bd3d8334b51e2af8548aba6fa


function forkRepo() {
  const repo = 'js-ajax-fetch-lab';
<<<<<<< HEAD
  const userName = 'learn-co-curriculum';
=======
  const userName = 'learn-co-curriculum'
>>>>>>> 0f83b6adad2c0a1bd3d8334b51e2af8548aba6fa
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${userName}/${repo}/forks`,
      {
          method: 'post',
          headers: {
              Authorization: `token ${getToken()}`
          }
})
    .then(resp => resp.json())
    .then(json => showResults(json));
}

function showResults(forks) {
<<<<<<< HEAD
  //use this function to display the results from forking via the API
  let resultsDiv = document.getElementById('results');
  let str = `<h2>Forked by ${forks.owner.login}</h2>`;
  resultsDiv.insertAdjacentHTML( 'beforeend', str );

=======
    debugger;
  //use this function to display the results from forking via the API
  console.log(forks);
>>>>>>> 0f83b6adad2c0a1bd3d8334b51e2af8548aba6fa

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'js-ajax-fetch-lab';
  const userName = 'zacwillmington';
<<<<<<< HEAD
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  const data = {
      body: "test body"
      //`Issue Title: ${title} issue body: ${body}`
=======
  // let title = $('title').value;
  // let body = $('body').value;

  const data = {
      body: `${title} + ${body}`;
>>>>>>> 0f83b6adad2c0a1bd3d8334b51e2af8548aba6fa
  };

  debugger;

  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
<<<<<<< HEAD
          Authorization: `token ${getToken()}`
      }
  })
  .then(resp => resp.json())
  .then(json => getIssues());
=======
          Authorization: `token ${getToken()}`;
      }
  })
  .then(resp => resp.json())
  .then(json => showResults(json));
>>>>>>> 0f83b6adad2c0a1bd3d8334b51e2af8548aba6fa
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const userName = 'learn-co-curriculum';
  const repo = 'js-ajax-fetch-lab';
  fetch(`https://api.github.com/${repo}/issues/`);

}



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
