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
import { WEBSITE_LOGIN } from "@/routes/WebsiteRoute";
import axios from "axios";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const formSchema = zSchema
    .pick({
      name: true,
      email: true,
      password: true,
    })
    .extend({
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password and confirm password must be same.",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterSubmit = async (values) => {
    try {
      setLoading(true)
      const {data: registerResponse} = await axios.post('/api/auth/register', values)
      if(!registerResponse.success){
        throw new Error(registerResponse.message)
      }

      form.reset()
      alert(registerResponse.message)
    } catch (error) {
      alert(error.message)
    }finally{
      setLoading(false)
    }
  };
  return (
    <Card>
      <CardContent className="w-[390px]">
        <div className="flex justify-center">
          <Image src="/Logo.PNG" height={100} width={100} alt="logo" />
        </div>
        <div className="text-center">
          <h1 className="text-[20px] text-[rgb(51,51,51)]  font-bold">
            Create Account
          </h1>
          <p className="text-[rgb(51,51,51)]">
            Please complete the fields marked with *
          </p>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegisterSubmit)}>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password *</FormLabel>

                      {/* Wrap Input + Button together */}
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="enter your password"
                            className="pr-10"
                            {...field}
                          />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-5">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password *</FormLabel>

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
                  text="Create Account"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center gap-1">
                  <p>Already have account?</p>
                  <Link
                    href={WEBSITE_LOGIN}
                    className="text-primary underline"
                  >
                    Login!
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
