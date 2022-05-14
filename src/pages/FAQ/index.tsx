import React, {useState} from "react"

import {faqCategories, FAQs} from "../../data/FAQs";
import FAQelement from "../../components/FAQelement";
import "./faq.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function FAQ() {
    const [faqs, setfaqs] = useState(FAQs);

    const toggleFAQ = (index: number, category: string) => {
        setfaqs(faqs.map((faq, key) => {
            if (category != faq.category) {
                index++;
            }
            if (key === index && category == faq.category) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div className="">
                <Header title={"FAQs"} description={<p>Find your answers here</p>}/>
            {
                faqCategories.map((category, i) =>
                    <div className="faqs" key={i}>
                        <div className="category-title-container">
                            <h1 className="category-title">{category}</h1>
                        </div>
                        {
                            faqs.filter((faq) => {
                                return (faq.category == category) //filtering questions by their categories
                            }).map((faq, key) => (
                                <FAQelement faq={faq} index={key} toggleFAQ={toggleFAQ} key={key}/>
                            )) // mapping each category questions
                        }
                    </div>
                )
            }

            <Footer/>
        </div>
    );
}