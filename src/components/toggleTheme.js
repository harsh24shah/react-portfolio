import React from 'react';
import { WiMoonAltNew } from 'react-icons/wi';

const ToggleTheme = ({ changeTheme, lightTheme }) => (
  <button onClick={changeTheme} className='toggle-button' title="Change theme">
    <WiMoonAltNew size='20px'></WiMoonAltNew>
  </button>
)

export default ToggleTheme