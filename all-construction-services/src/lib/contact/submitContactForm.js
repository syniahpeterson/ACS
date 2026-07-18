export async function submitContactForm(values) {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1200));

  console.log("Contact Form Submitted:", values);

  // Temporary success response.
  // Later this will call the backend API.
  return {
    success: true,
    message: "Thank you! We'll contact you as soon as possible.",
  };
}
