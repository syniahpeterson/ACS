import { useState } from "react";
import { validateForm } from "../utils/validators";
import { submitContactForm } from "../services/submitContactForm";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  website: "", // Honeypot field
};

export default function useContactForm() {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitSuccess(false);
    setSubmitError("");

    // Honeypot spam protection
    if (values.website) {
      return;
    }

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContactForm(values);

      if (response.success) {
        setSubmitSuccess(true);
        setValues(initialValues);
        setErrors({});
      } else {
        setSubmitError(response.message);
      }
    } catch (error) {
      console.error(error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleSubmit,
  };
}
