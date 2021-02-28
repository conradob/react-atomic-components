// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Issues List', function () {
  before(() => {});

  beforeEach(function () {
    cy.visit('/');
  });

  it('renders navigates to list page and list issues', function () {
    cy.intercept('GET', `https://api.github.com/repos/facebook/react/issues?page=1`).as(
      'get_issues'
    );
    cy.get('a').click();
    cy.wait('@get_issues').its('response.statusCode').should('equal', 200);
    cy.get('[id^="issue_"]').should('have.lengthOf', 30);
  });
});

describe('Issues Tags', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('renders the issues tags', function () {
    const labels = [
      {id: 1, name: 'Tag 1', color: '111111', rgb: 'rgb(17, 17, 17)'},
      {id: 2, name: 'Tag 2', color: '222222', rgb: 'rgb(34, 34, 34)'},
    ];
    cy.fixture('issues').then((issues) => {
      for (const issue of issues) {
        issue.labels = labels;
      }
      cy.intercept('GET', `https://api.github.com/repos/facebook/react/issues?page=1`, issues).as(
        'get_issues'
      );
    });
    cy.get('a').click();
    cy.wait('@get_issues').its('response.statusCode').should('equal', 200);
    cy.get('[id^="issue_"]').each(($issue) => {
      const issueLabels = $issue.find('[id^="label_"]');
      expect(issueLabels).to.have.lengthOf(2);
      issueLabels.each((index, $label) => {
        expect($label.innerText).to.equal(labels[index].name);
        expect($label).to.have.css('background-color', labels[index].rgb);
      });
    });
  });
});

describe('Issues Comments', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('renders the issues comments', function () {
    cy.fixture('issues').then((issues) => {
      issues.forEach((issue: {comments: number}, index: number) =>
        index === 1 ? (issue.comments = 1) : (issue.comments = 2)
      );
      cy.intercept('GET', `https://api.github.com/repos/facebook/react/issues?page=1`, issues).as(
        'get_issues'
      );
    });
    cy.get('a').click();
    cy.wait('@get_issues').its('response.statusCode').should('equal', 200);
    cy.get('[id^="issue_"]').each(($issue, index) => {
      if (index === 1) {
        expect($issue.find('[aria-label]')).to.have.attr('aria-label', '1 comment');
      } else {
        expect($issue.find('[aria-label]')).to.have.attr('aria-label', '2 comments');
      }
    });
  });
});

describe('Issues Assignee', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('renders the assignee avatar', function () {
    const assignee = {
      login: 'u-uysal',
      avatar_url: 'https://avatars.githubusercontent.com/u/54946794?v=4',
    };
    cy.fixture('issues').then((issues) => {
      for (const issue of issues) {
        issue.assignee = assignee;
      }
      cy.intercept('GET', `https://api.github.com/repos/facebook/react/issues?page=1`, issues).as(
        'get_issues'
      );
    });
    cy.get('a').click();
    cy.wait('@get_issues').its('response.statusCode').should('equal', 200);
    cy.get('[id^="issue_"]').each(($issue) => {
      expect($issue.find('img')).to.have.attr('src', assignee.avatar_url);
    });
  });
});
