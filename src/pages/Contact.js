// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaBriefcase, FaShieldAlt, FaCheck } from "react-icons/fa";
// import "../styles/contact.css"; // Import CSS file

// const translations = {
//   "en-uk": {
//     heading: "Let's Connect",
//     phone: "Phone",
//     email: "Email",
//     instagram: "Instagram",
//     workPref: "Work Preferences",
//     remote: "Open to Remote Work",
//     hybrid: "Open to Offline/Hybrid Work",
//     selectLang: "Select a Language:",
//     educationCity: "Current Education City: Manipal",
//     homeCity: "Home City: Agra",
//     privacy: "Privacy & Terms",
//     privacyText: "This website does not store any personal data. Contact details are for communication purposes only.",
//     close: "Close"
//   },
//   "en-us": {
//     heading: "Get in Touch",
//     phone: "Phone",
//     email: "Email",
//     instagram: "Instagram",
//     workPref: "Work Preferences",
//     remote: "Available for Remote Work",
//     hybrid: "Available for Offline/Hybrid Work",
//     selectLang: "Choose a Language:",
//     educationCity: "Current Education City: Manipal",
//     homeCity: "Home City: Agra",
//     privacy: "Privacy & Terms",
//     privacyText: "We respect your privacy. No personal data is stored. Contact details are only for communication.",
//     close: "Close"
//   },
//   "hindi": {
//     heading: "संपर्क करें",
//     phone: "फ़ोन",
//     email: "ईमेल",
//     instagram: "इंस्टाग्राम",
//     workPref: "कार्य वरीयताएँ",
//     remote: "रिमोट कार्य के लिए उपलब्ध",
//     hybrid: "ऑफलाइन/हाइब्रिड कार्य के लिए उपलब्ध",
//     selectLang: "भाषा चुनें:",
//     educationCity: "वर्तमान शिक्षा शहर: मणिपाल",
//     homeCity: "गृहनगर: आगरा",
//     privacy: "गोपनीयता और शर्तें",
//     privacyText: "यह वेबसाइट कोई व्यक्तिगत डेटा संग्रहीत नहीं करती है। संपर्क विवरण केवल संचार के लिए हैं।",
//     close: "बंद करें"
//   }
// };

// const Contact = () => {
//   const [showPrivacy, setShowPrivacy] = useState(false);
//   const [language, setLanguage] = useState("en-uk"); // Default selected language

//   return (
//     <div className="contact-container">
//       <h2 className="contact-heading">{translations[language].heading}</h2>

//       <div className="contact-details">
//         <p><FaPhone className="icon phone-icon" /> {translations[language].phone}: +91 XXXXXXXXXX</p>
//         <p>
//           <FaEnvelope className="icon email-icon" />
//           <a href="mailto:youremail@example.com" className="contact-link">{translations[language].email}: youremail@example.com</a>
//         </p>
//         <p>
//           <FaInstagram className="icon instagram-icon" />
//           <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
//             {translations[language].instagram}: @yourusername
//           </a>
//         </p>
//       </div>

//       {/* Work Preferences (Tick Marks) */}
//       <div className="work-preferences">
//         <p className="work-label"><FaBriefcase className="icon work-icon" /> {translations[language].workPref}:</p>
//         <ul className="work-list">
//           <li><FaCheck className="check-icon" /> {translations[language].remote}</li>
//           <li><FaCheck className="check-icon" /> {translations[language].hybrid}</li>
//         </ul>
//       </div>

//       {/* Language Selection Dropdown */}
//       <div className="language-selection">
//         <label htmlFor="language" className="language-label">{translations[language].selectLang}</label>
//         <select 
//           id="language" 
//           className="language-dropdown"
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//         >
//           <option value="en-uk">English (UK)</option>
//           <option value="en-us">English (US)</option>
//           <option value="hindi">हिन्दी (Hindi)</option>
//         </select>
//       </div>

//       <div className="locations">
//         <p><FaMapMarkerAlt className="icon location-icon" /> {translations[language].educationCity}</p>
//         <p><FaMapMarkerAlt className="icon location-icon" /> {translations[language].homeCity}</p>
//       </div>

//       {/* Privacy & Terms Button */}
//       <button className="privacy-btn" onClick={() => setShowPrivacy(true)}>
//         <FaShieldAlt className="icon privacy-icon" /> {translations[language].privacy}
//       </button>

//       {/* Privacy & Terms Modal */}
//       {showPrivacy && (
//         <div className="privacy-modal">
//           <div className="privacy-content">
//             <h3>{translations[language].privacy}</h3>
//             <p>{translations[language].privacyText}</p>
//             <button className="close-btn" onClick={() => setShowPrivacy(false)}>{translations[language].close}</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;






import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaBriefcase, FaShieldAlt, FaCheck } from "react-icons/fa";
import "../styles/contact.css"; // Import CSS file

const translations = {
  "en-uk": {
    heading: "Let's Connect",
    phone: "Phone",
    email: "Email",
    instagram: "Instagram",
    workPref: "Work Preferences",
    remote: "Remote",
    hybrid: "Offline",
    selectLang: "Select a Language:",
    educationCity: "Current Education City: Manipal",
    homeCity: "Home City: Agra",
    privacy: "Privacy & Terms",
    privacyText: "This website does not store any personal data. Contact details are for communication purposes only.",
    close: "Close"
  },
  "en-us": {
    heading: "Get in Touch",
    phone: "Phone",
    email: "Email",
    instagram: "Instagram",
    workPref: "Work Preferences",
    remote: "Remote",
    hybrid: "Offline",
    selectLang: "Choose a Language:",
    educationCity: "Current Education City: Manipal",
    homeCity: "Home City: Agra",
    privacy: "Privacy & Terms",
    privacyText: "We respect your privacy. No personal data is stored. Contact details are only for communication.",
    close: "Close"
  },
  "hindi": {
    heading: "संपर्क करें",
    phone: "फ़ोन",
    email: "ईमेल",
    instagram: "इंस्टाग्राम",
    workPref: "कार्य वरीयताएँ",
    remote: "रिमोट",
    hybrid: "ऑफलाइन",
    selectLang: "भाषा चुनें:",
    educationCity: "वर्तमान शिक्षा शहर: मणिपाल",
    homeCity: "गृहनगर: आगरा",
    privacy: "गोपनीयता और शर्तें",
    privacyText: "यह वेबसाइट कोई व्यक्तिगत डेटा संग्रहीत नहीं करती है। संपर्क विवरण केवल संचार के लिए हैं।",
    close: "बंद करें"
  }
};

const Contact = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [language, setLanguage] = useState("en-uk"); // Default selected language

  return (
    <div className="contact-container">
      <h2 className="contact-heading">{translations[language].heading}</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <FaPhone className="icon phone-icon" />
          <p>{translations[language].phone}: +91 7820017015</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon email-icon" />
          <a href="mailto:shivambansal4909@@gmail.com" className="contact-link">
            {translations[language].email}: shivambansal4909@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaInstagram className="icon instagram-icon" />
          <a href="https://www.instagram.com/shivam___4909" target="_blank" rel="noopener noreferrer" className="contact-link">
            {translations[language].instagram}: @shivam___4909
          </a>
        </div>

        <div className="contact-card">
          <FaBriefcase className="icon work-icon" />
          <p>{translations[language].workPref}:</p> 
          <ul className="work-list">
            <li><FaCheck className="check-icon" /> {translations[language].hybrid}</li>
            <li><FaCheck className="check-icon" /> {translations[language].remote}</li>
            
          </ul>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon location-icon" />
          <p>{translations[language].educationCity}</p>
          <p>{translations[language].homeCity}</p>
        </div>
      </div>

      

      <button className="privacy-btn" onClick={() => setShowPrivacy(true)}>
        <FaShieldAlt className="icon-privacy-icon" /> {translations[language].privacy}
      </button>

      {showPrivacy && (
        <div className="privacy-modal">
          <div className="privacy-content">
            <h3>{translations[language].privacy}</h3>
            <p>{translations[language].privacyText}</p>
            <button className="close-btn" onClick={() => setShowPrivacy(false)}>{translations[language].close}</button>
          </div>
        </div>
      )}
      <div className="language-selection">
        <label htmlFor="language" className="language-label">{translations[language].selectLang}</label>
        <select 
          id="language" 
          className="language-dropdown"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en-uk">English (UK)</option>
          <option value="en-us">English (US)</option>
          <option value="hindi">हिन्दी (Hindi)</option>
        </select>
      </div>
    </div>
  );
};

export default Contact;