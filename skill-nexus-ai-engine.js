/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKILL NEXUS AI ENGINE
 * Advanced Career Intelligence & Path Analysis System
 * ═══════════════════════════════════════════════════════════════════════════
 */

const SkillNexusAI = {
  // Data Maps
  careerDatabase: {
    'AI & Machine Learning': {
      keywords: ['ai', 'ml', 'machine learning', 'neural', 'data', 'pattern', 'learning', 'intelligent'],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Statistics', 'Linear Algebra', 'SQL', 'Docker'],
      salary: { junior: '$55K–$85K', mid: '$85K–$130K', senior: '$130K–$200K' },
      demand: 94,
      growth_rate: 35,
      automation_risk: 15,
      market_outlook: 'exponential growth through 2035'
    },
    'Cybersecurity': {
      keywords: ['security', 'cyber', 'hacking', 'protection', 'attack', 'defense', 'threat', 'vulnerability'],
      skills: ['Networking', 'Linux', 'Python', 'Wireshark', 'Nmap', 'SIEM', 'Incident Response'],
      salary: { junior: '$50K–$75K', mid: '$75K–$115K', senior: '$115K–$170K' },
      demand: 91,
      growth_rate: 33,
      automation_risk: 12,
      market_outlook: 'steady critical growth'
    },
    'Full Stack Development': {
      keywords: ['fullstack', 'web', 'frontend', 'backend', 'development', 'javascript', 'react', 'nodejs'],
      skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'SQL', 'Git', 'REST APIs'],
      salary: { junior: '$45K–$70K', mid: '$70K–$110K', senior: '$110K–$160K' },
      demand: 88,
      growth_rate: 25,
      automation_risk: 28,
      market_outlook: 'stable high demand'
    },
    'Data Science': {
      keywords: ['data', 'science', 'analytics', 'analysis', 'statistics', 'visualization', 'insight'],
      skills: ['Python', 'R', 'SQL', 'Statistics', 'Machine Learning', 'Tableau', 'Spark'],
      salary: { junior: '$60K–$90K', mid: '$90K–$130K', senior: '$130K–$190K' },
      demand: 89,
      growth_rate: 28,
      automation_risk: 18,
      market_outlook: 'strong growth demand'
    },
    'Trading & Finance': {
      keywords: ['trading', 'finance', 'market', 'quant', 'algorithmic', 'finance', 'stock', 'crypto'],
      skills: ['Python', 'Pandas', 'Statistics', 'Financial APIs', 'Backtesting', 'Risk Management', 'SQL'],
      salary: { junior: '$50K–$80K', mid: '$80K–$130K', senior: '$130K–$250K' },
      demand: 82,
      growth_rate: 20,
      automation_risk: 22,
      market_outlook: 'volatile but lucrative'
    },
    'UI/UX Design': {
      keywords: ['design', 'ui', 'ux', 'user', 'interface', 'experience', 'creative', 'aesthetic'],
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'CSS', 'Design Systems', 'Accessibility'],
      salary: { junior: '$45K–$65K', mid: '$65K–$100K', senior: '$100K–$150K' },
      demand: 85,
      growth_rate: 22,
      automation_risk: 35,
      market_outlook: 'growing with AI assistance'
    }
  },

  personalityProfiles: {
    'Logical-Analytical': {
      careers: ['AI & Machine Learning', 'Data Science', 'Cybersecurity'],
      traits: 'systematic, detail-oriented, pattern-focused',
      strength: 95
    },
    'Creative-Innovative': {
      careers: ['UI/UX Design', 'Full Stack Development', 'AI & Machine Learning'],
      traits: 'imaginative, solution-driven, forward-thinking',
      strength: 85
    },
    'Practical-Builder': {
      careers: ['Full Stack Development', 'Cybersecurity', 'Trading & Finance'],
      traits: 'hands-on, result-focused, pragmatic',
      strength: 88
    },
    'Strategic-Analytical': {
      careers: ['Trading & Finance', 'Data Science', 'AI & Machine Learning'],
      traits: 'risk-aware, pattern-seeking, goal-oriented',
      strength: 90
    }
  },

  marketIntelligence: {
    'AI & Machine Learning': {
      current_demand: 94,
      year_5_forecast: 98,
      year_10_forecast: 99,
      classification: '🔥 Critical Growth',
      automation_risk: 15,
      future_simulation: {
        success: {
          '1-2 Years': 'Build portfolio on Kaggle, land junior role at startup ($60-75K)',
          '3-5 Years': 'Senior ML Engineer at FAANG, leading model research ($140K-180K)',
          '7-10 Years': 'ML Director/Principal, leading AI strategy ($200K-300K)',
          '10+ Years': 'Founder of AI startup or research at top lab'
        },
        failure: {
          'Static Skills': 'Stuck with outdated models, outcompeted by new graduates',
          'No Portfolio': 'Can\'t prove skills, rejected by top companies',
          'Theory Only': 'Can\'t implement, relegated to academia',
          'Bad Network': 'Missed opportunities, slow career growth'
        }
      }
    },
    'Cybersecurity': {
      current_demand: 91,
      year_5_forecast: 95,
      year_10_forecast: 96,
      classification: '🛡️ Stable Critical',
      automation_risk: 12,
      future_simulation: {
        success: {
          '1-2 Years': 'SOC Analyst at enterprise, learn on job ($55-70K)',
          '3-5 Years': 'Senior Security Engineer, CEH/OSCP certified ($110K-140K)',
          '7-10 Years': 'Security Manager/CISO-track role ($160K-220K)',
          '10+ Years': 'CISO, VP Security, or consultancy founder'
        },
        failure: {
          'No Certs': 'Stuck in entry-level, salary caps at $80K',
          'No Hacking': 'Only defensive, missing lucrative pen-test roles',
          'Burnout': 'On-call incidents destroy work-life balance',
          'Skills Gap': 'AI-driven attacks outpace knowledge'
        }
      }
    },
    'Full Stack Development': {
      current_demand: 88,
      year_5_forecast: 86,
      year_10_forecast: 82,
      classification: '💻 Stable Standard',
      automation_risk: 28,
      future_simulation: {
        success: {
          '1-2 Years': 'Junior dev at startup, $60-75K, shipping features',
          '3-5 Years': 'Lead frontend/backend engineer, $110K-130K, mentoring',
          '7-10 Years': 'Tech lead/architect, $150K-180K, designing systems',
          '10+ Years': 'CTO, freelance 6-7 figures, or founded company'
        },
        failure: {
          'Tutorial Hell': 'Can\'t build without guides, never hired',
          'No Projects': 'Resume empty, outcompeted by portfolio builders',
          'Framework Hopping': 'Shallow skills in 5 frameworks, deep in none',
          'AI Replacement': 'Copilot/Claude automate junior work'
        }
      }
    },
    'Data Science': {
      current_demand: 89,
      year_5_forecast: 91,
      year_10_forecast: 93,
      classification: '📊 Strong Growth',
      automation_risk: 18,
      future_simulation: {
        success: {
          '1-2 Years': 'Data Analyst role, visualizing insights ($70-85K)',
          '3-5 Years': 'Senior Data Scientist, ML models in production ($120K-150K)',
          '7-10 Years': 'Lead data/analytics, driving business decisions ($170K-210K)',
          '10+ Years': 'VP Analytics, CDO, or founding data company'
        },
        failure: {
          'SQL Weak': 'Can\'t extract data, dependent on engineers',
          'No Stats': 'Results look good but meaningless',
          'Presentation Fail': 'Insights don\'t influence decisions',
          'No Domain': 'Generic data skills, replaced by domain experts'
        }
      }
    },
    'Trading & Finance': {
      current_demand: 82,
      year_5_forecast: 84,
      year_10_forecast: 85,
      classification: '📈 Volatile Growth',
      automation_risk: 22,
      future_simulation: {
        success: {
          '1-2 Years': 'Junior quant at prop firm, trading own account ($70-100K)',
          '3-5 Years': 'Senior quant, profitable strategies ($200K-400K base+bonus)',
          '7-10 Years': 'Head of quant, 7-figure compensation',
          '10+ Years': 'Hedge fund founder, multi-million returns'
        },
        failure: {
          'Emotion Trading': 'FOMO leads to losses, blown account',
          'No Edge': 'Strategy doesn\'t beat market consistently',
          'Risk Bad': 'One bad trade wipes years of gains',
          'Skill Outdated': 'AI bots beat human traders'
        }
      }
    },
    'UI/UX Design': {
      current_demand: 85,
      year_5_forecast: 84,
      year_10_forecast: 80,
      classification: '🎨 Moderate Growth',
      automation_risk: 35,
      future_simulation: {
        success: {
          '1-2 Years': 'Junior designer, designing screens ($50-65K)',
          '3-5 Years': 'Senior designer, design system lead ($95K-125K)',
          '7-10 Years': 'Design Manager/Director, strategy ($140K-180K)',
          '10+ Years': 'Head of Design, startup founder, agency owner'
        },
        failure: {
          'No Code': 'Can\'t prototype, dependent on devs',
          'No Research': 'Pretty but unusable designs',
          'AI Threat': 'AI can generate designs from text soon',
          'No Portfolio': 'No real projects to show'
        }
      }
    }
  },

  /**
   * Main Analysis Function
   */
  runCompleteAnalysis(userData) {
    console.log('🚀 Starting Skill Nexus AI Analysis...');
    console.log('User Data:', userData);

    // Phase 1: User Personality Analysis
    const personalityAnalysis = this.analyzePersonality(userData);

    // Phase 2: Career Matching
    const careerMatches = this.matchCareers(userData, personalityAnalysis);

    // Phase 3: Market Intelligence
    const marketIntel = {};
    careerMatches.top3.forEach(c => {
      marketIntel[c.name] = this.marketIntelligence[c.name] || {};
    });

    return {
      user_analysis: personalityAnalysis,
      career_matches: careerMatches,
      market_intelligence: marketIntel
    };
  },

  /**
   * Phase 1: Analyze User Personality
   */
  analyzePersonality(userData) {
    const interests = userData.interests || [];
    const personality = userData.personality || [];
    const skills = userData.skills || [];

    // Determine thinking style
    let thinkingStyle = 'Balanced';
    if (personality.includes('logical') || personality.includes('analytical')) {
      thinkingStyle = '🧠 Analytical Thinker';
    } else if (personality.includes('imaginative') || personality.includes('creative')) {
      thinkingStyle = '🎨 Creative Thinker';
    } else if (personality.includes('pragmatic') || personality.includes('practical')) {
      thinkingStyle = '⚙️ Practical Thinker';
    }

    // Calculate strength score
    const strengthScore = Math.min(99, 50 + interests.length * 8 + personality.length * 5 + skills.length * 3);

    // Determine learning style from user input
    const learningStyleMap = {
      'fast': '⚡ Fast Learner - You absorb concepts quickly',
      'moderate': '📚 Steady Learner - Consistent, deliberate progress',
      'slow': '🎯 Deep Learner - You master concepts thoroughly'
    };
    const learningStyle = learningStyleMap[userData.learning_speed] || '📚 Steady Learner';

    // Hidden potential
    const hiddenPotentials = [
      'You have the ability to see patterns others miss',
      'Your unique combination of interests creates unconventional solutions',
      'You could bridge gaps between technical and creative fields',
      'Your learning style suggests you excel at self-directed projects',
      'You have entrepreneurial potential in emerging tech fields'
    ];

    return {
      thinking_style: thinkingStyle,
      strength_score: strengthScore,
      learning_style: learningStyle,
      hidden_potential: hiddenPotentials.slice(0, 3)
    };
  },

  /**
   * Phase 2: Match Careers
   */
  matchCareers(userData, personalityAnalysis) {
    const interests = userData.interests || [];
    const personality = userData.personality || [];
    const skills = userData.skills || [];
    
    const careerScores = {};

    // Score each career
    for (const [careerName, careerData] of Object.entries(this.careerDatabase)) {
      let score = 0;

      // Interest matching
      interests.forEach(interest => {
        careerData.keywords.forEach(keyword => {
          if (keyword.includes(interest) || interest.includes(keyword)) {
            score += 15;
          }
        });
      });

      // Skill matching
      skills.forEach(skill => {
        if (careerData.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))) {
          score += 12;
        }
      });

      // Personality alignment
      const baseMatch = 60;
      if (personality.includes('logical') && ['AI & Machine Learning', 'Data Science', 'Cybersecurity'].includes(careerName)) score += 20;
      if (personality.includes('creative') && ['UI/UX Design', 'Full Stack Development'].includes(careerName)) score += 20;
      if (personality.includes('curious') && ['AI & Machine Learning', 'Cybersecurity'].includes(careerName)) score += 15;
      if (personality.includes('analytical') && ['Data Science', 'Trading & Finance'].includes(careerName)) score += 18;

      careerScores[careerName] = Math.min(99, baseMatch + score);
    }

    // Sort and get top 3 and worst 2
    const sorted = Object.entries(careerScores)
      .sort((a, b) => b[1] - a[1])
      .map(([name, score]) => ({
        name,
        fit_score: score,
        why_suitable: this.generateSuitabilityReason(name, userData, score),
        why_fail: this.generateFailureReason(name, userData)
      }));

    return {
      top3: sorted.slice(0, 3),
      worst2: sorted.slice(-2).reverse()
    };
  },

  /**
   * Generate why a career is suitable
   */
  generateSuitabilityReason(careerName, userData, score) {
    const reasons = {
      'AI & Machine Learning': 'Your problem-solving mindset and data interest align perfectly with building intelligent systems.',
      'Cybersecurity': 'Your attention to detail and protective instinct make you ideal for defending against threats.',
      'Full Stack Development': 'Your creative problem-solving and building interest match web development perfectly.',
      'Data Science': 'Your analytical mindset and data interest position you well for deriving business insights.',
      'Trading & Finance': 'Your strategic thinking and risk assessment skills are ideal for algorithmic trading.',
      'UI/UX Design': 'Your creative interests and user-focused thinking make UX design natural for you.'
    };
    return reasons[careerName] || 'Your skills align well with this career path.';
  },

  /**
   * Generate potential failure reasons
   */
  generateFailureReason(careerName, userData) {
    const reasons = {
      'AI & Machine Learning': 'The rapid pace of innovation and continuous learning requirement may overwhelm without discipline.',
      'Cybersecurity': 'High-stress on-call incidents and burnout potential if work-life balance isn\'t maintained.',
      'Full Stack Development': 'Rapidly changing frameworks could lead to "tutorial hell" without real project experience.',
      'Data Science': 'Without strong SQL and statistics fundamentals, insights may be inaccurate or irrelevant.',
      'Trading & Finance': 'Emotional decision-making and poor risk management can lead to significant financial losses.',
      'UI/UX Design': 'Over-reliance on aesthetics without understanding user research and usability principles.'
    };
    return reasons[careerName] || 'Success requires ongoing skill development and market awareness.';
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SkillNexusAI;
}

console.log('✅ Skill Nexus AI Engine loaded successfully!');
