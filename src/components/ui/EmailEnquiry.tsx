"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

const nzPhoneRegex = /^(\+64|0)[1-9]\d{7,9}$/;

export const enquirySchema = z.object({
  name: z
    .string()
    .min(1, "Please provide a name")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Please provide a valid email address"),
  reason: z.string().min(1, "Please select a reason for contacting us"),
  phone: z.string().regex(nzPhoneRegex, "Invalid NZ phone number").optional(),
  date: z.date().optional(),
  message: z
    .string()
    .min(1, "Please write a message")
    .max(500, "Message must be at most 500 characters"),
});

const EmailEnquiry = () => {
  const form = useForm<z.infer<typeof enquirySchema>>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "",
      phone: undefined,
      date: undefined,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof enquirySchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Please provide your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your NZ phone number"
                  value={field.value ?? ""} // ensure a string is always passed
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormDescription>Optional.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="membership">Membership</SelectItem>
                  <SelectItem value="trial">Booking a Free Trial</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline">
                      {field.value ? format(field.value, "PPP") : "Pick a date"}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Pick the date you would like to start your 2 week free trial.
                Picking a date is optional.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your message here" {...field} />
              </FormControl>
              <FormDescription>Inputs with a * are required.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EmailEnquiry;
