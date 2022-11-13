'use strict';

const common = require('../common.js');

const BASE = 'string\ud801';

const bench = common.createBenchmark(main, {
  n: [1e4],
  op: ['encode', 'encodeInto']
});

function main({ n, op }) {
  const encoder = new TextEncoder();
  const input = BASE.repeat(n);
  const subarray = new Uint8Array(n);

  bench.start();
  switch (op) {
    case 'encode': {
      for (let i = 0; i < n; i++)
        encoder.encode(input);
      break;
    }
    case 'encodeInto': {
      for (let i = 0; i < n; i++)
        encoder.encodeInto(input, subarray);
      break;
    }
  }
  bench.end(n);
}
