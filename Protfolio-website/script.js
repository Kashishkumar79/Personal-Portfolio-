document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");
  const inputs = form.querySelectorAll("input, textarea");
  const submitButton = form.querySelector("button[type='submit']");

  
  // Function to check if all fields are filled
  function validateForm() {
    let isValid = true;
    inputs.forEach(input => {
      const errorText = input.nextElementSibling;
      if (input.value.trim() === "") {
        errorText.style.display = "block"; // Show error message
        isValid = false;
      } else {
        errorText.style.display = "none"; // Hide error message
      }
    });

    submitButton.disabled = !isValid; // Enable button only if form is valid
  }

  // Event listeners for input fields
  inputs.forEach(input => {
    input.addEventListener("input", validateForm);
  });

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submission

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Message sent successfully!");
          form.reset();
          validateForm(); // Revalidate form after reset
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        submitButton.textContent = "Submit";
        submitButton.disabled = false;
      });
  });
});
document.getElementById('download_btn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'kashish.pdf';
  link.download = 'Kashish kumar';
  link.click();
});

const sections = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // resets every time
    }
  });
}, {
  threshold: 0.2,
});

sections.forEach(section => {
  observer.observe(section);
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

