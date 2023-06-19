import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { getPath } from '../helpers/helpers.js';

const cpuCores = cpus().length;
const workerPath = getPath(import.meta.url, 'worker.js');
const workerStartData = 10;

const createWorkers = (workersNumber, workerPath, workerStartData) => {
  const workerPromises = [];

  for (let i = 0; i < workersNumber; i += 1) {
    workerPromises.push(
      new Promise((resolve, reject) => {
        const workerData = workerStartData + i;
        const worker = new Worker(workerPath, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
      })
    );
  }

  return workerPromises;
};

const checkWorkersResults = (workersResults) => {
  return workersResults.map((workerResult) => {
    let status;
    let data;

    switch (workerResult.status) {
      case 'fulfilled':
        status = 'resolved';
        data = workerResult.value;
        break;
      case 'rejected':
        status = 'error';
        data = null;
        break;
    }

    return { status, data };
  });
};

const performCalculations = async () => {
  const workers = createWorkers(cpuCores, workerPath, workerStartData);
  const workersResults = await Promise.allSettled(workers);
  const output = checkWorkersResults(workersResults);

  console.log(output);
};

await performCalculations();
