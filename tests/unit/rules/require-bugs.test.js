'use strict';

const chai = require('chai');
const lint = require('./../../../src/rules/require-bugs').lint;

const should = chai.should();

describe('require-bugs Unit Tests', function() {
  context('when package.json has node', function() {
    it('true should be returned', function() {
      const packageJsonData = {
        bugs: 'bugs'
      };
      const response = lint(packageJsonData, 'error');

      response.should.be.true;
    });
  });

  context('when package.json does not have node', function() {
    it('LintIssue object should be returned', function() {
      const packageJsonData = {};
      const response = lint(packageJsonData, 'error');

      response.lintId.should.equal('require-bugs');
      response.lintType.should.equal('error');
      response.node.should.equal('bugs');
      response.lintMessage.should.equal('bugs is required');
    });
  });
});
