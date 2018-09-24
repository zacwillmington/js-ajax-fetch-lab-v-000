
function forkRepo() {
  const repo = 'js-ajax-fetch-lab';
  const userName = 'learn-co-curriculum'
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
    debugger;
  //use this function to display the results from forking via the API
  console.log(forks);

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'js-ajax-fetch-lab';
  const userName = 'zacwillmington';
  // let title = $('title').value;
  // let body = $('body').value;

  const data = {
      body: `${title} + ${body}`;
  };

  debugger;

  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
          Authorization: `token ${getToken()}`;
      }
  })
  .then(resp => resp.json())
  .then(json => showResults(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
