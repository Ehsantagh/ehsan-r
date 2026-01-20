import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')

    try {
      // Send email to admin
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'ehsan.taghaddosi@gmail.com',
          from_email: formData.email,
          message: formData.message,
        }
      )

      // Send confirmation email to sender
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID,
        {
          to_email: formData.email,
          from_email: 'ehsan.taghaddosi@gmail.com',
        }
      )

      // Show success message
      setSubmitted(true)
      setSuccessMessage('You have successfully sent your message. I will be in touch shortly')

      // Clear form
      setFormData({ email: '', message: '' })

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
        setSuccessMessage('')
      }, 5000)
    } catch (error) {
      console.error('Email send error:', error)
      setErrorMessage('Failed to send message. Please try again.')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="image-container">
          <img src="/images/home/contact.svg" alt="Contact" className="contact-image" />
        </div>
        
        <div className="form-container">
          <h1 className="contact-title">Message me</h1>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-group">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : submitted ? 'Sent ✓' : 'Send'}
              </button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="error-message">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
