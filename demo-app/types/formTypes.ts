export interface ContactFormProps {
  readonly formData: {
    readonly name: string;
    readonly email: string;
    readonly subject: string;
    readonly message: string;
  };
  readonly isSubmitting: boolean;
  readonly handleSubmit: (e: React.FormEvent) => void;
  readonly handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly required?: boolean;
}

export interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly label: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readonly required?: boolean;
  readonly rows?: number;
}

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly loading?: boolean;
  readonly children: React.ReactNode;
}
