import test from 'ava';
import @joegesualdo/capture-output-node from './dist'

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});
