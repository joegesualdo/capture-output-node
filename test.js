import test from 'ava';
import CaptureOutput from './dist'

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});
