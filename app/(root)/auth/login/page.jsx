"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
//import Logo from "@/public/Logo.PNG";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchema } from "@/lib/zodSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import ButtonLoading from "@/components/Application/ButtonLoading";
import z from "zod";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import Link from "next/link";
import { WEBSITE_REGISTER } from "@/routes/WebsiteRoute";
function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const formSchema = zSchema
    .pick({
      email: true,
    })
    .extend({
      password: z.string().min("3", "Password field is required."),
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Card>
      <CardContent className="w-[390px]">
        <div className="flex justify-center">
          <Image src="/Logo.PNG" height={100} width={100} alt="logo" />
        </div>
        <div className="text-center">
          <h1 className="text-[20px] text-[rgb(51,51,51)]  font-bold">Login Into Account</h1>
          <p className="text-[rgb(51,51,51)]">If you are visiting us for the first time, please sign up below. Existing customers, please login.</p>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-5">
                {/* <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isTypePassword ? 'password': 'text'}
                          placeholder="enter your password"
                          {...field}
                        />
                        
                      </FormControl>
                      <button className="absolute top-1/2 right-2 cursor-pointer" type="button" onClick={()=> setIsTypePassword(!isTypePassword)}>
                          {isTypePassword ? 
                          <FaRegEyeSlash/>
                          :
                          <FaRegEye/>
                          }
                        </button>
                      <FormMessage />
                    </FormItem> */}
                  
                {/* Wanted to just position the eye icon in the middle of it
                container */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>

                      {/* Wrap Input + Button together */}
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={isTypePassword ? "password" : "text"}
                            placeholder="enter your password"
                            className="pr-10"
                            {...field}
                          />
                        </FormControl>

                        {/* Eye toggle button */}
                        <button
                          type="button"
                          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                          onClick={() => setIsTypePassword(!isTypePassword)}
                        >
                          {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-3">
                <ButtonLoading
                  loading={loading}
                  type="submit"
                  text="Login"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center gap-1">
                  <p>Don't have account?</p>
                  <Link href={WEBSITE_REGISTER} className="text-primary underline">
                    Create account!
                  </Link>
                </div>
                <div className="mt-3">
                  <Link href="" className="text-primary underline">
                    Forget password?
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
