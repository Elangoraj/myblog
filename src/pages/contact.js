import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ContactHeading from "../components/contact/contactHeading"
import ContactContent from "../components/contact/contactContent"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Get in touch with Elango"
      description="Do you have any questions or suggestions for me? Send me an email and I will get back to you shortly."
    />
    <ContactHeading />
    <ContactContent />
  </Layout>
)

export default ContactPage
