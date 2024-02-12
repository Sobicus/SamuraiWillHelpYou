import {Field, Formik, useFormik} from "formik";

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <Basic/>
    </div>
}
const Basic = () => (
    <div>
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
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
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
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
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
);

type loginErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
