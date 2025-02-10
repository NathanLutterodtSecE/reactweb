import { useState } from 'react';

export default function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Message
      </button>
      {visible && <p>Hello! This is a toggled message.</p>}
    </div>
  );
}
