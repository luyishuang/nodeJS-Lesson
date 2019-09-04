console.log(process.platform);//当前Node.js进程运行所在的操作系统平台  win32
console.log(process.pid);//当前Node.js进程的PID(进程id) 9500
console.log(process.argv[1]);//当前Node.js执行程序的文件路径 D:\A DAY DAY UP\大三上学期\Nodejs\Nodejs-myself\2019-9-4\five.js
console.log(process.argv[0]);//当前Node.js的可执行文件所在路径 D:\Program Files (x86)\Nodejs\node.exe

console.log(process.cwd());//Node.js进程的当前工作目录  D:\A DAY DAY UP\大三上学期\Nodejs\Nodejs-myself\2019-9-4
console.log(process.memoryUsage());//Chrome V8内存的使用情况 { rss: 20152320,
                                                            //heapTotal: 7061504,
                                                            //heapUsed: 4256976,
                                                            //external: 8680 }
