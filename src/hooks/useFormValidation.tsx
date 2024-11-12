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

    if (type === "service-request") {
      if (!formProps?.description) {
        setFormIsValid(false);
        return setFormError({
          field: "description",
          error: "Description is required",
        });
      }

      if (
        formProps?.description.trim().length > 500 ||
        formProps?.description.trim().length <= 50
      ) {
        setFormIsValid(false);
        return setFormError({
          field: "description",
          error:
            "Description should not be less than 10 characters or more than 50 character",
        });
      }

      if (!formProps?.project_end_date) {
        setFormIsValid(false);
        return setFormError({
          field: "date",
          error: "Please provide a end date",
        });
      }

      if (!formProps?.amount_offered) {
        setFormIsValid(false);
        return setFormError({
          field: "amount",
          error: "Amount is required",
        });
      }
    }

    if (type === "wishlist") {
      if (!formProps?.name) {
        setFormIsValid(false);
        return setFormError({
          field: "name",
          error: "name is required",
        });
      }

      if (
        formProps?.name.trim().length > 50 ||
        formProps?.name.trim().length <= 5
      ) {
        setFormIsValid(false);
        return setFormError({
          field: "name",
          error:
            "Wishlist name should not be less than 5 characters or more than 50 character",
        });
      }
    }

    if (type === "create-service") {
      if (!formProps?.description) {
        setFormIsValid(false);
        return setFormError({
          field: "description",
          error: "Description is required",
        });
      }

      if (
        formProps?.description.length > 600 ||
        formProps?.description.length <= 50
      ) {
        setFormIsValid(false);
        return setFormError({
          field: "description",
          error:
            "Description should not be less than 50 characters or more than 600 character",
        });
      }

      if (!formProps?.title) {
        setFormIsValid(false);
        return setFormError({
          field: "title",
          error: "Service Title is required",
        });
      }

      if (!formProps?.banner) {
        setFormIsValid(false);
        return setFormError({
          field: "banner",
          error: "Thumbnail is required",
        });
      }

      // if (!formProps?.explainer_video) {
      //   setFormIsValid(false);
      //   return setFormError({
      //     field: "explainer_vidoe",
      //     error: "Video is requied to create a service",
      //   });
      // }

      if (!formProps?.category) {
        setFormIsValid(false);
        return setFormError({
          field: "category",
          error: "Category is required",
        });
      }

      if (!formProps?.price) {
        setFormIsValid(false);
        return setFormError({
          field: "price",
          error: "price field is required",
        });
      }

      if (
        formProps?.title.trim().length > 50 ||
        formProps?.title.trim().length <= 5
      ) {
        setFormIsValid(false);
        return setFormError({
          field: "title",
          error:
            "Title should not be less than 5 characters or more than 50 character",
        });
      }
    }

    setFormIsValid(true);
    return setFormError({ field: "", error: "" });
  };

  return [formIsValid, formError, validateFormInputs];
};

export default useFormValidation;
