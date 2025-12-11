import Swal from "sweetalert2";

export function sendEmail(data) {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.message === "Email sent") {
        return Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "We will reply you shortly",
          type: "success",
        }).then((okay) => {
          if (okay) {
            return true;
          }
        });
      }
    })
    .catch((err) => {
      alert(err);
      console.log("ERROR:", err);
    });
}
