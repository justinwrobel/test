onmessage = (e) => {
      let sum = 0;

      //self.postMessage(['qqq-wwww', e.data]);

      // Freeze in 3 seconds for 3 seconds
      setTimeout(() => {
        var now = new Date().getTime();
        while (new Date().getTime() < now + 3000) {
          sum += Math.floor(Math.random() * 6) + 1;
        }
        self.postMessage('wwww');
      }, 3000);
}
