'use strict';
const fetch = require('node-fetch');
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

const HYF_REPOS_URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

fetch('bla.json')
  .then(response => {
    if (response.status !== 200) {
      console.log(`Network error: ${response.status} - ${response.statusText}`);
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log('Fetch Error', err);
  });
