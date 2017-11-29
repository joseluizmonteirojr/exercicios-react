import React from 'react';
import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './component';


ReactDOM.render([
        <Primeiro key='1'/>,
        <Segundo key='2'/>
    ],document.getElementById('app')
)