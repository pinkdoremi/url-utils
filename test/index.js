'use strict';
require('mocha');
var assert = require('assert');
var addQueryHashToURL = require('../').addQueryHashToURL;
var getHash = require('../').getHash;
var getParamObj = require('../').getParamObj;
var getParamsObj = require('../').getParamsObj;
describe('index.js', function() {
    describe('addQueryHashToURL', function() {
        it('add to pure url', function(done) {
            assert.equal(
                addQueryHashToURL('asdfasdf', {
                    '哇哈哈': 'asdf'
                }, 12312), "asdfasdf?&%E5%93%87%E5%93%88%E5%93%88=asdf#12312"
            );
            done()
        });
        it('add to url with hash', function(done) {
            assert.equal(
                addQueryHashToURL('asdfasdf#123', {
                    '哇哈哈': 'asdf'
                }, 12312), "asdfasdf?&%E5%93%87%E5%93%88%E5%93%88=asdf#12312"
            );
            done()
        });
        it('add to url with query', function(done) {
            assert.equal(
                addQueryHashToURL('asdfasdf?wahahah', {
                    '哇哈哈': 'asdf'
                }, 12312), "asdfasdf?wahahah&%E5%93%87%E5%93%88%E5%93%88=asdf#12312"
            );
            done()
        });
        it('add to with both', function(done) {
            assert.equal(
                addQueryHashToURL('asdfasdf?234#234', {
                    '哇哈哈': 'asdf'
                }, 12312), "asdfasdf?234&%E5%93%87%E5%93%88%E5%93%88=asdf#12312"
            );
            done()
        });
        it('add to wrong url with hash', function(done) {
            assert.equal(
                addQueryHashToURL('asdfasdf#234?234', {
                    '哇哈哈': 'asdf'
                }, 12312), "asdfasdf?&%E5%93%87%E5%93%88%E5%93%88=asdf#12312"
            );
            done()
        });
        it('add hash', function(done) {
            assert.equal(
                addQueryHashToURL('asdfasdf?234', null, 12312), "asdfasdf?234#12312"
            );
            done()
        });
    });
    describe('getHash', function() {
        it('should get it', function(done) {
            assert.equal(
                getHash('asdfasdf?234=asdf'), undefined
            );
            done()
        });
        it('get undefined', function(done) {
            assert.equal(
                getHash('asdfasdf#24'), "24"
            );
            done()
        });
    });
    describe('getParamObj', function() {
        it('should get nothing', function(done) {
            assert.equal(
                getParamObj('asdfasdf?'),undefined
            );
            assert.equal(
                getParamObj('asdfasdf'),undefined
            );
            assert.equal(
                getParamObj('asdfasdf#1231?sd'),undefined
            );
            done()
        });
        it('get sth', function(done) {
            assert.equal(
                getParamObj('asdfasdf?asdfae=123&bbb=aaa').asdfae, "123"
            );
            assert.equal(
                getParamObj('asdfasdf?asdfae=123&bbb=aaa').bbb, "aaa"
            );
            assert.equal(
                getParamObj('asdfasdf?asdfae').asdfae, undefined
            );
            done();
        });
        it('get first', function(done) {
            assert.equal(
                getParamObj('asdfasdf?asdfae=123&asdfae=1233&bbb=aaa').asdfae, "123"
            );
            done();
        });
    });
    describe('getParamsObj', function() {
        it('should get nothing', function(done) {
            assert.equal(
                getParamsObj('asdfasdf?'),undefined
            );
            assert.equal(
                getParamsObj('asdfasdf'),undefined
            );
            assert.equal(
                getParamsObj('asdfasdf#1231?sd'),undefined
            );
            done()
        });
        it('get sth', function(done) {
            assert.equal(
                getParamsObj('asdfasdf?asdfae=123&bbb=aaa').asdfae, "123"
            );
            assert.equal(
                getParamsObj('asdfasdf?asdfae=123&bbb=aaa').bbb, "aaa"
            );
            assert.equal(
                getParamsObj('asdfasdf?asdfae').asdfae, undefined
            );
            done();
        });
        it('get array', function(done) {
            assert.equal(
                getParamsObj('asdfasdf?asdfae=123&asdfae=1233&bbb=aaa').asdfae[1], "1233"
            );
            done();
        });
    });
});
