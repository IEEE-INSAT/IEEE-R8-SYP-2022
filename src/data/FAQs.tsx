interface question {
    category: string,
    question: string,
    answer: string,
    open: boolean,
}
export const faqCategories = [
    "General Questions",
    "Visa",
    "Program"
]
export const FAQs: question[] = [
    {
        category: "General Questions",
        question: "Question 1:When and where the R8 SYP will be held?",
        answer: "From August 3rd to August 7th, 2022. It will take place in Tunis, Tunisia.",
        open: false,
    },
    {
        category: "General Questions",
        question: "Question 2:How much are the registration fees?",
        answer: "The registration fees are 300$(+/- 50 $)",
        open: false,
    },
    {
        category: "General Questions",
        question: "Question 3:What do the registration fees include?",
        answer: "The registration fees include accommodation, transportation during the congress, meals, and a welcome pack.",
        open: false,
    },
    {
        category: "General Questions",
        question: "Question 4:Is there a possibility to have accommodation on my own?",
        answer: "Yes, you can have accommodation on your own but you should consider that transportation from your stay place to the congress venues is not our responsibility.",
        open: false,
    },
    {
        category: "General Questions",
        question: "Question 5:Where can I find information from past congress editions?",
        answer: "You can check our social media the Facebook page \"IEEE R8 Student & Young Professional Congress 2022\" or our Instagram account \"r8syp\" ",
        open: false,
    },

    {
        category: "Visa",
        question: "Is a VISA needed to enter TUNISIA? ",
        answer: "You should first check if you need a VISA to enter Tunisia from your country If yes you can contact us to send you an invitation letter to support your VISA file",
        open: false,
    },
    {
        category: "Program",
        question: "How can I participate in technical and social activities?",
        answer: "Before the congress a form will be open with program details and you can choose your social and technical activities.        ",
        open: false,
    },
    {
        category: "Program",
        question: "How do I become a sponsor or an exhibitor?",
        answer: "You can contact us at r8syp@ieee.org for more details.",
        open: false,
    },
]