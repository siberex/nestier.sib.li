/**
 * Created by sib.li on 2019-05-25.
 */

'use strict';

const { spawn } = require('child_process');
const semver = require('semver');

const THRESHOLD_MAJOR = 3;
const THRESHOLD_MINOR = 10;

(async () => {
    //
  const child = spawn('yarn', ['outdated','--json']);

  const packages = {
    major: [],
    minor: [],
    patch: [],
  };

  for await (const data of child.stdout) {
    const row = JSON.parse(data);

    if (row.type === 'table') {

      // head: [ 'Package', 'Current', 'Wanted', 'Latest', 'Package Type', 'URL' ]
      // body: [ ['@nestjs/common', '6.2.0', '6.2.4', '6.2.4', 'dependencies', 'https://github.com/nestjs/nest#readme'], ... ]
      const {head, body} = row.data;

      let outdated = body.map(
        tableItem => tableItem.reduce(
          (acc, v, i) => {
            acc[ head[i] ] = v;
            return acc;
          }, {}
        )
      );

      packages.major = outdated.filter(
        pkg => semver.major(pkg['Current']) !== semver.major(pkg['Latest'])
      );
      packages.minor = outdated.filter(
        pkg => semver.major(pkg['Current']) === semver.major(pkg['Latest'])
          && semver.minor(pkg['Current']) !== semver.minor(pkg['Latest'])
      );
      packages.patch = outdated.filter(
        pkg => semver.major(pkg['Current']) === semver.major(pkg['Latest'])
          && semver.minor(pkg['Current']) === semver.minor(pkg['Latest'])
          && semver.patch(pkg['Current']) !== semver.patch(pkg['Latest'])
      );

      break;
    }
  }

  console.log('major', packages.major.map(v => v['Package']));
  console.log('minor', packages.minor.map(v => v['Package']));
  console.log('patch', packages.patch.map(v => v['Package']));

})().catch(err => {
  process.exitCode = 1;
  console.error(err);
});
