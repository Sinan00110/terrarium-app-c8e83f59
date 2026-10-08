import React from 'react';
export function Toolbar({ mode, onModeChange, onAdd }) {
  return <header className="toolbar"><strong>Terrarium App</strong><nav><button type="button" className={mode === 'overview' ? 'active' : ''} onClick={() => onModeChange('overview')}>Overview</button><button type="button" className={mode === 'contact' ? 'active' : ''} onClick={() => onModeChange('contact')}>Contact</button><button type="button" onClick={onAdd}>Add section</button></nav></header>;
}
