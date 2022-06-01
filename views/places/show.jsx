'use strict';

const React = require('react')
const Def = require('../default')

const { trace } = require('../../helper');

function show () {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
          </main>
        </Def>
    )
}

module.exports = show
