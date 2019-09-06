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
    const contributorsDiv = Util.createAndAppend('div', root, { id: 'contributors' });
    for (let contributor of listOfContributors) {
      Util.createAndAppend('img', contributors, {
        src: this.contributor.avatar_url,
        class: 'contributors-detail',
      });
      Util.createAndAppend('div', contributors, {
        text: this.contributor.login,
        class: 'contributors-detail',
      });
      Util.createAndAppend('div', contributors, {
        text: this.contributor.contributions,
        class: 'contributors-detail',
      });
    }
    //Util.createAndAppend('pre', container, { text: JSON.stringify(this.contributor, null, 2) });
  }
}
