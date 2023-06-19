import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const fileToWritePath = getPath(import.meta.url, 'files', 'fileToWrite.txt');

const write = async () => {
  const stream = createWriteStream(fileToWritePath);

  stdin.pipe(stream);

  stream.on('error', () => {
    throw new Error(FS_ERROR_MESSAGE);
  });
};

await write();
