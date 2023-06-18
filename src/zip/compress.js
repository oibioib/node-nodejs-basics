import { createReadStream, createWriteStream } from 'fs';
import { ZLIB_ERROR_COMPRESS } from '../constants/constants.js';
import { createGzip } from 'zlib';

const compress = async () => {
  try {
    const fileToCompressUrl = new URL('./files/fileToCompress.txt', import.meta.url);
    const archiveUrl = new URL('./files/archive.gz', import.meta.url);

    const fileToCompress = createReadStream(fileToCompressUrl);
    const archive = createWriteStream(archiveUrl);
    const gzip = createGzip();

    fileToCompress.pipe(gzip).pipe(archive);
  } catch {
    throw new Error(ZLIB_ERROR_COMPRESS);
  }
};

await compress();
