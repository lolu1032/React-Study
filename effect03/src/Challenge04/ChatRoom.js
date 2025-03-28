import { useState, useEffect } from 'react';

export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

// TODO
// 뎁스를 안써도 똑같이 동작하는데 이 둘의 차이에대해 궁금
export default function ChatRoom({ roomId, createConnection }) {
    useEffect(() => {
      const connection = createConnection(roomId);
      connection.connect();
      return () => connection.disconnect();
    }, []);
  
    return <h1>Welcome to the {roomId} room!</h1>;
  }