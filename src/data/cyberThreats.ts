// cyberThreats.ts

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ThreatScenario {
  id: string;
  title: string;
  category: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  icon: string;
  color: string;
  scenario: string;
  attackVector: string;
  indicators: string[];
  impact: string[];
  response: string[];
  prevention: string[];
  realWorldExample: string;
  mcqs?: MCQ[];
}

// ----- Helpers -----
const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const shuffle = <T>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// ----- MCQ Generator (always returns 5 questions) -----
function generateMCQsForThreat(threat: Omit<ThreatScenario, 'mcqs'>): MCQ[] {
  const { id, indicators, response, prevention, realWorldExample, attackVector } = threat;
  const mcqs: MCQ[] = [];

  // 1. Indicator
  if (indicators.length) {
    const correct = pickRandom(indicators);
    let pool = indicators.filter(i => i !== correct);
    while (pool.length < 3) pool.push('Network latency is normal', 'CPU usage is low', 'No suspicious processes found');
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-mcq-1`,
      question: 'Which of the following is a common indicator of this attack?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `"${correct}" is a typical sign.`
    });
  }

  // 2. Response
  if (response.length) {
    const correct = pickRandom(response);
    let pool = response.filter(r => r !== correct);
    while (pool.length < 3) pool.push('Ignore it', 'Pay the attackers', 'Share on social media');
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-mcq-2`,
      question: 'What is the recommended first response?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `Correct: "${correct}"`
    });
  }

  // 3. Prevention
  if (prevention.length) {
    const correct = pickRandom(prevention);
    let pool = prevention.filter(p => p !== correct);
    while (pool.length < 3) pool.push('Disable patches', 'Reuse passwords', 'Share keys');
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-mcq-3`,
      question: 'Which is an effective prevention measure?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `"${correct}" is a proven prevention.`
    });
  }

  // 4. Real-world example
  if (realWorldExample) {
    const q = pickRandom([
      'What real‑world incident is mentioned?',
      'Which major attack is referenced?',
      'What known case illustrates this threat?'
    ]);
    const correct = realWorldExample.length > 60 ? realWorldExample.slice(0, 60) + '…' : realWorldExample;
    const pool = ['SolarWinds 2020', 'Equifax 2017', 'DNC hack 2016', 'Colonial Pipeline 2021'].filter(d => d !== realWorldExample);
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-mcq-4`,
      question: q,
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `References: ${realWorldExample}`
    });
  }

  // 5. Attack vector
  if (attackVector) {
    const correct = attackVector;
    const pool = ['Social engineering', 'SQL injection', 'Physical theft', 'Insider threat', 'DNS poisoning'].filter(d => d !== correct);
    const opts = shuffle([correct, ...pool.slice(0, 3)]);
    mcqs.push({
      id: `${id}-mcq-5`,
      question: 'What is the primary attack vector?',
      options: opts,
      correctAnswer: opts.indexOf(correct),
      explanation: `Vector: ${correct}`
    });
  }

  // Fallback: ensure exactly 5 questions
  while (mcqs.length < 5) {
    mcqs.push({
      id: `${id}-fallback-${mcqs.length}`,
      question: `What is the main attack vector in a ${threat.title}?`,
      options: [threat.attackVector || 'Unknown', 'Phishing', 'Malware', 'DDoS'],
      correctAnswer: 0,
      explanation: `The main vector is ${threat.attackVector || 'Unknown'}.`
    });
  }

  return mcqs.slice(0, 5);
}

// ----- Raw data (without mcqs) -----
export const cyberThreatsRaw: Omit<ThreatScenario, 'mcqs'>[] = [
  {
    id: 'phishing',
    title: 'Phishing',
    category: 'Social Engineering',
    severity: 'High',
    icon: '🎣',
    color: 'from-orange-500 to-red-600',
    scenario: 'An attacker sends a convincing message that tries to make you reveal credentials or open a malicious link.',
    attackVector: 'Social engineering',
    indicators: ['Urgent requests for login details', 'Unexpected links or attachments', 'Sender address does not match the claimed organization'],
    impact: ['Stolen credentials', 'Malware infection', 'Unauthorized account access'],
    response: ['Do not click the link', 'Report the message', 'Change credentials if information was submitted'],
    prevention: ['Verify the sender independently', 'Use multi-factor authentication', 'Keep users trained on suspicious messages'],
    realWorldExample: 'Credential theft campaigns targeting cloud email accounts',
  },
  {
    id: 'ransomware',
    title: 'Ransomware',
    category: 'Malware',
    severity: 'Critical',
    icon: '🔒',
    color: 'from-red-600 to-purple-700',
    scenario: 'Malicious software encrypts files and demands payment in exchange for a possible recovery key.',
    attackVector: 'Malicious attachment or exploited vulnerability',
    indicators: ['Files suddenly become inaccessible', 'A ransom note appears', 'Unusual file extensions spread across folders'],
    impact: ['Data loss', 'Operational downtime', 'Financial damage'],
    response: ['Disconnect affected systems', 'Notify the security team', 'Restore from verified backups'],
    prevention: ['Maintain offline backups', 'Patch exposed systems', 'Use endpoint protection'],
    realWorldExample: 'The Colonial Pipeline ransomware incident in 2021',
  },
  {
    id: 'ddos',
    title: 'DDoS Attack',
    category: 'Availability',
    severity: 'High',
    icon: '🌊',
    color: 'from-blue-500 to-indigo-700',
    scenario: 'A large volume of traffic overwhelms a service so legitimate users cannot access it.',
    attackVector: 'Compromised device botnet',
    indicators: ['Sudden traffic spikes', 'Service timeouts', 'Many requests from distributed sources'],
    impact: ['Service outage', 'Lost revenue', 'Reputation damage'],
    response: ['Contact the hosting provider', 'Enable traffic filtering', 'Preserve traffic logs'],
    prevention: ['Use rate limiting', 'Deploy DDoS protection', 'Monitor traffic baselines'],
    realWorldExample: 'Large botnets have disrupted public websites and online services worldwide',
  },
  {
    id: 'sql-injection',
    title: 'SQL Injection',
    category: 'Application Security',
    severity: 'Critical',
    icon: '💉',
    color: 'from-violet-500 to-fuchsia-700',
    scenario: 'Untrusted input is interpreted as part of a database query, allowing an attacker to read or alter data.',
    attackVector: 'Unsanitized web application input',
    indicators: ['Unexpected database errors', 'Suspicious query patterns', 'Unauthorized records in application responses'],
    impact: ['Data exposure', 'Data modification', 'Account compromise'],
    response: ['Block the attack source', 'Review database logs', 'Rotate exposed credentials'],
    prevention: ['Use parameterized queries', 'Validate input', 'Limit database account permissions'],
    realWorldExample: 'Web application attacks have repeatedly exposed customer databases through injectable input fields',
  },
  {
    id: 'man-in-the-middle',
    title: 'Man-in-the-Middle',
    category: 'Network Attack',
    severity: 'High',
    icon: '🕵️',
    color: 'from-cyan-500 to-blue-700',
    scenario: 'An attacker secretly intercepts communication between two parties and may alter the traffic.',
    attackVector: 'Rogue wireless access point or weak encryption',
    indicators: ['Unexpected certificate warnings', 'Unknown Wi-Fi networks', 'Unusual redirects during secure sessions'],
    impact: ['Session hijacking', 'Credential theft', 'Modified transactions'],
    response: ['Stop using the suspicious network', 'End active sessions', 'Report the network to its administrator'],
    prevention: ['Verify HTTPS certificates', 'Use trusted networks or a VPN', 'Enable multi-factor authentication'],
    realWorldExample: 'Public Wi-Fi interception attacks have captured credentials from users on unsecured networks',
  },
];

// ----- Final exported array with MCQs -----
export const cyberThreats: ThreatScenario[] = cyberThreatsRaw.map(threat => ({
  ...threat,
  mcqs: generateMCQsForThreat(threat)
}));