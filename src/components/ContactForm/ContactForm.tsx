import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Contact Our Team",
  subtitle = "",
  className = ""
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${styles.contactSection} ${className}`}>
      <div className={styles.mainBody}>
        <div className={styles.content}>
          <SectionTitle title={title} />
          
          {subtitle && (
            <p className={styles.subtitle}>
              {subtitle}
            </p>
          )}
          
          <div className={styles.contactContainer}>
            {/* Left Column - Contact Form */}
            <div className={styles.formColumn}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.nameRow}>
                  <Input
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="Your first name"
                    required={true}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  
                  <Input
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Your last name"
                    required={true}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                <Input
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Your email address"
                  required={true}
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <Input
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="Your phone number"
                  required={true}
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                <Input
                  id="message"
                  name="message"
                  label="Message"
                  type="textarea"
                  placeholder="Tell us how we can help you..."
                  required={true}
                  value={formData.message}
                  onChange={handleInputChange}
                />

                <Button 
                  type="submit" 
                  variant="primary" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus.type && (
                  <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Testimonial and Image */}
            <div className={styles.infoColumn}>
              {/* Testimonial Box */}
              <div className={styles.testimonialBox}>
                <div className={styles.quoteIcon}>&quot;</div>
                <blockquote className={styles.testimonialText}>
                  I was nervous about reaching out, but the staff responded quickly and compassionately. They made the entire process feel comfortable and respectful from the first contact.
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <strong>Michael T.</strong>
                  <span className={styles.recoveryTime}>9 months in recovery</span>
                </div>
              </div>

              {/* Image */}
              <div className={styles.imageContainer}>
                <img
                  src="/images/hero.jpg"
                  alt="Serene outdoor garden and patio area"
                  className={styles.contactImage}
                />
              </div>

              {/* Response Time Message */}
              <div className={styles.responseTimeBox}>
                <div className={styles.clockIcon}>🕐</div>
                <p className={styles.responseTimeText}>
                  We typically respond to all inquiries within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
