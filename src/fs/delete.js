import { rm } from 'fs/promises';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const filePath = getPath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await remove();
