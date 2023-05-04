import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { Link } from "react-router-dom";
import Input from "./Input";
/**
 * General purpose form for authentication used in Login and Register components.
 * @param {string} title - The title of the app.
 * @param {string} buttonText - The text to display on the main button.
 * @param {function} onSubmit - The function to call when the form is submitted.
 * @param {string} titleText - The text to display as the title of the form.( eg: Welcome back)
 * @param {string} secondaryLink - The route to which secondary button links to. (eg: /forgot-password)
 * @param {string} secondaryText - The text to display on the secondary button. (eg: Forgot password?)
 * @param {string} alternativeTextPre - The text to display before the alternative link. (eg: Or)
 * @param {string} alternativeLink - The route to which the alternative link links to. (eg: /register)
 * @param {string} alternativeText - The text to display on the alternative link. (eg: Register)
 * @param {string} error - The error message to display.
 * @param {string} isRegister -  Whether the form is for registration.
 * @returns {JSX.Element} - A React component that displays a form for authentication, based on the props passed.
 * @example
 * <AuthForm
 * title="App Name"
 * buttonText="Login"
 * onSubmit={() => console.log("submitted")}
 * titleText="Welcome back"
 * secondaryLink="/forgot-password"
 * secondaryText="Forgot password?"
 * alternativeTextPre="Or"
 * alternativeLink="/register"
 * alternativeText="Register"
 * error="Invalid email or password"
 * />
 */
const AuthForm = ({
  title,
  buttonText,
  onSubmit,
  titleText,
  secondaryLink,
  secondaryText,
  alternativeTextPre,
  alternativeLink,
  alternativeText,
  error,
  isRegister,
}) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900" data-testid="authForm">
      <div
        data-testid="titleAuthForm"
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              data-testid="titleTextAuthForm"
              className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {titleText}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              data-testid="formAuthForm"
              onSubmit={onSubmit}
              >
              <div>
                {isRegister && (
                  <>
                  <Input label="username" placeholder="username" error={error} />
                  <Input label="first_name" placeholder="firstname" error={error} />
                  <Input label="last_name" placeholder="lastname" error={error} />
                  </>
                )}



                <Input label="Email" placeholder="email" error={error} />
                <Input label="Password" placeholder="*******" error={error} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to={secondaryLink}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  {secondaryText}
                </Link>
              </div>
              <ButtonPrimary
                type="submit"
                // onClick={onSubmit}
                // eslint-disable-next-line react/style-prop-object
                style={"w-full h-12"}>
                {buttonText}
              </ButtonPrimary>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {alternativeTextPre}{" "}
                <a
                  href={alternativeLink}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  {alternativeText}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthForm;
