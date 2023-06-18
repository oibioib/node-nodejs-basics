import { writeFile } from 'node:fs/promises';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const create = async () => {
  try {
    const fileUrl = new URL('./files/fresh.txt', import.meta.url);
    const fileData = 'I am fresh and young';
    await writeFile(fileUrl, fileData, { flag: 'wx' });
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await create();
