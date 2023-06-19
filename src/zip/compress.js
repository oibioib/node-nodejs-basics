import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { getPath, isDirOrFileExist } from '../helpers/helpers.js';
import { ZLIB_ERROR_COMPRESS } from '../constants/constants.js';

const fileToCompressPath = getPath(import.meta.url, 'files', 'fileToCompress.txt');
const archivePath = getPath(import.meta.url, 'files', 'archive.gz');

const compress = async () => {
  try {
    const isFileToCompressExist = await isDirOrFileExist(fileToCompressPath);

    if (!isFileToCompressExist) throw new Error('File to compress does not exist');

    const fileToCompress = createReadStream(fileToCompressPath);
    const archive = createWriteStream(archivePath);
    const gzip = createGzip();

    fileToCompress.pipe(gzip).pipe(archive);
  } catch (error) {
    throw new Error(`${ZLIB_ERROR_COMPRESS}. ${error.message}.`);
  }
};

await compress();
