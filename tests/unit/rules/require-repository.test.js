'use strict';

const chai = require('chai');
const lint = require('./../../../src/rules/require-repository').lint;

const should = chai.should();

describe('require-repository Unit Tests', function() {
  context('when package.json has node', function() {
    it('true should be returned', function() {
      const packageJsonData = {
        repository: 'repository'
      };
      const response = lint(packageJsonData, 'error');

      response.should.be.true;
    });
  });

  context('when package.json does not have node', function() {
    it('LintIssue object should be returned', function() {
      const packageJsonData = {};
      const response = lint(packageJsonData, 'error');

      response.lintId.should.equal('require-repository');
      response.lintType.should.equal('error');
      response.node.should.equal('repository');
      response.lintMessage.should.equal('repository is required');
    });
  });
});
