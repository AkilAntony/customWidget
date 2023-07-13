import React from 'react';
import Form from 'react-jsonschema-form';
import RangeSliderWidget from './RangeSliderWidget';

const schema = {
  type: 'object',
  properties: {
    range: {
      type: 'integer',
      minimum: 0,
      maximum: 100,
    },
  },
};

const uiSchema = {
  range: {
    'ui:widget': RangeSliderWidget,
  },
};

const App = () => {
  const onSubmit = (formData) => {
    console.log('Form data:', formData);
  };

  return (
    <>
      <h1>Custom Range Slider</h1>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default App;
