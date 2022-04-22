interface question {
    category: string,
    question: string,
    answer: string,
    open: boolean,
}
export const faqCategories = [
    "General Questions",
   
]
export const FAQs: question[] = [
    {
        category: "General Questions",
        question: "When and where the R8 SYP will be held?",
        answer: "From August 3rd to August 7th, 2022. It will take place in Tunis, Tunisia.",
        open: false,
    },
    {
        category: "General Questions",
        question: "What do the registration fees include?",
        answer: "The registration fees cover the accommodation, meals, transportation and congress fees. Allowing our participants to attend the SYP congress 22 and therefore attend technical sessions, a career fair and many entertaining activities.",
        open: false,
    },
    /*{
        category: "General Questions",
        question: "Is there a possibility to have accommodation on my own?",
        answer: "As a participant in the SYP 22, you are free to choose the accommodation that suits you best. You can have accommodation on your own, but you will just need to join the other congress participants at an assembly point when moving from one place to another at a given time. Place and time will be communicated later by the Congress Participants Coordinator.",
        open: false,
    },*/
    {
        category: "General Questions",
        question: "Where can I find information from past congress editions?",
        answer: "You can consult past edition’s websites: SYP Porto 2018: https://syp.ieee-pt.org/ SYP Regensburg 2016: https://www.facebook.com/syp2016/ SYP Kraków 2014: https://www.facebook.com/sypcongress2014/ For more information about this year’s edition follows us on: Facebook page: IEEE R8 Student & Young Professional Congress 2022 Instagram page: r8syp",
        open: false,
    },

    {
        category: "General Questions",
        question: "Is a VISA needed to enter TUNISIA? ",
        answer: "You will find out all the needed information in the following website: https://www.visatunisia.com/tourist-visas/ If yes, we will send you all the required letters the moment you confirm your registration to support your VISA File.",
        open: false,
    },
    {
        category: "General Questions",
        question: "How can I choose which technical activities to attend?",
        answer: "A form will open before the congress where you will be able to choose the technical activities (workshops, keynotes) you want to attend.",
        open: false,
    },
    {
        category: "General Questions",
        question: "How do I become a sponsor or an exhibitor?",
        answer: "You can visit our sponsorship page to take a glimpse at out sponsorship file or contact us at r8syp@ieee.org for more details.",
        open: false,
    },
]