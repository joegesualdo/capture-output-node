import fs from 'fs';
import mkdirp from 'mkdirp';

export default class CaptureOutput {
  constructor() {
    if (!fs.existsSync(__dirname + '/tmp')){
      fs.mkdirSync(__dirname + '/tmp');
    }
    let fileName = __dirname + '/tmp/captured-ouput.txt';
    this.originalStdoutWrite = process.stdout.write
    this.originalStderrWrite = process.stderr.write
    this.fileName = fileName;
    var access = fs.createWriteStream(fileName);
    process.stdout.write = process.stderr.write = access.write.bind(access);
    process.on('unhandledRejection', (reason) => {
      this.stop()
      throw new Error('error');
    });
  }
  get() {
    return new Promise(resolve => {
      var readStream = fs.createReadStream(this.fileName);
      let file = '';
      readStream.on('data', (chunk) => {
        file += chunk.toString('utf8');
      })
      readStream.on('end', () => {
        resolve(file)
      })
    })
  }
  stop() {
    return new Promise(resolve => {
      process.stdout.write = this.originalStdoutWrite;
      process.stderr.write = this.originalStderrWrite;
      resolve();
    })
  }
}
