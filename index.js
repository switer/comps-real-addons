'use strict'

module.exports = function(comps) {
    comps.tag('=', {
        paired: false,
        outer: function () {
            return ['<span r-text>', '</span>']
        },
        inner: function () {
            return '{' + this.$raw + '}'
        }
    })
    comps.tag('if=', {
        paired: false,
        outer: function () {
            return ['<span r-if="{' + this.$raw + '}" r-text>', '</span>']
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
    /**
     * {% datasource%}
     *     propA: 'xxx',
     *     propB: 'XXXX'
     * {% /datasource %}
     */
    comps.tag('datasource', {
        paired: true,
        outer: function () {
            return ['<script type="text/json" r-datasource>${JSON.stringify({', '})}</script>']
        },
        inner: function () {
            return this.$inner()
        }
    })
}