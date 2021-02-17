import React from 'react';
import { FiAward } from 'react-icons/fi';

export default function GoldTitle() {
  return (
    <>
      <div style={{ color: '#cb7738', textAlign: 'center' }}>
        <FiAward />
        <br />
        <span style={{ color: '#cb7738', fontSize: '12px' }}>Bronze</span>
      </div>
    </>
  );
}
