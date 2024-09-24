import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../ContactPage/ContactPage.css';

const ContactPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .required('Subject is required')
      .min(5, 'Subject must be at least 5 characters'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      age: '', 
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values); 
    },
  });

  return (
    <section className="contact-section">
      <div className="first">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div>
              <img src="../../../public/images/adress.png" className="contact-img" alt="Address" />
              <strong>Address</strong>
              <p>236 5th SE Avenue, New 
                York NY10000, United States</p>
            </div>
            <div>
              <img src="../../../public/images/Phone.png" className="contact-img" alt="Phone" />
              <strong>Phone</strong>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
            <div>
              <img src="../../../public/images/Working Time.png" className="contact-img" alt="Working Time" />
              <strong>Working Time</strong>
              <p>
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <h3>Your name</h3>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          <h3>Email address</h3>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email address"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <h3>Subject</h3>
          <input
            type="text"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Subject"
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="error">{formik.errors.subject}</div>
          ) : null}

          <h3>Message</h3>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
