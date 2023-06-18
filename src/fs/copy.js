import { cp } from 'node:fs/promises';
import { isDirOrFileExist } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const sourceUrl = new URL('./files', import.meta.url);
const destinationUrl = new URL('./files_copy', import.meta.url);

const copy = async () => {
  try {
    const isDestinationDirExist = await isDirOrFileExist(destinationUrl);
    if (isDestinationDirExist) throw new Error('Destination folder exist');

    await cp(sourceUrl, destinationUrl, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await copy();
