const LintIssue = require('./../LintIssue');
const {isString} = require('./../validators/type');
const lintId = 'name-type';
const nodeName = 'name';
const message = 'Type should be a string';
const ruleType = 'standard';

const lint = (packageJsonData, severity) => {
  if (!isString(packageJsonData, nodeName)) {
    return new LintIssue(lintId, severity, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.ruleType = ruleType;
