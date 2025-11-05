import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '2rem', borderRadius: '18px', boxShadow: '0 6px 30px rgba(0,0,0,0.09)' }}>
      <Image
        src="/profile.jpg"
        alt="Your Name"
        width={128}
        height={128}
        style={{
          borderRadius: '64px',
          marginBottom: '1.5em'
        }}
      />
      <h1 style={{ color: '#4b3cff', marginBottom: '0.6em' }}>Vishal Vyas</h1>
      <h3>Ex – Virtual Customer Support Associate at Amazon</h3>
      <p style={{ marginTop: '1em', fontSize: '1.1em' }}>Delivering exceptional customer experiences from Warangal, India.</p>
      <hr />
      <h2>About Me</h2>
      <p>
        I’m a dedicated Customer Support and Tech Support specialist with experience at Amazon and expertise in phone, chat, and email support for domestic and international customers.<br />
        Currently pursuing a BBA at Masterji Degree &amp; PG College.<br />
        Always learning, problem-solving, and helping businesses grow.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>Customer Service</li>
        <li>Phone Communication</li>
        <li>Technical Support</li>
        <li>Email Support</li>
        <li>Online Chat Support</li>
        <li>Troubleshooting</li>
        <li>Multilingual Translation</li>
        <li>Customer Satisfaction</li>
      </ul>
      <h2>Experience</h2>
      <strong>Amazon</strong>
      <div>Virtual Customer Support Associate</div>
      <ul>
        <li>Delivered exceptional customer experiences</li>
        <li>Managed customer support for e-commerce (email, chat, phone)</li>
      </ul>
      <h2>Education</h2>
      <div>BBA (Ongoing) | Masterji Degree &amp; PG College</div>
    </div>
  );
}
