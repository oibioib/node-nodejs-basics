import { rm } from 'node:fs/promises';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const fileUrl = new URL('./files/fileToRemove.txt', import.meta.url);

const remove = async () => {
  try {
    await rm(fileUrl);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await remove();
