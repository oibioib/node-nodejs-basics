import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const fileUrl = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
  const stream = createWriteStream(fileUrl);
  stdin.pipe(stream);

  stream.on('error', () => {
    throw new Error(FS_ERROR_MESSAGE);
  });
};

await write();
