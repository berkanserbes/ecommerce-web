import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ILoginValues {
  email: string;
  password: string;
}

interface ILoginProps {
  setIsAuthenticated: (auth: boolean) => void;
}

const Login: React.FC<ILoginProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (
    values: ILoginValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const result = await axios.post(
        "http://localhost:4000/api/authentication/login",
        values
      );
      if (result.status === 200) {
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image Column */}
      <div
        className="hidden md:block flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/auth-cover.svg)" }}
      ></div>

      {/* Form Column */}
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-100">
        <div className="max-w-sm w-full space-y-4">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ isValid, dirty, isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                    className={`w-full py-2 px-4 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      !isValid || !dirty || isSubmitting
                        ? "bg-[#e2e0ff] text-[#8881f8] cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
                    }`}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </Form>
              )}
            </Formik>
            <div>
              <p className="mt-4 text-sm text-center">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
