/**
 * Created by sib.li on 2019-05-25.
 */

'use strict';

const { spawn } = require('child_process');

(async () => {
    //
  const child = spawn('yarn', ['outdated','--json']);
  for await (const data of child.stdout) {
    const row = JSON.parse(data);


    console.log(row.type);
    console.log(row.data);
  }

})().catch(err => {
  process.exitCode = 1;
  console.error(err);
});
