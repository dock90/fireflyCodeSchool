import styled from 'styled-components'

// styles
const Form = styled.form``

const Input = styled.input`
  color: rgb(0, 0, 0);
  border-color: rgb(227, 227, 227);
  border-radius: 4px;
  font-weight: 400;
`

const Button = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(22, 119, 190);
  border-radius: 4px;
  font-weight: 400;
`

const WaitList = () => (
  <Form
    action="https://app.convertkit.com/forms/2307395/subscriptions" className="seva-form formkit-form"
    method="post"
    data-sv-form="2307395"
    data-uid="123248aa4a"
    data-format="inline"
    data-version="5"
    data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:true},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;custom_content&quot;,&quot;custom_content&quot;:&quot;Hey there - your already on the wait list! Go you!&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
    min-width="400 500 600 700 800"
  >
    <div data-style="clean">
      <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
      <div
        data-element="fields"
        data-stacked="false"
        className="seva-fields formkit-fields"
      >
        <div className="formkit-field">
          <Input
            className="formkit-input"
            name="email_address"
            aria-label="Email Address"
            placeholder="Email Address"
            required=""
            type="email"
          />
        </div>
        <Button
          data-element="submit"
          className="formkit-submit formkit-submit"
        >
          <div className="formkit-spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span className="">Join the wait list today</span>
        </Button>
      </div>
    </div>
  </Form>
)

export default WaitList
