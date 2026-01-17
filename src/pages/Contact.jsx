import React, { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

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
              >
                {submitted ? 'Sent ✓' : 'Send'}
              </button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
