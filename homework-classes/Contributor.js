'use strict';

/* global Util */

class Contributor {
  constructor(contributor) {
    this.contributor = contributor;
  }

  /**
   * Render the contributor info to the DOM.
   * @param {HTMLElement} container The container element in which to render the contributor.
   */
  render(container) {
    // TODO: replace the next line with your code.
    const contributorsDiv = Util.createAndAppend('div', root, { id: 'contributorDiv' });
    Util.createAndAppend('img', contributorDiv, {
      src: this.contributor.avatar_url,
      class: 'contributors-detail',
    });
    Util.createAndAppend('div', contributorDiv, {
      text: this.contributor.login,
      class: 'contributors-detail',
    });
    Util.createAndAppend('div', contributorDiv, {
      text: this.contributor.contributions,
      class: 'contributors-detail',
    });
  }
  //Util.createAndAppend('pre', container, { text: JSON.stringify(this.contributor, null, 2) });
}
