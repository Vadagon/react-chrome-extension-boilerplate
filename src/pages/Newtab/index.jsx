import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import '../../assets/styles/tailwind.css';

render(<Newtab />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();