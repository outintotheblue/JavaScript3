'use strict';

class Repository {
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * @param {HTMLElement} container The container element in which to render the repository.
   */
  render(container) {
    Util.createAndAppend('option', container, { text: this.name() });
  }

  fetchContributors() {
    App.clearContainer(details);
    Util.createAndAppend('div', details, { text: `Description: ${this.repository.description}` });
    Util.createAndAppend('div', details, { text: `Forks: ${this.repository.forks}` });
    Util.createAndAppend('div', details, { text: `Last Update: ${this.repository.updated_at}` });
    return Util.fetchJSON(this.repository.contributors_url);
  }

  name() {
    return this.repository.name;
  }
}
