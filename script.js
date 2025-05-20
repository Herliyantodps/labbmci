document.addEventListener('DOMContentLoaded', () => {
  const emailTab = document.getElementById('emailTab');
  const phoneTab = document.getElementById('phoneTab');
  const emailForm = document.getElementById('emailForm');
  const phoneForm = document.getElementById('phoneForm');

  emailTab.addEventListener('click', () => {
    emailTab.classList.add('active');
    phoneTab.classList.remove('active');
    emailForm.style.display = 'block';
    phoneForm.style.display = 'none';
  });

  phoneTab.addEventListener('click', () => {
    phoneTab.classList.add('active');
    emailTab.classList.remove('active');
    phoneForm.style.display = 'block';
    emailForm.style.display = 'none';
  });

  // Optional: Toggle password visibility
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('passwordInput');

  togglePassword?.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
  });
});
