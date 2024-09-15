import React from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from './components/Greeting';

// Renderiza tu componente React en su lugar
const domNode = createRoot(document.getElementById('root'));
console.log(domNode);

domNode.render(<Greeting/>);