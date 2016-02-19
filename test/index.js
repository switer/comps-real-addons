'use strict'

var assert = require('assert')
var comps = require('comps')
comps.tag('=', {
    paired: false,
    outer: function () {
        return ['<span r-text>', '</span>']
    },
    inner: function () {
        return '{' + this.$raw + '}'
    }
})
comps.tag('-', {
    paired: false,
    outer: function () {
        return ['<span r-html>', '</span>']
    },
    inner: function () {
        return '{' + this.$raw + '}'
    }
})

describe('Parse', function () {
    it('# text render', function() {
        var result = comps({
            template: '{%= header + title + "abc" + 123  /%}',
            context: __dirname
        })
        assert.equal(result, '<span r-text>{header + title + "abc" + 123}</span>')
    })
    it('# HTML render', function() {
        var result = comps({
            template: '{%- title /%}',
            context: __dirname
        })
        assert.equal(result, '<span r-html>{title}</span>')
    })
    it('# HTML and Text', function() {
        var result = comps({
            template: '{%= header + title + "abc" + 123  /%}{%- title /%}',
            context: __dirname
        })
        assert.equal(result, '<span r-text>{header + title + "abc" + 123}</span><span r-html>{title}</span>')
    })
})