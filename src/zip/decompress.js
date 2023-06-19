import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { getPath, isDirOrFileExist } from '../helpers/helpers.js';
import { ZLIB_ERROR_DECOMPRESS } from '../constants/constants.js';

const archivePath = getPath(import.meta.url, 'files', 'archive.gz');
const fileToDecompressPath = getPath(import.meta.url, 'files', 'fileToCompress.txt');

const decompress = async () => {
  try {
    const isArchiveExist = await isDirOrFileExist(archivePath);

    if (!isArchiveExist) throw new Error('Archive to decompress does not exist');

    const archive = createReadStream(archivePath);
    const decompress = createWriteStream(fileToDecompressPath);
    const unzip = createUnzip();

    archive.pipe(unzip).pipe(decompress);
  } catch (error) {
    throw new Error(`${ZLIB_ERROR_DECOMPRESS}. ${error.message}.`);
  }
};

await decompress();
