const scenarios = [
    { scenario: "You received a letter and want to respond online.", answer: "Respond to your letter on our website" },
    { scenario: "You want to apply for help with NHS costs due to low income.", answer: "How do I apply for the NHS Low Income Scheme (LIS)?" },
    { scenario: "You need to send evidence for a maternity exemption certificate.", answer: "Sending evidence to confirm maternity exemption certificate eligibility" },
    { scenario: "You want to know what a PPC is.", answer: "What is a Prescription Prepayment Certificate (PPC)?" },
    { scenario: "You want to know how to find an NHS dentist.", answer: "How do I find an NHS dentist?" }
];

const topics = [
    "Knowledge Base (KB) homepage",
    "Contact us form",
    "Letter of authority (LOA)",
    "Power of attorney or Court of Protection (COP) document",
    "Financial hardship - signposting for further help",
    "Respond to your letter on our website",
    "Why have I been sent an enquiry letter or Penalty Charge Notice (PCN)? - enquiry letter stage liable for charges",
    "Regulations and recovery of charges",
    "Sending in proof of exemption evidence",
    "Evidence needed for name or date of birth mismatch",
    "Sending in proof of being covered under parent or guardian's exemption (age 19)",
    "Sending evidence to confirm maternity exemption certificate eligibility",
    "Dispute PCN - dental practice email",
    "Patient Record (PR) was not signed",
    "Did not receive treatment or had private treatment",
    "Paid for treatment",
    "Sending evidence to confirm maternity exemption certificate or medical exemption certificate eligibility",
    "Collected prescription after turning age 60",
    "Patient written confirmation paid or did not collect",
    "Pharmacy evidence paid or did not collect",
    "Apply for medical or maternity exemption certificate",
    "Patient did not collect prescription",
    "Patient paid for prescription",
    "Prescription was for child",
    "MATEX expired before child turned one",
    "Sending evidence of care package",
    "Making a payment",
    "Sending evidence in for name change to set up Direct Debit (DD)",
    "Direct Debit (DD) set up",
    "Direct Debit (DD) cancelled - Customer Support Services (CSS) use only",
    "Direct Debit (DD) not reinstated - CSS use only",
    "PCN closed",
    "Penalty and surcharge removed",
    "Surcharge removed",
    "Financial hardship - HC1",
    "Financial hardship - qualifying benefit",
    "Easement agreed",
    "Patient has died",
    "Easement agreed when with Debt Collection Agency (DCA) - DECS",
    "How do I find an NHS dentist?",
    "What does each dental treatment band cover in England and Wales?",
    "Who is entitled to an NHS Tax Credit Exemption Certificate?",
    "How do I apply for the NHS Low Income Scheme (LIS)?",
    "What is an HC2 and HC3 certificate?",
    "What is a Prescription Prepayment Certificate (PPC)?",
    "How do I change my details on a Prescription Prepayment Certificate (PPC)?",
    "What is a Hormone Replacement Therapy Prescription Prepayment Certificate (HRT PPC)?",
    "How do I change my details on a medical exemption certificate?",
    "How long will my maternity exemption certificate be valid for?",
    "How do I update the details on my maternity exemption certificate?",
    "How do I change the personal details on my HC2 or HC3 certificate?",
    "Check if you have an exemption from paying NHS costs",
    "Can I get help with my NHS health costs if I receive Universal Credit (UC)?",
    "Can I claim help with my NHS health costs if I'm not getting a payment of my qualifying benefit?",
    "Can I get help with my NHS health costs if I'm pregnant or have given birth in the last 12 months?",
    "What entitles me to free NHS dental treatment?",
    "What entitles me to free NHS prescriptions?"
];

let current = 0;
let timer;
let timeLeft = 30;

function startGame() {
    current = 0;
    document.getElementById("result").innerText = "";
    nextRound();
}

function nextRound() {
    if (current >= scenarios.length) {
        document.getElementById("scenario").innerText = "Game Over!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("timer").innerText = "";
        return;
    }

    const scenario = scenarios[current];
    document.getElementById("scenario").innerText = scenario.scenario;

    const shuffled = topics.sort(() => 0.5 - Math.random()).slice(0, 5);
    if (!shuffled.includes(scenario.answer)) shuffled[0] = scenario.answer;

    const optionsHTML = shuffled.map(topic => 
        `<button onclick="checkAnswer('${topic.replace(/'/g, "\\'")}')">${topic}</button>`
    ).join("");
    document.getElementById("options").innerHTML = optionsHTML;

    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("result").innerText = "Time's up!";
            current++;
            setTimeout(nextRound, 2000);
        }
    }, 1000);
}

function checkAnswer(selected) {
    clearInterval(timer);
    const correct = scenarios[current].answer;
    if (selected === correct) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong! Correct answer: " + correct;
    }
    current++;
    setTimeout(nextRound, 2000);
}
