import { rename as fsRename } from 'fs/promises';
import { getPath, isDirOrFileExist } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const wrongFilenamePath = getPath(import.meta.url, 'files', 'wrongFilename.txt');
const properFilenamePath = getPath(import.meta.url, 'files', 'properFilename.md');

const rename = async () => {
  try {
    const isProperFilExist = await isDirOrFileExist(properFilenamePath);

    if (isProperFilExist) throw new Error('Proper file exist');

    await fsRename(wrongFilenamePath, properFilenamePath);
  } catch (e) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await rename();
