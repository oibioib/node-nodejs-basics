import { cp } from 'fs/promises';
import { getPath, isDirOrFileExist } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const sourcePath = getPath(import.meta.url, 'files');
const destinationPath = getPath(import.meta.url, 'files_copy');

const copy = async () => {
  try {
    const isDestinationDirExist = await isDirOrFileExist(destinationPath);

    if (isDestinationDirExist) throw new Error('Destination folder exist');

    await cp(sourcePath, destinationPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await copy();
