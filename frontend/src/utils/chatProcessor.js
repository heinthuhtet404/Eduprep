// src/utils/chatProcessor.js

// Step 1: Language Detection (existing)
export const detectLanguage = (text) => {
  const burmeseRegex = /[\u1000-\u109F]/;
  const hasBurmese = burmeseRegex.test(text);
  const englishWords = text.match(/[a-zA-Z]+/g) || [];
  
  if (hasBurmese && englishWords.length === 0) return 'my';
  if (!hasBurmese && englishWords.length > 0) return 'en';
  return 'mixed';
};

// Step 2: Sentence Tokenization (existing)
export const tokenizeSentences = (text) => {
  const sentenceEnders = /[.!?။…]+/;
  
  const sentences = text.split(sentenceEnders)
    .filter(sentence => sentence.trim().length > 0)
    .map(sentence => sentence.trim());
  
  return sentences;
};

// Step 3: Keyword Extraction (existing)
export const extractKeywords = (text, language) => {
  const stopwords = {
    my: ['သည်', 'ကို', 'မှာ', 'နဲ့', 'ပြီး', 'တယ်', 'ပေါ့', 'ပါ', 'နော်', 'ဒါ', 'ဟာ', 'တစ်', 'အဲ့', 'ဖြင့်', '၌'],
    en: ['the', 'is', 'and', 'or', 'but', 'in', 'on', 'at', 'a', 'an', 'me', 'my', 'your', 'our', 'from', 'to', 'for']
  };
  
  const words = text.split(/\s+/);
  const currentStopwords = stopwords[language] || stopwords.en;
  
  const keywords = words.filter(word => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]$/, '');
    
    // ✅ Keep important numbers (years, grades, etc.)
    const isMeaningfulNumber = /\d+/.test(cleanWord) && cleanWord.length >= 4; // Years like 2020, 2021
    
    return (
      (cleanWord.length > 1 || isMeaningfulNumber) && // ✅ Allow meaningful numbers
      !currentStopwords.includes(cleanWord)
    );
  });
  
  return keywords;
};

// Step 4: Intent Detection (existing)
export const detectIntent = (text, language) => {
  const intentPatterns = {
    my: {
      'explain': ['ရှင်းပြပေးပါ', 'ဘာလဲ', 'အဓိပ္ပါယ်', 'ဆိုလိုတာ', 'ဘယ်လို'],
      'question': ['မေးခွန်း', 'ပဟေဠိ', 'problem', 'ပုစ္ဆာ', 'exam', 'စာမေးပွဲ', 'မေးခွန်းပေးပါ'],
      'example': ['ဥပမာ', 'sample', 'example', 'နမူနာ'],
      'calculate': ['တွက်ပြပေးပါ', 'calculate', 'solve', 'ဖြေရှင်းပြပါ']
    },
    en: {
      'explain': ['explain', 'what is', 'define', 'meaning', 'how does'],
      'question': ['question', 'problem', 'exercise', 'quiz', 'test', 'exam'],
      'example': ['example', 'sample', 'demonstrate', 'show me'],
      'calculate': ['calculate', 'solve', 'compute', 'find']
    }
  };
  
  const patterns = intentPatterns[language] || intentPatterns.en;
  const lowerText = text.toLowerCase();
  
  for (const [intent, keywords] of Object.entries(patterns)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return intent;
    }
  }
  return 'general';
};

// Step 5: Parameter Extraction (NEW!)
export const extractParameters = (text, language) => {
  const params = {};
  
  // Extract year (၂၀၂၀, 2020)
  const yearMatch = text.match(/(\b(2015|2016|2017|2018|2019|2020|2021|2022|2023|2024)\b|၂၀၁၅|၂၀၁၆|၂၀၁၇|၂၀၁၈|၂၀၁၉|၂၀၂၀|၂၀၂၁|၂၀၂၂|၂၀၂၃|၂၀၂၄)/);
  if (yearMatch) params.year = yearMatch[0];
  
  // Extract subject
  const subjects = {
    my: {
      'ရူပဗေဒ': 'physics', 'ဓာတုဗေဒ': 'chemistry', 'သင်္ချာ': 'math',
      'ဇီဝဗေဒ': 'biology', 'အင်္ဂလိပ်စာ': 'english', 'မြန်မာစာ': 'burmese'
    },
    en: {
      'physics': 'physics', 'chemistry': 'chemistry', 'math': 'math',
      'mathematics': 'math', 'biology': 'biology', 'english': 'english'
    }
  };
  
  const subjectMap = subjects[language] || subjects.en;
  for (const [key, value] of Object.entries(subjectMap)) {
    if (text.toLowerCase().includes(key)) {
      params.subject = value;
      break;
    }
  }
  
  // Extract grade/level
  const gradeMatch = text.match(/\b(grade|level|class)\s+(\d+)\b|တန်း\s*(\d+)/);
  if (gradeMatch) {
    params.grade = gradeMatch[2] || gradeMatch[3];
  }
  
  return params;
};

// Step 6: Updated Main Processor Function
export const processUserPrompt = (userInput) => {
  try {
    if (!userInput || userInput.trim().length === 0) {
      throw new Error('Empty input provided');
    }

    // Step 1: Language detection
    const language = detectLanguage(userInput);
    
    // Step 2: Sentence tokenization
    const sentences = tokenizeSentences(userInput);
    
    // Step 3: Keyword extraction
    const keywords = extractKeywords(userInput, language);
    
    // Step 4: Intent detection
    const intent = detectIntent(userInput, language);
    
    // Step 5: Parameter extraction (NEW!)
    const parameters = extractParameters(userInput, language);
    
    return {
      success: true,
      data: {
        originalText: userInput,
        language: language,
        sentences: sentences,
        keywords: keywords,
        intent: intent,
        parameters: parameters,  // ✅ NEW: Extracted parameters
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    console.error('Processing error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Test function (Updated to test complete pipeline)
export const testProcessor = () => {
  const testCases = [
    "give me physics questions from 2020 exam",
    "ရူပဗေဒ ဥပမာပြပေးပါ", 
    "calculate math problems for grade 10",
    "explain chemistry concepts",
    "သင်္ချာပုစ္ဆာ grade 11 တွက်ပြပေးပါ",
    "၂၀၂၁ ခုနှစ် ဓာတုဗေဒ မေးခွန်းဟောင်းတွေပေးပါ",
    "biology questions for level 12",
    "အင်္ဂလိပ်စာ ဥပမာပြပေးပါ"
  ];
  
  console.log("🧪 Testing Complete Analysis Pipeline\n");
  
  testCases.forEach((test, index) => {
    const result = processUserPrompt(test);
    
    if (result.success) {
      console.log(`Test ${index + 1}: "${test}"`);
      console.log(`   Language: ${result.data.language}`);
      console.log(`   Sentences: ${result.data.sentences.length}`);
      console.log(`   Keywords: ${result.data.keywords.join(', ')}`);
      console.log(`   Intent: ${result.data.intent}`);
      console.log(`   Parameters: ${JSON.stringify(result.data.parameters)}`);  // ✅ NEW
      console.log('---');
    } else {
      console.log(`Test ${index + 1}: ERROR - ${result.error}`);
    }
  });
};

// Optional: Individual function exports for testing
export const testSentenceTokenization = () => {
  const testCases = [
    "Single sentence",
    "First. Second. Third!",
    "Hello? How are you! I'm fine.",
    "ရူပဗေဒ။ သင်္ချာ။ ဓာတုဗေဒ!",
    "Physics. ရူပဗေဒ။ Chemistry!"
  ];
  
  console.log("🧪 Testing Sentence Tokenization Only\n");
  
  testCases.forEach((test, index) => {
    const sentences = tokenizeSentences(test);
    console.log(`Test ${index + 1}: "${test}"`);
    console.log(`   Found ${sentences.length} sentences:`);
    sentences.forEach((sentence, i) => {
      console.log(`     ${i + 1}. "${sentence}"`);
    });
    console.log('---');
  });
};

// Test keyword extraction only
export const testKeywordExtraction = () => {
  const testCases = [
    "give me old questions from 2020 exam",
    "ရူပဗေဒ ဥပမာပြပေးပါ",
    "calculate physics problem for grade 10",
    "၂၀၂၁ ခုနှစ် သင်္ချာမေးခွန်းများ"
  ];
  
  console.log("🧪 Testing Keyword Extraction Only\n");
  
  testCases.forEach((test, index) => {
    const language = detectLanguage(test);
    const keywords = extractKeywords(test, language);
    console.log(`Test ${index + 1}: "${test}"`);
    console.log(`   Language: ${language}`);
    console.log(`   Keywords: ${keywords.join(', ')}`);
    console.log('---');
  });
};

// Test intent detection only
export const testIntentDetection = () => {
  const testCases = [
    "explain physics concepts",
    "ရူပဗေဒ ရှင်းပြပေးပါ",
    "give me math questions",
    "သင်္ချာဥပမာပြပေးပါ",
    "calculate this problem",
    "ဒီပုစ္ဆာတွက်ပြပေးပါ",
    "hello how are you",
    "နေကောင်းလား"
  ];
  
  console.log("🧪 Testing Intent Detection Only\n");
  
  testCases.forEach((test, index) => {
    const language = detectLanguage(test);
    const intent = detectIntent(test, language);
    console.log(`Test ${index + 1}: "${test}"`);
    console.log(`   Language: ${language}`);
    console.log(`   Intent: ${intent}`);
    console.log('---');
  });
};

// NEW: Test parameter extraction only
export const testParameterExtraction = () => {
  const testCases = [
    "physics questions 2020",
    "၂၀၂၁ သင်္ချာမေးခွန်း",
    "grade 10 chemistry problems",
    "level 12 biology exam",
    "ဓာတုဗေဒ တန်း ၁၁ ဥပမာ",
    "english for grade 9"
  ];
  
  console.log("🧪 Testing Parameter Extraction Only\n");
  
  testCases.forEach((test, index) => {
    const language = detectLanguage(test);
    const parameters = extractParameters(test, language);
    console.log(`Test ${index + 1}: "${test}"`);
    console.log(`   Language: ${language}`);
    console.log(`   Parameters: ${JSON.stringify(parameters)}`);
    console.log('---');
  });
};