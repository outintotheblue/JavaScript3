'use strict';

/* global Util, Repository, Contributor */

class App {
  constructor(url) {
    this.initialize(url);
  }

  /**
   * Initialization
   * @param {string} url The GitHub URL for obtaining the organization's repositories.
   */
  async initialize(url) {
    const root = document.getElementById('root');
    Util.createAndAppend('select', root, { id: 'dropdown-select' });
    Util.createAndAppend('div', root, { id: 'details' });
    Util.createAndAppend('div', root, { id: 'contributors' });
    Util.createAndAppend('h1', root, { text: 'REPOSITORIES' });

    try {
      const repos = await Util.fetchJSON(url);
      this.repos = repos.map(repo => new Repository(repo));
      this.repos.forEach(repoDataObj => {
        repoDataObj.render(document.getElementById('dropdown-select'));
      });
    } catch (error) {
      this.renderError(error);
    }
    document.getElementById('dropdown-select').addEventListener('change', event => {
      const selectedRepo = event.target.value;
      const selectedData = this.repos.filter(repoData => repoData.name === selectedRepo)[0];
      const index = this.repos.indexOf(selectedData);
      this.fetchContributorsAndRender(index);
    });
  }

  /**
   * Removes all child elements from a container element
   * @param {*} container Container element to clear
   */
  static clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  /**
   * Fetch contributor information for the selected repository and render the
   * repo and its contributors as HTML elements in the DOM.
   * @param {number} index The array index of the repository.
   */
  async fetchContributorsAndRender(index) {
    try {
      const repo = this.repos[index];
      const contributors = await repo.fetchContributors();

      const container = document.getElementById('contributors');
      App.clearContainer(container);

      const leftDiv = Util.createAndAppend('div', container);
      const rightDiv = Util.createAndAppend('div', container);

      const contributorList = Util.createAndAppend('ul', rightDiv);

      repo.render(leftDiv);

      contributors
        .map(contributor => new Contributor(contributor))
        .forEach(contributor => contributor.render(contributorList));
    } catch (error) {
      this.renderError(error);
    }
  }

  /**
   * Render an error to the page.
   * @param {Error} error An Error object describing the error.
   */
  renderError(error) {
    console.error(error); // TODO: replace with your own code
  }
}

const HYF_REPOS_URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
window.onload = () => new App(HYF_REPOS_URL);
