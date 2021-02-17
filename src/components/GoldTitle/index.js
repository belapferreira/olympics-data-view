import React from 'react';
import { FiAward } from 'react-icons/fi';

export default function GoldTitle() {
  return (
    <>
      <div style={{ color: '#efc026', textAlign: 'center' }}>
        <FiAward />
        <br />
        <span style={{ color: '#efc026', fontSize: '12px' }}>Gold</span>
      </div>
    </>
  );
}
