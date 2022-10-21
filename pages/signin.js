import CustomButton from "@/components/common/CustomButton";
import CustomTextField from "@/components/common/CustomTextField";
import { useAuth, useAuthDispatch } from "Context/AuthProvider";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useAuthDispatch();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [router, user]);

  const onSubmit = (values) => {
    dispatch({ type: "SIGNIN", payload: values });
  };

  const validationSchema = yup.object({
    email: yup.string().required("ایمیل نمی تواند خالی باشد.").email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید."),

    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد.")
      .matches(/^(?=.*[a-z])/, "رمز عبور باید داری حداقل یک حرف کوچک لاتین باشد.")
      .matches(/^(?=.*[A-Z])/, "رمز عبور باید داری حداقل یک حرف بزرگ لاتین باشد.")
      .matches(/^(?=.*[0-9])/, "رمز عبور باید دارای حداقل یک عدد باشد")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد.")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="mx-auto max-w-lg mt-64">
      <h2 className="mb-8">ورود</h2>
      <div className="flex flex-col gap-6">
        <CustomTextField
          name="email"
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          label={formik.touched.email && formik.errors.email ? formik.errors.email : "ایمیل"}
        />
        <CustomTextField
          name="password"
          type="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          label={formik.touched.password && formik.errors.password ? formik.errors.password : "رمز عبور"}
        />
      </div>

      <CustomButton text="ورود" type="submit" className="mt-4 centering" />
    </form>
  );
};

export default SignIn;
