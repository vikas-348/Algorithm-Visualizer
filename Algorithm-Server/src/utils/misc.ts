import axios from 'axios';
import fs from 'fs-extra';
import { File } from 'models';
import removeMarkdown from 'remove-markdown';
import * as child_process from 'child_process';
import { ExecOptions, spawn } from 'child_process';
import { rootDir } from '../config/paths';
import path from 'path';

export function download(url: string, localPath: string) {
  return axios({ url, method: 'GET', responseType: 'stream' })
    .then(response => new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(localPath);
      writer.on('finish', resolve);
      writer.on('error', reject);
      response.data.pipe(writer);
    }));
}

export async function pull(dir: string, repo: string, commit = 'origin/master') {
  if (fs.pathExistsSync(dir)) {
    await execute(`git fetch`, {
      cwd: dir,
      stdout: process.stdout,
      stderr: process.stderr,
    });
  } else {
    await execute(`git clone https://github.com/algorithm-visualizer/${repo}.git ${dir}`, {
      stdout: process.stdout,
      stderr: process.stderr,
    });
  }
  await execute(`git reset --hard ${commit}`, {
    cwd: dir,
    stdout: process.stdout,
    stderr: process.stderr,
  });
}

export function getDescription(files: File[]) {
  const readmeFile = files.find(file => file.name === 'README.md');
  if (!readmeFile) return '';
  const lines = readmeFile.content.split('\n');
  lines.shift();
  while (lines.length && !lines[0].trim()) lines.shift();
  const descriptionLines = [];
  while (lines.length && lines[0].trim()) descriptionLines.push(lines.shift());
  return removeMarkdown(descriptionLines.join(' '));
}

type ExecuteOptions = ExecOptions & {
  stdout?: NodeJS.WriteStream;
  stderr?: NodeJS.WriteStream;
};

export function execute(command: string, { stdout, stderr, ...options }: ExecuteOptions = {}): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = child_process.exec(command, options, (error, stdout, stderr) => {
      if (error) return reject(error.code ? new Error(stderr) : error);
      resolve(stdout);
    });
    if (child.stdout && stdout) child.stdout.pipe(stdout);
    if (child.stderr && stderr) child.stderr.pipe(stderr);
  });
}

export function issueHttpsCertificate() {
  const certbotIniPath = path.resolve(rootDir, 'certbot.ini');
  const childProcess = spawn('certbot', ['certonly', '--non-interactive', '--agree-tos', '--config', certbotIniPath]);
  childProcess.stdout.pipe(process.stdout);
  childProcess.stderr.pipe(process.stderr);
  childProcess.on('error', console.error);
  childProcess.on('exit', code => {
    if (code === 0) {
      process.exit(0);
    } else {
      console.error(new Error(`certbot failed with exit code ${code}.`));
    }
  });
}
