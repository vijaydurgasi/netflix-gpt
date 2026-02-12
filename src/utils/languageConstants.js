const languageConstants = {
    en: {
        searchPlaceholder: "What would you like to watch today?",
        searchButton: "Search",
        aiTitle: "AI Movie Assistant",
        gptIntro: (query) =>
            `Based on your interest in "${query}", here are some movies you might enjoy:`,
        noResults: (query) =>
            `I couldn't find movies related to "${query}". Try another title.`,
    },
    hi: {
        searchPlaceholder: "आज आप क्या देखना चाहेंगे?",
        searchButton: "खोजें",
        aiTitle: "एआई मूवी सहायक",
        gptIntro: (query) =>
            `"${query}" के आधार पर ये फिल्में आपको पसंद आ सकती हैं:`,
        noResults: (query) =>
            `"${query}" से संबंधित फिल्में नहीं मिलीं। कृपया कुछ और खोजें।`,
    },
    te: {
        searchPlaceholder: "ఈరోజు మీరు ఏమి చూడాలనుకుంటున్నారు?",
        searchButton: "శోధించండి",
        aiTitle: "ఏఐ మూవీ అసిస్టెంట్",
        gptIntro: (query) =>
            `"${query}" ఆధారంగా మీరు ఇష్టపడే సినిమాలు:`,
        noResults: (query) =>
            `"${query}" కు సంబంధించిన సినిమాలు కనబడలేదు. మరొకటి ప్రయత్నించండి.`,
    },
};

export default languageConstants;
