"use client"; // Enable Client Components

import Link from 'next/link';
import { useState } from 'react';
import "./faqpage.css";

export default function FaqPage() {
    const faqs = [
        {
            question: " +    How do I edit my mark schemes?",
            answer: "You can edit your mark schemes by going to the edit button in the 'my markschemes' section. From here, you should be able to edit the mark schemes that you have created."
        },
        {
            question: " + How do I delete my mark schemes?",
            answer: "Deleting a markscheme is simple. Just click on the mark scheme, click 'edit', and then click the 'trash' icon. All done!"
        },
        {
            question: " + How do I share my mark schemes with others?",
            answer: "Share your mark scheme by going to the 'my markschemes', clicking on the markscheme you would like to share, and then clicking the 'share' button."
        },
        {
            question: " + How do I duplicate a mark scheme?",
            answer: "To duplicate a mark scheme, go to the 'my markschemes' section, select the mark scheme you want to duplicate, click on 'edit', and then choose 'duplicate'. A copy will be created."
        },
        {
            question: " + How do I restore a deleted mark scheme?",
            answer: "If you've recently deleted a mark scheme, go to the 'trash' section within 'my markschemes'. Find the deleted mark scheme, click 'restore', and it will be returned to your main list."
        }, 
        {
            question: " + How do I change the name of a mark scheme?",
            answer: "To rename a mark scheme, go to 'my markschemes', click on the mark scheme you want to rename, select 'edit', and update the name in the title field."
        }
    ];

    const Navbar = () => {
        return (
            <div className="topnav">
                <Link href="#home" className="active">Home</Link>
                <Link href="#markschemess">Mark Schemes</Link>
                <Link href="#contact">FAQ</Link>
                <Link href="#about">About</Link>
            </div>
        );
    };

    const [info, setInfo] = useState(null);

    return (
        <div className="faq-page">
            <Navbar />
            <h1 className="title">Frequently Asked Questions</h1>
            <p className="subtitle">Do you have question that you can't find the answer to? Well look no further some others have had the same questions too. The answers are down below!</p>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <h3 className="faq-question" onClick={() => setInfo(info === index ? null : index)}>
                            {faq.question}
                        </h3>
                        <p className="faq-answer" style={{ display: info === index ? "block" : "none" }}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
