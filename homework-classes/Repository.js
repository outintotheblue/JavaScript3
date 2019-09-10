'use strict';

/* global Util */

class Repository {
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Render the repository info to the DOM.
   * @param {HTMLElement} container The container element in which to render the repository.
   */
  render(container) {
    Util.createAndAppend('option', container, { text: this.name() });
  }

  /**
   * Returns an array of contributors as a promise
   */
  fetchContributors() {
    Util.createAndAppend('div', details, { text: `Description: ${this.repository.description}` });
    Util.createAndAppend('div', details, { text: `Forks: ${this.repository.forks}` });
    Util.createAndAppend('div', details, { text: `Last Update: ${this.repository.updated_at}` });
    return Util.fetchJSON(this.repository.contributors_url);
  }

  /**
   * Returns the name of the repository
   */
  name() {
    return this.repository.name;
  }
}
