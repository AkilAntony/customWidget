import React from 'react';


const RangeSlider = ({ schema, value, onChange }) => {
  const handleChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <input
      type="range"
      min={schema.minimum}
      max={schema.maximum}
      value={value}
      onChange={(event) => handleChange(parseInt(event.target.value))}
    />
  );
};

const RangeSliderWidget = (props) => {
  const { schema, value, onChange } = props; 
  console.log(props)
  return (
    <div>
        <RangeSlider schema={schema} value={value} onChange={onChange} />
    <h1>{value? value :0}</h1>
    </div>
  )
};

export default RangeSliderWidget; 
