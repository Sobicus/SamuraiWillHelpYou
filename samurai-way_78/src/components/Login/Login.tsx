import {ErrorMessage, Field, Formik} from "formik";
import style from './Login.module.css'

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}
const LoginForm = () => {
    return <div>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validate={values => {
                const errors: loginErrorType = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 4) {
                    errors.password = 'Must be 4 characters or more';
                }
                return errors ;
            }}
            onSubmit={async (values, {setSubmitting, setFieldValue}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setFieldValue('email','')
                    setFieldValue('password','')
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,

                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {/*{errors.email && touched.email && errors.email}*/}
                    {errors.email && <div className={style.errors}>{errors.email}</div>} {/*for example how to can styled errors*/}
                    <ErrorMessage name="email" component="div" />
                    <Field
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {/*{errors.password && touched.password && errors.password}*/}
                    <ErrorMessage name="password" component="div" />
                    <Field
                        type="checkbox"
                        name="rememberMe"
                        // onChange={handleChange}
                        // checked={values.rememberMe}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
}

type loginErrorType = {
    email?: string
    password?: string
}
