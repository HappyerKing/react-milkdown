import React from 'react';

import './Control.css';

const Btn = ({ icon, click }) => (
  <div>
    <button className={ icon } onClick={ click } />
  </div>
);

const Rdo = ({value, name, checked, onChange, icon}) => (
  <div>
    <input
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label className={icon} />
  </div>
);

export default ({ onFullScreen, onPreview, onPasteModeChange, pasteMode }) => (
  <div className="milk-buttons">
    <Btn
      icon="fa fa-expand"
      click={ onFullScreen }
    />
    <Btn
      icon="fa fa-eye"
      click={ onPreview }
    />
    <Rdo
      value="normal"
      name="type"
      checked={pasteMode === false}
      onChange={onPasteModeChange}
      icon="fa fa-file-text"
    />
    <Rdo
      value="paste"
      name="type"
      checked={pasteMode === true}
      onChange={onPasteModeChange}
      icon="fa fa-paste"
    />
  </div>
);
