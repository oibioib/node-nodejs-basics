import { readdir } from 'node:fs/promises';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const dirUrl = new URL('./files', import.meta.url);

const list = async () => {
  try {
    const dirContent = await readdir(dirUrl, { withFileTypes: true });
    const files = dirContent.filter((file) => file.isFile()).map((file) => file.name);
    console.log(files);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await list();
