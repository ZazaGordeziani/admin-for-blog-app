// import { useEffect } from "react";
import { login } from ".";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CardDescription } from "../../src/components/components/ui/card";
import FormItem from "antd/es/form/FormItem";
import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";
import { userAtom } from "../auth/index";
const SignIn = () => {
  const { control, handleSubmit, formState } = useForm<SignInValues>({
    defaultValues: { email: "", password: "" },
  });
  const [, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  type SignInValues = {
    email: string;
    password: string;
  };

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (response) => {
      const { data } = response;

      if (data?.user) {
        setUser(data.user);
        navigate("/admin");
      } else {
        console.error("Login failed: No user data available");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const onSignInSubmit = (data: SignInValues) => {
    handleLogin(data);
  };

  return (
    // <div className="flex flex-col gap-6">
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
      <div className="h-[388px] w-[448px] max-w-md rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col items-center justify-center space-y-1.5 p-6">
          <CardDescription className="text-center text-sm text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </div>
        {/* <label></label> */}
        <div className="p-6 pt-0">
          <FormItem className="flex flex-col gap-1 ">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "signUp-email",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "signUp-email",
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    name="email"
                    placeholder="John@example.com"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />
          </FormItem>
          <div className="mt-2">
            {formState?.errors?.email && (
              <span>{formState.errors.email.message}</span>
            )}
          </div>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </Label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "signUp-password",
                minLength: {
                  value: 8,
                  message: "signUp-passwordLength",
                },
                maxLength: {
                  value: 30,
                  message: "passowrd-maxLength",
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />
          </FormItem>
          <div>
            {formState?.errors?.password && (
              <span>{formState.errors.password.message}</span>
            )}
          </div>
          <button
            className="bg-blue-600	text-white mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            onClick={handleSubmit(onSignInSubmit)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SignIn;
