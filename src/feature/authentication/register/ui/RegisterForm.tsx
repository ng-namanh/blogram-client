import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, Button } from "@/shared/ui";
import { createUser } from "@/shared/api";
import { useState } from "react";
import { FormFieldWrapper } from "@/widgets/authentication/";
import {
  SignupForm,
  signupFormSchema,
} from "@/feature/authentication/register/model/registerSchema";
import { RegisterToast } from "@/widgets/authentication";

export default function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);

  const form = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SignupForm) {
    createUser(values).then((response: { success: boolean }) => {
      if (response.success === true) {
        setIsRegistered(true);
      }
    });
    form.reset();
  }

  return (
    <div className="flex w-96 flex-col items-start justify-center">
      <h1 className="mb-8 text-2xl font-bold">Create your account</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormFieldWrapper
            name="name"
            label="Name"
            control={form.control}
            placeholder="name"
            type="text"
          />
          <FormFieldWrapper
            name="username"
            label="Username"
            control={form.control}
            placeholder="username"
            type="text"
          />
          <FormFieldWrapper
            name="email"
            label="Email"
            control={form.control}
            placeholder="Email"
            type="text"
          />
          <FormFieldWrapper
            name="password"
            label="Password"
            control={form.control}
            placeholder="password"
            type="password"
          />
          <FormFieldWrapper
            name="confirmPassword"
            label="Confirm Password"
            control={form.control}
            placeholder="confirm password"
            type="password"
          />

          <Button type="submit">Sign up</Button>
        </form>
      </Form>
      {isRegistered && <RegisterToast />}
    </div>
  );
}
