"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ButtonUI, InputUIWrapper } from "@repo/ui";
import { useAuth } from "../hooks/useAuth";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Minimum 2 chars",
    })
    .email({
      message: "Invalid email",
    }),
  password: z.string().min(4, {
    message: "Minimum 4 chars",
  }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

type Props = {
  redirectToPage?: string;
};

const defaultProps = {
  redirectToPage: "/",
} satisfies Props;

export const LoginForm = (props: Props) => {

  const { redirectToPage } = { ...defaultProps, ...props };

  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: login, isError, isPending } = useAuth({ redirectToPage });

  const onSubmit = async (formValues: LoginFormValues): Promise<void> => {
    setError(null);
    const { username, password } = formValues;
    login({ email: username,  password });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-lg flex-col gap-5 p-32"
    >
      <div className="flex gap-8 flex-col ">
        <div className="form-field ">

          <InputUIWrapper
            type="text"
            label="Email"
            startAdornment="📧"
            isError={!!errors?.username}
            state="normal"
            message={errors?.username?.message}
            {
              ...register("username", {
                required: true,
                min: 0,
                max: 1000000,
              })
            }
          />

          <InputUIWrapper
            type="password"
            label="Password"
            message={errors?.password?.message}
            isError={!!errors?.password}
            {...register("password", {
              required: true,
              minLength: 2,
              maxLength: 50,
            })}
            variant="primary"
            state="normal"
          />
        </div>

        {isPending && <div>Logging in...</div>}
        {isError && <div>Authentication failed</div>}

        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <ButtonUI 
              type="submit" 
              disabled={isSubmitting}>
              Login
            </ButtonUI>

            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </form>
  );
};
