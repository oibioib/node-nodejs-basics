import { readFile } from 'fs/promises';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const filePath = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    console.log(fileContent);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await read();
