import { useState } from "react";

const useFormValidation = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formError, setFormError] = useState({ field: "", error: "" });

  const validPassword = {
    hasUpper: /[A-Z]/,
    hasLower: /[a-z]/,
    hasNumber: /[0-9]/,
    hasSpclChr: /[@,#,$,%,&]/,
  };

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateFormInputs = (type: string, formProps: any) => {
    if (type === "auth") {
      if (formProps?.firstName.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "firstName",
          error: "First name is required",
        });
      }

      if (formProps?.lastName.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "lastName",
          error: "Last name is required",
        });
      }

      if (formProps?.email.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "email",
          error: "email is required",
        });
      }

      if (!regex.test(formProps?.email)) {
        setFormIsValid(false);
        return setFormError({
          field: "email",
          error: "Invalid email address",
        });
      }

      if (formProps?.password.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "password is required",
        });
      }

      if (!validPassword.hasUpper.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain a uppercase letter",
        });
      }

      if (!validPassword.hasLower.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain a lowercase letter",
        });
      }

      if (!validPassword.hasNumber.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain a number",
        });
      }

      if (!validPassword.hasSpclChr.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain special characters {@#%#^#&$*$%}",
        });
      }

      if (formProps?.password.trim().length < 8) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must not be less that 8 characters",
        });
      }

      if (formProps?.password.trim() !== formProps?.confirmPassword) {
        setFormIsValid(false);
        return setFormError({
          field: "confirmPassword",
          error: "Password does not match",
        });
      }

      if (!formProps?.terms) {
        setFormIsValid(false);
        return setFormError({
          field: "terms",
          error: "Accept our terms and conditions",
        });
      }
    }

    if (type === "verification") {
      setFormIsValid(false);
      if (!formProps?.verificationCode) {
        return setFormError({
          field: "verificationCode",
          error: "Verification code is required",
        });
      }

      if (formProps?.verificationCode.trim().length !== 6) {
        setFormIsValid(false);
        return setFormError({
          field: "verificationCode",
          error: "Invalid verification code",
        });
      }
    }

    if (type === "reset") {
      if (formProps?.email.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "email",
          error: "email is required",
        });
      }

      if (!regex.test(formProps?.email)) {
        setFormIsValid(false);
        return setFormError({
          field: "email",
          error: "Invalid email address",
        });
      }
    }

    if (type === "update-password") {
      if (!formProps?.passwordResetCode) {
        setFormIsValid(false);
        return setFormError({
          field: "passwordResetCode",
          error: "Verification code is required",
        });
      }

      if (formProps?.passwordResetCode.trim().length !== 6) {
        setFormIsValid(false);
        return setFormError({
          field: "passwordResetCode",
          error: "Invalid verification code",
        });
      }

      if (formProps?.password.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "password is required",
        });
      }

      if (!validPassword.hasUpper.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain a uppercase letter",
        });
      }

      if (!validPassword.hasLower.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain a lowercase letter",
        });
      }

      if (!validPassword.hasNumber.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain a number",
        });
      }

      if (!validPassword.hasSpclChr.test(formProps?.password)) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must contain special characters {@#%#^#&$*$%}",
        });
      }

      if (formProps?.password.trim().length < 8) {
        setFormIsValid(false);
        return setFormError({
          field: "password",
          error: "Password must not be less that 8 characters",
        });
      }

      if (formProps?.password.trim() !== formProps?.confirmPassword) {
        setFormIsValid(false);
        return setFormError({
          field: "confirmPassword",
          error: "Password does not match",
        });
      }
    }

    if (type === "expert-application") {
      if (formProps?.businessName.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "businessName",
          error: "Business name is required",
        });
      }

      if (formProps?.businessName.trim().length > 30) {
        setFormIsValid(false);
        return setFormError({
          field: "businessName",
          error: "Business name should not be longer than 30 characters",
        });
      }

      if (formProps?.about.trim().length === 0) {
        setFormIsValid(false);
        return setFormError({
          field: "about",
          error: "Business about is required",
        });
      }

      if (formProps?.about.trim().length > 150) {
        setFormIsValid(false);
        return setFormError({
          field: "about",
          error: "about should not be longer than 100 characters",
        });
      }

      if (!formProps?.logo) {
        setFormIsValid(false);
        return setFormError({
          field: "logo",
          error: "Business logo is required",
        });
      }

      if (!formProps?.coverImage) {
        setFormIsValid(false);
        return setFormError({
          field: "coverImage",
          error: "Business cover image is required",
        });
      }
    }

    setFormIsValid(true);
    return setFormError({ field: "", error: "" });
  };

  return [formIsValid, formError, validateFormInputs];
};

export default useFormValidation;
