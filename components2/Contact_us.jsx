import styles from "./Contact_us.module.css";

export default function Contact_us() {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}></div>
      <div className={styles.contact_us}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Enter your name"></input>
        <input type="text" placeholder="Email Address"></input>

        <textarea
          type="text"
          rows="4"
          cols="50"
          placeholder="Enter your message"
        ></textarea>

        <button>Submit</button>
      </div>
      <div className={styles.socmed_container} />
    </div>
  );
}
