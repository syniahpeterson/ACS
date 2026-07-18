export function validateRequired(value) {
  return value.trim().length > 0;
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  return /^[0-9()+\-\s]{10,}$/.test(phone);
}

export function validateForm(values) {
  const errors = {};

  if (!validateRequired(values.name)) {
    errors.name = "Please enter your name.";
  }

  if (!validatePhone(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!validateEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!validateRequired(values.message)) {
    errors.message = "Please tell us about your project.";
  }

  return errors;
}
