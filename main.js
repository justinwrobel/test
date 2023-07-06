var worker = new Worker(window.URL.createObjectURL(blob));

worker.onmessage = (ev: MessageEvent<string>) => {
  console.log('hi', ev);
};

// Update the count every second (this shows the freeze)
setInterval(() => worker.postMessage({}), 1000);
