import { fork } from 'child_process';
import { getPath } from '../helpers/helpers.js';

const childScriptPath = getPath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  fork(childScriptPath, args);
};

spawnChildProcess(['arg1', 'arg2', 12, 34]);
