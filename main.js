var worker = new Worker("worker.js");

worker.onmessage = (ev) => {
  console.log('hi', ev);
};

// Update the count every second (this shows the freeze)
setInterval(() => worker.postMessage({}), 1000);
