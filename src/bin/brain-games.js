#!/usr/bin/env node

import { getAnswer } from '..';

console.log('Welcome to the Brain Games');
let answer = getAnswer('\nMay I have your name? ');
console.log(`Hi, ${answer}`);
