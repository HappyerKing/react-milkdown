import React from 'react';

import './Control.scss';

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
      checked={checked}
      onChange={onChange}
    />
    <label className={ icon } />
  </div>
);

export default ({ onFullScreen, onPreview, onPasteModeChange, pasteMode }) => (
  <div className="milk-buttons">
    <div className="milk-buttons-container">
      <div className="milk-buttons-slide">
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
          name="mode"
          checked={!pasteMode}
          onChange={onPasteModeChange}
          icon="fa fa-file-text"
        />
        <Rdo
          value="paste"
          name="mode"
          checked={pasteMode}
          onChange={onPasteModeChange}
          icon="fa fa-paste"
        />
      </div>
      <div className="milk-buttons-drag">
        <div className="fa fa-arrow-down" />
      </div>
    </div>
  </div>
);
