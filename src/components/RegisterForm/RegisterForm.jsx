import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './RegisterValidation';
import eyeclosed from '../../images/eye-closed.svg';
import eyeopen from '../../images/eye-open.svg';

import css from './RegisterForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const { confirmPassword, ...dataToSend } = values;
    dispatch(register(dataToSend));
    resetForm();
  };

  const handleEyeClick = () => {
    setPasswordVisible((prevState) => !prevState); 
  };

  return (
    <div className={css.registration_container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.registration_form} autoComplete="off">
          <h2 className={css.registration_title}>Registration</h2>
          <div className={css.inputContainer}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.inputContainer}>
            <div style={{ position: 'relative' }}>
              <Field
                type={passwordVisible ? 'text' : 'password'} 
                name="password"
                placeholder="Password"
                className={css.input}
              />
              <img
                src={passwordVisible ? eyeopen : eyeclosed} 
                alt={passwordVisible ? 'eye open' : 'eye closed'}
                className={css.imageEye}
                onClick={handleEyeClick} 
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className={css.input}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.button}>
            Registration
          </button>
          <p className={css.refTitleToLogin}>
            Already have an account?{' '}
            <Link to="/login" className={css.refLogin}>
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
