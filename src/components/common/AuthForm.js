import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import { Link } from 'react-router-dom' 
import Input from './Input'

const AuthForm = ({ title, buttonText, onSubmit , titleText , secondaryLink , secondaryText , alternativeTextPre , alternativeLink , alternativeText , error }) => {
    return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link
        to="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        {title}
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {titleText}
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
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
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to={secondaryLink}
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                {secondaryText}
              </Link>
            </div>
            <ButtonPrimary
              type="submit"
              onClick={onSubmit}
              // eslint-disable-next-line react/style-prop-object
              style={"w-full h-12"}
            >
              {buttonText}
            </ButtonPrimary>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {alternativeTextPre} {" "}
              <a
                href={alternativeLink}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                {alternativeText}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AuthForm