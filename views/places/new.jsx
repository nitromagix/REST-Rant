'use strict';

const React = require('react');
const Def = require('../default');

const { trace } = require('../../helper');

function newPlace() {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
          </main>
        </Def>
    )
}

module.exports = newPlace
