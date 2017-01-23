var assert = require('assert');
var f = require('../');
 
describe('calculator tests', function() {
 it('2 + 3 to return 5', function() {
   assert.equal(f(2,3,'+'), 5);
 });
 
 it('2 * 3 to return 6', function() {
   assert.equal(f(2,3,'*'), 6);
 });

  it('2 / 4 to return .5', function() {
   assert.equal(f(2,4,'/'), 0.5);
 });

   it('2 - 3 to return -1', function() {
   assert.equal(f(2,3,'-'), -1);
 });

      it('2 % 3 to return 2', function() {
   assert.equal(f(2,3,'%'), 2);
 });

      it('2 @ 3 to return "not supported"', function() {
   assert.equal(f(2,3,'@'), "not supported");
 });
 });