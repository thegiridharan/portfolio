"use client";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {FolderKanban} from "lucide-react";
import {toast, Toaster} from "sonner";

export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail =(e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ravhmdd",
            "template_71lct4j",
            form.current,
            "rBEuxXpDZzW9XIgK7"
        ).then(() => {
            setStatus("Message sent Successfully!");
            toast.info(status);
            e.target.reset();
        }, (err) => {
            setStatus("Failed to send message, Try again!");
            toast.info(err.message);
        });
    }

    return (
        <div>
            <div className="flex flex-col gap-[16px] mx-[calc(5%)]">
                <p className="text-[26px] font-semibold">Contact Us</p>
                <p className="opacity-50">We’d love to hear from you—drop us a message anytime.</p>
            </div>
            <div className="flex items-center justify-center min-h-[calc(100vh-165px)]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[15px] w-[500px] bg-white p-[40px] rounded-[7px] shadow-2xs">
                <p>Name <span className="text-red-500">*</span></p>
                <input placeholder="Name" name="user_name" type="text" required className="outline-1 rounded-[4px] outline-black/20 p-[4px]"  />
                <p>Email ID <span className="text-red-500">*</span></p>
                <input placeholder="Email ID" name="user_email" type="email" required className="outline-1 rounded-[4px] outline-black/20 p-[4px]" />
                <p>Message <span className="text-red-500">*</span></p>
                <textarea placeholder="Message" name="user_message" required className="outline-1 rounded-[4px] outline-black/20 p-[4px]"  />
                <button type="submit" className="bg-black text-white w-full flex items-center justify-center cursor-pointer rounded-[5px] py-[6px]">Send Message</button>
            </form>
            </div>
            <Toaster />
        </div>
    );
}
