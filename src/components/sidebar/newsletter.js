import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import RelatedArticles from "./RelatedArticles/relatedArticles"

import newsletterStyles from "./sidebar.module.scss"

const Newsletter = props => {
  // const [fname, setFname] = useState(``)
  const [email, setEmail] = useState(``)
  const [status, setStatus] = useState(``)
  const [msg, setMsg] = useState(``)

  // Update state each time user edits email address
  // const _fnameHandleChange = e => {
  //   const { value } = e.target
  //   setFname(value)
  // }
  const _emailHandleChange = e => {
    const { value } = e.target
    setEmail(value)
  }

  // handle Submit
  const _handleFormSubmit = async e => {
    e.preventDefault()
    //e.stopPropagation()
    if (!email) {
      setStatus(`error`)
      setMsg(`Please enter a valid email`)
    }
    // else if (!fname) {
    //   setStatus(`error`)
    //   setMsg(`Please enter your first name`)}
    else {
      setStatus(`sending`)
      setMsg(``)

      try {
        // setState callback (subscribe email to MC)
        // const result = await addToMailchimp(email, {
        //   FNAME: fname,
        // })
        const result = await addToMailchimp(email)
        //check for mailchimp errors or failures
        if (result.result !== `success`) {
          setStatus(`error`)
          setMsg(result.msg)
        } else {
          setStatus(`success`)
          setMsg(result.msg)
          // setFname(``)
          setEmail(``)
        }
      } catch (err) {
        // Network failures, time out, etc
        setStatus(`error`)
        setMsg(err)
      }
    }
  }

  return (
    <div className={newsletterStyles.sticky}>
      <div className={`${newsletterStyles.signUp} ${newsletterStyles.widget}`}>
        <p style={{ fontWeight: `bold` }}>
          Subscribe to get new posts by email!!
        </p>
        <form
          onSubmit={_handleFormSubmit}
          className={newsletterStyles.formContainer}
          method="post"
          noValidate
        >
          {/* <input
            className={newsletterStyles.nameField}
            type="text"
            name="fname"
            value={fname}
            onChange={_fnameHandleChange}
            placeholder="First Name"
          /> */}
          <div className={newsletterStyles.inputContainer}>
            <div className={newsletterStyles.emailInputContainer}>
              <div className={newsletterStyles.emailInput}>
                <input
                  className={newsletterStyles.emailField}
                  type="text"
                  value={email}
                  onChange={_emailHandleChange}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className={newsletterStyles.submitInputContainer}>
              <div className={newsletterStyles.submitInput}>
                <button
                  style={{ outline: "none" }}
                  className="fieldSubmit"
                  type="submit"
                >
                  Yes, I want to learn!
                </button>
              </div>
            </div>
          </div>

          {status === `success` ? (
            <div className={newsletterStyles.success}>
              Thanks for subscribing! Youʼll receive your first email shortly.
            </div>
          ) : (
            <div
              className={newsletterStyles.error}
              dangerouslySetInnerHTML={{ __html: msg }}
            ></div>
          )}
        </form>
      </div>
      {(props.relatedArticles.length && (
        <RelatedArticles articles={props.relatedArticles} slug={props.slug} />
      )) ||
        null}
    </div>
  )
}
export default Newsletter
