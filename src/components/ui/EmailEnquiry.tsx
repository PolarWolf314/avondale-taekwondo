"use client";

import React from "react";
import { z } from "zod";

const emailFormSchema = z.object({
  name: z.string().min(1, { message: "Please provide a name" }).max(50),
});

const EmailEnquiry = () => {
  return <div>EmailEnquiry</div>;
};

export default EmailEnquiry;
