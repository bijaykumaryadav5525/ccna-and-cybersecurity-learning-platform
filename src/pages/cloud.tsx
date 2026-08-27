import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  BookOpen,
  MessageCircleQuestion,
  StickyNote,
  Play,
  ListChecks,
  Trophy,
  Award,
  X,
  FileText,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type StudyMode = 'notes' | 'quiz' | 'qna';
type QnACategory = 'short' | 'long' | 'vvi';

// ------------------------------------------------------------
// 1. MCQ DATA – Full list (227 questions)
// ------------------------------------------------------------
const ALL_QUESTIONS = [
  // Section A: MQTT & Protocols
  {
    question: 'What does MQTT stand for?',
    options: ['Message Queuing Telemetry Transport', 'Machine Query Transmission Technology', 'Multi-Queue Telemetry Transfer', 'Mobile Query Telemetry Transport'],
    answer: 0,
    explanation: 'MQTT stands for Message Queuing Telemetry Transport.',
  },
  {
    question: 'Which protocol is MQTT built on?',
    options: ['UDP', 'TCP', 'HTTP', 'FTP'],
    answer: 1,
    explanation: 'MQTT is built on TCP.',
  },
  {
    question: 'In MQTT, who is responsible for routing messages?',
    options: ['Publisher', 'Subscriber', 'Broker', 'Topic'],
    answer: 2,
    explanation: 'The broker routes messages in MQTT.',
  },
  {
    question: 'In MQTT, the publisher sends messages to a specific ______.',
    options: ['Queue', 'Topic', 'Broker', 'Channel'],
    answer: 1,
    explanation: 'Publishers send messages to a topic.',
  },
  {
    question: 'Which of the following is a lightweight protocol designed for constrained IoT devices?',
    options: ['HTTP', 'FTP', 'MQTT', 'SMTP'],
    answer: 2,
    explanation: 'MQTT is lightweight and designed for IoT.',
  },
  {
    question: 'What is the main problem with HTTP for IoT applications?',
    options: ['It is too secure', 'Full TCP handshake on every request and high header overhead', 'It only works on local networks', 'It cannot send text data'],
    answer: 1,
    explanation: 'HTTP has high overhead and full TCP handshake each time.',
  },
  {
    question: 'Which MQTT QoS level guarantees "At least once" delivery?',
    options: ['QoS 0', 'QoS 1', 'QoS 2', 'QoS 3'],
    answer: 1,
    explanation: 'QoS 1 guarantees at-least-once delivery.',
  },
  {
    question: 'Which MQTT QoS level has the highest overhead?',
    options: ['QoS 0', 'QoS 1', 'QoS 2', 'QoS 3'],
    answer: 2,
    explanation: 'QoS 2 has the highest overhead because it ensures exactly-once delivery.',
  },
  {
    question: 'QoS 2 in MQTT is best used when:',
    options: ['Duplicates are acceptable', 'Single delivery is critical (e.g., payment triggers)', 'Data is not important', 'Bandwidth is limited'],
    answer: 1,
    explanation: 'QoS 2 is for critical messages where duplicates are unacceptable.',
  },
  {
    question: 'What is the strength of MQTT?',
    options: ['Very high data overhead', 'Works well over slow or unstable networks', 'Best for large file transfers', 'Best for browser native communication'],
    answer: 1,
    explanation: 'MQTT works well over slow/unstable networks.',
  },
  {
    question: 'Which of the following is a limitation of MQTT?',
    options: ['Works well over unstable networks', 'Efficient for thousands of devices', 'Not ideal for large payloads or file transfers', 'Simple for developers'],
    answer: 2,
    explanation: 'MQTT is not ideal for large payloads.',
  },
  {
    question: 'What does CoAP stand for?',
    options: ['Constrained Application Protocol', 'Common Application Protocol', 'Cloud Application Protocol', 'Control Application Protocol'],
    answer: 0,
    explanation: 'CoAP stands for Constrained Application Protocol.',
  },
  {
    question: 'CoAP is built on which transport protocol?',
    options: ['TCP', 'UDP', 'HTTP', 'FTP'],
    answer: 1,
    explanation: 'CoAP is built on UDP.',
  },
  {
    question: 'CoAP is best suited for:',
    options: ['High-bandwidth web servers', 'Extremely small, low-power embedded devices', 'Large file transfers', 'Video streaming'],
    answer: 1,
    explanation: 'CoAP is for constrained devices.',
  },
  {
    question: 'Which feature of CoAP allows servers to push updates to clients?',
    options: ['Request/Response mode', 'Observe mode', 'Full-duplex mode', 'Publish/Subscribe mode'],
    answer: 1,
    explanation: 'CoAP Observe mode enables push updates.',
  },
  {
    question: 'Which protocol uses a "Publish-Subscribe" pattern?',
    options: ['HTTP', 'CoAP', 'MQTT', 'FTP'],
    answer: 2,
    explanation: 'MQTT uses publish-subscribe.',
  },
  {
    question: 'Which protocol uses a "Request-Response" pattern?',
    options: ['MQTT', 'CoAP', 'AMQP', 'WebSocket'],
    answer: 1,
    explanation: 'CoAP uses request-response (like HTTP).',
  },
  {
    question: 'Which protocol is stateful, full-duplex, and bidirectional?',
    options: ['HTTP', 'MQTT', 'WebSockets', 'CoAP'],
    answer: 2,
    explanation: 'WebSockets are stateful and full-duplex.',
  },
  {
    question: 'WebSocket communication starts as:',
    options: ['A UDP packet', 'A standard HTTP request', 'A TCP handshake only', 'An MQTT publish'],
    answer: 1,
    explanation: 'WebSocket starts with an HTTP handshake.',
  },
  {
    question: 'In WebSockets, after the handshake, communication is:',
    options: ['Half-duplex', 'Simplex', 'Full-duplex', 'Unidirectional'],
    answer: 2,
    explanation: 'WebSockets become full-duplex after handshake.',
  },
  {
    question: 'Which protocol is best for browser-native real-time communication?',
    options: ['MQTT', 'CoAP', 'WebSockets', 'AMQP'],
    answer: 2,
    explanation: 'WebSockets are native to browsers for real-time.',
  },
  {
    question: 'Which protocol is best for message queuing in high-load enterprise systems?',
    options: ['HTTP', 'CoAP', 'AMQP', 'WebSocket'],
    answer: 2,
    explanation: 'AMQP is used for enterprise message queuing.',
  },
  {
    question: 'What is the overhead of MQTT compared to HTTP?',
    options: ['Higher', 'Lower', 'Same', 'Infinite'],
    answer: 1,
    explanation: 'MQTT has lower overhead than HTTP.',
  },
  {
    question: 'Which protocol is NOT suitable for battery-powered devices due to high overhead?',
    options: ['MQTT', 'CoAP', 'HTTP/REST', 'Zigbee'],
    answer: 2,
    explanation: 'HTTP/REST has high overhead, not battery-friendly.',
  },
  {
    question: 'Zigbee is best suited for:',
    options: ['High-bandwidth streaming', 'Battery-operated IoT devices with low data rates', 'Large file transfers', 'Browser-based apps'],
    answer: 1,
    explanation: 'Zigbee is for low-power, low-data-rate IoT.',
  },
  {
    question: 'The range of Zigbee is typically:',
    options: ['1-5 meters', '10-100 meters', '1-5 kilometers', '100-500 kilometers'],
    answer: 1,
    explanation: 'Zigbee range is typically 10-100 meters.',
  },
  {
    question: 'Bluetooth/BLE is best for:',
    options: ['Long-range low-power', 'Short-range high-bandwidth', 'Long-range high-bandwidth', 'Very low data rate over kilometers'],
    answer: 1,
    explanation: 'BLE is for short-range, low-power communication.',
  },
  {
    question: 'Which protocol has "very low" overhead among MQTT, CoAP, HTTP, and WebSockets?',
    options: ['MQTT', 'CoAP', 'HTTP', 'WebSocket'],
    answer: 1,
    explanation: 'CoAP has very low overhead.',
  },
  {
    question: 'Which protocol uses "Topic" for message routing?',
    options: ['HTTP', 'CoAP', 'MQTT', 'FTP'],
    answer: 2,
    explanation: 'MQTT uses topics.',
  },
  {
    question: 'Which protocol uses "Observe" for push updates?',
    options: ['MQTT', 'CoAP', 'HTTP', 'WebSocket'],
    answer: 1,
    explanation: 'CoAP uses Observe.',
  },
  // Section B: Electronics, Sensors & Arduino
  {
    question: 'What is the function of a resistor?',
    options: ['Store energy', 'Limit current flow', 'Amplify signals', 'Convert AC to DC'],
    answer: 1,
    explanation: 'Resistors limit current flow.',
  },
  {
    question: 'What is the function of a capacitor?',
    options: ['Limit current', 'Store and release charge', 'Allow current in one direction', 'Convert light to electricity'],
    answer: 1,
    explanation: 'Capacitors store and release charge.',
  },
  {
    question: 'What is the function of a diode?',
    options: ['Store charge', 'Allow current in one direction only', 'Limit current', 'Amplify signals'],
    answer: 1,
    explanation: 'Diodes allow current in one direction.',
  },
  {
    question: "Ohm's Law states:",
    options: ['V = I × R', 'V = I / R', 'V = R / I', 'I = V × R'],
    answer: 0,
    explanation: "Ohm's Law: V = I * R.",
  },
  {
    question: 'If voltage increases and resistance stays constant, current:',
    options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'],
    answer: 1,
    explanation: 'Current increases with voltage (I = V/R).',
  },
  {
    question: 'If resistance increases and voltage stays constant, current:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Becomes infinite'],
    answer: 1,
    explanation: 'Current decreases as resistance increases.',
  },
  {
    question: 'What is the total resistance of two resistors (R1 and R2) in series?',
    options: ['R1 + R2', 'R1 × R2', '1/(R1 + R2)', 'R1 / R2'],
    answer: 0,
    explanation: 'Series resistance sums.',
  },
  {
    question: 'What is the total resistance of two resistors (R1 and R2) in parallel?',
    options: ['R1 + R2', '(R1 × R2) / (R1 + R2)', 'R1 × R2', 'R1 / R2'],
    answer: 1,
    explanation: 'Parallel resistance = (R1*R2)/(R1+R2).',
  },
  {
    question: 'In a series circuit, the same ______ flows through all components.',
    options: ['Voltage', 'Current', 'Power', 'Resistance'],
    answer: 1,
    explanation: 'Current is same in series.',
  },
  {
    question: 'In a parallel circuit, the same ______ is across all components.',
    options: ['Current', 'Voltage', 'Power', 'Resistance'],
    answer: 1,
    explanation: 'Voltage is same in parallel.',
  },
  {
    question: 'For a 10Ω, 20Ω, and 30Ω resistors in series, the total resistance is:',
    options: ['60Ω', '5.45Ω', '600Ω', '10Ω'],
    answer: 0,
    explanation: 'Total = 10+20+30 = 60Ω.',
  },
  {
    question: 'For a 10Ω, 20Ω, and 30Ω resistors in series with 12V battery, the current is:',
    options: ['0.2A', '0.5A', '1.2A', '2A'],
    answer: 0,
    explanation: 'I = V/R = 12/60 = 0.2A.',
  },
  {
    question: 'What is the voltage divider formula?',
    options: ['Vout = Vin × (R1 / R2)', 'Vout = Vin × (R2 / (R1 + R2))', 'Vout = Vin × (R1 + R2)', 'Vout = Vin / (R1 + R2)'],
    answer: 1,
    explanation: 'Voltage divider: Vout = Vin * (R2/(R1+R2)).',
  },
  {
    question: 'Why is a resistor necessary for an LED?',
    options: ['To increase brightness', 'To limit current and prevent damage', 'To store charge', 'To increase voltage'],
    answer: 1,
    explanation: 'Resistor limits current to protect LED.',
  },
  {
    question: 'An Arduino digital pin can supply a maximum of about:',
    options: ['10mA', '40mA', '100mA', '1A'],
    answer: 1,
    explanation: 'Arduino pins supply ~40mA max.',
  },
  {
    question: 'A DC motor typically needs:',
    options: ['Less than 1mA', '50mA to 2A', '10A to 20A', 'No current'],
    answer: 1,
    explanation: 'DC motors need 50mA to 2A.',
  },
  {
    question: 'Can you directly run a DC motor from an Arduino pin?',
    options: ['Yes, always', 'No, because the pin cannot supply enough current', 'Yes, if you use a higher voltage', 'No, because the motor is AC'],
    answer: 1,
    explanation: 'Arduino pins cannot supply enough current for motors.',
  },
  {
    question: 'A relay is used to:',
    options: ['Amplify signals', 'Control high voltage/current devices with a microcontroller', 'Store data', 'Convert analog to digital'],
    answer: 1,
    explanation: 'Relays control high-power devices with low-power signals.',
  },
  {
    question: 'What is PWM?',
    options: ['Pulse Width Modulation', 'Power Wavelength Modulation', 'Process Work Management', 'Programmable Web Module'],
    answer: 0,
    explanation: 'PWM stands for Pulse Width Modulation.',
  },
  {
    question: 'In PWM, the duty cycle represents:',
    options: ['The frequency of the signal', 'The percentage of time the signal is HIGH', 'The voltage level', 'The current level'],
    answer: 1,
    explanation: 'Duty cycle is the percentage of HIGH time.',
  },
  {
    question: 'If PWM duty cycle is 50%, the output power is:',
    options: ['0%', '25%', '50%', '100%'],
    answer: 2,
    explanation: '50% duty cycle gives 50% power.',
  },
  {
    question: 'PWM is used to control:',
    options: ['Servo motor angle and LED brightness', 'Only digital sensors', 'Only WiFi', 'Only battery charging'],
    answer: 0,
    explanation: 'PWM controls servos and LED brightness.',
  },
  {
    question: 'A servo motor has how many wires typically?',
    options: ['2', '3', '4', '5'],
    answer: 1,
    explanation: 'Servo motors typically have 3 wires (power, ground, signal).',
  },
  {
    question: 'Active sensors:',
    options: ['Need external power to generate signal', 'Generate their own signal (e.g., thermocouple)', 'Only detect light', 'Only detect temperature'],
    answer: 1,
    explanation: 'Active sensors generate their own signal.',
  },
  {
    question: 'Passive sensors:',
    options: ['Generate their own signal', 'Need external power to generate signal (e.g., camera, LDR)', 'Only detect motion', 'Only detect humidity'],
    answer: 1,
    explanation: 'Passive sensors need external power to generate signal.',
  },
  {
    question: 'Analog sensors give:',
    options: ['Discrete digital output', 'Continuous output (e.g., LM35, potentiometer)', 'Only 0 or 1', 'Only binary data'],
    answer: 1,
    explanation: 'Analog sensors provide continuous output.',
  },
  {
    question: 'Digital sensors give:',
    options: ['Continuous analog output', 'Discrete digital output (e.g., DHT11, PIR)', 'Only voltage', 'Only resistance'],
    answer: 1,
    explanation: 'Digital sensors provide discrete digital output.',
  },
  {
    question: 'Which sensor is a digital sensor?',
    options: ['LM35', 'Potentiometer', 'DHT11', 'LDR'],
    answer: 2,
    explanation: 'DHT11 is a digital sensor.',
  },
  {
    question: 'Which sensor is an analog sensor?',
    options: ['DHT11', 'PIR motion sensor', 'LM35', 'Ultrasonic sensor'],
    answer: 2,
    explanation: 'LM35 is an analog sensor.',
  },
  {
    question: 'The LM35 output increases by ______ per °C.',
    options: ['10mV', '100mV', '250mV', '1V'],
    answer: 0,
    explanation: 'LM35 gives 10mV per °C.',
  },
  {
    question: 'Why is the LM35 considered a smart sensor?',
    options: ['It has WiFi', 'It gives linear output directly in Celsius', 'It has a display', 'It is very large'],
    answer: 1,
    explanation: 'LM35 outputs linear voltage directly proportional to Celsius.',
  },
  {
    question: 'The DHT11 is a sensor that measures:',
    options: ['Only temperature', 'Only humidity', 'Both temperature and humidity', 'Light intensity'],
    answer: 2,
    explanation: 'DHT11 measures temperature and humidity.',
  },
  {
    question: 'The HC-SR04 is an:',
    options: ['Ultrasonic distance sensor', 'Temperature sensor', 'Light sensor', 'Motion sensor'],
    answer: 0,
    explanation: 'HC-SR04 is an ultrasonic distance sensor.',
  },
  {
    question: 'A potentiometer is a:',
    options: ['Digital sensor', 'Variable resistor that outputs analog voltage', 'Fixed resistor', 'Capacitor'],
    answer: 1,
    explanation: 'Potentiometer is a variable resistor giving analog voltage.',
  },
  {
    question: 'A PIR sensor is used to detect:',
    options: ['Temperature', 'Motion', 'Distance', 'Humidity'],
    answer: 1,
    explanation: 'PIR detects motion.',
  },
  {
    question: 'Which sensor is used for automatic street lights?',
    options: ['DHT11', 'LDR (Light Dependent Resistor)', 'PIR', 'LM35'],
    answer: 1,
    explanation: 'LDR detects light for street lights.',
  },
  {
    question: 'What is a "smart" sensor?',
    options: ['A sensor with a display', 'A sensor with internal processing/calibration', 'A sensor that is very expensive', 'A sensor that only works on WiFi'],
    answer: 1,
    explanation: 'Smart sensors have internal processing.',
  },
  {
    question: 'Arduino UNO has a ______ processor.',
    options: ['32-bit', '8-bit, 16MHz', '64-bit', '16-bit, 24MHz'],
    answer: 1,
    explanation: 'Arduino UNO has 8-bit 16MHz processor.',
  },
  {
    question: 'ESP32 has a ______ processor.',
    options: ['8-bit', '32-bit dual-core, 240MHz', '16-bit', '64-bit'],
    answer: 1,
    explanation: 'ESP32 has 32-bit dual-core 240MHz.',
  },
  {
    question: 'Does ESP32 have built-in Wi-Fi?',
    options: ['Yes', 'No', 'Only with external module', 'Only in ESP8266'],
    answer: 0,
    explanation: 'ESP32 has built-in Wi-Fi.',
  },
  {
    question: 'Does Arduino UNO have built-in Wi-Fi?',
    options: ['Yes', 'No', 'Only in Arduino Mega', 'Only in Arduino Nano'],
    answer: 1,
    explanation: 'Arduino UNO does not have built-in Wi-Fi.',
  },
  {
    question: 'ESP32 has ______ RAM compared to Arduino UNO.',
    options: ['Less', 'Much more (512KB vs 2KB)', 'Same', 'Equal'],
    answer: 1,
    explanation: 'ESP32 has much more RAM (512KB vs 2KB).',
  },
  {
    question: 'Which board is best for an IoT cloud-connected system?',
    options: ['Arduino UNO', 'ESP32', 'Arduino Mega', 'Arduino Nano'],
    answer: 1,
    explanation: 'ESP32 is best for IoT cloud projects.',
  },
  {
    question: 'Which board is best for a local sensor control project?',
    options: ['ESP32', 'Arduino UNO', 'Raspberry Pi 4', 'AWS EC2'],
    answer: 1,
    explanation: 'Arduino UNO is suitable for local sensor control.',
  },
  {
    question: 'A relay provides ______ between control and load circuits.',
    options: ['Direct connection', 'Electrical isolation', 'Short circuit', 'No isolation'],
    answer: 1,
    explanation: 'Relay provides electrical isolation.',
  },
  // Section C: Cloud Computing Fundamentals
  {
    question: 'What is Cloud Computing?',
    options: ['Storing data on a local hard drive', 'On-demand delivery of compute, storage, and applications over the internet', 'Using a single server for all tasks', 'Running software offline'],
    answer: 1,
    explanation: 'Cloud computing is on-demand delivery over the internet.',
  },
  {
    question: 'Cloud services are typically billed using:',
    options: ['A fixed monthly fee', 'Pay-as-you-go pricing', 'No billing', 'Hourly only'],
    answer: 1,
    explanation: 'Cloud uses pay-as-you-go pricing.',
  },
  {
    question: 'What is "Pay-as-you-go" pricing?',
    options: ['Pay a fixed amount regardless of usage', 'Pay only for the resources you actually use', 'Free for the first year', 'Pay a one-time fee'],
    answer: 1,
    explanation: 'Pay only for resources used.',
  },
  {
    question: 'Which is NOT a benefit of cloud computing?',
    options: ['Cost efficiency', 'Scalability', 'High upfront investment', 'Flexibility'],
    answer: 2,
    explanation: 'High upfront investment is not a benefit.',
  },
  {
    question: 'What is the On-Premise model?',
    options: ['Using cloud resources', 'Infrastructure is physically located within the organization', 'Using a public cloud', 'Using a hybrid cloud'],
    answer: 1,
    explanation: 'On-premise means infrastructure within the organization.',
  },
  {
    question: 'Which is an advantage of On-Premise?',
    options: ['No hardware maintenance', 'Full control over data and security', 'Low upfront cost', 'Global reach'],
    answer: 1,
    explanation: 'On-premise gives full control over data and security.',
  },
  {
    question: 'Which is a disadvantage of On-Premise?',
    options: ['Less control over data', 'High maintenance and infrastructure costs', 'No customization', 'Dependency on third-party vendors'],
    answer: 1,
    explanation: 'On-premise has high maintenance costs.',
  },
  {
    question: 'Public Cloud is:',
    options: ['Shared infrastructure owned by a provider (AWS, Azure)', 'Infrastructure for one organization only', 'Physical servers in your office', 'A personal computer'],
    answer: 0,
    explanation: 'Public cloud is shared infrastructure owned by a provider.',
  },
  {
    question: 'Private Cloud is:',
    options: ['Shared infrastructure', 'Dedicated infrastructure for one organization', 'A type of SaaS', 'A public network'],
    answer: 1,
    explanation: 'Private cloud is dedicated to one organization.',
  },
  {
    question: 'Hybrid Cloud is:',
    options: ['Mix of public and private cloud', 'Only public cloud', 'Only private cloud', 'A type of IaaS'],
    answer: 0,
    explanation: 'Hybrid cloud combines public and private.',
  },
  {
    question: 'Community Cloud is:',
    options: ['Shared among organizations with common concerns (e.g., hospitals)', 'A public cloud', 'A private cloud', 'A type of SaaS'],
    answer: 0,
    explanation: 'Community cloud is shared among organizations with common concerns.',
  },
  {
    question: 'Which cloud model is best for a startup with cost-sensitive applications?',
    options: ['Private Cloud', 'Public Cloud', 'On-Premise', 'Community Cloud'],
    answer: 1,
    explanation: 'Public cloud is cost-effective for startups.',
  },
  {
    question: 'Which cloud model is best for a bank requiring high security?',
    options: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Community Cloud'],
    answer: 1,
    explanation: 'Private cloud offers high security for banks.',
  },
  {
    question: 'IaaS stands for:',
    options: ['Infrastructure as a Service', 'Internet as a Service', 'Information as a Service', 'Integration as a Service'],
    answer: 0,
    explanation: 'IaaS = Infrastructure as a Service.',
  },
  {
    question: 'PaaS stands for:',
    options: ['Platform as a Service', 'Program as a Service', 'Processing as a Service', 'Protocol as a Service'],
    answer: 0,
    explanation: 'PaaS = Platform as a Service.',
  },
  {
    question: 'SaaS stands for:',
    options: ['Software as a Service', 'Storage as a Service', 'System as a Service', 'Security as a Service'],
    answer: 0,
    explanation: 'SaaS = Software as a Service.',
  },
  {
    question: 'In IaaS, the user manages:',
    options: ['Hardware, servers, and network', 'OS, apps, and data', 'Everything', 'Nothing'],
    answer: 1,
    explanation: 'In IaaS, user manages OS, apps, and data.',
  },
  {
    question: 'In PaaS, the user manages:',
    options: ['Hardware and OS', 'Applications and data', 'Everything', 'Nothing'],
    answer: 1,
    explanation: 'In PaaS, user manages applications and data.',
  },
  {
    question: 'In SaaS, the user manages:',
    options: ['OS and apps', 'Data only', 'Everything', 'Nothing (except user data)'],
    answer: 3,
    explanation: 'In SaaS, user manages only their data (and sometimes configuration).',
  },
  {
    question: 'Which is an example of IaaS?',
    options: ['Gmail', 'AWS EC2', 'Google App Engine', 'Zoom'],
    answer: 1,
    explanation: 'AWS EC2 is IaaS.',
  },
  {
    question: 'Which is an example of PaaS?',
    options: ['AWS EC2', 'Google App Engine', 'Gmail', 'Microsoft Office 365'],
    answer: 1,
    explanation: 'Google App Engine is PaaS.',
  },
  {
    question: 'Which is an example of SaaS?',
    options: ['AWS EC2', 'AWS Lambda', 'Google Docs', 'Azure VM'],
    answer: 2,
    explanation: 'Google Docs is SaaS.',
  },
  {
    question: 'IaaS is best for:',
    options: ['End users', 'System administrators and developers', 'Non-technical users', 'Only large enterprises'],
    answer: 1,
    explanation: 'IaaS is for sysadmins and developers.',
  },
  {
    question: 'SaaS is best for:',
    options: ['System administrators', 'Developers', 'End users', 'Cloud providers only'],
    answer: 2,
    explanation: 'SaaS is for end users.',
  },
  {
    question: 'Shared Responsibility Model means:',
    options: ['Cloud provider is fully responsible for security', 'Customer is fully responsible for security', 'Security responsibility is shared between provider and customer', 'No one is responsible for security'],
    answer: 2,
    explanation: 'Security is shared between provider and customer.',
  },
  {
    question: 'Which is the responsibility of the Cloud Provider?',
    options: ['Your application code', 'Physical data centers, servers, and network infrastructure', 'Your user passwords', 'Your database design'],
    answer: 1,
    explanation: 'Provider is responsible for the infrastructure.',
  },
  {
    question: 'Which is the responsibility of the Customer?',
    options: ['Physical security of data centers', 'Hardware maintenance', 'Data, applications, and access management', 'Power and cooling'],
    answer: 2,
    explanation: 'Customer is responsible for data, apps, and access.',
  },
  {
    question: 'Resource pooling in cloud computing means:',
    options: ['Each user gets dedicated hardware', 'Multiple users share the same pool of computing resources', 'Resources are fixed and cannot be changed', 'Resources are only available at night'],
    answer: 1,
    explanation: 'Resource pooling means sharing resources among multiple users.',
  },
  {
    question: 'What is virtualization?',
    options: ['Creating physical servers', 'Creating multiple virtual machines on a single physical server', 'Deleting servers', 'Using only physical servers'],
    answer: 1,
    explanation: 'Virtualization creates multiple VMs on one physical server.',
  },
  {
    question: 'An advantage of virtualization is:',
    options: ['Higher hardware cost', 'Isolation between VMs, failure of one doesn\'t affect others', 'Slow performance', 'Limited flexibility'],
    answer: 1,
    explanation: 'Virtualization provides isolation between VMs.',
  },
  {
    question: 'High Availability refers to:',
    options: ['A system that is always offline', 'A system that remains operational for a very high percentage of time (99.99%)', 'A system that is slow', 'A system that only works during business hours'],
    answer: 1,
    explanation: 'High availability means nearly 100% uptime.',
  },
  // Section D: AWS Services
  {
    question: 'AWS Lambda is a:',
    options: ['Virtual server service', 'Serverless computing service', 'Storage service', 'Database service'],
    answer: 1,
    explanation: 'Lambda is serverless compute.',
  },
  {
    question: 'AWS Lambda is:',
    options: ['Stateful', 'Stateless', 'Requires server management', 'Always running'],
    answer: 1,
    explanation: 'Lambda is stateless.',
  },
  {
    question: 'AWS Lambda is triggered by:',
    options: ['Only manual clicks', 'Events like API requests, file uploads, database updates', 'Scheduled times only', 'No triggers'],
    answer: 1,
    explanation: 'Lambda is event-driven.',
  },
  {
    question: "AWS Lambda's maximum execution time is:",
    options: ['Unlimited', '15 minutes', '5 minutes', '1 hour'],
    answer: 1,
    explanation: 'Lambda has a 15-minute timeout.',
  },
  {
    question: 'AWS Lambda pricing is based on:',
    options: ['Monthly fixed fee', 'Number of invocations and execution time', 'Storage used only', 'Number of servers'],
    answer: 1,
    explanation: 'Lambda pricing is per invocation and execution time.',
  },
  {
    question: 'AWS Lambda scales:',
    options: ['Manually', 'Automatically', 'Does not scale', 'Only with user intervention'],
    answer: 1,
    explanation: 'Lambda scales automatically.',
  },
  {
    question: 'Which is best for a long-running application with 24/7 demand?',
    options: ['AWS Lambda', 'AWS EC2', 'AWS S3', 'AWS IAM'],
    answer: 1,
    explanation: 'EC2 is best for 24/7 applications.',
  },
  {
    question: 'Which is best for event-driven short tasks (e.g., image thumbnail generation)?',
    options: ['AWS EC2', 'AWS Lambda', 'AWS S3', 'AWS CloudWatch'],
    answer: 1,
    explanation: 'Lambda is ideal for short event-driven tasks.',
  },
  {
    question: 'AWS EC2 stands for:',
    options: ['Elastic Compute Cloud', 'Elastic Cloud Computing', 'Electronic Compute Cloud', 'Elastic Central Cloud'],
    answer: 0,
    explanation: 'EC2 = Elastic Compute Cloud.',
  },
  {
    question: 'AWS EC2 provides:',
    options: ['Virtual servers in the cloud', 'Object storage', 'Serverless functions', 'Monitoring services'],
    answer: 0,
    explanation: 'EC2 provides virtual servers.',
  },
  {
    question: 'In EC2, the user manages:',
    options: ['Nothing', 'The OS, applications, and database', 'Only data', 'Only the physical server'],
    answer: 1,
    explanation: 'User manages OS, apps, and data in EC2.',
  },
  {
    question: 'EC2 scaling is:',
    options: ['Automatic only', 'Manual or automatic', 'Not possible', 'Only manual'],
    answer: 1,
    explanation: 'EC2 can scale manually or automatically.',
  },
  {
    question: 'EC2 pricing is:',
    options: ['Pay per invocation', 'Pay for the time the instance is running', 'Pay for storage only', 'Free'],
    answer: 1,
    explanation: 'EC2 charges per running time.',
  },
  {
    question: 'AWS S3 stands for:',
    options: ['Simple Storage Service', 'Secure Storage Service', 'Scalable Storage Service', 'Server Storage Service'],
    answer: 0,
    explanation: 'S3 = Simple Storage Service.',
  },
  {
    question: 'AWS S3 is a:',
    options: ['Compute service', 'Object storage service', 'Database service', 'Serverless service'],
    answer: 1,
    explanation: 'S3 is object storage.',
  },
  {
    question: 'AWS S3 stores data in:',
    options: ['Tables', 'Buckets', 'Instances', 'Containers'],
    answer: 1,
    explanation: 'S3 stores data in buckets.',
  },
  {
    question: 'What is the durability of AWS S3?',
    options: ['99%', '99.9%', '99.99%', '99.999999999% (11 nines)'],
    answer: 3,
    explanation: 'S3 has 11 nines durability.',
  },
  {
    question: 'Which AWS service is used for monitoring?',
    options: ['AWS Lambda', 'AWS CloudWatch', 'AWS S3', 'AWS IAM'],
    answer: 1,
    explanation: 'CloudWatch is for monitoring.',
  },
  {
    question: 'AWS CloudWatch monitors:',
    options: ['CPU usage and memory usage', 'Physical server temperature', 'Only network traffic', 'Only application logs'],
    answer: 0,
    explanation: 'CloudWatch monitors CPU and memory usage.',
  },
  {
    question: 'AWS CloudWatch can:',
    options: ['Generate alerts and alarms', 'Store files', 'Run code', 'Host websites'],
    answer: 0,
    explanation: 'CloudWatch can generate alerts.',
  },
  {
    question: 'AWS IAM stands for:',
    options: ['Identity and Access Management', 'Internet Access Manager', 'Integrated Application Model', 'Identity Application Management'],
    answer: 0,
    explanation: 'IAM = Identity and Access Management.',
  },
  {
    question: 'AWS IAM is used for:',
    options: ['Storage', 'Access control and security', 'Monitoring', 'Running code'],
    answer: 1,
    explanation: 'IAM is for access control.',
  },
  {
    question: 'AWS IAM includes:',
    options: ['Users, groups, roles, and policies', 'Buckets and objects', 'Instances and AMIs', 'Functions and triggers'],
    answer: 0,
    explanation: 'IAM includes users, groups, roles, and policies.',
  },
  {
    question: 'MFA stands for:',
    options: ['Multi-Factor Authentication', 'Multi-File Access', 'Master Function Access', 'Multi-Form Authentication'],
    answer: 0,
    explanation: 'MFA = Multi-Factor Authentication.',
  },
  {
    question: 'AWS SNS stands for:',
    options: ['Simple Notification Service', 'Secure Network Service', 'Storage Notification System', 'Simple Network Service'],
    answer: 0,
    explanation: 'SNS = Simple Notification Service.',
  },
  {
    question: 'AWS SQS stands for:',
    options: ['Simple Queue Service', 'Secure Query Service', 'Storage Queue System', 'Simple Quality Service'],
    answer: 0,
    explanation: 'SQS = Simple Queue Service.',
  },
  {
    question: 'SNS is used for:',
    options: ['Storing files', 'Publish/subscribe messaging, alerts, fan-out', 'Running code', 'Virtual machines'],
    answer: 1,
    explanation: 'SNS is for pub/sub messaging.',
  },
  {
    question: 'SQS is used for:',
    options: ['Storing files', 'Decoupling microservices, async job processing', 'Monitoring', 'Identity management'],
    answer: 1,
    explanation: 'SQS is for decoupling services and async processing.',
  },
  {
    question: 'Which AWS service is "serverless"?',
    options: ['EC2', 'S3', 'Lambda', 'CloudWatch'],
    answer: 2,
    explanation: 'Lambda is serverless.',
  },
  {
    question: 'Which AWS service provides "virtual servers"?',
    options: ['Lambda', 'EC2', 'S3', 'SNS'],
    answer: 1,
    explanation: 'EC2 provides virtual servers.',
  },
  {
    question: 'Which AWS service is best for static website hosting?',
    options: ['EC2', 'Lambda', 'S3', 'IAM'],
    answer: 2,
    explanation: 'S3 can host static websites.',
  },
  {
    question: 'Which AWS service is best for storing backups?',
    options: ['EC2', 'Lambda', 'S3', 'CloudWatch'],
    answer: 2,
    explanation: 'S3 is ideal for backups.',
  },
  {
    question: 'Which AWS service is best for a "data lake" for analytics?',
    options: ['EC2', 'Lambda', 'S3', 'SNS'],
    answer: 2,
    explanation: 'S3 is used for data lakes.',
  },
  {
    question: 'In AWS Lambda, you pay for:',
    options: ['Storage only', 'Execution time and invocations', 'Number of servers', 'Monthly fee'],
    answer: 1,
    explanation: 'Lambda pricing is based on execution time and number of invocations.',
  },
  // Section E: IoT Architecture & Edge Computing
  {
    question: 'What are the 3 fundamental components of IoT?',
    options: ['Sensor, Processor, Actuator', 'CPU, GPU, RAM', 'WiFi, Bluetooth, Zigbee', 'Cloud, Edge, Fog'],
    answer: 0,
    explanation: 'IoT has sensor, processor, actuator.',
  },
  {
    question: 'Which component collects data from the physical environment?',
    options: ['Actuator', 'Sensor', 'Processor', 'Broker'],
    answer: 1,
    explanation: 'Sensors collect data.',
  },
  {
    question: 'Which component processes data collected by the sensor?',
    options: ['Actuator', 'Sensor', 'Processor', 'Broker'],
    answer: 2,
    explanation: 'Processor processes data.',
  },
  {
    question: 'Which component takes physical action based on processor instructions?',
    options: ['Sensor', 'Actuator', 'Processor', 'Router'],
    answer: 1,
    explanation: 'Actuators take physical action.',
  },
  {
    question: 'In IoT architecture, the Perception Layer includes:',
    options: ['WiFi and Bluetooth', 'Sensors and actuators', 'Smart home apps', 'Databases'],
    answer: 1,
    explanation: 'Perception layer includes sensors and actuators.',
  },
  {
    question: 'In IoT architecture, the Network Layer includes:',
    options: ['Sensors', 'WiFi, Bluetooth, MQTT', 'Smart city dashboards', 'Actuators'],
    answer: 1,
    explanation: 'Network layer includes communication protocols.',
  },
  {
    question: 'In IoT architecture, the Application Layer includes:',
    options: ['Sensors', 'Network protocols', 'Smart health, smart city services', 'Actuators'],
    answer: 2,
    explanation: 'Application layer includes end-user services.',
  },
  {
    question: 'Edge Computing processes data:',
    options: ['In a remote data center', 'Locally near the device', 'On a mainframe', 'Only in the cloud'],
    answer: 1,
    explanation: 'Edge processes data near the device.',
  },
  {
    question: 'What is an advantage of Edge Computing?',
    options: ['High latency', 'Reduced bandwidth usage', 'Needs more bandwidth', 'Slower response'],
    answer: 1,
    explanation: 'Edge reduces bandwidth usage.',
  },
  {
    question: 'Edge Computing is suitable for:',
    options: ['Large-scale offline analytics', 'Real-time applications like self-driving cars', 'Non-critical data only', 'Large file transfers'],
    answer: 1,
    explanation: 'Edge is for real-time applications.',
  },
  {
    question: 'Cloud Computing processes data:',
    options: ['Near the device', 'In a remote data center', 'On the device itself', 'On a local server'],
    answer: 1,
    explanation: 'Cloud processes data in remote data centers.',
  },
  {
    question: 'Cloud Computing has:',
    options: ['High latency', 'Low latency', 'No latency', 'Zero bandwidth'],
    answer: 0,
    explanation: 'Cloud has higher latency than edge.',
  },
  {
    question: 'Edge Computing is best for:',
    options: ['Systems requiring instant decisions', 'Systems with plenty of bandwidth', 'Systems that are not time-sensitive', 'Systems that are always offline'],
    answer: 0,
    explanation: 'Edge is for instant decisions.',
  },
  {
    question: 'Which of the following is a 3-layer IoT architecture?',
    options: ['Perception, Network, Application', 'Input, Processing, Output', 'Hardware, Software, Network', 'Edge, Fog, Cloud'],
    answer: 0,
    explanation: 'IoT architecture has Perception, Network, Application layers.',
  },
  {
    question: 'Sensors convert physical conditions into:',
    options: ['Mechanical energy', 'Digital signals', 'Light', 'Sound'],
    answer: 1,
    explanation: 'Sensors output digital or analog signals.',
  },
  {
    question: 'Actuators convert digital signals into:',
    options: ['Physical action', 'Electrical signals', 'Data packets', 'None'],
    answer: 0,
    explanation: 'Actuators perform physical actions.',
  },
  {
    question: 'What is a transistor used for?',
    options: ['Storing data permanently', 'Acting as a switch or amplifier', 'Generating electricity', 'Only for LED control'],
    answer: 1,
    explanation: 'Transistors can switch or amplify signals.',
  },
  {
    question: 'Logic gates are made from:',
    options: ['Resistors', 'Transistors', 'Capacitors', 'Diodes'],
    answer: 1,
    explanation: 'Logic gates are built from transistors.',
  },
  {
    question: 'A microprocessor is made of:',
    options: ['Millions of resistors', 'Billions of transistors integrated on a chip', 'Capacitors only', 'Diodes only'],
    answer: 1,
    explanation: 'Microprocessors are made of billions of transistors.',
  },
  {
    question: 'Which of the following is an example of an actuator?',
    options: ['Temperature sensor', 'Electric motor', 'Light sensor', 'Humidity sensor'],
    answer: 1,
    explanation: 'Electric motor is an actuator.',
  },
  {
    question: 'A solenoid valve controls:',
    options: ['Voltage', 'Fluid flow', 'Light', 'Motion'],
    answer: 1,
    explanation: 'Solenoid valves control fluid flow.',
  },
  {
    question: 'A relay switch:',
    options: ['Turns electric circuits on/off', 'Stores charge', 'Measures temperature', 'Measures distance'],
    answer: 0,
    explanation: 'Relays turn circuits on/off.',
  },
  {
    question: 'Which is an example of an actuator used for automated gates?',
    options: ['LDR', 'Electric motor', 'DHT11', 'PIR sensor'],
    answer: 1,
    explanation: 'Electric motor is used for automated gates.',
  },
  {
    question: 'Which layer of IoT architecture is responsible for transferring data?',
    options: ['Perception Layer', 'Network Layer', 'Application Layer', 'Physical Layer'],
    answer: 1,
    explanation: 'Network layer handles data transfer.',
  },
  {
    question: 'Which layer of IoT architecture is responsible for collecting data?',
    options: ['Perception Layer', 'Network Layer', 'Application Layer', 'Processing Layer'],
    answer: 0,
    explanation: 'Perception layer collects data.',
  },
  // Section F: Mixed & Scenario-Based
  {
    question: 'If you need to send a command to a device (guaranteed delivery), which MQTT QoS is best?',
    options: ['QoS 0', 'QoS 1', 'QoS 2', 'QoS 3'],
    answer: 2,
    explanation: 'QoS 2 guarantees exactly-once delivery.',
  },
  {
    question: 'For a sensor that sends temperature every 10 seconds and duplicates are acceptable, which QoS is best?',
    options: ['QoS 0', 'QoS 1', 'QoS 2', 'QoS 3'],
    answer: 1,
    explanation: 'QoS 1 (at-least-once) is fine if duplicates are acceptable.',
  },
  {
    question: 'Which protocol is best for a browser-based real-time chat application?',
    options: ['MQTT', 'CoAP', 'WebSockets', 'HTTP'],
    answer: 2,
    explanation: 'WebSockets are best for browser real-time chat.',
  },
  {
    question: 'Which protocol is best for a smart meter that sends small data packets over a constrained network?',
    options: ['HTTP', 'CoAP', 'FTP', 'SMTP'],
    answer: 1,
    explanation: 'CoAP is designed for constrained networks.',
  },
  {
    question: 'Which AWS service would you use to host a 24/7 website?',
    options: ['Lambda', 'EC2', 'S3 (for static content)', 'CloudWatch'],
    answer: 1,
    explanation: 'EC2 or S3 can host websites; for dynamic 24/7, EC2 is typical.',
  },
  {
    question: 'Which AWS service would you use to automatically resize an image when uploaded to S3?',
    options: ['EC2', 'Lambda', 'IAM', 'SNS'],
    answer: 1,
    explanation: 'Lambda can be triggered by S3 uploads.',
  },
  {
    question: 'Which AWS service would you use to monitor CPU usage of an EC2 instance?',
    options: ['IAM', 'S3', 'CloudWatch', 'SNS'],
    answer: 2,
    explanation: 'CloudWatch monitors EC2 CPU usage.',
  },
  {
    question: 'Which AWS service would you use to manage user permissions?',
    options: ['CloudWatch', 'IAM', 'S3', 'SQS'],
    answer: 1,
    explanation: 'IAM manages user permissions.',
  },
  {
    question: 'If you have a sensor and want to send data to the cloud with minimal bandwidth, which protocol is best?',
    options: ['HTTP', 'MQTT', 'FTP', 'SMTP'],
    answer: 1,
    explanation: 'MQTT is lightweight and bandwidth-efficient.',
  },
  {
    question: 'If your device has very limited battery and CPU, which protocol should you use?',
    options: ['HTTP', 'CoAP', 'AMQP', 'FTP'],
    answer: 1,
    explanation: 'CoAP is designed for constrained devices.',
  },
  {
    question: 'Which cloud deployment model is best for a hospital sharing data among multiple hospitals?',
    options: ['Public Cloud', 'Private Cloud', 'Community Cloud', 'Hybrid Cloud'],
    answer: 2,
    explanation: 'Community cloud is for organisations with common concerns.',
  },
  {
    question: 'Which cloud deployment model is best for a bank that must keep all data on-premises?',
    options: ['Public Cloud', 'Private Cloud', 'Community Cloud', 'Hybrid Cloud'],
    answer: 1,
    explanation: 'Private cloud (or on-premise) is for high security.',
  },
  {
    question: 'Which cloud deployment model allows you to use public cloud for web traffic but keep sensitive data in private cloud?',
    options: ['Public Cloud', 'Private Cloud', 'Community Cloud', 'Hybrid Cloud'],
    answer: 3,
    explanation: 'Hybrid cloud combines public and private.',
  },
  {
    question: 'What is the primary benefit of "Pay-as-you-go" for a startup?',
    options: ['High upfront cost', 'No upfront investment and cost efficiency', 'Requires buying hardware', 'Fixed pricing'],
    answer: 1,
    explanation: 'Pay-as-you-go eliminates upfront investment.',
  },
  {
    question: 'What is the purpose of a voltage divider circuit?',
    options: ['To increase voltage', 'To step down voltage for sensor interfacing', 'To store charge', 'To limit current'],
    answer: 1,
    explanation: 'Voltage dividers step down voltage.',
  },
  {
    question: 'If you connect 3 batteries of 1.5V in series, the total voltage is:',
    options: ['1.5V', '3V', '4.5V', '6V'],
    answer: 2,
    explanation: 'Series: 1.5*3 = 4.5V.',
  },
  {
    question: 'If you connect 3 batteries of 1.5V in parallel, the total voltage is:',
    options: ['1.5V', '3V', '4.5V', '6V'],
    answer: 0,
    explanation: 'Parallel: voltage remains 1.5V.',
  },
  {
    question: 'Which of the following is true about series resistors?',
    options: ['Total resistance decreases', 'Total resistance increases', 'Voltage is same across all', 'Current is different through each'],
    answer: 1,
    explanation: 'Series resistors add, increasing total resistance.',
  },
  {
    question: 'Which of the following is true about parallel resistors?',
    options: ['Total resistance increases', 'Total resistance decreases', 'Current is same through all', 'Voltage is different across each'],
    answer: 1,
    explanation: 'Parallel resistors reduce total resistance.',
  },
  {
    question: 'Which sensor type is most susceptible to noise?',
    options: ['Digital sensor', 'Analog sensor', 'Both equally', 'None'],
    answer: 1,
    explanation: 'Analog sensors are more susceptible to noise.',
  },
  {
    question: 'What is the role of a broker in MQTT?',
    options: ['Sends data', 'Receives and routes messages', 'Subscribes to topics', 'Measures temperature'],
    answer: 1,
    explanation: 'Broker receives and routes messages.',
  },
  {
    question: 'What is the role of a publisher in MQTT?',
    options: ['Receives messages', 'Sends messages to a topic', 'Routes messages', 'Stores messages'],
    answer: 1,
    explanation: 'Publisher sends messages to topics.',
  },
  {
    question: 'What is the role of a subscriber in MQTT?',
    options: ['Sends messages', 'Receives messages by subscribing to topics', 'Routes messages', 'Creates topics'],
    answer: 1,
    explanation: 'Subscriber receives messages from topics.',
  },
  {
    question: 'In MQTT, a "Topic" is:',
    options: ['A physical device', 'A pre-defined label used to categorize messages', 'A type of sensor', 'A server'],
    answer: 1,
    explanation: 'Topics are labels for message routing.',
  },
  {
    question: 'Which protocol is best for high-load enterprise message queuing?',
    options: ['MQTT', 'CoAP', 'AMQP', 'WebSocket'],
    answer: 2,
    explanation: 'AMQP is for enterprise queuing.',
  },
  {
    question: 'Which protocol is best for very constrained devices that can\'t maintain persistent TCP connections?',
    options: ['MQTT', 'CoAP', 'AMQP', 'HTTP'],
    answer: 1,
    explanation: 'CoAP uses UDP and is connectionless.',
  },
  {
    question: 'If a device needs to run for months on a coin-cell battery, which protocol is preferred?',
    options: ['HTTP', 'MQTT', 'CoAP', 'WebSocket'],
    answer: 2,
    explanation: 'CoAP is low-power and suitable for battery devices.',
  },
  {
    question: 'Which of the following is a benefit of Edge Computing?',
    options: ['High latency', 'More bandwidth usage', 'Lower latency and reduced bandwidth', 'Centralized processing'],
    answer: 2,
    explanation: 'Edge reduces latency and bandwidth.',
  },
  {
    question: 'In IoT, a relay is used to:',
    options: ['Measure temperature', 'Control high-power devices', 'Store data', 'Communicate with the cloud'],
    answer: 1,
    explanation: 'Relays control high-power devices.',
  },
  {
    question: 'Which of the following is a common use of AWS S3?',
    options: ['Running code', 'Hosting a virtual server', 'Storing backups and static website hosting', 'Monitoring CPU usage'],
    answer: 2,
    explanation: 'S3 is used for storage and static hosting.',
  },
  {
    question: 'Which of the following is a common use of AWS Lambda?',
    options: ['Hosting a 24/7 database', 'Storing backups', 'Event-driven image processing', 'Monitoring cloud resources'],
    answer: 2,
    explanation: 'Lambda is used for event-driven processing.',
  },
  {
    question: 'What is the maximum current an Arduino pin can supply safely?',
    options: ['10mA', '20mA', '40mA', '100mA'],
    answer: 2,
    explanation: 'Arduino pins safely supply up to 40mA.',
  },
  {
    question: 'Which component allows current to flow in only one direction?',
    options: ['Resistor', 'Capacitor', 'Diode', 'Transistor'],
    answer: 2,
    explanation: 'Diode allows current in one direction.',
  },
  {
    question: 'What is the main difference between IoT and traditional embedded systems?',
    options: ['IoT devices have no sensors', 'IoT devices are connected to the internet/cloud', 'IoT devices are larger', 'IoT devices use no processors'],
    answer: 1,
    explanation: 'IoT is connected to the internet.',
  },
  {
    question: 'Which protocol is best for a smart home automation system where many low-power sensors need to send small data packets?',
    options: ['HTTP', 'MQTT', 'FTP', 'SMTP'],
    answer: 1,
    explanation: 'MQTT is ideal for smart home IoT.',
  },
];

// ------------------------------------------------------------
// 2. SHORT QUESTIONS
// ------------------------------------------------------------
const SHORT_QUESTIONS: string[] = [
  "What are the problems with HTTP's Request-Response overhead?",
  "Define the Publish-Subscribe pattern and state the roles of Publisher, Subscriber, and Broker.",
  "What are the strengths of MQTT?",
  "What are the limitations of MQTT?",
  "What is the main difference between QoS 1 (At-least-once) and QoS 2 (Exactly-once) in MQTT?",
  "Describe the CoAP protocol and list two of its key features (e.g., UDP, Observe mode).",
  "What are Active vs. Passive sensors? Give one example of each.",
  "What are Analog vs. Digital sensors? Give one example of each.",
  "State the function of a Resistor, a Capacitor, and a Diode.",
  "State Ohm's Law and write the mathematical formula.",
  "What is the purpose of a voltage divider circuit?",
  "Why is the LM35 considered a smart sensor compared to a thermostat?",
  "What is the working principle of a Potentiometer?",
  "What is the working principle of an Ultrasonic Sensor (HC-SR04)?",
  "Define Cloud Computing and 'Pay-as-you-go' pricing.",
  "What is the On-Premise development model?",
  "What is IaaS, PaaS, and SaaS? (Give 1 example each).",
  "What is Amazon S3 and what are its key features?",
  "What is AWS Lambda and what is its main execution time limit?",
  "What is the purpose of Amazon SNS and SQS?",
  "What is AWS IAM and what are its key concepts?",
  "Compare Arduino and ESP32 based on CPU, Wi-Fi, Bluetooth, RAM, and Use Case.",
  "When is a relay used in an embedded system?",
  "Can you directly run a DC motor from an Arduino digital out pin? Justify.",
  "Explain the PWM concept used to control Servo motors and LED brightness.",
  "What is the duty cycle in PWM?",
  "Compare Zigbee with Bluetooth/BLE based on range, power, battery, and data rate.",
  "What does MQTT stand for and what is its purpose?",
  "What are the key components of MQTT?",
  "In which situations should you avoid MQTT, CoAP, and HTTP/REST?",
  "Compare MQTT and CoAP in terms of transport, communication model, overhead, and use case.",
  "Explain the different Cloud Development Models (Public, Private, Hybrid, Community) with use cases.",
  "What are the 3 fundamental components in IoT?",
  "What are the three layers of IoT Architecture?",
  "What is Edge Computing in IoT? List its advantages.",
  "What is the Shared Responsibility Model in Cloud Computing?",
  "What are the responsibilities of the Cloud Provider?",
  "What is AWS CloudWatch? What does it help monitor?",
  "What is AWS Lambda? List its key features.",
  "What is AWS EC2? List its key features.",
  "What is AWS S3? List its key features.",
  "What is a Sensor? Give 4 common examples.",
  "What is an Actuator? Give 3 common examples.",
  "What is a Transistor? How does it relate to processors?",
  "What is AWS IAM? List its key features.",
  "What is High Availability in Cloud Computing?",
];

// ------------------------------------------------------------
// 3. LONG QUESTIONS
// ------------------------------------------------------------
const LONG_QUESTIONS: string[] = [
  "Describe the IoT data flow from sensor collection to actuation (Step 01 to Step 05).",
  "Describe the Series and Parallel configurations of resistors. How do you calculate the resultant resistance in each case?",
  "Describe the Series and Parallel configurations of batteries. How do you determine the resultant voltage in each case?",
  "Explain the working principle of the LM35 and DHT11/DHT12 sensors.",
  "Compare Amazon EC2 and AWS Lambda based on: Management, Scaling, Cost Model, Execution Limit, and Best Use Cases.",
  "Explain the working principles and use cases of digital and analog pins in Arduino, with examples of integrated sensors.",
  "What are the different Cloud Service Models? Explain each with examples and common scenarios.",
  "Explain the Publish-Subscribe pattern in detail, focusing on the Broker, Topics, and how they decouple clients.",
  "Explain the WebSockets overview, including the handshake process and full-duplex communication.",
  "How does CoAP work in application? Explain its use in extremely small, low-power embedded devices.",
  "Why is it necessary to use a proper resistor to control an LED with Arduino? Explain the danger if no resistor is used.",
  "Explain the voltage divider circuit formula and describe its application in sensor interfacing (e.g., converting 3V logic for ESP32).",
  "Design an example MQTT topic hierarchy for home automation.",
  "Design an MQTT topic hierarchy for a smart college system.",
  "Explain and compare IaaS, PaaS, and SaaS based on what you manage, best for, and examples.",
  "Describe the Edge Computing vs. Cloud Computing comparison (processing location, response time, resources, bandwidth, etc.).",
  "Explain the advantages of Cloud Computing (Cost efficiency, low upfront investment, scalability, flexibility, resource utilization).",
  "Explain the concept of resource pooling and its advantages in Cloud Computing.",
  "Explain the concept of virtualization and its advantages (cost saving, isolation, flexibility, support for cloud services).",
  "Explain AWS Lambda in detail (serverless, event-driven, automatic scaling, pay-as-you-go) with an example.",
  "Explain AWS EC2 in detail (virtual machines, scalability, full control) and its use cases.",
  "Explain AWS S3 in detail (scalable storage, high durability, easy access, security, pay-as-you-go) with examples.",
  "Explain the difference between Lambda, EC2, and S3 (full form, service type, purpose, server management, scaling, pricing).",
  "Explain Sensor vs. Actuator with definitions and examples.",
  "Explain the working principle of a Servo motor and LED with Arduino.",
  "Explain the data flow and architecture of IoT (Perception, Network, Application layers).",
  "Explain the AWS Shared Responsibility Model in detail.",
];

// ------------------------------------------------------------
// 4. VVI QUESTIONS
// ------------------------------------------------------------
const VVI_QUESTIONS: string[] = [
  "VVI: Explain the strengths and limitations of MQTT in detail.",
  "VVI: Compare MQTT, CoAP, HTTP, WebSockets, and AMQP based on their transport protocol, direction, and device weight.",
  "VVI: Describe the Series and Parallel configurations of both resistors and batteries, including formulas and calculations.",
  "VVI: For a circuit with 10Ω, 20Ω, and 30Ω resistors in series with a 12V battery, find the total resistance and current.",
  "VVI: Compare Amazon EC2 and AWS Lambda in full detail (Management, Scaling, Cost, Best Use Cases).",
  "VVI: Explain the complete IoT data flow (Sensors → Transmission → Processing → Action → Actuation) and the different types of sensors.",
  "VVI: Explain the Publish-Subscribe pattern and the problems with HTTP that MQTT solves.",
  "VVI: Explain the working principle of WebSockets and why it is better than HTTP for real-time communication.",
  "VVI: Explain the On-Premise model, its advantages, and its best use cases. Also explain the Cloud Service Models (IaaS, PaaS, SaaS).",
  "VVI: Explain the voltage divider circuit and its application in sensor interfacing with a numerical example.",
  "VVI: Explain why a resistor is necessary for an LED and how to calculate it using Ohm's Law.",
  "VVI: Compare Arduino and ESP32 in detail (CPU, Wi-Fi, Bluetooth, RAM, Use Case).",
  "VVI: Explain the PWM concept used to control Servo motors & LED brightness, including duty cycle.",
  "VVI: Compare MQTT and CoAP in detail (Transport, Communication model, Overhead, Use Case).",
  "VVI: Explain the MQTT protocol and its role in IoT systems. Design a topic hierarchy for home automation or a smart college.",
  "VVI: In which situations should you avoid MQTT, CoAP, and HTTP/REST?",
  "VVI: Compare Zigbee with Bluetooth/BLE based on scenario-based analysis (range, power, battery, data rate, best use).",
  "VVI: Explain and compare IaaS, PaaS, and SaaS with examples and use cases.",
  "VVI: Describe the different Cloud Development Models (Public, Private, Hybrid, Community) with use cases.",
  "VVI: Explain the 3 layers of IoT Architecture (Perception, Network, Application) and the 3 fundamental components (Sensor, Processor, Actuator).",
  "VVI: Explain Edge Computing vs. Cloud Computing in detail, including advantages of Edge Computing.",
  "VVI: Explain the difference between Lambda, EC2, and S3 in a comparison table.",
  "VVI: Explain the AWS Shared Responsibility Model.",
  "VVI: Can you directly run a DC motor from an Arduino digital pin? Justify your answer.",
  "VVI: When is a relay used in an embedded system? Give an example.",
  "VVI: Explain Sensor and Actuator with examples. How do they work together in an IoT system?",
];

// ------------------------------------------------------------
// 5. UTILITY FUNCTIONS AND COMPONENT
// ------------------------------------------------------------
const QUESTIONS_PER_PART = 15;
const TOTAL_PARTS = Math.ceil(ALL_QUESTIONS.length / QUESTIONS_PER_PART);

export default function CloudPage({
  onBack,
  onComplete,
}: {
  onBack: () => void;
  onComplete?: (score: number, total: number, moduleName: string) => void;
}) {
  const { isDark } = useTheme();
  const [studyMode, setStudyMode] = useState<StudyMode>('notes');
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [qnaCategory, setQnaCategory] = useState<QnACategory | null>(null);
  const [partScore, setPartScore] = useState(0);
  const [isPartComplete, setIsPartComplete] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const notesPath = '/notes/Cloud_Computing_IoT_Notes.md';

  const openNotes = () => {
    const link = document.createElement('a');
    link.href = notesPath;
    link.download = 'Cloud_Computing_IoT_Notes.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printCertificate = () => window.print();

  const secondaryText = isDark ? 'text-slate-400' : 'text-slate-600';
  const primaryText = isDark ? 'text-slate-100' : 'text-slate-900';
  const card = isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-200';

  const selectMode = (mode: StudyMode) => {
    setStudyMode(mode);
    setSelectedAnswer(null);
    setQuestionIndex(0);
    setSelectedPart(null);
    setIsPartComplete(false);
    setPartScore(0);
    setQnaCategory(null);
  };

  const start = selectedPart ? (selectedPart - 1) * QUESTIONS_PER_PART : 0;
  const end = selectedPart
    ? Math.min(selectedPart * QUESTIONS_PER_PART, ALL_QUESTIONS.length)
    : QUESTIONS_PER_PART;
  const currentQuestions = ALL_QUESTIONS.slice(start, end);
  const currentQuestion = currentQuestions[questionIndex];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.answer) setPartScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (questionIndex < currentQuestions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsPartComplete(true);
    }
  };

  const handleNextPart = () => {
    if (selectedPart && selectedPart < TOTAL_PARTS) {
      setSelectedPart((prev) => (prev ? prev + 1 : 1));
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setPartScore(0);
      setIsPartComplete(false);
    } else {
      if (onComplete && selectedPart !== null) {
        onComplete(partScore, currentQuestions.length, `Cloud - Part ${selectedPart}`);
      }
      setShowCertificate(true);
    }
  };

  const handleBackToParts = () => {
    setSelectedPart(null);
    setIsPartComplete(false);
    setPartScore(0);
    setQuestionIndex(0);
    setSelectedAnswer(null);
  };

  const handleBackNavigation = () => {
    if (studyMode === 'quiz' && selectedPart !== null) {
      handleBackToParts();
      return;
    }
    if (studyMode === 'quiz' && selectedPart === null) {
      setStudyMode('notes');
      return;
    }
    if (studyMode === 'qna' && qnaCategory !== null) {
      setQnaCategory(null);
      return;
    }
    if (studyMode === 'qna' && qnaCategory === null) {
      setStudyMode('notes');
      return;
    }
    onBack();
  };

  if (studyMode === 'quiz' && selectedPart === null) {
    return (
      <div
        className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8 flex items-center justify-center`}
      >
        <div className="w-full max-w-6xl">
          <button
            onClick={handleBackNavigation}
            className={`mb-8 inline-flex items-center gap-2 ${secondaryText} hover:text-green-400`}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div
            className={`rounded-3xl border-2 shadow-2xl p-8 sm:p-12 ${
              isDark ? 'bg-slate-900/50 border-cyan-500/20' : 'bg-white/80 border-cyan-500/20'
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-cyan-400/10 mb-6">
                <ListChecks className="h-10 w-10 text-cyan-400" />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${primaryText}`}>
                Professional Quiz Dashboard
              </h2>
              <p className={`${secondaryText}`}>
                {ALL_QUESTIONS.length} questions across {TOTAL_PARTS} parts
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array.from({ length: TOTAL_PARTS }, (_, i) => i + 1).map((part) => (
                <button
                  key={part}
                  onClick={() => {
                    setSelectedPart(part);
                    setQuestionIndex(0);
                    setSelectedAnswer(null);
                    setPartScore(0);
                    setIsPartComplete(false);
                  }}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 hover:border-cyan-400'
                      : 'bg-white border-slate-200 hover:border-cyan-400'
                  }`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span
                    className={`block text-3xl font-black mb-1 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`}
                  >
                    {part}
                  </span>
                  <span className={`block text-sm font-bold ${primaryText}`}>
                    Part {part}
                  </span>
                  <span className={`block text-xs ${secondaryText}`}>
                    {part === TOTAL_PARTS ? `${ALL_QUESTIONS.length - (TOTAL_PARTS-1)*QUESTIONS_PER_PART} Qs` : `${QUESTIONS_PER_PART} Qs`}
                  </span>
                  <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs font-bold text-cyan-500 transition group-hover:bg-cyan-400 group-hover:text-white">
                    <Play className="h-3 w-3" /> Start
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- QNA – CATEGORY SELECTION ----------
  if (studyMode === 'qna' && qnaCategory === null) {
    return (
      <div
        className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8 flex items-center justify-center`}
      >
        <div className="w-full max-w-6xl">
          <button
            onClick={handleBackNavigation}
            className={`mb-8 inline-flex items-center gap-2 ${secondaryText} hover:text-green-400`}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div
            className={`rounded-3xl border-2 shadow-2xl p-8 sm:p-12 ${
              isDark ? 'bg-slate-900/50 border-green-500/20' : 'bg-white/80 border-green-500/20'
            }`}
          >
            <div className="text-center mb-10">
              <MessageCircleQuestion className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h2 className={`text-4xl font-black mb-4 ${primaryText}`}>
                Professional Question Bank
              </h2>
              <p className={`${secondaryText}`}>
                {SHORT_QUESTIONS.length} Short Questions + {LONG_QUESTIONS.length} Long Questions + {VVI_QUESTIONS.length} VVI Questions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <button
                onClick={() => setQnaCategory('short')}
                className={`group relative overflow-hidden rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-amber-400'
                    : 'bg-white border-slate-200 hover:border-amber-400'
                }`}
              >
                <FileText className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <span className={`block text-xl font-black mb-2 ${primaryText}`}>
                  Short Questions
                </span>
                <span className={`block text-xs font-medium mb-6 ${secondaryText}`}>
                  {SHORT_QUESTIONS.length} Questions • 2-3 Marks
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-500 transition group-hover:bg-amber-400 group-hover:text-white">
                  <Play className="h-3 w-3" /> View All
                </span>
              </button>
              <button
                onClick={() => setQnaCategory('long')}
                className={`group relative overflow-hidden rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-cyan-400'
                    : 'bg-white border-slate-200 hover:border-cyan-400'
                }`}
              >
                <BrainCircuit className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <span className={`block text-xl font-black mb-2 ${primaryText}`}>
                  Long Questions
                </span>
                <span className={`block text-xs font-medium mb-6 ${secondaryText}`}>
                  {LONG_QUESTIONS.length} Questions • 5-7 Marks
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-500 transition group-hover:bg-cyan-400 group-hover:text-white">
                  <Play className="h-3 w-3" /> View All
                </span>
              </button>
              <button
                onClick={() => setQnaCategory('vvi')}
                className={`group relative overflow-hidden rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-red-400'
                    : 'bg-white border-slate-200 hover:border-red-400'
                }`}
              >
                <Trophy className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <span className={`block text-xl font-black mb-2 ${primaryText}`}>
                  VVI for Exam
                </span>
                <span className={`block text-xs font-medium mb-6 ${secondaryText}`}>
                  {VVI_QUESTIONS.length} Questions • Most Important
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs font-bold text-red-500 transition group-hover:bg-red-400 group-hover:text-white">
                  <Play className="h-3 w-3" /> View All
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- QNA – DISPLAY LIST ----------
  if (studyMode === 'qna' && qnaCategory !== null) {
    const currentList =
      qnaCategory === 'short'
        ? SHORT_QUESTIONS
        : qnaCategory === 'long'
        ? LONG_QUESTIONS
        : VVI_QUESTIONS;

    const categoryLabel =
      qnaCategory === 'short'
        ? 'Short Questions (2-3 Marks)'
        : qnaCategory === 'long'
        ? 'Long Questions (5-7 Marks)'
        : 'VVI for Exam';

    const color =
      qnaCategory === 'vvi'
        ? 'bg-red-500'
        : qnaCategory === 'long'
        ? 'bg-cyan-500'
        : 'bg-amber-500';

    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8`}>
        <div className="w-full max-w-5xl mx-auto">
          <button
            onClick={() => setQnaCategory(null)}
            className={`mb-8 inline-flex items-center gap-2 ${secondaryText} hover:text-green-400`}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className={`text-3xl font-black mb-2 ${primaryText}`}>
                {categoryLabel}
              </h2>
              <p className={`${secondaryText}`}>
                {currentList.length} questions
              </p>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-bold text-white ${color}`}>
              {qnaCategory.toUpperCase()}
            </div>
          </div>
          <div className="space-y-4">
            {currentList.map((question, index) => (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-800 border-slate-600 hover:border-cyan-400'
                    : 'bg-white border-slate-200 hover:border-cyan-400'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-md ${color}`}
                  >
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold leading-7 ${primaryText}`}>
                      {question}
                    </h3>
                  </div>
                  <FileText
                    className={`h-5 w-5 mt-1 ${secondaryText} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---------- QUIZ – IN PROGRESS ----------
  if (studyMode === 'quiz' && selectedPart !== null && isPartComplete) {
    return (
      <div
        className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8 flex items-center justify-center`}
      >
        <div
          className={`w-full max-w-xl rounded-3xl border-2 shadow-2xl p-10 text-center ${
            isDark ? 'bg-slate-900 border-green-500/30' : 'bg-white border-green-500/30'
          }`}
        >
          <Trophy className="h-10 w-10 text-green-400 mx-auto mb-4" />
          <h2 className={`text-4xl font-black mb-4 ${primaryText}`}>
            Part {selectedPart} Complete! 🎉
          </h2>
          <div className={`text-6xl font-black mb-6 ${primaryText}`}>
            {partScore}{' '}
            <span className="text-2xl text-slate-500">/ {currentQuestions.length}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={handleNextPart}
              className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Next Part →
            </button>
            <button
              onClick={() => {
                if (onComplete)
                  onComplete(partScore, currentQuestions.length, `Cloud - Part ${selectedPart}`);
                setShowCertificate(true);
              }}
              className="px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              🏆 Certificate
            </button>
            <button
              onClick={handleBackToParts}
              className="px-6 py-4 bg-slate-600 text-white font-bold rounded-xl hover:bg-slate-500 transition"
            >
              Close / Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (studyMode === 'quiz' && selectedPart !== null) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8`}>
        <div className="w-full max-w-5xl mx-auto">
          <button
            onClick={handleBackToParts}
            className={`mb-8 inline-flex items-center gap-2 ${secondaryText} hover:text-cyan-400`}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <section className={`rounded-2xl border p-5 shadow-sm sm:p-7 ${card}`}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Part {selectedPart} | Question {questionIndex + 1} of {currentQuestions.length}
              </p>
              <BrainCircuit className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className={`mb-5 text-lg font-bold leading-7 ${primaryText}`}>
              {currentQuestion.question}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const isCorrect =
                  selectedAnswer !== null && optionIndex === currentQuestion.answer;
                const isWrong = selectedAnswer === optionIndex && !isCorrect;
                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(optionIndex)}
                    className={`rounded-xl border p-4 text-left text-sm transition ${
                      isCorrect
                        ? 'border-green-400 bg-green-400/10 text-green-400'
                        : isWrong
                        ? 'border-red-400 bg-red-400/10 text-red-400'
                        : selectedAnswer !== null
                        ? `${
                            isDark ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'
                          }`
                        : `${
                            isDark ? 'border-slate-700' : 'border-slate-200'
                          } ${primaryText} hover:border-cyan-400`
                    }`}
                  >
                    <span className="mr-2 font-mono">{String.fromCharCode(65 + optionIndex)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                disabled={selectedAnswer === null}
                onClick={handleNext}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                  selectedAnswer === null
                    ? 'cursor-not-allowed bg-slate-700 text-slate-500'
                    : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                }`}
              >
                {questionIndex === currentQuestions.length - 1 ? 'Finish Part 🎉' : 'Next question'}
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ---------- MAIN (NOTES / MODE SELECTION) – only 3 cards ----------
  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-4 py-8 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <button
          onClick={handleBackNavigation}
          className={`mb-8 inline-flex items-center gap-2 ${secondaryText} hover:text-green-400`}
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <header className="mb-8 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
            <BookOpen className="h-4 w-4" /> Y2-M5 Workshop Library
          </div>
          <h1 className={`text-4xl font-black tracking-tight sm:text-5xl ${primaryText}`}>
            Cloud Computing & IoT
          </h1>
          <p className={`mt-3 max-w-2xl text-base leading-7 ${secondaryText}`}>
            Choose a study mode to learn and test your skills.
          </p>
        </header>

        {/* MODE CARDS – only Notes, MCQs, Q&A (3 cards) */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              id: 'notes' as const,
              title: 'Cloud Notes',
              icon: StickyNote,
              color: 'text-amber-400',
              background: 'bg-amber-400/10',
            },
            {
              id: 'quiz' as const,
              title: 'MCQs',
              icon: BrainCircuit,
              color: 'text-cyan-400',
              background: 'bg-cyan-400/10',
            },
            {
              id: 'qna' as const,
              title: 'Q&A',
              icon: MessageCircleQuestion,
              color: 'text-green-400',
              background: 'bg-green-400/10',
            },
          ].map((mode) => {
            const Icon = mode.icon;
            const isSelected = studyMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  if (mode.id === 'notes') {
                    openNotes();
                    return;
                  }
                  selectMode(mode.id);
                }}
                className={`group relative overflow-hidden rounded-3xl border-2 p-7 text-left shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${
                  isSelected
                    ? 'border-green-400 bg-green-400/10 shadow-xl'
                    : isDark
                    ? 'bg-slate-800/80 border-slate-700 hover:border-cyan-400/60 hover:bg-slate-800'
                    : 'bg-white border-slate-200 hover:border-cyan-400/60 hover:bg-white'
                }`}
              >
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30 ${mode.background}`}
                />
                <div className="relative z-10">
                  <span
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${mode.background}`}
                  >
                    <Icon className={`h-7 w-7 ${mode.color}`} />
                  </span>
                  <span
                    className={`block text-2xl font-black mb-2 transition-colors duration-300 group-hover:text-cyan-400 ${primaryText}`}
                  >
                    {mode.title}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500 transition-all duration-300 group-hover:gap-4 group-hover:text-cyan-400">
                    Explore <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* CERTIFICATE MODAL */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center border-8 border-amber-400 relative">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>
            <Award className="h-10 w-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-4xl font-black text-slate-800 mt-4 mb-2">
              Certificate of Completion
            </h2>
            <h3 className="text-2xl font-bold text-purple-600 my-4">Student Name</h3>
            <h4 className="text-xl font-bold text-slate-800 my-2">
              Cloud Computing & IoT
            </h4>
            <div className="flex justify-center gap-3">
              <button
                onClick={printCertificate}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500"
              >
                Print
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}