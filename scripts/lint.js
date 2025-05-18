#!/usr/bin/env node

const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', process.platform === 'win32' ? 'next.cmd' : 'next');

if (!fs.existsSync(nextBin)) {
  console.error('Next.js is not installed. Run "npm install" first.');
  process.exit(1);
}

const result = spawnSync(nextBin, ['lint'], { stdio: 'inherit' });
process.exit(result.status);
