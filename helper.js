'use strict';

const trace = label => value => {
   console.log(`${label} --> ${value}`);
   return value;
};

module.exports = trace;