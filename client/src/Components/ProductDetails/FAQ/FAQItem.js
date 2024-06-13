import React, { useState } from 'react';
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded border-teal-100 shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xlfont-sans text-gray-800 ">
      <div class="">
        <div class="space-y-4">
          <Item title="Medical Description">
          Nonopioid analgesic used as antipyretic, treatment of mild to moderate pain and peri-/postoperative management of pain.
          </Item>

          <Item title="Indication & Usage">
          This Medicine is used to treat many conditions
           such as headache, muscle aches, arthritis, 
           backache, toothaches, colds, and fevers. It 
           relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of 
           the joint. This Medicine may also be used for other purposes not listed in this medication guide.      
           </Item>

          <Item title="Dosage & Administration">
          General Dosing Guidelines: 325 to 650 mg every 4 to 6 hours or 1000 mg every 6 to 8 hours orally or rectally.
           Paracetamol 500mg tablets: Two 500 mg tablets orally every 4 to 6 hours Usual Adult Paracetamol Dose for Pain:
            General Dosing Guidelines: 325 to 650 mg every 4 to 6 hours or 1000 mg every 6 to 8 hours orally or rectally.
             Paracetamol 500mg tablets: Two 500 mg tablets orally every 4 to 6 hours Usual Pediatric Dose for Fever: Oral or 
             Rectal: 1 month: 10 to 15 mg/kg/dose every 6 to 8 hours as needed. 1 month to 12 years: 10 to 15 mg/kg/dose every
              4 to 6 hours as needed (Maximum: 5 doses in 24 hours) Fever: 4 months to 9 years: Initial Dose: 30 mg/kg
               (Reported by one study (n=121) to be more effective in reducing fever than a 15 mg/kg maintenance dose with no
                difference regarding clinical tolerance.) 12 years: 325 to 650 mg every 4 to 6 hours or 1000 mg every 6 to 8 hours.
                 Usual Pediatric Dose for Pain: Oral or Rectal: 1 month: 10 to 15 mg/kg/dose every 6 to 8 hours as needed. 1 month 
                 to 12 years: 10 to 15 mg/kg/dose every 4 to 6 hours as needed (Maximum: 5 doses in 24 hours) Fever: 4 months to 9 
                 years: Initial Dose: 30 mg/kg (Reported by one study (n=121) to be more effective in reducing fever than a 15 mg/kg
                  maintenance dose with no difference regarding clinical tolerance.) =12 years: 325 to 650 mg every 4 to 6 hours or 
                  1000 mg every 6 to 8 hours.    
            </Item>
          <Item title="Side Effects">
          Along with its needed effects, acetaminophen (the active ingredient contained in Paracetamol) may cause some unwanted 
          effects. Although not all of these side effects may occur, if they do occur they may need medical attention. Check with
           your doctor immediately if any of the following side effects occur while taking acetaminophen: Rare Bloody or black, tarry
            stools bloody or cloudy urine fever with or without chills (not present before treatment and not caused by the condition 
            being treated) pain in the lower back and/or side (severe and/or sharp) pinpoint red spots on the skin skin rash, hives, 
            or itching sore throat (not present before treatment and not caused by the condition being treated) sores, ulcers, or 
            white spots on the lips or in the mouth sudden decrease in the amount of urine unusual bleeding or bruising unusual 
            tiredness or weakness yellow eyes or skin Get emergency help immediately if any of the following symptoms of overdose 
            occur while taking acetaminophen: Symptoms of overdose Diarrhea increased sweating loss of appetite nausea or vomiting 
            stomach cramps or pain swelling, pain, or tenderness in the upper abdomen or stomach area.
            </Item>
            <Item title="Safety Advice">
            Do not use more of this medication than is recommended. An overdose of paracetamol can cause serious harm.
             The maximum amount of paracetamol for adults is 1 gram (1000 mg) per dose and 4 grams (4000 mg) per day.
              Taking more paracetamol could cause damage to your liver. If you drink more than three alcoholic beverages per day,
               talk to your doctor before taking paracetamol and never use more than 2 grams (2000 mg) per day. Do not use this medication 
               without first talking to your doctor if you drink more than three alcoholic beverages per day or if you have had alcoholic
                liver disease (cirrhosis). You may not be able to use paracetamol
             . Before using paracetamol , tell your doctor if you have liver disease or a history of alcoholism.
            </Item>
            <Item title="Pregnancy & Lactation">
            Paracetamol is mild analgesic of choice during pregnancy. However as with all drugs, caution should be 
            exercised in its use during the first trimester. Paracetamol
             is excreted in breast milk. However the level of paracetamol present is not considered to be harmful.
            </Item>
        </div>
      </div>
    </div>
  );
};
