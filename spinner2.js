const animation = ['|', '/', '-', '\\', '-', '/', '|'];
let duration = 100;
for (const frame of animation) {
  setTimeout(() => {process.stdout.write(`\r${frame}   `)}, duration)
  duration += 200;
}
setTimeout(() => {process.stdout.write('\n')}, duration += 100);