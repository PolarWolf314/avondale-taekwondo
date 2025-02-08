import EmailEnquiry from "@/components/ui/EmailEnquiry";

export default function Home() {
  return (
    <div className="flex-grow">
      <div>{process.env.RESEND_API_KEY}</div>
      <EmailEnquiry />
    </div>
  );
}
