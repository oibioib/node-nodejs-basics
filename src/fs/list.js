import { readdir } from 'fs/promises';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const dirPath = getPath(import.meta.url, 'files');

const list = async () => {
  try {
    const dirContent = await readdir(dirPath, { withFileTypes: true });
    const files = dirContent.filter((file) => file.isFile()).map((file) => file.name);
    console.log(files);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await list();
