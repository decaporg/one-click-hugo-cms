// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('login', () => {
    document.location.href = '/admin/';
  });
}
