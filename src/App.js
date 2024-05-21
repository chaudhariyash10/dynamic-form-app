import React from 'react';
import  {FieldsDataProvider}  from './context/FieldsDataContext';

import './App.css';
import AddField from './components/AddField';
import FormView from './components/FormView';

const App = () => {
  return (
    <FieldsDataProvider>
      <h1>Dynamic Form Generator</h1>
      <AddField />
      <FormView />
    </FieldsDataProvider>
  );
};

export default App;