'use-client';

import os from 'node:os';

function formatDate(string) {
  const date = new Date(string).toLocaleDateString('es-Es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return date;
}

export default function handlerInfo(req, res) {
  try {
    res.status(200).json({
      success: true,
      timeStamp: formatDate(new Date().getTime()),
      'operating-system-info': {
        os: os.version(),
        architecture: os.arch(),
        build: os.release().replace('10.0.', ''),
      },
      'hardware-info': {
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
      'user-info': {
        user: os.userInfo().username,
        path: os.userInfo().homedir,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: new Error('Error al desplegar la API:', error),
    });
    console.error('Error al desplegar la API:', error);
  }
}
