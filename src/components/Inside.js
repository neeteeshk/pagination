import React from 'react';
import { BasicTable } from './BasicTable';
import { About } from './About';
import { VinNumber } from './VinNumber';
function Inside() {
  return (
    <div>
        <VinNumber/>
        <BasicTable/>
        <About/>
    </div>
  );
}

export default Inside;
