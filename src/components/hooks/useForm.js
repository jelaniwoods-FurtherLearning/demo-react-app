import { useState } from 'react';

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const change = ({ target: { name, type, value } }) => {
    setForm({
      ...form,
      [name]: type === 'number'
        ? Number(value) : value,
    });
  };
  // form data
  // change function for input controls
  // reset the form function
  return [form, change,  () => setForm(initialForm)];
};


