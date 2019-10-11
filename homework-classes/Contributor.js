'use strict';

class Contributor {
  constructor(contributor) {
    this.contributor = contributor;
  }

  /**
   * @param {HTMLElement} container The container element in which to render the contributor.
   */
  render(container) {
    const contributorsDiv = Util.createAndAppend('div', root, { id: 'contributorDiv' });
    Util.createAndAppend('img', container, {
      src: this.contributor.avatar_url,
      class: 'contributors-detail',
    });
    Util.createAndAppend('p', container, {
      text: this.contributor.login,
      class: 'contributors-detail',
    });
    Util.createAndAppend('p', container, {
      text: this.contributor.contributions,
      class: 'contributors-detail',
    });
  }
}
