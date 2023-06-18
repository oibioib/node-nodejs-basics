import { createReadStream } from 'fs';
import { stdout } from 'process';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const read = async () => {
  const fileUrl = new URL('./files/fileToRead.txt', import.meta.url);
  const stream = createReadStream(fileUrl);

  stream.pipe(stdout);

  stream.on('error', () => {
    throw new Error(FS_ERROR_MESSAGE);
  });
};

await read();
