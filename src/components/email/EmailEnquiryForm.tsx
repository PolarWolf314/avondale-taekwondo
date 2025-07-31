"use client";

import React, { useState, useEffect } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const nzPhoneRegex = /^(\+64\s?|0)\s?[1-9][\d\s]{7,10}$/;

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
  website: z.string().optional(), // honeypot field
});

const EmailEnquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [spamToken, setSpamToken] = useState<string>("");

  const form = useForm<z.infer<typeof enquirySchema>>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "",
      phone: undefined,
      date: undefined,
      message: "",
      website: "", // honeypot field
    },
  });

  // Fetch spam protection token when component loads
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/generate-token");
        if (response.ok) {
          const data = await response.json();
          setSpamToken(data.token);
        }
      } catch (error) {
        console.error("Failed to fetch spam token:", error);
      }
    };

    fetchToken();
  }, []);

  async function onSubmit(values: z.infer<typeof enquirySchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          date: values.date?.toISOString(),
          spamToken: spamToken,
          website: values.website || "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex-grow bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-header font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to start your Taekwon-Do journey? We&apos;d love to hear
              from you. Fill out the form below and we&apos;ll get back to you
              as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Get in touch with us directly or visit us at our training
                  location.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <p className="text-gray-600 text-sm">
                      instructor@avondaletkd.co.nz
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Phone</p>
                    <p className="text-gray-600 text-sm">+64 21 164 6158</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Location
                    </p>
                    <p className="text-gray-600 text-sm">
                      Avondale Primary School
                      <br />
                      Crayford Street West, Avondale
                      <br />
                      Auckland 1026, NZ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Training Times
                    </p>
                    <p className="text-gray-600 text-sm">
                      Monday & Thursday
                      <br />
                      6:30 PM - 8:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-purple-50">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Free 2-Week Trial</h3>
                <p className="text-gray-700 text-sm">
                  New to Taekwon-Do? Join us for a free 2-week trial to
                  experience our training and see if it&apos;s right for you. No
                  commitment required!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll respond as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800">
                        Message sent successfully!
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for your enquiry. We&apos;ll get back to you
                        as soon as we can!
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-red-800">
                        Failed to send message
                      </h4>
                      <p className="text-sm text-red-700 mt-1">
                        {errorMessage ||
                          "Please try again or contact us directly."}
                      </p>
                    </div>
                  </div>
                )}

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem className="absolute left-[-9999px] opacity-0 pointer-events-none">
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Leave this field empty"
                              tabIndex={-1}
                              autoComplete="off"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Name *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="h-11"
                                {...field}
                              />
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
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="email@example.com"
                                type="email"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Phone and Reason Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Phone
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="021 123 4567"
                                className="h-11"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value)}
                              />
                            </FormControl>
                            <FormDescription className="text-xs">
                              Optional — for faster response
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                              Reason for Contact *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="h-11">
                                <SelectValue placeholder="What can we help with?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="trial">
                                  Book a Free Trial
                                </SelectItem>
                                <SelectItem value="membership">
                                  Membership Inquiry
                                </SelectItem>
                                <SelectItem value="general">
                                  General Question
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Preferred Date */}
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Preferred Start Date
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className="h-11 w-full justify-start text-left font-normal"
                                >
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : "Select a date (optional)"}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription className="text-xs">
                            When would you like to start your trial? (Optional)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Message *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about yourself, your experience with martial arts, any questions you have, or anything else you'd like us to know..."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            {field.value?.length || 0}/500 characters
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 text-base font-medium bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        Fields marked with * are required
                      </p>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailEnquiry;
