'use client';

import os from 'node:os';

export default async function handlerInfo(req, res) {
  try {
    res.status(200).json({
      success: true,
      timeStamp: new Date().getTime(),
      operatingSystemInfo: {
        os: os.version(),
        architecture: os.arch(),
        build: os.release().replace('10.0.', ''),
      },
      hardwareInfo: {
        proccesor: {
          model: os.cpus().shift().model.trim(),
          cores: os.cpus().length / 2,
          threads: os.cpus().length,
          speed: (os.cpus().shift().speed / 1000).toFixed(2) + 'GHz',
          avaliableMemory:
            (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + 'GB',
          freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + 'GB',
        },
      },
      userInfo: {
        user: os.userInfo().username,
        path: os.userInfo().homedir,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: new Error('Error en el servidor:', error),
    });
  }
}
