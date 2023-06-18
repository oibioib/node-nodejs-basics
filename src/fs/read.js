import { readFile } from 'node:fs/promises';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const fileUrl = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
  try {
    const fileContent = await readFile(fileUrl, 'utf8');
    console.log(fileContent);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await read();
