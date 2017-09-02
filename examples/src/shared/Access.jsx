import React from 'react'

const CONFIG_JSON = {
  "authorization": "https://ampbyexample.com/components/amp-access/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",
  "pingback": "https://ampbyexample.com/components/amp-access/authorization?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",
  "login": {
    "sign-in": "https://ampbyexample.com/components/amp-access/login?rid=READER_ID&url=CANONICAL_URL",
    "sign-out": "https://ampbyexample.com/components/amp-access/logout"
  },
  "authorizationFallbackResponse": {
      "error": true,
      "access": false,
      "subscriber": false
  }
}

export default ({ css }, { template }) => {
  // Flexibility to add custom-scripts
  template.register('json', { id: 'amp-access' }, JSON.stringify(CONFIG_JSON))
  template.register('amp-access')
  template.register('amp-mustache')

  return (
    <div>
      {/* This section is visible to all users. No special markup is needed in this case.*/}
      <section>
        <h3>AMP Access</h3>
        <p>
          This is a preview of the article.
        </p>
      </section>

       {/* Use the `amp-access` attribute to control the visibility of each component. The expression
       must evaluate to a boolean value. If it evaluates to `TRUE`, the section will be shown.  */}
      <section amp-access="access">
        <p>This section is visible to users if the authorization response contains: <code>"access": true</code>. This is usually the main content of the article.</p>
      </section>

      {/* This section is only shown if the value of the `access` attribute on the response for
      the authorization requests evaluates to `FALSE`*/}
      <section amp-access="NOT access">
        <p>This section is only visible to users if the authorization response does not contain <code>access</code> or contains <code>"access": false</code>.</p>
      </section>

      {/* It is possible to combine two values on the evaluation expression.
        Check the docs to find out more about the [Expression Grammar](https://www.ampproject.org/docs/reference/components/amp-access#appendix-a-amp-access-expression-grammar)
       */}
      <div amp-access="access AND NOT subscriber">
        <p>This section is only visible to users with <code>"access": true</code> and <code>"subscriber": false</code></p>
      </div>

      {/* Combine `amp-access` and `amp-mustache` to show information returned from the authorization request. In this case we show the user name returned in the authentification response. */}
      <section amp-access="subscriber">
        <template amp-access-template type="amp-mustache" dangerouslySetInnerHTML={{ __html: 'Hello {{name}}!' }} />
      </section>

      {/* Use `on="tap:amp-access.login-sign-in"` to open the login dialog when the element is
      clicked.

      `amp-access-hide` will default the component to be hidden and enabled later
      if the `amp-access` expression is evaluated to `TRUE` */}
      <section class="p1" amp-access="NOT subscriber" amp-access-hide role="button" tabindex="0">
        <a class="ampstart-btn caps" on="tap:amp-access.login-sign-in">Login</a>
      </section>
      {/* The logout link will only be shown for logged in subscribers. We use a trick here: the logout is a login action that directly redirects back to the original URL. This has the advantage that the page updates without being reloaded.  */}
      <section class="p1" amp-access="subscriber" amp-access-hide role="button" tabindex="0">
        <a class="ampstart-btn caps" on="tap:amp-access.login-sign-out">Logout</a>
      </section>
    </div>
  )
}
