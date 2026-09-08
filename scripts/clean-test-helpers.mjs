import fs from 'node:fs';

for (const path of ['dist/server.test.ts', 'dist/server.test.cjs']) {
  fs.rmSync(path, { force: true });
}
