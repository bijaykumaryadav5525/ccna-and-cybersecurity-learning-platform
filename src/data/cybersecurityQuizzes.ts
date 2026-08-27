import { QuizModule } from './ccnaQuizzes';

export const cybersecurityQuizModules: QuizModule[] = [
  // Topic 1: Cybersecurity Fundamentals
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    description: "CIA Triad, assets, threats, vulnerabilities, risks, attacks, security controls",
    icon: "🛡️",
    color: "from-green-500 to-emerald-700",
    questions: [
      {
        id: 1,
        question: "What does the 'C' in the CIA Triad stand for?",
        options: ["Compliance", "Confidentiality", "Control", "Continuity"],
        correct: 1,
        explanation: "The CIA Triad consists of Confidentiality (ensuring data is accessible only to authorized users), Integrity (ensuring data is accurate and unmodified), and Availability (ensuring systems and data are accessible when needed)."
      },
      {
        id: 2,
        question: "What is a vulnerability in cybersecurity?",
        options: ["A malicious attacker", "A weakness in a system that can be exploited", "A security control", "A type of firewall"],
        correct: 1,
        explanation: "A vulnerability is a weakness or flaw in a system, application, or process that could be exploited by a threat to cause harm."
      },
      {
        id: 3,
        question: "Which of the following is an example of a security control?",
        options: ["A customer complaint", "Firewall", "Company logo", "Employee ID card"],
        correct: 1,
        explanation: "A firewall is a security control that monitors and controls incoming and outgoing network traffic."
      },
      {
        id: 4,
        question: "What is the difference between a threat and a vulnerability?",
        options: ["They mean the same thing", "A threat is a potential danger; a vulnerability is a weakness that can be exploited", "A vulnerability is a type of threat", "Threats are always human; vulnerabilities are always technical"],
        correct: 1,
        explanation: "A threat is a potential danger or harmful event. A vulnerability is a weakness that can be exploited by a threat."
      },
      {
        id: 5,
        question: "What is the principle of defense in depth?",
        options: ["Having a single strong firewall", "Using multiple layers of security controls throughout an IT system", "Installing antivirus on all computers", "Training employees once per year"],
        correct: 1,
        explanation: "Defense in depth uses multiple layers of security controls so that if one layer fails, others continue to protect the system."
      }
    ]
  },
  // Topic 2: Cyber Threats & Attacks
  {
    id: "cyber-threats-attacks",
    title: "Cyber Threats & Attacks",
    description: "Malware, virus, worm, Trojan, ransomware, spyware, botnet, DoS/DDoS",
    icon: "⚠️",
    color: "from-red-500 to-orange-600",
    questions: [
      {
        id: 1,
        question: "What is a computer virus?",
        options: ["Any malicious software", "Malware that attaches to a legitimate program and requires user action to spread", "Self-replicating malware that spreads without user intervention", "Software that encrypts files for ransom"],
        correct: 1,
        explanation: "A virus attaches to legitimate files and requires user interaction to activate and spread."
      },
      {
        id: 2,
        question: "What is the difference between a virus and a worm?",
        options: ["A virus needs a host file to spread; a worm self-replicates and spreads independently", "Worms are less dangerous", "A virus spreads through networks; a worm needs user action", "They are the same thing"],
        correct: 0,
        explanation: "A virus requires a host program and user interaction. A worm self-replicates and spreads automatically across networks."
      },
      {
        id: 3,
        question: "What is ransomware?",
        options: ["Software that runs slowly", "Malware that encrypts files and demands payment for decryption", "A type of adware", "Software that steals passwords"],
        correct: 1,
        explanation: "Ransomware encrypts files and demands payment (usually cryptocurrency) for the decryption key."
      },
      {
        id: 4,
        question: "What is a Trojan horse?",
        options: ["A physical attack", "Malware disguised as legitimate software", "A network scanner", "An outdated security protocol"],
        correct: 1,
        explanation: "A Trojan disguises itself as legitimate software to trick users into installing it."
      },
      {
        id: 5,
        question: "What is a botnet?",
        options: ["A network of security robots", "A network of compromised computers controlled by an attacker", "A legitimate automated network", "A type of load balancer"],
        correct: 1,
        explanation: "A botnet is a network of compromised devices controlled by an attacker without owners' knowledge."
      },
      {
        id: 6,
        question: "What is a Denial of Service (DoS) attack?",
        options: ["Stealing data from a server", "Making a service unavailable by overwhelming it with traffic", "Gaining unauthorized access", "Modifying data on a server"],
        correct: 1,
        explanation: "A DoS attack overwhelms a system to make it unavailable to legitimate users."
      },
      {
        id: 7,
        question: "What is the difference between DoS and DDoS?",
        options: ["DoS is smaller; DDoS uses multiple systems", "They are identical", "DoS is more sophisticated", "DDoS is illegal; DoS is legal"],
        correct: 0,
        explanation: "DoS originates from a single source. DDoS uses multiple compromised systems to launch the attack."
      },
      {
        id: 8,
        question: "What is a rootkit?",
        options: ["A legitimate system administration tool", "Malware designed to gain root access and hide its presence", "A network routing tool", "An encryption protocol"],
        correct: 1,
        explanation: "A rootkit gains administrator-level access and hides its presence, making it extremely difficult to detect."
      },
      {
        id: 9,
        question: "What is a polymorphic virus?",
        options: ["A virus that attacks different operating systems", "A virus that changes its code to avoid detection", "A virus that mutates into different types", "A virus that attacks multiple files"],
        correct: 1,
        explanation: "A polymorphic virus changes its code structure to avoid signature-based detection."
      },
      {
        id: 10,
        question: "What is a logic bomb?",
        options: ["A type of malware that triggers on a specific event", "A device that causes physical damage", "A network security device", "A type of firewall"],
        correct: 0,
        explanation: "A logic bomb executes malicious code when specific conditions are met."
      }
    ]
  },
  // Topic 3: Social Engineering
  {
    id: "social-engineering",
    title: "Social Engineering",
    description: "Phishing, spear phishing, whaling, vishing, smishing, baiting, pretexting",
    icon: "🎣",
    color: "from-purple-500 to-pink-600",
    questions: [
      {
        id: 1,
        question: "What is social engineering?",
        options: ["Building social networks securely", "Manipulating people to reveal confidential information", "Engineering security software", "Social media monitoring"],
        correct: 1,
        explanation: "Social engineering is the psychological manipulation of people to perform actions or divulge confidential information."
      },
      {
        id: 2,
        question: "What is phishing?",
        options: ["A type of network scan", "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity", "A legitimate fishing website", "A database attack method"],
        correct: 1,
        explanation: "Phishing impersonates trusted entities to trick victims into revealing sensitive information."
      },
      {
        id: 3,
        question: "What is spear phishing?",
        options: ["A type of fishing activity", "Targeted phishing attacks directed at specific individuals", "Mass phishing campaigns", "Phishing via text message"],
        correct: 1,
        explanation: "Spear phishing targets specific individuals with personalized messages."
      },
      {
        id: 4,
        question: "What is whaling?",
        options: ["Fishing for whales", "Phishing attacks targeting high-profile executives", "Mass phishing campaigns", "A type of vishing"],
        correct: 1,
        explanation: "Whaling targets high-profile executives like CEOs and CFOs."
      },
      {
        id: 5,
        question: "What is vishing?",
        options: ["Voice phishing using phone calls", "Video phishing", "Virtual phishing", "Text message phishing"],
        correct: 0,
        explanation: "Vishing is voice phishing conducted over phone calls."
      },
      {
        id: 6,
        question: "What is smishing?",
        options: ["Smile phishing", "SMS phishing via text messages", "Smooth phishing", "Security message phishing"],
        correct: 1,
        explanation: "Smishing uses text messages to trick victims."
      },
      {
        id: 7,
        question: "What is baiting?",
        options: ["Baiting a hook", "Offering something enticing to get victims to perform an action", "Bait and switch tactic", "A type of phishing"],
        correct: 1,
        explanation: "Baiting offers something attractive to tempt victims into clicking a link or downloading malware."
      },
      {
        id: 8,
        question: "What is pretexting?",
        options: ["A type of texting", "Creating a false scenario to obtain information", "A type of phishing", "A security control"],
        correct: 1,
        explanation: "Pretexting involves creating a false identity or scenario to manipulate victims."
      },
      {
        id: 9,
        question: "What is a quid pro quo attack?",
        options: ["Something for something - offering something in exchange for information", "A type of malware", "A type of hacking technique", "A physical security breach"],
        correct: 0,
        explanation: "Quid pro quo attacks offer a service or benefit in exchange for information or access."
      },
      {
        id: 10,
        question: "What is tailgating?",
        options: ["Following a car too closely", "An unauthorized person follows an authorized individual into a restricted area", "A type of network attack", "A type of malware"],
        correct: 1,
        explanation: "Tailgating is when an unauthorized person follows an authorized individual through a secured entrance."
      }
    ]
  },
  // Topic 4: Authentication & Authorization
  {
    id: "authentication-authorization",
    title: "Authentication & Authorization",
    description: "Authentication vs authorization, MFA, passwords, biometrics, RBAC, least privilege",
    icon: "🔑",
    color: "from-blue-500 to-cyan-700",
    questions: [
      {
        id: 1,
        question: "What is the difference between authentication and authorization?",
        options: ["They mean the same thing", "Authentication verifies identity; authorization determines permissions", "Authorization happens before authentication", "Authentication is only for systems, not users"],
        correct: 1,
        explanation: "Authentication (AuthN) verifies who you are. Authorization (AuthZ) determines what you're allowed to do."
      },
      {
        id: 2,
        question: "What is Multi-Factor Authentication (MFA)?",
        options: ["Using multiple passwords", "Using multiple security questions", "Using two or more authentication factors from different categories", "Logging in from multiple devices"],
        correct: 2,
        explanation: "MFA requires two or more authentication factors from different categories."
      },
      {
        id: 3,
        question: "What are the three factors of authentication?",
        options: ["Username, password, email", "Knowledge, possession, inherence", "Login, password, code", "Digital, physical, biometric"],
        correct: 1,
        explanation: "The three factors are: Knowledge (something you know), Possession (something you have), and Inherence (something you are)."
      },
      {
        id: 4,
        question: "What is the principle of least privilege?",
        options: ["Giving users maximum access", "Giving users only the minimum access required for their job", "Restricting all access to administrators", "Rotating user privileges daily"],
        correct: 1,
        explanation: "Least privilege means giving users only the minimum permissions needed to perform their tasks."
      },
      {
        id: 5,
        question: "What is Role-Based Access Control (RBAC)?",
        options: ["Controlling access based on user names", "Controlling access based on roles and job functions", "Controlling access based on time of day", "Controlling access based on device type"],
        correct: 1,
        explanation: "RBAC assigns permissions based on roles and job functions rather than individual users."
      },
      {
        id: 6,
        question: "What is a biometric authentication factor?",
        options: ["A password manager", "Physical characteristics used for identification", "A type of token", "A knowledge-based factor"],
        correct: 1,
        explanation: "Biometrics use unique physical characteristics like fingerprints, face, or iris for authentication."
      },
      {
        id: 7,
        question: "What is a brute force attack?",
        options: ["Using a key to open a lock", "Trying all possible password combinations", "A social engineering attack", "A malware attack"],
        correct: 1,
        explanation: "A brute force attack tries all possible password combinations until the correct one is found."
      },
      {
        id: 8,
        question: "What is Single Sign-On (SSO)?",
        options: ["One password for all systems", "Allowing users to authenticate once and access multiple applications", "A single username", "A type of MFA"],
        correct: 1,
        explanation: "SSO allows users to authenticate once and access multiple applications without re-entering credentials."
      },
      {
        id: 9,
        question: "What is a dictionary attack?",
        options: ["Attacking dictionary software", "Using a list of common words and passwords to gain access", "A type of social engineering", "A physical attack"],
        correct: 1,
        explanation: "A dictionary attack uses a list of common words and likely passwords to gain access."
      },
      {
        id: 10,
        question: "What is the principle of separation of duties?",
        options: ["Dividing work among employees", "Ensuring one person cannot perform all steps of a critical process", "Separating work and personal data", "Dividing network segments"],
        correct: 1,
        explanation: "Separation of duties ensures no single individual has complete control over a critical process."
      }
    ]
  },
  // Topic 5: Cryptography Basics
  {
    id: "cryptography-basics",
    title: "Cryptography Basics",
    description: "Encryption/decryption, plaintext/ciphertext, symmetric/asymmetric encryption, hashing",
    icon: "🔐",
    color: "from-violet-500 to-purple-700",
    questions: [
      {
        id: 1,
        question: "What is encryption?",
        options: ["Deleting sensitive data", "Converting plaintext to unreadable ciphertext", "Backing up data securely", "Compressing data"],
        correct: 1,
        explanation: "Encryption transforms readable plaintext into unreadable ciphertext using an algorithm and key."
      },
      {
        id: 2,
        question: "What is the difference between plaintext and ciphertext?",
        options: ["Plaintext is English; ciphertext is code", "Plaintext is readable; ciphertext is encrypted", "Plaintext is text; ciphertext is numbers", "They are the same"],
        correct: 1,
        explanation: "Plaintext is original readable data. Ciphertext is the encrypted version."
      },
      {
        id: 3,
        question: "What is symmetric encryption?",
        options: ["Encryption with different keys", "Encryption using the same key for both encryption and decryption", "Encryption without keys", "Encryption of symmetric data"],
        correct: 1,
        explanation: "Symmetric encryption uses the same key for both encryption and decryption."
      },
      {
        id: 4,
        question: "What is asymmetric encryption?",
        options: ["Encryption with unequal key sizes", "Encryption using a public key to encrypt and a private key to decrypt", "Encryption without keys", "One-way encryption"],
        correct: 1,
        explanation: "Asymmetric encryption uses a public-private key pair. Data encrypted with the public key can only be decrypted with the private key."
      },
      {
        id: 5,
        question: "What is a hash function?",
        options: ["Encrypting data", "Creating a fixed-size fingerprint of data for integrity verification", "Generating encryption keys", "Compressing files"],
        correct: 1,
        explanation: "A hash function creates a fixed-size digest from input data. It's one-way and used for integrity verification."
      },
      {
        id: 6,
        question: "What is the difference between encryption and hashing?",
        options: ["Encryption is one-way; hashing is two-way", "Encryption is two-way; hashing is one-way", "They are identical", "Encryption uses keys; hashing doesn't, but both are two-way"],
        correct: 1,
        explanation: "Encryption is two-way (can be decrypted). Hashing is one-way (can't be reversed)."
      },
      {
        id: 7,
        question: "What is a salt in password hashing?",
        options: ["A type of seasoning", "Random data added to passwords before hashing to prevent rainbow table attacks", "A type of encryption", "A password manager"],
        correct: 1,
        explanation: "A salt is random data added to a password before hashing to make rainbow table attacks ineffective."
      },
      {
        id: 8,
        question: "What is a rainbow table attack?",
        options: ["An attack with colorful graphics", "Using precomputed hash tables to crack password hashes", "A type of SQL injection", "An attack on colorful LED systems"],
        correct: 1,
        explanation: "A rainbow table uses precomputed hashes to quickly crack password hashes."
      },
      {
        id: 9,
        question: "What is AES?",
        options: ["Advanced Email Security", "Advanced Encryption Standard - the most widely used symmetric encryption", "Automated Encryption System", "An asymmetric encryption algorithm"],
        correct: 1,
        explanation: "AES is the most widely used symmetric encryption algorithm with key sizes of 128, 192, or 256 bits."
      },
      {
        id: 10,
        question: "What is RSA?",
        options: ["Rivest-Shamir-Adleman - a widely used asymmetric encryption algorithm", "A symmetric encryption algorithm", "A hashing algorithm", "A random number generator"],
        correct: 0,
        explanation: "RSA is a widely used asymmetric encryption algorithm named after its inventors."
      }
    ]
  },
  // Topic 6: Digital Certificates & PKI
  {
    id: "digital-certificates-pki",
    title: "Digital Certificates & PKI",
    description: "Digital certificates, CA, public/private keys, SSL/TLS, PKI",
    icon: "📜",
    color: "from-indigo-500 to-blue-700",
    questions: [
      {
        id: 1,
        question: "What is a digital certificate?",
        options: ["A digital diploma", "An electronic document that binds a public key to an identity", "A software license", "An encrypted password"],
        correct: 1,
        explanation: "A digital certificate binds a public key to an identity, issued by a Certificate Authority."
      },
      {
        id: 2,
        question: "What does PKI stand for?",
        options: ["Private Key Infrastructure", "Public Key Infrastructure", "Protocol Key Integration", "Personal Key Identification"],
        correct: 1,
        explanation: "PKI (Public Key Infrastructure) is the framework for managing digital certificates and keys."
      },
      {
        id: 3,
        question: "What is a Certificate Authority (CA)?",
        options: ["A software company", "A trusted entity that issues and manages digital certificates", "A security policy", "A type of firewall"],
        correct: 1,
        explanation: "A CA is a trusted entity that issues, revokes, and manages digital certificates."
      },
      {
        id: 4,
        question: "What is SSL/TLS used for?",
        options: ["Filtering network traffic", "Providing encrypted communication over networks", "Routing internet traffic", "Managing user accounts"],
        correct: 1,
        explanation: "SSL/TLS provides encrypted, authenticated communication over networks, including HTTPS."
      },
      {
        id: 5,
        question: "What is a Certificate Signing Request (CSR)?",
        options: ["A request to sign a document", "A message sent to a CA to request a digital certificate", "A type of email", "A security policy"],
        correct: 1,
        explanation: "A CSR is a message sent to a CA to request a digital certificate."
      },
      {
        id: 6,
        question: "What is the purpose of a certificate revocation list (CRL)?",
        options: ["List of approved certificates", "List of revoked certificates that should no longer be trusted", "A list of CA employees", "A list of certificate prices"],
        correct: 1,
        explanation: "A CRL lists certificates that have been revoked and should no longer be trusted."
      },
      {
        id: 7,
        question: "What is a self-signed certificate?",
        options: ["A certificate signed by the US government", "A certificate signed by its own private key instead of a CA", "A certificate signed by a friend", "A type of encryption"],
        correct: 1,
        explanation: "A self-signed certificate is signed by its own private key rather than a trusted CA."
      },
      {
        id: 8,
        question: "What is the role of a Registration Authority (RA)?",
        options: ["A government agency", "An entity that verifies certificate requests before sending to the CA", "A type of firewall", "A network protocol"],
        correct: 1,
        explanation: "An RA verifies certificate requests and authenticates entities before the CA issues certificates."
      },
      {
        id: 9,
        question: "What is the difference between SSL and TLS?",
        options: ["SSL is older and insecure; TLS is its successor", "They are exactly the same", "SSL is used for email; TLS is for websites", "TLS is a type of SSL"],
        correct: 0,
        explanation: "SSL (Secure Sockets Layer) is older and has known vulnerabilities. TLS (Transport Layer Security) is its secure successor."
      },
      {
        id: 10,
        question: "What is the purpose of HTTPS?",
        options: ["Website speed optimization", "Secure HTTP communication using TLS/SSL encryption", "Website backup", "Domain registration"],
        correct: 1,
        explanation: "HTTPS (HTTP Secure) uses TLS/SSL to encrypt HTTP traffic, ensuring confidentiality and integrity."
      }
    ]
  },
  // Topic 7: Network Security Fundamentals
  {
    id: "network-security-fundamentals",
    title: "Network Security Fundamentals",
    description: "Firewall, IDS, IPS, VPN, proxy, NAC, segmentation",
    icon: "🌐",
    color: "from-cyan-500 to-blue-700",
    questions: [
      {
        id: 1,
        question: "What is a firewall?",
        options: ["A network monitoring tool", "A security device that filters network traffic based on rules", "A type of router", "A web browser"],
        correct: 1,
        explanation: "A firewall monitors and controls network traffic based on predefined security rules."
      },
      {
        id: 2,
        question: "What is a VPN?",
        options: ["Virtual Private Network - creates a secure encrypted connection over the internet", "Virtual Public Network", "Very Private Network", "Visual Programming Network"],
        correct: 0,
        explanation: "A VPN creates a secure, encrypted tunnel for data transmission over the internet."
      },
      {
        id: 3,
        question: "What is network segmentation?",
        options: ["Dividing a network into smaller, isolated segments to improve security", "Combining all networks together", "Making networks faster", "Changing IP addresses"],
        correct: 0,
        explanation: "Network segmentation divides a network into smaller segments to contain security breaches and limit lateral movement."
      },
      {
        id: 4,
        question: "What is a proxy server?",
        options: ["A server that provides email services", "An intermediary server that forwards client requests", "A web hosting server", "A DNS server"],
        correct: 1,
        explanation: "A proxy server acts as an intermediary between clients and the internet, providing anonymity and caching."
      },
      {
        id: 5,
        question: "What is Network Access Control (NAC)?",
        options: ["Controlling access to network resources by enforcing policies", "A type of firewall", "A network monitoring tool", "A routing protocol"],
        correct: 0,
        explanation: "NAC enforces security policies on devices attempting to access a network, ensuring compliance."
      },
      {
        id: 6,
        question: "What is the purpose of a Demilitarized Zone (DMZ)?",
        options: ["A geographic neutral zone", "A network segment for public-facing services", "A firewall configuration", "A VPN tunnel"],
        correct: 1,
        explanation: "A DMZ is a perimeter network that hosts public-facing servers, separated from the internal network."
      },
      {
        id: 7,
        question: "What is the difference between a stateful and stateless firewall?",
        options: ["Stateful tracks connections; stateless treats each packet independently", "They are identical", "Stateful is older; stateless is newer", "Stateful is software; stateless is hardware"],
        correct: 0,
        explanation: "Stateful firewalls maintain connection state tables. Stateless firewalls evaluate each packet independently."
      },
      {
        id: 8,
        question: "What is the OSI model?",
        options: ["A model describing how networks communicate in 7 layers", "A type of firewall", "A network protocol", "A cable type"],
        correct: 0,
        explanation: "The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application."
      },
      {
        id: 9,
        question: "What is a next-generation firewall (NGFW)?",
        options: ["A newer version of a firewall", "A firewall with integrated IDS/IPS and application awareness", "A software firewall", "A physical firewall"],
        correct: 1,
        explanation: "NGFWs combine traditional firewall capabilities with IDS/IPS, application awareness, and deep packet inspection."
      },
      {
        id: 10,
        question: "What is the purpose of a security policy?",
        options: ["To make employees happy", "To define security requirements, rules, and responsibilities", "To increase costs", "To slow down operations"],
        correct: 1,
        explanation: "A security policy defines an organization's security requirements, rules, and procedures."
      }
    ]
  },
  // Topic 8: Firewalls
  {
    id: "firewalls",
    title: "Firewalls",
    description: "Stateful/stateless firewall, NGFW, rules, ACLs, DMZ",
    icon: "🔥",
    color: "from-orange-500 to-red-700",
    questions: [
      {
        id: 1,
        question: "What is an Access Control List (ACL)?",
        options: ["A list of employees", "A list of rules defining allowed or denied traffic", "A list of passwords", "A list of websites"],
        correct: 1,
        explanation: "ACLs are sets of rules that define which traffic is allowed or denied based on criteria like IP, port, and protocol."
      },
      {
        id: 2,
        question: "What is the difference between a stateful and stateless firewall?",
        options: ["Stateful tracks connection state; stateless evaluates each packet independently", "They are identical", "Stateful is less secure", "Stateless is more expensive"],
        correct: 0,
        explanation: "Stateful firewalls track connections and allow responses to permitted outbound traffic. Stateless firewalls evaluate each packet independently."
      },
      {
        id: 3,
        question: "What is a firewall rule?",
        options: ["A law about fire safety", "A configuration that defines allowed or denied traffic", "A software bug", "A hardware component"],
        correct: 1,
        explanation: "Firewall rules define which traffic is allowed or denied based on source/destination IP, port, protocol, and other criteria."
      },
      {
        id: 4,
        question: "What is the default-deny principle?",
        options: ["Denying all traffic by default and only allowing specific traffic", "Allowing all traffic by default", "Denying based on user names", "Allowing based on location"],
        correct: 0,
        explanation: "Default-deny blocks all traffic by default and explicitly allows only permitted traffic."
      },
      {
        id: 5,
        question: "What is a DMZ in firewall architecture?",
        options: ["A security zone for public-facing services", "A garbage zone", "A development area", "A backup location"],
        correct: 0,
        explanation: "A DMZ is a perimeter network that exposes public-facing services while protecting the internal network."
      },
      {
        id: 6,
        question: "What is deep packet inspection (DPI)?",
        options: ["Examining packet headers only", "Examining the entire packet payload, not just headers", "Looking at IP addresses only", "A performance optimization"],
        correct: 1,
        explanation: "DPI examines the full packet payload to detect application-level threats and enforce policies."
      },
      {
        id: 7,
        question: "What is an application-layer firewall?",
        options: ["A firewall that operates at the application layer (Layer 7)", "A firewall that operates at the network layer", "A software firewall", "A hardware firewall"],
        correct: 0,
        explanation: "Application-layer firewalls inspect traffic at the application layer and understand specific application protocols."
      },
      {
        id: 8,
        question: "What is a packet filtering firewall?",
        options: ["A firewall that filters packets based on headers", "A firewall that filters packets based on content", "A firewall that filters email", "A firewall that blocks all traffic"],
        correct: 0,
        explanation: "Packet filtering firewalls evaluate packets based on header information like IP addresses, ports, and protocols."
      },
      {
        id: 9,
        question: "What is a circuit-level gateway?",
        options: ["A firewall that operates at the session layer", "A hardware component", "A type of router", "An encryption device"],
        correct: 0,
        explanation: "Circuit-level gateways validate TCP/UDP sessions and enforce security at the session layer."
      },
      {
        id: 10,
        question: "What is a host-based firewall?",
        options: ["A firewall hosted on a server", "A firewall installed on individual devices", "A cloud firewall", "A network firewall"],
        correct: 1,
        explanation: "Host-based firewalls are installed on individual devices and protect that specific host."
      }
    ]
  },
  // Topic 9: IDS & IPS
  {
    id: "ids-ips",
    title: "IDS & IPS",
    description: "IDS vs IPS, signature-based, anomaly-based, detection/prevention",
    icon: "🛡️",
    color: "from-teal-500 to-green-700",
    questions: [
      {
        id: 1,
        question: "What is the difference between IDS and IPS?",
        options: ["IDS blocks threats; IPS only detects", "IDS detects and alerts; IPS detects and actively blocks", "IPS is software only; IDS is hardware only", "They are the same technology"],
        correct: 1,
        explanation: "IDS (Intrusion Detection System) alerts on threats. IPS (Intrusion Prevention System) can block threats in real-time."
      },
      {
        id: 2,
        question: "What is signature-based detection?",
        options: ["Detecting based on digital signatures", "Detecting known attack patterns using a database of signatures", "Detecting based on user behavior", "Detecting based on location"],
        correct: 1,
        explanation: "Signature-based detection identifies known attack patterns by comparing against a database of signatures."
      },
      {
        id: 3,
        question: "What is anomaly-based detection?",
        options: ["Detecting rare events", "Detecting deviations from normal baseline behavior", "Detecting signatures", "Detecting malware"],
        correct: 1,
        explanation: "Anomaly-based detection identifies threats by detecting behavior that deviates from normal patterns."
      },
      {
        id: 4,
        question: "What is a false positive in IDS/IPS?",
        options: ["A threat that was detected correctly", "An alert triggered by legitimate activity", "A missed attack", "A duplicate alert"],
        correct: 1,
        explanation: "A false positive occurs when a system generates an alert for legitimate activity that is not actually a threat."
      },
      {
        id: 5,
        question: "What is a false negative in IDS/IPS?",
        options: ["A false negative is missing a real threat", "A false negative is a correct detection", "A false negative is a duplicate", "A false negative is an alert"],
        correct: 0,
        explanation: "A false negative occurs when a system fails to detect an actual threat."
      },
      {
        id: 6,
        question: "What is the difference between inline and passive IDS/IPS deployment?",
        options: ["Inline processes traffic in real-time; passive monitors a copy of traffic", "Inline is slower; passive is faster", "Inline is only for software", "Passive is only for hardware"],
        correct: 0,
        explanation: "Inline IPS sits in the traffic path and can block threats. Passive IDS monitors a copy of traffic and alerts only."
      },
      {
        id: 7,
        question: "What is a rule-based IDS?",
        options: ["An IDS that uses rules to detect threats", "A government regulation", "A type of firewall", "A network protocol"],
        correct: 0,
        explanation: "Rule-based IDS uses predefined rules to identify suspicious activity based on specific conditions."
      },
      {
        id: 8,
        question: "What is a host-based IDS (HIDS)?",
        options: ["An IDS that monitors an entire network", "An IDS that monitors activity on a single host", "A cloud-based IDS", "A hardware IDS"],
        correct: 1,
        explanation: "HIDS monitors and analyzes activity on a single host or device."
      },
      {
        id: 9,
        question: "What is a network-based IDS (NIDS)?",
        options: ["An IDS that monitors network traffic", "An IDS that monitors a single host", "A software-based IDS", "A hardware IDS"],
        correct: 0,
        explanation: "NIDS monitors network traffic and analyzes it for suspicious activity."
      },
      {
        id: 10,
        question: "What is an active response in IPS?",
        options: ["Sending an email", "Taking action to block or contain a threat", "Generating a report", "Logging activity"],
        correct: 1,
        explanation: "Active response involves taking automated actions to block or contain threats in real-time."
      }
    ]
  },
  // Topic 10: Endpoint Security
  {
    id: "endpoint-security",
    title: "Endpoint Security",
    description: "Antivirus, EDR, host firewall, patching, hardening",
    icon: "💻",
    color: "from-slate-500 to-gray-700",
    questions: [
      {
        id: 1,
        question: "What is endpoint security?",
        options: ["Securing network devices", "Protecting endpoints like computers, mobile devices, and IoT devices", "Securing the cloud", "Protecting data centers"],
        correct: 1,
        explanation: "Endpoint security protects devices that connect to the network, including computers, phones, and servers."
      },
      {
        id: 2,
        question: "What is antivirus software?",
        options: ["Software that prevents all virus infections", "Software that detects, prevents, and removes malware", "A firewall", "A VPN"],
        correct: 1,
        explanation: "Antivirus software detects, prevents, and removes malware from devices."
      },
      {
        id: 3,
        question: "What is Endpoint Detection and Response (EDR)?",
        options: ["A type of firewall", "An advanced solution that monitors endpoints and responds to threats", "A password manager", "A type of VPN"],
        correct: 1,
        explanation: "EDR continuously monitors endpoints, detects threats, and provides automated response capabilities."
      },
      {
        id: 4,
        question: "What is patch management?",
        options: ["Managing physical patches", "The process of applying updates to fix security vulnerabilities", "Managing network cables", "Updating user passwords"],
        correct: 1,
        explanation: "Patch management is the process of identifying, acquiring, and applying updates to fix vulnerabilities and bugs."
      },
      {
        id: 5,
        question: "What is system hardening?",
        options: ["Making systems physically stronger", "Reducing the attack surface by disabling unnecessary services and features", "Installing more software", "Increasing system performance"],
        correct: 1,
        explanation: "System hardening reduces the attack surface by disabling unnecessary features and implementing security measures."
      },
      {
        id: 6,
        question: "What is a host-based firewall?",
        options: ["A network-level firewall", "A firewall installed on individual devices", "A cloud-based firewall", "A hardware firewall"],
        correct: 1,
        explanation: "A host-based firewall is installed on individual devices and controls incoming/outgoing traffic for that device."
      },
      {
        id: 7,
        question: "What is a Unified Threat Management (UTM) appliance?",
        options: ["A single security solution combining multiple functions", "A type of router", "A web application firewall", "A firewall"],
        correct: 0,
        explanation: "UTM combines firewall, antivirus, IDS/IPS, and other security features in a single appliance."
      },
      {
        id: 8,
        question: "What is a zero-day vulnerability?",
        options: ["A vulnerability known to the vendor", "A vulnerability with no available patch", "A vulnerability that causes no damage", "A vulnerability on day zero"],
        correct: 1,
        explanation: "A zero-day vulnerability has no available patch and is unknown to the vendor."
      },
      {
        id: 9,
        question: "What is a supply chain attack?",
        options: ["Attacking the supply chain", "Compromising a third-party vendor or software to attack a target", "A physical attack", "A type of DoS"],
        correct: 1,
        explanation: "Supply chain attacks target vendors, suppliers, or partners to compromise the ultimate target."
      },
      {
        id: 10,
        question: "What is the principle of least functionality?",
        options: ["Having minimal functionality to reduce attack surface", "Adding all features to increase functionality", "Removing all functionality", "Adding temporary features"],
        correct: 0,
        explanation: "Least functionality limits a system to only the essential features needed to reduce the attack surface."
      }
    ]
  },
  // Topic 11: Web Security
  {
    id: "web-security",
    title: "Web Security",
    description: "HTTP/HTTPS, cookies, sessions, OWASP basics, XSS, SQL injection, CSRF",
    icon: "🌍",
    color: "from-amber-500 to-yellow-700",
    questions: [
      {
        id: 1,
        question: "What is the difference between HTTP and HTTPS?",
        options: ["HTTP is faster than HTTPS", "HTTPS is HTTP with encryption (SSL/TLS)", "HTTP is more secure", "They are identical"],
        correct: 1,
        explanation: "HTTPS is HTTP with TLS/SSL encryption, providing confidentiality and integrity."
      },
      {
        id: 2,
        question: "What is Cross-Site Scripting (XSS)?",
        options: ["Writing scripts across multiple platforms", "Injecting malicious scripts into web pages viewed by others", "Cross-platform development", "A CSS styling technique"],
        correct: 1,
        explanation: "XSS injects malicious scripts into web pages that execute in other users' browsers."
      },
      {
        id: 3,
        question: "What is SQL injection?",
        options: ["Injecting physical SQL hardware", "Inserting malicious SQL code into a query to manipulate the database", "A database optimization technique", "SQL programming methodology"],
        correct: 1,
        explanation: "SQL injection inserts malicious SQL code into queries through user input to manipulate the database."
      },
      {
        id: 4,
        question: "What is Cross-Site Request Forgery (CSRF)?",
        options: ["Forging requests from a trusted user", "An attack on authentication", "A phishing attack", "A type of malware"],
        correct: 0,
        explanation: "CSRF forces an authenticated user to perform unwanted actions on a web application."
      },
      {
        id: 5,
        question: "What is a session cookie?",
        options: ["A permanent cookie", "A temporary cookie used to maintain user sessions", "A tracking cookie", "A security cookie"],
        correct: 1,
        explanation: "Session cookies are temporary cookies that maintain user sessions and expire when the browser is closed."
      },
      {
        id: 6,
        question: "What is OWASP Top 10?",
        options: ["Top 10 security products", "A list of the 10 most critical web application security risks", "Top 10 cybersecurity certifications", "10 best security practices"],
        correct: 1,
        explanation: "OWASP Top 10 is a list of the most critical web application security vulnerabilities."
      },
      {
        id: 7,
        question: "What is a Content Security Policy (CSP)?",
        options: ["A policy for content creation", "A security standard that prevents XSS by controlling resources", "A content management system", "A type of firewall"],
        correct: 1,
        explanation: "CSP helps prevent XSS attacks by controlling which resources can be loaded and executed."
      },
      {
        id: 8,
        question: "What is a secure cookie?",
        options: ["A cookie stored securely", "A cookie with the Secure flag set, only transmitted over HTTPS", "A cookie with no expiration", "A cookie with no path"],
        correct: 1,
        explanation: "Secure cookies are only transmitted over HTTPS, protecting them from interception."
      },
      {
        id: 9,
        question: "What is a SameSite cookie attribute?",
        options: ["A cookie for the same site", "An attribute that controls when cookies are sent in cross-site requests", "A security policy", "A cookie type"],
        correct: 1,
        explanation: "SameSite attribute controls whether cookies are sent with cross-site requests, protecting against CSRF."
      },
      {
        id: 10,
        question: "What is a web application firewall (WAF)?",
        options: ["A firewall for the web", "A security solution that monitors and filters HTTP traffic", "A web application", "A DNS server"],
        correct: 1,
        explanation: "A WAF monitors and filters HTTP/HTTPS traffic to protect web applications from attacks."
      }
    ]
  },
  // Topic 12: Email Security
  {
    id: "email-security",
    title: "Email Security",
    description: "Spam, phishing, SPF, DKIM, DMARC",
    icon: "✉️",
    color: "from-blue-300 to-blue-500",
    questions: [
      {
        id: 1,
        question: "What is spam?",
        options: ["Unsolicited bulk email", "Malicious email", "Phishing email", "Marketing email"],
        correct: 0,
        explanation: "Spam is unsolicited, bulk email, often sent for advertising purposes."
      },
      {
        id: 2,
        question: "What is SPF (Sender Policy Framework)?",
        options: ["A security protocol", "A framework that specifies which servers can send email from a domain", "A type of firewall", "An encryption standard"],
        correct: 1,
        explanation: "SPF allows domain owners to specify authorized email servers, reducing email spoofing."
      },
      {
        id: 3,
        question: "What is DKIM (DomainKeys Identified Mail)?",
        options: ["A cryptographic standard for signing emails", "A type of encryption", "A firewall", "A spam filter"],
        correct: 0,
        explanation: "DKIM uses cryptographic signatures to verify email authenticity and integrity."
      },
      {
        id: 4,
        question: "What is DMARC (Domain-based Message Authentication, Reporting & Conformance)?",
        options: ["A security standard", "A policy framework that builds on SPF and DKIM", "An encryption standard", "A spam filter"],
        correct: 1,
        explanation: "DMARC builds on SPF and DKIM to define how email should be handled if it fails authentication."
      },
      {
        id: 5,
        question: "What is email phishing?",
        options: ["A fraudulent email trying to trick recipients", "A promotional email", "An automated email", "A transactional email"],
        correct: 0,
        explanation: "Phishing emails attempt to trick recipients into revealing sensitive information or performing actions."
      },
      {
        id: 6,
        question: "What is email encryption?",
        options: ["Encrypting email content", "Encrypting email attachments only", "Encrypting server logs", "Encrypting addresses"],
        correct: 0,
        explanation: "Email encryption protects email content from unauthorized access during transmission and storage."
      },
      {
        id: 7,
        question: "What is a spam filter?",
        options: ["A filter that blocks certain messages", "A software that identifies and blocks spam emails", "A hardware device", "A type of firewall"],
        correct: 1,
        explanation: "Spam filters detect and block unsolicited bulk email using various techniques."
      },
      {
        id: 8,
        question: "What is email spoofing?",
        options: ["Faking the sender address in an email", "Sending duplicate emails", "Forwarding emails", "Archiving emails"],
        correct: 0,
        explanation: "Email spoofing involves falsifying the sender's address to appear as a trusted source."
      },
      {
        id: 9,
        question: "What is a whitelist in email security?",
        options: ["A list of blocked senders", "A list of approved senders", "A list of spam keywords", "A list of email addresses"],
        correct: 1,
        explanation: "A whitelist contains approved email addresses that are always allowed through filters."
      },
      {
        id: 10,
        question: "What is a blacklist in email security?",
        options: ["A list of blocked senders", "A list of approved senders", "A list of spam keywords", "A list of email addresses"],
        correct: 0,
        explanation: "A blacklist contains blocked email addresses that are rejected by filters."
      }
    ]
  },
  // Topic 13: Wireless Security
  {
    id: "wireless-security",
    title: "Wireless Security",
    description: "WEP, WPA, WPA2, WPA3, wireless attacks, secure Wi-Fi",
    icon: "📶",
    color: "from-sky-400 to-blue-600",
    questions: [
      {
        id: 1,
        question: "What is the least secure wireless security protocol?",
        options: ["WPA3", "WPA2", "WEP", "WPA"],
        correct: 2,
        explanation: "WEP (Wired Equivalent Privacy) is outdated and easily crackable."
      },
      {
        id: 2,
        question: "What is the most secure wireless security protocol currently?",
        options: ["WEP", "WPA", "WPA2", "WPA3"],
        correct: 3,
        explanation: "WPA3 is the current most secure wireless security standard."
      },
      {
        id: 3,
        question: "What is a wireless access point (WAP)?",
        options: ["A device that connects to a wired network and provides Wi-Fi", "A type of antenna", "A wireless router", "A switch"],
        correct: 0,
        explanation: "A WAP connects wireless devices to a wired network using Wi-Fi."
      },
      {
        id: 4,
        question: "What is a SSID?",
        options: ["Service Set Identifier - the name of a Wi-Fi network", "A security key", "A network address", "A type of encryption"],
        correct: 0,
        explanation: "SSID is the public name of a wireless network used to identify it."
      },
      {
        id: 5,
        question: "What is a Wi-Fi deauthentication attack?",
        options: ["An attack that disconnects clients from a Wi-Fi network", "An attack that captures passwords", "An attack that steals data", "An attack on a router"],
        correct: 0,
        explanation: "A deauth attack sends deauthentication frames to forcibly disconnect clients from the network."
      },
      {
        id: 6,
        question: "What is a brute force attack on Wi-Fi?",
        options: ["Trying all password combinations to connect to Wi-Fi", "A physical attack", "A network scan", "A DOS attack"],
        correct: 0,
        explanation: "Wi-Fi brute force attacks try all possible passwords to gain network access."
      },
      {
        id: 7,
        question: "What is a wireless intrusion prevention system (WIPS)?",
        options: ["An IPS for wireless networks", "A type of firewall", "A network scan", "A security policy"],
        correct: 0,
        explanation: "WIPS monitors and prevents unauthorized wireless access and attacks."
      },
      {
        id: 8,
        question: "What is a rogue access point?",
        options: ["A legitimate access point", "An unauthorized access point on a network", "A malicious access point", "A broken access point"],
        correct: 1,
        explanation: "A rogue access point is an unauthorized device connected to a network, often a security risk."
      },
      {
        id: 9,
        question: "What is the difference between WPA2-Personal and WPA2-Enterprise?",
        options: ["Personal uses a pre-shared key; Enterprise uses 802.1X authentication", "Personal is more secure", "Enterprise is less secure", "They are the same"],
        correct: 0,
        explanation: "WPA2-Personal uses a shared password; WPA2-Enterprise uses individual authentication via RADIUS."
      },
      {
        id: 10,
        question: "What is Wi-Fi Protected Setup (WPS)?",
        options: ["A simplified method for connecting devices to Wi-Fi", "A security protocol", "A type of encryption", "A Wi-Fi test"],
        correct: 0,
        explanation: "WPS provides simplified Wi-Fi setup, but its PIN method has known vulnerabilities."
      }
    ]
  },
  // Topic 14: Access Control & Network Segmentation
  {
    id: "access-control-segmentation",
    title: "Access Control & Network Segmentation",
    description: "VLAN security, ACL, Zero Trust, micro-segmentation",
    icon: "🔀",
    color: "from-rose-500 to-pink-600",
    questions: [
      {
        id: 1,
        question: "What is a VLAN?",
        options: ["Virtual Local Area Network - a logically segmented network", "A physical network", "A virtual private network", "A wide area network"],
        correct: 0,
        explanation: "A VLAN logically segments a network into isolated broadcast domains."
      },
      {
        id: 2,
        question: "What is VLAN hopping?",
        options: ["An attack that moves between VLANs", "A performance issue", "A network configuration", "A type of routing"],
        correct: 0,
        explanation: "VLAN hopping is an attack where traffic is sent from one VLAN to another without authorization."
      },
      {
        id: 3,
        question: "What is the Zero Trust security model?",
        options: ["Trusting no security tools", "Never trust, always verify - no implicit trust for anyone", "Removing all security controls", "Trusting only zero-day threats"],
        correct: 1,
        explanation: "Zero Trust assumes no user or device should be trusted by default, requiring continuous verification."
      },
      {
        id: 4,
        question: "What is micro-segmentation?",
        options: ["Dividing networks into very small segments for granular security", "Creating large network segments", "A type of VLAN", "A firewall feature"],
        correct: 0,
        explanation: "Micro-segmentation creates highly granular network segments to limit lateral movement and enforce policies."
      },
      {
        id: 5,
        question: "What is an Access Control List (ACL)?",
        options: ["A list of user names", "A set of rules defining traffic permissions", "A list of passwords", "A list of employee IDs"],
        correct: 1,
        explanation: "ACLs define what traffic is allowed or denied on network devices."
      },
      {
        id: 6,
        question: "What is a VLAN Access Control List (VACL)?",
        options: ["An ACL that applies specifically to VLAN traffic", "A network list", "A list of VLAN IDs", "A routing table"],
        correct: 0,
        explanation: "VACLs apply access control rules specifically to traffic within a VLAN."
      },
      {
        id: 7,
        question: "What is network segmentation?",
        options: ["Dividing a network into smaller isolated segments", "Combining all networks", "Removing network segments", "Creating larger networks"],
        correct: 0,
        explanation: "Network segmentation divides a network into smaller isolated segments to improve security and performance."
      },
      {
        id: 8,
        question: "What is the principle of network segmentation?",
        options: ["To contain security breaches and limit lateral movement", "To make the network faster", "To reduce costs", "To complicate the network"],
        correct: 0,
        explanation: "Network segmentation contains security breaches, limiting lateral movement and containing threats."
      },
      {
        id: 9,
        question: "What is a DMZ in network segmentation?",
        options: ["A network segment for public-facing services", "A private network segment", "A backup segment", "A test segment"],
        correct: 0,
        explanation: "The DMZ is a segment that hosts public-facing services while protecting internal networks."
      },
      {
        id: 10,
        question: "What is a trust boundary?",
        options: ["A line that separates trusted from untrusted network segments", "A firewall", "A security policy", "A router"],
        correct: 0,
        explanation: "A trust boundary separates segments with different trust levels, often enforced by firewalls."
      }
    ]
  },
  // Topic 15: Security Operations
  {
    id: "security-operations",
    title: "Security Operations",
    description: "Logs, SIEM, SOC, alerts, monitoring, threat intelligence",
    icon: "📊",
    color: "from-indigo-600 to-blue-800",
    questions: [
      {
        id: 1,
        question: "What is a Security Operations Center (SOC)?",
        options: ["A physical center for monitoring security", "A team that monitors and responds to security threats", "A security framework", "A software platform"],
        correct: 1,
        explanation: "A SOC is a team that continuously monitors and responds to security threats and incidents."
      },
      {
        id: 2,
        question: "What is SIEM?",
        options: ["Security Information and Event Management", "Security Incident and Event Monitoring", "System Information and Event Management", "Security Integration and Event Management"],
        correct: 0,
        explanation: "SIEM collects, analyzes, and correlates security events and logs from across an organization."
      },
      {
        id: 3,
        question: "What is a security log?",
        options: ["A record of security events and activities", "A physical log book", "A software component", "A backup file"],
        correct: 0,
        explanation: "Security logs record events and activities for monitoring, analysis, and auditing."
      },
      {
        id: 4,
        question: "What is threat intelligence?",
        options: ["Information about cyber threats and attackers", "Intelligence about employees", "A security policy", "A type of software"],
        correct: 0,
        explanation: "Threat intelligence is analyzed information about cyber threats, including tactics and indicators of compromise."
      },
      {
        id: 5,
        question: "What is a security alert?",
        options: ["A notification of a potential security event", "A security policy", "A software update", "A hardware warning"],
        correct: 0,
        explanation: "Security alerts are notifications generated when potential security events or threats are detected."
      },
      {
        id: 6,
        question: "What is security monitoring?",
        options: ["Continuously observing systems and networks for security events", "Monitoring physical security only", "Monitoring employee activity", "Monitoring website traffic"],
        correct: 0,
        explanation: "Security monitoring continuously observes systems, networks, and applications for security events."
      },
      {
        id: 7,
        question: "What is a playbook in security operations?",
        options: ["A script of actions to take during security incidents", "A book of plays", "A security policy", "A training manual"],
        correct: 0,
        explanation: "Playbooks document procedures and actions for responding to specific types of security incidents."
      },
      {
        id: 8,
        question: "What is the difference between threat hunting and threat monitoring?",
        options: ["Threat hunting is proactive; monitoring is reactive", "They are the same", "Hunting is automated; monitoring is manual", "Hunting is reactive; monitoring is proactive"],
        correct: 0,
        explanation: "Threat hunting proactively searches for threats that have evaded detection; monitoring reacts to alerts."
      },
      {
        id: 9,
        question: "What is a log aggregation?",
        options: ["Collecting and combining logs from multiple sources", "Deleting logs", "Backing up logs", "Encrypting logs"],
        correct: 0,
        explanation: "Log aggregation collects and combines logs from various sources for analysis and storage."
      },
      {
        id: 10,
        question: "What is anomaly detection?",
        options: ["Detecting deviations from normal behavior patterns", "Detecting malware signatures", "Detecting network attacks", "Detecting physical intrusions"],
        correct: 0,
        explanation: "Anomaly detection identifies deviations from normal behavior that may indicate threats."
      }
    ]
  },
  // Topic 16: Incident Response
  {
    id: "incident-response",
    title: "Incident Response",
    description: "Preparation, detection, containment, eradication, recovery, lessons learned",
    icon: "🚨",
    color: "from-red-600 to-rose-700",
    questions: [
      {
        id: 1,
        question: "What is incident response?",
        options: ["A planned approach to handling security incidents", "A type of firewall", "A security policy", "A software system"],
        correct: 0,
        explanation: "Incident response is a structured approach to detecting, containing, and recovering from security incidents."
      },
      {
        id: 2,
        question: "What are the phases of incident response?",
        options: ["Plan, Do, Check, Act", "Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned", "Start, Middle, End", "Scan, Attack, Defend"],
        correct: 1,
        explanation: "NIST's incident response framework includes Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned."
      },
      {
        id: 3,
        question: "What is containment in incident response?",
        options: ["Isolating the incident to prevent further damage", "Detecting the incident", "Recovering from the incident", "Analyzing the incident"],
        correct: 0,
        explanation: "Containment isolates the incident to limit damage and prevent further spread."
      },
      {
        id: 4,
        question: "What is eradication in incident response?",
        options: ["Removing the threat and root cause", "Containing the threat", "Detecting the threat", "Recovering from damage"],
        correct: 0,
        explanation: "Eradication removes the threat and eliminates the root cause of the incident."
      },
      {
        id: 5,
        question: "What is recovery in incident response?",
        options: ["Restoring systems and services", "Containing the threat", "Detecting the threat", "Analyzing the cause"],
        correct: 0,
        explanation: "Recovery restores affected systems and services to normal operation."
      },
      {
        id: 6,
        question: "What is a post-incident review?",
        options: ["Reviewing the incident after it's resolved to learn lessons", "Reviewing the incident before it happens", "A type of training", "A security policy"],
        correct: 0,
        explanation: "A post-incident review analyzes the incident to identify lessons learned and improve future responses."
      },
      {
        id: 7,
        question: "What is a computer security incident?",
        options: ["Any event that threatens computer security", "A physical security event", "A software bug", "A policy violation"],
        correct: 0,
        explanation: "A computer security incident is a security event that threatens the confidentiality, integrity, or availability of systems or data."
      },
      {
        id: 8,
        question: "What is the first step in incident response?",
        options: ["Containment", "Preparation", "Eradication", "Recovery"],
        correct: 1,
        explanation: "Preparation is the first step, establishing the incident response plan, team, and tools before incidents occur."
      },
      {
        id: 9,
        question: "What is a runbook in incident response?",
        options: ["A documented procedure for common incident scenarios", "A book of games", "A security policy", "A training manual"],
        correct: 0,
        explanation: "Runbooks document step-by-step procedures for handling specific incident scenarios."
      },
      {
        id: 10,
        question: "What is a tabletop exercise?",
        options: ["A discussion-based exercise for practicing incident response", "A physical exercise", "A software test", "A training program"],
        correct: 0,
        explanation: "Tabletop exercises simulate incident scenarios to practice and test incident response procedures."
      }
    ]
  },
  // Topic 17: Vulnerability Management
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    description: "Vulnerability, CVE, CVSS, scanning, patch management, remediation",
    icon: "🔍",
    color: "from-yellow-500 to-orange-600",
    questions: [
      {
        id: 1,
        question: "What is vulnerability management?",
        options: ["The process of identifying, evaluating, and fixing vulnerabilities", "A type of firewall", "A security policy", "A software system"],
        correct: 0,
        explanation: "Vulnerability management is the ongoing process of identifying, prioritizing, and remediating security vulnerabilities."
      },
      {
        id: 2,
        question: "What is a CVE?",
        options: ["Common Vulnerabilities and Exposures - a public vulnerability identifier", "A vulnerability assessment tool", "A security framework", "A type of firewall"],
        correct: 0,
        explanation: "CVE is a public system for identifying and tracking security vulnerabilities."
      },
      {
        id: 3,
        question: "What is CVSS?",
        options: ["Common Vulnerability Scoring System - a system for rating vulnerability severity", "A vulnerability scanning tool", "A security standard", "A type of exploit"],
        correct: 0,
        explanation: "CVSS provides a standardized scoring system for rating the severity of vulnerabilities from 0 to 10."
      },
      {
        id: 4,
        question: "What is vulnerability scanning?",
        options: ["Automated testing to identify known vulnerabilities", "A manual security review", "A type of firewall", "A social engineering attack"],
        correct: 0,
        explanation: "Vulnerability scanning uses automated tools to identify known vulnerabilities, misconfigurations, and outdated software."
      },
      {
        id: 5,
        question: "What is patch management?",
        options: ["The process of applying updates to fix vulnerabilities", "A type of firewall", "A network management tool", "A security policy"],
        correct: 0,
        explanation: "Patch management is the process of identifying, acquiring, testing, and applying security updates."
      },
      {
        id: 6,
        question: "What is a vulnerability assessment?",
        options: ["A comprehensive evaluation of security vulnerabilities", "A vulnerability scan", "A penetration test", "A security audit"],
        correct: 0,
        explanation: "A vulnerability assessment identifies, quantifies, and prioritizes vulnerabilities in a system."
      },
      {
        id: 7,
        question: "What is the difference between vulnerability scanning and penetration testing?",
        options: ["Scanning is automated; penetration testing involves exploitation", "They are the same", "Testing is automated; scanning is manual", "Both are manual"],
        correct: 0,
        explanation: "Vulnerability scanning identifies potential vulnerabilities; penetration testing actively exploits them to confirm risk."
      },
      {
        id: 8,
        question: "What is a zero-day vulnerability?",
        options: ["A vulnerability with no patch available", "A vulnerability that causes no damage", "A vulnerability on day zero", "A vulnerability known to the vendor"],
        correct: 0,
        explanation: "A zero-day vulnerability has no available patch and is unknown to the vendor."
      },
      {
        id: 9,
        question: "What is a vulnerability report?",
        options: ["A document detailing identified vulnerabilities and recommendations", "A summary of network traffic", "A security alert", "A system log"],
        correct: 0,
        explanation: "A vulnerability report documents identified vulnerabilities, their severity, and recommended remediation actions."
      },
      {
        id: 10,
        question: "What is the vulnerability lifecycle?",
        options: ["Discovery, Disclosure, Assessment, Remediation", "Start, Middle, End", "Test, Analyze, Fix", "Scan, Report, Patch"],
        correct: 0,
        explanation: "The vulnerability lifecycle includes discovery, disclosure, assessment, and remediation stages."
      }
    ]
  },
  // Topic 18: Risk Management
  {
    id: "risk-management",
    title: "Risk Management",
    description: "Risk calculation, risk assessment, mitigation, acceptance",
    icon: "📋",
    color: "from-amber-500 to-yellow-600",
    questions: [
      {
        id: 1,
        question: "What is the formula for risk?",
        options: ["Risk = Threat + Vulnerability + Impact", "Risk = Threat × Vulnerability × Impact", "Risk = Threat - Vulnerability", "Risk = Impact / Vulnerability"],
        correct: 1,
        explanation: "Risk is calculated as the product of Threat, Vulnerability, and Impact."
      },
      {
        id: 2,
        question: "What is a risk assessment?",
        options: ["The process of identifying and evaluating risks", "A type of vulnerability scan", "A security audit", "A compliance check"],
        correct: 0,
        explanation: "Risk assessment identifies, analyzes, and evaluates potential security risks to an organization."
      },
      {
        id: 3,
        question: "What is risk mitigation?",
        options: ["Reducing risk through controls and safeguards", "Accepting risk", "Ignoring risk", "Shifting risk"],
        correct: 0,
        explanation: "Risk mitigation involves implementing controls and measures to reduce risk to an acceptable level."
      },
      {
        id: 4,
        question: "What is risk acceptance?",
        options: ["Accepting risk without implementing controls", "Implementing all possible controls", "Transferring risk", "Avoiding risk"],
        correct: 0,
        explanation: "Risk acceptance is choosing to accept the risk when the cost of mitigation exceeds the potential impact."
      },
      {
        id: 5,
        question: "What is risk avoidance?",
        options: ["Eliminating the risk by discontinuing the risky activity", "Accepting the risk", "Transferring the risk", "Mitigating the risk"],
        correct: 0,
        explanation: "Risk avoidance eliminates the risk by stopping the activity or condition that creates the risk."
      },
      {
        id: 6,
        question: "What is risk transfer?",
        options: ["Shifting risk to another party, such as through insurance", "Accepting risk", "Mitigating risk", "Avoiding risk"],
        correct: 0,
        explanation: "Risk transfer shifts the financial impact of risk to another party, often through insurance."
      },
      {
        id: 7,
        question: "What is a Business Impact Analysis (BIA)?",
        options: ["Analyzing the business impact of disruptions", "Analyzing business operations", "A financial analysis", "A compliance review"],
        correct: 0,
        explanation: "A BIA identifies critical business functions and the impact of disruptions on the organization."
      },
      {
        id: 8,
        question: "What is Risk Assessment matrix?",
        options: ["A tool for prioritizing risks based on likelihood and impact", "A type of vulnerability scan", "A security policy", "A compliance standard"],
        correct: 0,
        explanation: "A risk matrix helps prioritize risks by evaluating their likelihood and potential impact."
      },
      {
        id: 9,
        question: "What is qualitative risk assessment?",
        options: ["Risk assessment using subjective categories like High/Medium/Low", "Risk assessment using numbers", "Risk assessment using financial data", "Risk assessment using percentages"],
        correct: 0,
        explanation: "Qualitative risk assessment uses subjective categories and descriptions to evaluate risks."
      },
      {
        id: 10,
        question: "What is quantitative risk assessment?",
        options: ["Risk assessment using numerical values and monetary impacts", "Risk assessment using categories", "Risk assessment without numbers", "Risk assessment with colors"],
        correct: 0,
        explanation: "Quantitative risk assessment uses numerical data and monetary values to calculate risk exposure."
      }
    ]
  },
  // Topic 19: Cloud Security
  {
    id: "cloud-security",
    title: "Cloud Security",
    description: "IaaS, PaaS, SaaS, shared responsibility, IAM, cloud threats",
    icon: "☁️",
    color: "from-sky-500 to-indigo-600",
    questions: [
      {
        id: 1,
        question: "What is Infrastructure as a Service (IaaS)?",
        options: ["Cloud service providing virtualized computing resources", "Cloud service providing development platforms", "Cloud service providing software applications", "A type of hardware"],
        correct: 0,
        explanation: "IaaS provides virtualized compute, storage, and networking resources on demand."
      },
      {
        id: 2,
        question: "What is Platform as a Service (PaaS)?",
        options: ["Cloud service providing development platforms", "Cloud service providing computing resources", "Cloud service providing software applications", "A type of hardware"],
        correct: 0,
        explanation: "PaaS provides platforms for developing, testing, and deploying applications."
      },
      {
        id: 3,
        question: "What is Software as a Service (SaaS)?",
        options: ["Cloud service providing software applications", "Cloud service providing computing resources", "Cloud service providing development platforms", "A type of hardware"],
        correct: 0,
        explanation: "SaaS provides ready-to-use software applications over the internet."
      },
      {
        id: 4,
        question: "What is the shared responsibility model in cloud security?",
        options: ["Cloud provider and customer share security responsibilities", "Provider is responsible for everything", "Customer is responsible for everything", "There is no shared responsibility"],
        correct: 0,
        explanation: "The shared responsibility model divides security responsibilities between the cloud provider and the customer."
      },
      {
        id: 5,
        question: "What is Identity and Access Management (IAM) in the cloud?",
        options: ["Managing identities and access in cloud environments", "Managing cloud resources", "Managing applications", "Managing data storage"],
        correct: 0,
        explanation: "Cloud IAM manages user identities, authentication, and authorization for cloud resources."
      },
      {
        id: 6,
        question: "What is a cloud-native attack?",
        options: ["An attack targeting cloud-specific vulnerabilities", "A traditional network attack", "A social engineering attack", "A physical attack"],
        correct: 0,
        explanation: "Cloud-native attacks target vulnerabilities specific to cloud computing environments."
      },
      {
        id: 7,
        question: "What is a data breach in the cloud?",
        options: ["Unauthorized access to data stored in the cloud", "A network attack", "A physical security incident", "A software vulnerability"],
        correct: 0,
        explanation: "A cloud data breach involves unauthorized access to data stored in cloud environments."
      },
      {
        id: 8,
        question: "What is cloud security posture management (CSPM)?",
        options: ["Continuous monitoring and compliance of cloud security", "A cloud security framework", "A type of firewall", "An encryption standard"],
        correct: 0,
        explanation: "CSPM continuously monitors cloud environments for misconfigurations and compliance issues."
      },
      {
        id: 9,
        question: "What is a cloud security policy?",
        options: ["A policy defining cloud security requirements and controls", "A cloud service agreement", "A software license", "A data retention policy"],
        correct: 0,
        explanation: "A cloud security policy defines how cloud services should be used and secured within an organization."
      },
      {
        id: 10,
        question: "What is cloud encryption?",
        options: ["Encrypting data stored in the cloud and during transmission", "Encrypting only transmission", "Encrypting only storage", "A type of firewall"],
        correct: 0,
        explanation: "Cloud encryption protects data at rest (stored) and in transit (transmitted)."
      }
    ]
  },
  // Topic 20: Mobile & IoT Security
  {
    id: "mobile-iot-security",
    title: "Mobile & IoT Security",
    description: "Mobile threats, IoT vulnerabilities, device security",
    icon: "📱",
    color: "from-emerald-500 to-teal-600",
    questions: [
      {
        id: 1,
        question: "What is mobile security?",
        options: ["Securing mobile devices and applications", "Securing only phones", "Securing tablets", "Securing laptops"],
        correct: 0,
        explanation: "Mobile security protects mobile devices, applications, and data from threats."
      },
      {
        id: 2,
        question: "What is IoT security?",
        options: ["Securing Internet of Things devices", "Securing the internet", "Securing networks", "Securing computers"],
        correct: 0,
        explanation: "IoT security protects connected devices and systems from security threats."
      },
      {
        id: 3,
        question: "What is a common IoT vulnerability?",
        options: ["Default or weak passwords", "Strong encryption", "Regular updates", "Secure authentication"],
        correct: 0,
        explanation: "Many IoT devices come with default passwords that are rarely changed, creating vulnerabilities."
      },
      {
        id: 4,
        question: "What is a mobile malware?",
        options: ["Malware targeting mobile devices", "Desktop malware", "Network malware", "Cloud malware"],
        correct: 0,
        explanation: "Mobile malware is malicious software designed to target smartphones and tablets."
      },
      {
        id: 5,
        question: "What is device management in mobile security?",
        options: ["Mobile Device Management (MDM) for controlling devices", "Physical device management", "Software updates", "User account management"],
        correct: 0,
        explanation: "MDM allows organizations to manage and secure mobile devices through policy enforcement."
      },
      {
        id: 6,
        question: "What is a Bring Your Own Device (BYOD) policy?",
        options: ["Employees using personal devices for work", "Company-provided devices", "Public devices", "Shared devices"],
        correct: 0,
        explanation: "BYOD policies allow employees to use personal devices for work, requiring appropriate security measures."
      },
      {
        id: 7,
        question: "What is a mobile app vulnerability?",
        options: ["Security weaknesses in mobile applications", "Network vulnerabilities", "Hardware vulnerabilities", "OS vulnerabilities"],
        correct: 0,
        explanation: "Mobile app vulnerabilities include insecure data storage, weak encryption, and privilege escalation."
      },
      {
        id: 8,
        question: "What is IoT botnet?",
        options: ["A botnet composed of IoT devices", "A network of servers", "A mobile device network", "A cloud network"],
        correct: 0,
        explanation: "IoT botnets compromise IoT devices to launch attacks like DDoS, such as the Mirai botnet."
      },
      {
        id: 9,
        question: "What is a mobile device jailbreak?",
        options: ["Removing manufacturer restrictions on iOS devices", "Securing the device", "Installing apps", "Backing up data"],
        correct: 0,
        explanation: "Jailbreaking removes iOS device restrictions, allowing unauthorized apps but reducing security."
      },
      {
        id: 10,
        question: "What is an IoT firmware update?",
        options: ["Updating the device's operating system to fix vulnerabilities", "Installing apps", "Changing passwords", "Backing up data"],
        correct: 0,
        explanation: "IoT firmware updates address security vulnerabilities and improve device functionality."
      }
    ]
  },
  // Topic 21: Digital Forensics Basics
  {
    id: "digital-forensics",
    title: "Digital Forensics Basics",
    description: "Evidence, chain of custody, disk/memory/network forensics",
    icon: "🔬",
    color: "from-stone-500 to-neutral-700",
    questions: [
      {
        id: 1,
        question: "What is digital forensics?",
        options: ["Investigating and analyzing digital evidence", "A type of security policy", "A software system", "A network protocol"],
        correct: 0,
        explanation: "Digital forensics involves investigating digital evidence for legal and security purposes."
      },
      {
        id: 2,
        question: "What is chain of custody?",
        options: ["Documenting the evidence handling process", "Physical custody of items", "Security chain", "A type of evidence"],
        correct: 0,
        explanation: "Chain of custody documents how evidence is handled, preserved, and transferred to maintain integrity."
      },
      {
        id: 3,
        question: "What is disk forensics?",
        options: ["Analyzing storage devices to recover evidence", "Analyzing memory", "Analyzing networks", "Analyzing applications"],
        correct: 0,
        explanation: "Disk forensics examines storage devices to recover and analyze digital evidence."
      },
      {
        id: 4,
        question: "What is memory forensics?",
        options: ["Analyzing volatile memory (RAM) for evidence", "Analyzing storage devices", "Analyzing networks", "Analyzing applications"],
        correct: 0,
        explanation: "Memory forensics analyzes RAM to recover artifacts, passwords, and running processes."
      },
      {
        id: 5,
        question: "What is network forensics?",
        options: ["Analyzing network traffic for evidence", "Analyzing storage devices", "Analyzing memory", "Analyzing applications"],
        correct: 0,
        explanation: "Network forensics monitors and analyzes network traffic to detect security incidents."
      },
      {
        id: 6,
        question: "What is a forensic image?",
        options: ["An exact bit-by-bit copy of a storage device", "A photo of evidence", "A screenshot", "A data backup"],
        correct: 0,
        explanation: "A forensic image is an exact, verifiable copy of a storage device for investigation."
      },
      {
        id: 7,
        question: "What is a hash value in forensics?",
        options: ["A fingerprint to verify evidence integrity", "A type of encryption", "A password", "A file name"],
        correct: 0,
        explanation: "Hash values (like SHA-256) verify that evidence hasn't been altered during investigation."
      },
      {
        id: 8,
        question: "What is a forensic timeline?",
        options: ["A chronological reconstruction of events", "A list of evidence items", "A chain of custody", "An investigation report"],
        correct: 0,
        explanation: "A forensic timeline reconstructs events in chronological order to understand what happened."
      },
      {
        id: 9,
        question: "What is digital evidence?",
        options: ["Any information in digital form used as evidence", "Physical evidence", "Witness testimony", "Paper documents"],
        correct: 0,
        explanation: "Digital evidence is any electronic data that can be used in legal proceedings."
      },
      {
        id: 10,
        question: "What is a forensic acquisition?",
        options: ["Collecting digital evidence for investigation", "Analyzing evidence", "Preserving evidence", "Presenting evidence"],
        correct: 0,
        explanation: "Forensic acquisition involves collecting digital evidence while preserving its integrity."
      }
    ]
  },
  // Topic 22: Security Policies & Governance
  {
    id: "security-policies-governance",
    title: "Security Policies & Governance",
    description: "Security policy, acceptable-use policy, compliance, governance",
    icon: "📜",
    color: "from-blue-800 to-indigo-900",
    questions: [
      {
        id: 1,
        question: "What is a security policy?",
        options: ["A document defining security requirements and rules", "A software security tool", "A type of firewall", "A network protocol"],
        correct: 0,
        explanation: "A security policy defines an organization's security requirements, rules, and responsibilities."
      },
      {
        id: 2,
        question: "What is an Acceptable Use Policy (AUP)?",
        options: ["A policy defining acceptable use of IT resources", "A policy for acceptable behavior", "A security policy", "A compliance policy"],
        correct: 0,
        explanation: "An AUP defines the acceptable use of IT resources and prohibited activities."
      },
      {
        id: 3,
        question: "What is compliance in security?",
        options: ["Adhering to security standards and regulations", "Completing training", "Following procedures", "Using security tools"],
        correct: 0,
        explanation: "Compliance ensures organizations meet security standards, regulations, and legal requirements."
      },
      {
        id: 4,
        question: "What is security governance?",
        options: ["The framework for security management and oversight", "A security policy", "A software system", "A compliance standard"],
        correct: 0,
        explanation: "Security governance provides the framework for managing and overseeing security activities."
      },
      {
        id: 5,
        question: "What is a security standard?",
        options: ["A specific technical requirement or specification", "A broad security policy", "A software tool", "A compliance requirement"],
        correct: 0,
        explanation: "Security standards provide specific technical requirements for implementing security controls."
      },
      {
        id: 6,
        question: "What is a security framework?",
        options: ["A structured approach to security management", "A security policy", "A software system", "A compliance standard"],
        correct: 0,
        explanation: "Security frameworks provide a structured methodology for implementing and managing security."
      },
      {
        id: 7,
        question: "What is a security audit?",
        options: ["Systematic evaluation of security policies and controls", "A vulnerability scan", "A penetration test", "A compliance review"],
        correct: 0,
        explanation: "A security audit systematically evaluates security policies, controls, and compliance."
      },
      {
        id: 8,
        question: "What is a security procedure?",
        options: ["Step-by-step instructions for performing security tasks", "A broad security policy", "A software tool", "A compliance requirement"],
        correct: 0,
        explanation: "Security procedures provide specific instructions for implementing security policies and controls."
      },
      {
        id: 9,
        question: "What is a security control?",
        options: ["A measure designed to protect assets", "A security policy", "A compliance requirement", "A software tool"],
        correct: 0,
        explanation: "Security controls are measures designed to protect assets and reduce risks."
      },
      {
        id: 10,
        question: "What is a security awareness program?",
        options: ["Educating employees about security and safe practices", "A security policy", "A software system", "A compliance requirement"],
        correct: 0,
        explanation: "Security awareness programs educate employees about security best practices and risks."
      }
    ]
  },
  // Topic 23: Backup & Disaster Recovery
  {
    id: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    description: "Backup types, RPO, RTO, disaster recovery, business continuity",
    icon: "💾",
    color: "from-teal-600 to-cyan-800",
    questions: [
      {
        id: 1,
        question: "What is Recovery Time Objective (RTO)?",
        options: ["Maximum acceptable downtime after a disaster", "Maximum acceptable data loss", "Time to recover data", "Time to backup data"],
        correct: 0,
        explanation: "RTO is the maximum time allowed to restore systems after a disaster."
      },
      {
        id: 2,
        question: "What is Recovery Point Objective (RPO)?",
        options: ["Maximum acceptable data loss or age of backup", "Maximum downtime", "Time to recover", "Time to backup"],
        correct: 0,
        explanation: "RPO defines the maximum allowable data loss in terms of time."
      },
      {
        id: 3,
        question: "What is a full backup?",
        options: ["A complete backup of all selected data", "Backup of only changed data", "Backup of new data", "A partial backup"],
        correct: 0,
        explanation: "A full backup copies all selected files and data, regardless of whether they've changed."
      },
      {
        id: 4,
        question: "What is an incremental backup?",
        options: ["Backup of data changed since the last backup", "A full backup", "Backup of all data", "A partial backup"],
        correct: 0,
        explanation: "Incremental backup saves only data changed since the last backup (full or incremental)."
      },
      {
        id: 5,
        question: "What is a differential backup?",
        options: ["Backup of data changed since the last full backup", "A full backup", "Backup of all data", "An incremental backup"],
        correct: 0,
        explanation: "Differential backup saves data changed since the last full backup."
      },
      {
        id: 6,
        question: "What is a disaster recovery plan (DRP)?",
        options: ["A plan for recovering from disasters", "A backup plan", "A business plan", "A security plan"],
        correct: 0,
        explanation: "A DRP defines procedures for recovering systems and operations after a disaster."
      },
      {
        id: 7,
        question: "What is business continuity?",
        options: ["Maintaining business operations during and after disruptions", "Business growth", "Business planning", "Business profitability"],
        correct: 0,
        explanation: "Business continuity ensures critical functions continue during and after disruptive events."
      },
      {
        id: 8,
        question: "What is a hot site in disaster recovery?",
        options: ["A fully equipped backup site with real-time data replication", "A partially equipped site", "A cold site", "A mobile site"],
        correct: 0,
        explanation: "A hot site is a fully operational backup facility ready to take over immediately."
      },
      {
        id: 9,
        question: "What is a cold site in disaster recovery?",
        options: ["A site with infrastructure but no equipment or data", "A fully equipped site", "A partially equipped site", "A mobile site"],
        correct: 0,
        explanation: "A cold site provides basic infrastructure but requires time to set up before use."
      },
      {
        id: 10,
        question: "What is a warm site in disaster recovery?",
        options: ["A site with some equipment and pre-configured systems", "A fully equipped site", "A cold site", "A hot site"],
        correct: 0,
        explanation: "A warm site has some equipment and data but needs time before full operations."
      }
    ]
  },
  // Topic 24: Security Architecture
  {
    id: "security-architecture",
    title: "Security Architecture",
    description: "Defense in depth, Zero Trust, DMZ, segmentation, secure design",
    icon: "🏛️",
    color: "from-slate-600 to-gray-800",
    questions: [
      {
        id: 1,
        question: "What is defense in depth?",
        options: ["Using multiple layers of security controls", "A single strong control", "A type of firewall", "A network protocol"],
        correct: 0,
        explanation: "Defense in depth uses multiple layers of security controls to protect against threats."
      },
      {
        id: 2,
        question: "What is Zero Trust Architecture?",
        options: ["No implicit trust; always verify", "Trusting only known users", "Trusting only internal networks", "Trusting all traffic"],
        correct: 0,
        explanation: "Zero Trust requires continuous verification of all users and devices, regardless of location."
      },
      {
        id: 3,
        question: "What is a DMZ in security architecture?",
        options: ["A network segment for public-facing services", "A private network segment", "A backup segment", "A test segment"],
        correct: 0,
        explanation: "The DMZ provides controlled access from the internet while protecting internal networks."
      },
      {
        id: 4,
        question: "What is network segmentation?",
        options: ["Dividing networks into isolated segments", "Combining networks", "Removing network segments", "Creating larger networks"],
        correct: 0,
        explanation: "Network segmentation divides networks to contain threats and limit lateral movement."
      },
      {
        id: 5,
        question: "What is security by design?",
        options: ["Integrating security into the design phase", "Adding security later", "Security as an afterthought", "Security without design"],
        correct: 0,
        explanation: "Security by design incorporates security at every stage of system development."
      },
      {
        id: 6,
        question: "What is a security architecture framework?",
        options: ["A structured approach to security design", "A security policy", "A software system", "A compliance standard"],
        correct: 0,
        explanation: "Security architecture frameworks provide methodologies for designing secure systems."
      },
      {
        id: 7,
        question: "What is a security domain?",
        options: ["A logical grouping of assets with common security requirements", "A network segment", "A security policy", "A software system"],
        correct: 0,
        explanation: "Security domains group assets with similar security requirements and trust levels."
      },
      {
        id: 8,
        question: "What is separation of duties in architecture?",
        options: ["Ensuring no single person has complete control over critical functions", "Separating work", "Dividing teams", "Creating roles"],
        correct: 0,
        explanation: "Separation of duties prevents fraud and errors by dividing responsibilities."
      },
      {
        id: 9,
        question: "What is a trust level?",
        options: ["A measure of how much a system is trusted", "A security policy", "A network segment", "An access control"],
        correct: 0,
        explanation: "Trust levels determine what privileges and access are granted to users and systems."
      },
      {
        id: 10,
        question: "What is a secure design principle?",
        options: ["A fundamental concept for building secure systems", "A security policy", "A software tool", "A compliance requirement"],
        correct: 0,
        explanation: "Secure design principles guide the development of secure systems and applications."
      }
    ]
  },
  // Topic 25: Cybersecurity Tools & Commands
  {
    id: "cybersecurity-tools-commands",
    title: "Cybersecurity Tools & Commands",
    description: "Nmap, Wireshark, ping, traceroute, netstat, nslookup, Linux security commands",
    icon: "🛠️",
    color: "from-gray-600 to-slate-800",
    questions: [
      {
        id: 1,
        question: "What is Nmap?",
        options: ["A network mapping and scanning tool", "A packet analyzer", "A firewall", "A password manager"],
        correct: 0,
        explanation: "Nmap is a network scanning tool used for discovery and security auditing."
      },
      {
        id: 2,
        question: "What is Wireshark?",
        options: ["A network packet analyzer", "A network scanner", "A firewall", "A password manager"],
        correct: 0,
        explanation: "Wireshark captures and analyzes network traffic packets."
      },
      {
        id: 3,
        question: "What does the ping command do?",
        options: ["Tests network connectivity to a host", "Traces the route to a host", "Displays network connections", "Shows network statistics"],
        correct: 0,
        explanation: "Ping sends ICMP echo requests to test connectivity to a remote host."
      },
      {
        id: 4,
        question: "What does traceroute do?",
        options: ["Traces the route packets take to a destination", "Tests network connectivity", "Shows network connections", "Displays network statistics"],
        correct: 0,
        explanation: "Traceroute shows the path that packets take to reach a destination."
      },
      {
        id: 5,
        question: "What does netstat do?",
        options: ["Displays network connections and statistics", "Traces network routes", "Tests connectivity", "Scans ports"],
        correct: 0,
        explanation: "Netstat displays active network connections, routing tables, and interface statistics."
      },
      {
        id: 6,
        question: "What does nslookup do?",
        options: ["Queries DNS servers for domain information", "Tests network connectivity", "Traces routes", "Shows network connections"],
        correct: 0,
        explanation: "nslookup queries DNS servers to resolve domain names and troubleshoot DNS issues."
      },
      {
        id: 7,
        question: "What is the Linux iptables command?",
        options: ["A firewall configuration tool", "A network scanner", "A packet analyzer", "A DNS tool"],
        correct: 0,
        explanation: "iptables is a Linux tool for configuring firewall rules and packet filtering."
      },
      {
        id: 8,
        question: "What is the Linux netcat (nc) command?",
        options: ["A versatile networking tool for reading/writing network connections", "A firewall tool", "A scanner", "A traceroute"],
        correct: 0,
        explanation: "netcat is a utility for reading, writing, and establishing network connections."
      },
      {
        id: 9,
        question: "What is the Linux tcpdump command?",
        options: ["A command-line packet capture tool", "A network scanner", "A firewall tool", "A DNS tool"],
        correct: 0,
        explanation: "tcpdump captures and displays network packets from the command line."
      },
      {
        id: 10,
        question: "What is the Linux ssh command?",
        options: ["Secure Shell - encrypted remote access", "A file transfer tool", "A network scanner", "A firewall tool"],
        correct: 0,
        explanation: "SSH (Secure Shell) provides encrypted remote command-line access and file transfer."
      },
      {
        id: 11,
        question: "What is a Metasploit?",
        options: ["A penetration testing framework", "A network scanner", "A firewall", "A packet analyzer"],
        correct: 0,
        explanation: "Metasploit is a penetration testing framework for developing and executing exploits."
      },
      {
        id: 12,
        question: "What is Kali Linux?",
        options: ["A Linux distribution for penetration testing and forensics", "A network scanner", "A firewall tool", "A packet analyzer"],
        correct: 0,
        explanation: "Kali Linux is a security-focused Linux distribution with many pre-installed security tools."
      },
      {
        id: 13,
        question: "What is Burp Suite?",
        options: ["A web application security testing tool", "A network scanner", "A firewall", "A packet analyzer"],
        correct: 0,
        explanation: "Burp Suite is an integrated platform for web application security testing and vulnerability discovery."
      },
      {
        id: 14,
        question: "What is the curl command?",
        options: ["Transfers data using various protocols", "Tests network connectivity", "Traces routes", "Shows network statistics"],
        correct: 0,
        explanation: "curl (Client URL) transfers data using various protocols like HTTP, HTTPS, FTP, etc."
      },
      {
        id: 15,
        question: "What is the ls command used for in Linux?",
        options: ["List directory contents", "List network connections", "List processes", "List users"],
        correct: 0,
        explanation: "ls lists the contents of directories, including files and subdirectories."
      }
    ]
  }
];



/* -----------------ADD SOME MORE MCQS ----------------------------------
AFTER MORE MCQS ADDING TO HERE START
                    ALSO HERE TO ADDED MORE CARD ALSO
                          TO START
                               THANK YOU-----*/