import CustomButton from "@/components/common/CustomButton";
import CustomTextField from "@/components/common/CustomTextField";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { signUpApi } from "services/apis/User";
import * as yup from "yup";

const SignUp = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    phoneNumber: "",
  };

  const onSubmit = (values) => {
    signUpApi({ ...values, passwordConfirm: undefined })
      .then((res) => {
        toast.success("ثبت نام با موفقیت انجام شد.");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
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

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "تایید رمز عبور با رمز عبور برابر نیست.")
      .required("تایید رمز عبور نمی تواند خالی باشد."),

    name: yup.string().min(3, "نام نمی تواند کمتر از سه حرف باشد.").required("نام نمی تواند خالی باشد."),

    phoneNumber: yup
      .string()
      .matches(/^[0-9]/, "لطفا شماره همراه خود را به صورت صحیح وارد کنید.")
      .min(11, "لطفا شماره همراه خود را به صورت کامل کنید.")
      .max(11, "لطفا شماره همراه خود را به صورت کامل کنید.")
      .required("لطفا شماره همراه خود را به صورت کامل و صحیح وارد کنید."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="mx-auto max-w-lg mt-64">
      <h2 className="mb-8">ثبت نام</h2>
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
          name="phoneNumber"
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          label={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : "تلفن همراه"}
        />
        <CustomTextField
          name="name"
          error={formik.touched.name && Boolean(formik.errors.name)}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
          label={formik.touched.name && formik.errors.name ? formik.errors.name : "نام کامل"}
        />
        <div className="flex-between gap-4">
          <CustomTextField
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            label={formik.touched.password && formik.errors.password ? formik.errors.password : "رمز عبور"}
          />
          <CustomTextField
            name="passwordConfirm"
            error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            type="password"
            label={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? formik.errors.passwordConfirm : "تکرار رمز عبور"}
          />
        </div>
      </div>

      <CustomButton text="ثبت نام" type="submit" className="mt-4 centering" />
    </form>
  );
};

export default SignUp;
