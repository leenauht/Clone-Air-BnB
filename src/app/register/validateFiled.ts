export const validateFiled = (name: string, value: string): string => {
  let error = '';

  switch (name) {
    case 'username':
      if (!value) error = 'Username is required';
      break;
    case 'email':
      if (!value) error = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email format';
      break;
    case 'password':
      if (!value) error = 'Password is required';
      else if (value.length < 6) error = 'Password must be at least 6 chars';
      break;
    case 'phone':
      if (!value) error = 'Phone is required';
      else if (!/^\d{10}$/.test(value)) error = 'Phone must be 10 digits';
      break;
    case 'gender':
      if (!value) error = 'Gender is required';
      break;
    case 'dob':
      if (!value) error = 'Date of birth is required';
      break;
  }

  return error;
};
