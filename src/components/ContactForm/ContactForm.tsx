import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    } catch {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contactSection} mainBody ${className}`}>
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
              {/* Form Header */}
              <div className={styles.formInfoBox}>
                <h3>Get More Info</h3>
              </div>
              
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

            {/* Right Column - Contact Information */}
            <div className={styles.infoColumn}>
              {/* Contact Information */}
              <div className={styles.contactInfoBox}>
                <h3>Contact Us</h3>
              </div>

              {/* Phone Number */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon="phone" style={{ color: 'var(--color-bright-green)' }} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>
                    <FontAwesomeIcon icon="phone" className={styles.contactLabelIcon} style={{ color: 'var(--color-bright-green)' }} />
                    Phone
                  </h4>
                  <a href="tel:+12098312990" className={styles.contactValue}>
                    (209) 831-2990
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon="envelope" style={{ color: 'var(--color-bright-green)' }} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>
                    <FontAwesomeIcon icon="envelope" className={styles.contactLabelIcon} style={{ color: 'var(--color-bright-green)' }} />
                    Email
                  </h4>
                  <a href="mailto:info@livinghopeservices.org" className={styles.contactValue}>
                    info@livinghopeservices.org
                  </a>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialCardContent}>
                  <div className={styles.testimonialImageSection}>
                    <div className={styles.testimonialHeadshot} style={{ backgroundImage: 'url(/images/joem.jpeg)' }} />
                  </div>
                  <div className={styles.testimonialContentSection}>
                    <div className={styles.testimonialAttribution}>
                      <h5>Joe M.</h5>
                      <p>2 years sober</p>
                    </div>
                    <div className={styles.testimonialQuoteContainer}>
                      <span className={styles.testimonialOpenQuote}>&ldquo;</span>
                      <blockquote className={styles.testimonialQuote}>
                        Moving into Sober Living Home was the best decision I made for my sobriety. The support, structure, and faith-based guidance have helped me grow stronger every day. I feel safe, loved, and closer to God.
                      </blockquote>
                      <span className={styles.testimonialCloseQuote}>&rdquo;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ContactForm;
