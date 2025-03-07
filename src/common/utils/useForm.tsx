import { useState } from "react";
import validate from "./validationRules"; // Ensure this file exists for validation
import { IValues } from "../types"; // Import the correct type

export const useForm = (validate: (values: IValues) => Partial<IValues>) => {
    const [values, setValues] = useState<IValues>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Partial<IValues>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        // Validate form fields
        const validationErrors = validate(values);
        setErrors(validationErrors);

        // Stop submission if validation fails
        if (Object.keys(validationErrors).length > 0) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const result = await response.json();
            if (result.success) {
                setSuccessMessage("✅ Email Sent Successfully!");
                setValues({ name: "", email: "", message: "" }); // Reset form fields
            } else {
                setErrorMessage("❌ Failed to send email. Try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("❌ An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { values, errors, handleChange, handleSubmit, isSubmitting, successMessage, errorMessage };
};
