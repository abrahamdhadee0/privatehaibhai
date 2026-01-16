import jsonfile from 'jsonfile';
import moment from 'moment';

import simpleGit from 'simple-git';

const path='./data.json';
const date=moment().format('YYYY-MM-DD HH:mm:ss');
const data={
    date: date,
};

jsonfile.writeFile(path,data);

const git = simpleGit();

await git
  .add([path])
  .commit(`Auto commit on ${date}`)
  .push();
