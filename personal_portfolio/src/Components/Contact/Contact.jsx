import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent: " + msg);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={submit}>
        <input placeholder="message" onChange={(e) => setMsg(e.target.value)} />
        <button>Send</button>
      </form>
    </section>
  );
}
