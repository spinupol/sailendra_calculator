var assert = require('assert');
var f = require('../');
 
describe('calculator tests', function() {
 it('2 + 3 to return 5', function() {
   assert.equal(f(2,3,'+'), 5);
 });
 
 it('2 * 3 to return 6', function() {
   assert.equal(f(2,3,'*'), 6);
 });
 });