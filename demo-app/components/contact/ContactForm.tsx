import { ContactFormProps } from "@/types/formTypes";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import SubmitButton from "@/components/SubmitButton";
import { FiSend } from "react-icons/fi";

export default function ContactForm({
  formData,
  isSubmitting,
  handleSubmit,
  handleChange,
}: ContactFormProps) {
  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>
      <InputField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        placeholder="What's this about?"
      />
      <TextAreaField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Your message here..."
        rows={6}
      />
      <SubmitButton loading={isSubmitting}>
        <FiSend className="w-5 h-5" />
        <span>Send Message</span>
      </SubmitButton>
    </form>
  );
}
