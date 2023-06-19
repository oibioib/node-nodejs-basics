import { createReadStream } from 'fs';
import { stdout } from 'process';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const fileToReadPath = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = createReadStream(fileToReadPath);

  stream.pipe(stdout);

  stream.on('error', () => {
    throw new Error(FS_ERROR_MESSAGE);
  });
};

await read();
