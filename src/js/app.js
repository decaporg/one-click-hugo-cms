// JS Goes here - ES6 supported
import GoTrue from "gotrue-js";

if (document.location.hash) {
  const m = document.location.hash.match(/invite_token=([^&]+)/);
  if (m) {
    document.location.hash = "";
    const pw = prompt("Please pick a password")
    const gotrue = new GoTrue();
    gotrue.acceptInvite(m[1], pw)
      .then(() => { document.location.href = "/admin/"; })
      .catch((err) => alert("Failed to verify invite token :("))
  }
}
