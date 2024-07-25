import test from 'node:test';
import assert from 'assert';
import {
  uint82base256,
  base2562uint8,
  byte2base256,
  base2562byte
} from './index.js';

test('uint82base256() test', () => {
    const input_str = 'Hello, World!';
    const expected_result = 'ĨŅŌŌŏČĀķŏŒŌńā';
    const uint8_array = Buffer.from(input_str);
    const base256_str = uint82base256(uint8_array);
    assert.strictEqual(expected_result, base256_str);
});

test('base2562uint8() test', () => {
  const input_str = 'ĨŅŌŌŏČĀķŏŒŌńā';
  const expected_result = 'Hello, World!';
  const result_str = base2562uint8(input_str).toString();
  assert.strictEqual(expected_result, result_str);
});

test('byte2base256() test', () => {
  const byte = Buffer.from([97])[0];
  const expected_result = 'Ł';
  const base256_char = byte2base256(byte);
  assert.strictEqual(expected_result, base256_char);
});

test('base2562byte() test', () => {
  const base256_char = 'Ł';
  const expected_result = Buffer.from([97])[0];
  const byte = base2562byte(base256_char);
  assert.strictEqual(expected_result, byte);
});