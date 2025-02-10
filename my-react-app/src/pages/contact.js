import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
