'use strict';

const chai = require('chai');
const {lint, ruleType} = require('./../../../src/rules/require-scripts');

const should = chai.should();

describe('require-scripts Unit Tests', function() {
  context('a rule type value should be exported', function() {
    it('it should equal "standard"', function() {
      ruleType.should.equal('standard');
    });
  });

  context('when package.json has node', function() {
    it('true should be returned', function() {
      const packageJsonData = {
        scripts: 'scripts'
      };
      const response = lint(packageJsonData, 'error');

      response.should.be.true;
    });
  });

  context('when package.json does not have node', function() {
    it('LintIssue object should be returned', function() {
      const packageJsonData = {};
      const response = lint(packageJsonData, 'error');

      response.lintId.should.equal('require-scripts');
      response.lintType.should.equal('error');
      response.node.should.equal('scripts');
      response.lintMessage.should.equal('scripts is required');
    });
  });
});
