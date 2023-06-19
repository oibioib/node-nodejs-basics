import { writeFile } from 'fs/promises';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const filePath = getPath(import.meta.url, 'files', 'fresh.txt');
const fileData = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(filePath, fileData, { flag: 'wx' });
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await create();
