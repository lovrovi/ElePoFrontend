import io from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = (processorId) => `http://localhost:9000/${processorId}`;

const createSocket = (processorId) => {
  return io(`http://localhost:9000/${processorId}`, {
    autoConnect: false,
  });
};

export { createSocket };
