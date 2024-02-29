import { spawn } from 'child_process';

export default async function handler(req, res) {
  const process = spawn('python', ['/api.py']);
  process.stdout.on('data', (data) => {
    res.send(data.toString());
  });
}
