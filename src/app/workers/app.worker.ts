/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const start = Date.now();
  while (Date.now() < start + 5000) {}

  postMessage(data + 1);
});
