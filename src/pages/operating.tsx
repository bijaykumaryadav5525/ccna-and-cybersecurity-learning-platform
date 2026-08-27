import { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, BrainCircuit, BookOpen,
  MessageCircleQuestion, StickyNote, Play, ListChecks, Trophy,
  Award, X, FileText,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { operatingSystemNotesFile } from '../data/operatingSystemNotes';

const notesStorageKey = 'operating-system-notes';
type StudyMode = 'notes' | 'quiz' | 'qna';
type QnACategory = 'short' | 'long' | 'vvi';

const ALL_QUESTIONS = [
  { question: 'What is an operating system?', options: ['Interface between hardware and application programs', 'Collection of programs that manage hardware resources', 'System services provider to application programs', 'All of the mentioned'], answer: 3, explanation: 'An OS is everything mentioned above.' },
];

// ============================================================
// 260 SHORT QUESTIONS
// ============================================================
const SHORT_QUESTIONS: string[] = [
  "What is an Operating System?", "List four functions of an Operating System.", "What is a Kernel?", "Define File System.", "What is NTFS?", "What is FAT32?", "Why is FAT32 not used nowadays?", "What is Disk Partitioning?", "Differentiate between MBR and GPT.", "What is the Windows Registry?", "Define Server.", "List any four server roles/services.", "What is RAID?", "What is RAID 0?", "What is RAID 1?", "What is RAID 5?", "What is a Hypervisor?", "What is Type 1 Hypervisor?", "What is Type 2 Hypervisor?", "Differentiate between Tower Server and Rack Server.", "What is ECC RAM?", "Define Hyper-threading.", "Define HyperTransport.", "What is CISC architecture?", "What is RISC architecture?", "Differentiate between CISC and RISC.", "What is Windows Server 2022?", "How many VMs does Windows Server 2022 Standard support?", "What is Hotpatch?", "Define CPU cache memory.", "Define Network Topology.", "List the types of network topologies.", "What is Star Topology?", "What is Bus Topology?", "What is Ring Topology?", "What is Mesh Topology?", "What is Hybrid Topology?", "What is a HUB?", "Why is HUB called a \"dumb\" device?", "What is a SWITCH?", "Why is SWITCH called a \"smart\" device?", "Differentiate between HUB and SWITCH.", "What is a Point-to-Point link?", "What is a Multipoint link?", "Which topology requires a central controller?", "Which topology is most reliable and why?", "What is the main disadvantage of Ring Topology?", "What is the main disadvantage of Bus Topology?", "What is the main disadvantage of Star Topology?", "Define Hybrid Topology with an example.", "What are Network Media?", "List the types of network media.", "What is UTP cable?", "What is STP cable?", "Differentiate between UTP and STP.", "What is Fiber Optic cable?", "Differentiate between Single-mode and Multi-mode fiber.", "What is Coaxial cable?", "What are wireless media?", "What is CAT6 cable?", "Define Wi-Fi.", "What is Infrared transmission?", "What is Microwave transmission?", "Which media type has the highest bandwidth?", "Which cable type is used for long-distance transmission?", "What is a Network Service?", "List any four network services.", "What is File Service?", "What is Database Service?", "What is Remote Access?", "What is MTA?", "What is MDA?", "What is MUA?", "Differentiate between MTA, MDA, and MUA.", "What is SMTP?", "What is POP3?", "What is IMAP?", "What is VPN?", "What is SSH?", "What is Telnet?", "Why is Telnet considered insecure?", "What is RDP?", "Define LDAP.", "What is Kerberos?", "What is Single Sign-On (SSO)?", "Define Internet.", "Define Intranet.", "Define Extranet.", "Differentiate between Internet and Intranet.", "Differentiate between Intranet and Extranet.", "Differentiate between Internet, Intranet, and Extranet.", "Which network requires a firewall?", "What is the WWW?", "Give an example of Intranet.", "Give an example of Extranet.", "What is CLI?", "What is GUI?", "Differentiate between CLI and GUI.", "Which interface is more user-friendly? Why?", "Which interface is more efficient for experts? Why?", "Which interface uses fewer system resources? Why?", "Give two examples of CLI.", "Give two examples of GUI.", "Which interface allows scripting?", "Which interface is better for remote access? Why?", "What is CISC?", "What is RISC?", "Differentiate between CISC and RISC.", "Which architecture uses microcode?", "Which architecture is used in ARM processors?", "Which processors use CISC architecture?", "Which architecture consumes less power? Why?", "What is Hyper-threading?", "What is HyperTransport?", "Differentiate between Hyper-threading and HyperTransport.", "What is a CPU core?", "What is Gigahertz (GHz)?", "What determines the power of a CPU?", "What is cache memory?", "What are the levels of cache memory?", "What does RAID stand for?", "What is RAID 0 used for?", "What is RAID 1 used for?", "What is RAID 5 used for?", "What is RAID 6?", "What is RAID 10?", "How many drives does RAID 0 require?", "How many drives does RAID 1 require?", "How many drives does RAID 5 require?", "How many drives does RAID 6 require?", "How many drives does RAID 10 require?", "Which RAID level has no redundancy?", "Which RAID level uses parity?", "Which RAID level uses double parity?", "Which RAID level is most cost-effective?", "What is Virtualization?", "What is a Virtual Machine?", "What is a Hypervisor?", "Differentiate between Type 1 and Type 2 Hypervisor.", "What is VMware ESXi?", "What is VirtualBox?", "What is KVM?", "What is Microsoft Hyper-V?", "Which hypervisor has better performance? Why?", "Which hypervisor is more secure? Why?", "Can virtual machines run multiple operating systems?", "What is hardware virtualization?", "What is software virtualization?", "What is containerization?", "What is Docker?", "What is Active Directory?", "What does AD DS stand for?", "What is a Domain Controller?", "What is a Domain?", "What is a Forest?", "What is a Tree in Active Directory?", "What is an Organizational Unit (OU)?", "What is the AD database file called?", "What is a Schema in Active Directory?", "What is Functional Level in Active Directory?", "What is LDAP?", "What is Kerberos in AD?", "What are the IDA technologies supported by AD?", "What is Single Sign-On (SSO) in AD?", "What are the components of AD Infrastructure?", "What is the 'mkdir' command?", "What is the 'cd' command?", "What is the 'pwd' command?", "What is the 'ls' command?", "What does 'ls -al' show?", "What is the 'rm' command?", "What does 'rm -r' do?", "What is the 'cat' command?", "What does 'cat > file' do?", "What does 'cat >> file' do?", "What is the 'echo' command?", "What is the 'printf' command?", "What is the 'alias' command?", "What is the 'unalias' command?", "How do you make aliases persistent?", "What is the 'finger' command?", "What is the 'tree' command?", "What is the 'figlet' command?", "What is the 'toilet' command?", "What is the purpose of 'sudo apt-get install'?", "What are the three latest versions of Windows Server 2022?", "What is the difference between Windows Server Standard and Datacenter?", "What is Windows Server Datacenter: Azure Edition?", "How many VMs does Standard Edition support?", "How many VMs does Datacenter Edition support?", "What is IIS?", "What is Group Policy?", "What is the Windows Registry?", "What does HKLM stand for in Registry?", "What does HKCU stand for in Registry?", "What is disk partitioning in Windows?", "What is MBR?", "What is GPT?", "Differentiate between MBR and GPT.", "Which Windows Server edition is recommended for cloud providers? Why?", "What is ACL?", "What is the CIA triad?", "Define Confidentiality.", "Define Integrity.", "Define Availability.", "What is encryption?", "Differentiate between symmetric and asymmetric encryption.", "What is RSA?", "What is AES?", "What is a digital signature?", "What is SSL/TLS?", "What is a firewall?", "What is a VPN?", "What are the security features of a firewall?", "What is the purpose of authentication?", "What is Cloud Computing?", "What is IaaS?", "What is PaaS?", "What is SaaS?", "Differentiate between IaaS, PaaS, and SaaS.", "What is Public Cloud?", "What is Private Cloud?", "What is Hybrid Cloud?", "What is Community Cloud?", "What is Cloud Bursting?", "What is AWS?", "What is Microsoft Azure?", "What is Google Cloud Platform (GCP)?", "List three benefits of cloud computing.", "What is virtualization in cloud computing?", "What is Disaster Recovery?", "What is RTO?", "What is RPO?", "Differentiate between RTO and RPO.", "What is a Full Backup?", "What is an Incremental Backup?", "What is a Differential Backup?", "Differentiate between Full, Incremental, and Differential backup.", "Which backup takes the most time?", "Which backup takes the least storage space?", "What is the 3-2-1 backup rule?", "What is High Availability?", "What does \"5 nines\" availability mean?", "What is Load Balancing?", "What is Clustering?", "What is CDN?", "What is Docker?", "What is Kubernetes?", "What is Container Orchestration?", "What is Microservices architecture?", "What is DevOps?", "What is CI/CD?", "What is Continuous Integration?", "What is Continuous Deployment?", "Differentiate between Monolithic and Microservices architecture.", "What is a Container?", "Differentiate between Virtual Machine and Container.", "What is Serverless computing?", "What is Edge Computing?", "What is IoT?"
];

// ============================================================
// 220 LONG QUESTIONS (NOW FULLY FILLED)
// ============================================================
const LONG_QUESTIONS: string[] = [
  "Define kernel with a layer diagram. Explain the functions of the kernel in detail.", "What is a file system? Study about FAT16 and FAT8. Why are they not being used nowadays? Explain with reasons.", "Differentiate between NTFS and FAT32 in detail with a comparison table.", "What is the client-server model? Explain with an appropriate diagram and examples.", "Explain the Peer-to-Peer model with a diagram. Compare it with the client-server model.", "What is disk partitioning? Differentiate between MBR and GPT with a detailed comparison table.", "Define Windows Registry. Explain its structure, importance, and key hives.", "Explain the layers of an operating system with a detailed diagram.", "What are the functions of an operating system? Explain each in detail.", "Compare and contrast different file systems (FAT16, FAT32, NTFS, EXT4) in detail.", "List the roles/services of a server and explain any four in detail.", "What are the primary subsystems that make up server hardware? Explain each subsystem.", "Describe three types of servers. Compare them in terms of size, efficiency, and price.", "List the three latest versions of Windows Server 2022. Contrast which one you would recommend for a cloud-based service provider and why.", "Explain the concept of RAID with all its levels. Do you think RAID will be beneficial to big companies like Google or Microsoft? Justify.", "Define hypervisor. Explain its two types with examples, diagrams, and comparison.", "What is Hyper-threading? What is HyperTransport? Explain both in detail with comparison.", "Explain the concept of CISC and RISC architectures with examples and comparison.", "Describe the primary subsystems of server hardware and their importance in enterprise environments.", "What is the difference between Windows Server 2022 Standard, Datacenter, and Azure Edition?", "Define network topology. Explain all types of network topologies with diagrams, advantages, and disadvantages.", "Explain Star Topology in detail with diagram, advantages, and disadvantages.", "Explain Bus Topology in detail with diagram, advantages, and disadvantages.", "Explain Ring Topology in detail with diagram, advantages, and disadvantages.", "Explain Mesh Topology in detail with diagram, advantages, and disadvantages.", "Explain Hybrid Topology in detail with diagram, advantages, and disadvantages.", "Why is HUB called a \"dumb\" device and SWITCH a \"smart\" device? Explain with a detailed comparison.", "A recently established business called ABC Solutions is housed in a three-story structure. Design a suitable topology for them with 12 PCs, 3 printers, and 1 server. Explain your design.", "Compare all network topologies based on cost, reliability, scalability, and performance.", "What factors should be considered when choosing a network topology for an organization?", "What do you understand by media types? Explain all types of network media with examples.", "Explain Copper cables in detail: UTP, STP, and Coaxial cable. Compare them.", "Explain Fiber Optic cables in detail. Differentiate between Single-mode and Multi-mode fiber.", "Explain wireless media types: Radio waves, Infrared, and Microwave. Compare them.", "Compare Copper cables and Fiber Optic cables with advantages and disadvantages.", "What is CAT6 cable? Explain its specifications and applications.", "Explain the different categories of UTP cables (CAT5, CAT5e, CAT6, CAT7).", "What are the factors affecting the choice of network media in an organization?", "Explain the working principle of Fiber Optic communication.", "Compare wired and wireless media with advantages and disadvantages.", "What are Network Services? Explain any five network services in detail.", "Describe Remote Access and its uses. Explain different remote access technologies.", "Differentiate between Internet, Intranet, and Extranet with a detailed comparison table and examples.", "What do you mean by CLI and GUI? Which would you prefer to use and why? Provide detailed reasoning.", "Define Directory Services. Write about three types of directory services in detail.", "Explain the three components of Mail Services (MTA, MDA, MUA) in detail with examples.", "We all faced lockdown during COVID-19. Explain how NOS services helped us and other big companies from bankruptcy.", "Explain the working of Email system with a detailed diagram.", "What is Remote Access? Explain VPN, SSH, Telnet, and RDP in detail.", "Explain Directory Services with Active Directory as an example.", "Explain Internet in detail. Discuss its history, services, and applications.", "Explain Intranet in detail. Discuss its features, advantages, and disadvantages.", "Explain Extranet in detail. Discuss its features, advantages, and disadvantages.", "Compare Internet, Intranet, and Extranet in detail with examples.", "What is the role of a firewall in Internet, Intranet, and Extranet?", "Explain the World Wide Web and its components.", "How does an Intranet help organizations improve productivity?", "What are the security challenges in Extranet implementation?", "Explain the differences between the Internet and the World Wide Web.", "What is the future of Intranet and Extranet in modern organizations?", "What is RISC? What is CISC? Explain both instruction sets in detail with comparison.", "Explain Hyper-threading and HyperTransport in detail. How do they improve CPU performance?", "Explain the concept of RAID with all its levels. Discuss which RAID level is best for different scenarios.", "Define hypervisor. Explain its two types with detailed examples and diagrams.", "What are the two instruction sets used by CPUs? Explain in brief with examples.", "Explain the architecture of a modern CPU with a detailed diagram.", "What factors determine the power of a CPU? Explain each factor.", "Compare Intel and AMD processor architectures.", "Explain the concept of multi-core processors and their advantages.", "What is the role of cache memory in CPU performance? Explain the levels of cache.", "What is Virtualization? Explain its types and benefits in detail.", "Explain Type 1 and Type 2 hypervisors in detail with examples, diagrams, and comparison.", "What is a Virtual Machine? Explain how virtualization works with a detailed diagram.", "Compare Virtualization and Containerization with advantages and disadvantages.", "What is Docker? Explain containerization and its benefits.", "What is Kubernetes? Explain container orchestration in detail.", "Explain the architecture of VMware ESXi.", "What are the benefits of server virtualization in an organization?", "Compare Hyper-V, VMware ESXi, and KVM hypervisors.", "Explain the concept of hardware-assisted virtualization.", "What is Active Directory? Explain its components and architecture in detail.", "What is IDA? What are the IDA responsibilities? Explain IDA Technologies supported by AD.", "What is a Schema in Active Directory? Explain its components and importance.", "Explain the components of an AD Infrastructure in detail: Data Store, Domain Controller, Domain, Forest, Tree, Functional Level, and OU.", "What is Active Directory Domain Services (AD DS)? Explain its features and benefits.", "Explain the authentication process in Active Directory using Kerberos.", "What are Group Policies in Active Directory? How are they used?", "Explain the Active Directory hierarchy with a detailed diagram.", "What is the difference between a Domain, Tree, and Forest in Active Directory?", "How does Active Directory provide Single Sign-On (SSO)?", "Explain the following Linux commands with examples: mkdir, cd, rm, pwd, ls, cat, echo, printf.", "Explain aliases in Linux. How do you create, use, and make aliases permanent?", "Write detailed steps to install Debian Linux.", "Explain the following practical tasks with commands: Creating directories using relative paths, Removing existing files, Using print commands, Using pwd and ls commands with options, Using cat command for creating and editing files.", "Define the following aliases and explain their usage: noAG (count all files), noAD (count all sub-directories recursively), noAgts (count files starting with g, t, s).", "Explain the tree command and finger command in Linux with examples.", "How do you install packages in Linux? Explain using apt-get with examples.", "Explain the file permissions in Linux with the chmod command.", "Explain the process management commands in Linux (ps, top, kill).", "Explain redirection and piping in Linux with examples.", "Explain Windows Server 2022 editions: Standard, Datacenter, and Azure Edition. Compare them.", "What is the Windows Registry? Explain its structure, key hives, and importance.", "Explain disk partitioning. Differentiate between MBR and GPT with a detailed comparison.", "What is Group Policy? How is it used to manage Windows Server environments?", "Explain the role of Active Directory in Windows Server.", "What is IIS? How is it used in Windows Server?", "Explain the backup and recovery features in Windows Server.", "What is Windows Server Update Services (WSUS)? How does it work?", "Explain the installation process of Windows Server 2022.", "What are the system requirements for Windows Server 2022?", "Explain the CIA triad in information security with examples.", "What is encryption? Explain symmetric and asymmetric encryption with examples.", "What is a digital signature? How does it work?", "Explain SSL/TLS and their role in network security.", "What is a firewall? Explain its types and functions.", "Explain VPN and its role in network security.", "What is authentication? Explain different authentication methods.", "Explain the difference between authentication and authorization.", "What is network security? Explain common threats and countermeasures.", "Explain the role of Active Directory in network security.", "Explain Cloud Computing. Describe IaaS, PaaS, and SaaS with examples.", "Differentiate between Public, Private, Hybrid, and Community Cloud.", "What are the benefits and challenges of cloud computing?", "Explain AWS, Azure, and Google Cloud Platform. Compare them.", "What is virtualization in cloud computing? Explain its role.", "Explain Cloud Bursting and its benefits.", "What is Serverless computing? Explain its advantages and disadvantages.", "Explain the architecture of cloud computing with a diagram.", "What are the security concerns in cloud computing and their solutions?", "Explain the concept of edge computing and how it differs from cloud computing.", "Explain Disaster Recovery. What are RTO and RPO?", "Explain the 3-2-1 backup rule in detail.", "Compare Full, Incremental, and Differential backups with advantages and disadvantages.", "What is High Availability? How is it achieved?", "What is Load Balancing? Explain different load balancing algorithms.", "What is Clustering? Explain different types of clusters.", "What is the 5 nines availability? Explain its significance.", "Explain the disaster recovery planning process.", "What are the different backup strategies for enterprise data?", "Compare RAID levels for data redundancy and recovery.", "What is a CDN? Explain how it works and its benefits.", "What is Docker? Explain containerization with advantages and disadvantages.", "What is Kubernetes? Explain container orchestration in detail.", "Explain Microservices architecture with advantages and disadvantages.", "What is DevOps? Explain the DevOps lifecycle.", "What is CI/CD? Explain with a detailed diagram.", "Compare Virtual Machines and Containers in detail.", "Explain the difference between Monolithic and Microservices architecture.", "What is Edge Computing? Explain with examples.", "What is IoT? Explain the role of NOS in IoT.", "A medium-sized company wants to set up their network. Design a complete network solution including topology, hardware, and services.", "Your organization wants to migrate to the cloud. Provide a migration plan and justify your choices.", "A hospital wants to implement a secure network. Design the network with security considerations.", "A university wants to set up a campus network. Design the complete network infrastructure.", "An e-commerce company needs high availability for their website. Design a solution with load balancing and disaster recovery.", "A bank wants to implement Active Directory for user management. Design the AD infrastructure.", "Your organization is facing frequent data loss. Design a backup and recovery solution.", "A government agency needs a secure network with remote access capabilities. Design the solution.", "A school wants to set up a computer lab with virtualization. Design the virtualization solution.", "A startup wants to use open-source solutions. Design their server infrastructure using Linux.", "Compare NTFS and FAT32 in detail with a comparison table.", "Compare CISC and RISC architectures.", "Compare Type 1 and Type 2 hypervisors.", "Compare Internet, Intranet, and Extranet.", "Compare CLI and GUI interfaces.", "Compare MBR and GPT partitioning schemes.", "Compare HUB and SWITCH.", "Compare all RAID levels.", "Compare Virtual Machines and Containers.", "Compare IaaS, PaaS, and SaaS.", "Compare Full, Incremental, and Differential backups.", "Compare Public, Private, and Hybrid Cloud.", "Compare Single-mode and Multi-mode fiber optics.", "Compare UTP and STP cables.", "Compare Star, Bus, Ring, and Mesh topologies.", "Design a network for ABC Solutions with 12 PCs, 3 printers, and 1 server in a three-story building.", "Design a disaster recovery plan for a medium-sized company.", "Design an Active Directory infrastructure for a company with 500 employees across 3 locations.", "Design a virtualization solution for a university computer lab with 50 workstations.", "Design a backup strategy for a database server that requires 24/7 availability.", "Design a cloud migration plan for a traditional on-premise company.", "Design a security solution for an e-commerce website.", "Design a network for a hospital with 5 departments and 200 computers.", "Design a remote access solution for a company with 100 remote employees.", "Design a mail server solution for a company with 1000 employees.", "Design a file server solution for a company with multiple departments.", "Design a monitoring and alerting system for a data center.", "Design a load balancing solution for a popular website.", "Design a containerization strategy for a microservices application.", "Design a hybrid cloud strategy for a growing company.", "Explain how email works from sender to receiver.", "Explain how DNS works in detail.", "Explain the OSI model in detail with layers and functions.", "Explain the TCP/IP model in detail with layers and protocols.", "Explain how DHCP works in detail.", "Explain how ARP works in detail.", "Explain the process of booting a computer.", "Explain the installation process of Windows Server.", "Explain the process of creating and using aliases in Linux.", "Explain how virtualization works at the hardware level.", "What is the difference between a Domain, a Tree, and a Forest in Active Directory?", "What is the difference between NTFS permissions and Share permissions?", "What is the difference between a switch and a router?", "What is the difference between TCP and UDP?", "What is the difference between IPv4 and IPv6?", "What is the difference between a workstation and a server?", "What is the difference between a physical server and a virtual server?", "What is the difference between vertical and horizontal scaling?", "What is the difference between stateless and stateful protocols?", "What is the difference between authentication and authorization?", "What is the difference between encryption and hashing?", "What is the difference between symmetric and asymmetric encryption?", "What is the difference between a private key and a public key?", "What is the difference between a certificate and a key?", "What is the difference between SSL and TLS?", "What is the difference between a firewall and an IPS?", "What is the difference between VLAN and VPN?", "What is the difference between SAN and NAS?", "What is the difference between HDD and SSD?", "What is the difference between SATA and SAS?"
];

// ============================================================
// 150 VVI QUESTIONS
// ============================================================
const VVI_QUESTIONS: string[] = [
  "Define kernel with a layer diagram. Explain the functions of the kernel in detail.", "What is a file system? Study about FAT16 and FAT8. Why are they not being used nowadays? Explain with reasons.", "Differentiate between NTFS and FAT32 in detail with a comparison table.", "What is the client-server model? Explain with an appropriate diagram and examples.", "Explain the Peer-to-Peer model with a diagram. Compare it with the client-server model.", "What is disk partitioning? Differentiate between MBR and GPT with a detailed comparison table.", "Define Windows Registry. Explain its structure, importance, and key hives.", "What are the functions of an operating system? Explain each in detail.", "List the roles/services of a server and explain any four in detail.", "What are the primary subsystems that make up server hardware? Explain each subsystem.", "Describe three types of servers. Compare them in terms of size, efficiency, and price.", "List the three latest versions of Windows Server 2022. Contrast which one you would recommend for a cloud-based service provider and why.", "Explain the concept of RAID with all its levels. Do you think RAID will be beneficial to big companies like Google or Microsoft? Justify.", "Define hypervisor. Explain its two types with examples, diagrams, and comparison.", "Explain the concept of CISC and RISC architectures with examples and comparison.", "What is Hyper-threading? What is HyperTransport? Explain both in detail with comparison.", "Define network topology. Explain all types of network topologies with diagrams, advantages, and disadvantages.", "Explain Star, Bus, Ring, and Mesh Topologies in detail with diagrams, advantages, and disadvantages.", "Why is HUB called a \"dumb\" device and SWITCH a \"smart\" device? Explain with a detailed comparison.", "A recently established business called ABC Solutions wants to set up a network. Design a suitable topology for them with 12 PCs, 3 printers, and 1 server. Explain your design.", "What do you understand by media types? Explain all types of network media with examples.", "Explain Fiber Optic cables in detail. Differentiate between Single-mode and Multi-mode fiber.", "Explain wireless media types: Radio waves, Infrared, and Microwave. Compare them.", "Compare Copper cables and Fiber Optic cables with advantages and disadvantages.", "What are Network Services? Explain any five network services in detail.", "Describe Remote Access and its uses. Explain different remote access technologies.", "Differentiate between Internet, Intranet, and Extranet with a detailed comparison table and examples.", "What do you mean by CLI and GUI? Which would you prefer to use and why? Provide detailed reasoning.", "Define Directory Services. Write about three types of directory services in detail.", "Explain the three components of Mail Services (MTA, MDA, MUA) in detail with examples.", "We all faced lockdown during COVID-19. Explain how NOS services helped us and other big companies from bankruptcy.", "Explain the working of Email system with a detailed diagram.", "What is Active Directory? Explain its components and architecture in detail.", "What is IDA? What are the IDA responsibilities? Explain IDA Technologies supported by AD.", "What is a Schema in Active Directory? Explain its components and importance.", "Explain the components of an AD Infrastructure in detail: Data Store, Domain Controller, Domain, Forest, Tree, Functional Level, and OU.", "Explain the authentication process in Active Directory using Kerberos.", "What is the difference between a Domain, Tree, and Forest in Active Directory?", "Explain the Active Directory hierarchy with a detailed diagram.", "How does Active Directory provide Single Sign-On (SSO)?", "Explain the following Linux commands with examples: mkdir, cd, rm, pwd, ls, cat, echo, printf.", "Explain aliases in Linux. How do you create, use, and make aliases permanent?", "Write detailed steps to install Debian Linux.", "Explain the following practical tasks with commands: Creating directories using relative paths, Removing existing files, Using print commands, Using pwd and ls commands with options, Using cat command.", "Define the following aliases and explain their usage: noAG (count all files), noAD (count all sub-directories recursively), noAgts (count files starting with g, t, s).", "Explain the tree command and finger command in Linux with examples.", "How do you install packages in Linux? Explain using apt-get with examples.", "Explain file permissions in Linux with the chmod command.", "Explain Windows Server 2022 editions: Standard, Datacenter, and Azure Edition. Compare them.", "What is the Windows Registry? Explain its structure, key hives, and importance.", "Explain disk partitioning. Differentiate between MBR and GPT with a detailed comparison.", "What is Group Policy? How is it used to manage Windows Server environments?", "Explain the role of Active Directory in Windows Server.", "What is IIS? How is it used in Windows Server?", "Explain the backup and recovery features in Windows Server.", "Explain the installation process of Windows Server 2022.", "Explain the CIA triad in information security with examples.", "What is encryption? Explain symmetric and asymmetric encryption with examples.", "What is a digital signature? How does it work?", "Explain SSL/TLS and their role in network security.", "What is a firewall? Explain its types and functions.", "Explain VPN and its role in network security.", "What is authentication? Explain different authentication methods.", "Explain the difference between authentication and authorization.", "Explain Cloud Computing. Describe IaaS, PaaS, and SaaS with examples.", "Differentiate between Public, Private, Hybrid, and Community Cloud.", "What are the benefits and challenges of cloud computing?", "Explain AWS, Azure, and Google Cloud Platform. Compare them.", "What is virtualization in cloud computing? Explain its role.", "Explain the architecture of cloud computing with a diagram.", "What are the security concerns in cloud computing and their solutions?", "Explain the concept of edge computing and how it differs from cloud computing.", "Explain Disaster Recovery. What are RTO and RPO?", "Explain the 3-2-1 backup rule in detail.", "Compare Full, Incremental, and Differential backups with advantages and disadvantages.", "What is High Availability? How is it achieved?", "What is Load Balancing? Explain different load balancing algorithms.", "What is Clustering? Explain different types of clusters.", "What is the 5 nines availability? Explain its significance.", "Explain the disaster recovery planning process.", "Explain Type 1 and Type 2 hypervisors in detail with examples, diagrams, and comparison.", "What is a Virtual Machine? Explain how virtualization works with a detailed diagram.", "Compare Virtualization and Containerization with advantages and disadvantages.", "What is Docker? Explain containerization and its benefits.", "What is Kubernetes? Explain container orchestration in detail.", "What are the benefits of server virtualization in an organization?", "Compare Hyper-V, VMware ESXi, and KVM hypervisors.", "Explain the concept of hardware-assisted virtualization.", "What is a CDN? Explain how it works and its benefits.", "Explain Microservices architecture with advantages and disadvantages.", "What is DevOps? Explain the DevOps lifecycle.", "What is CI/CD? Explain with a detailed diagram.", "Compare Virtual Machines and Containers in detail.", "Explain the difference between Monolithic and Microservices architecture.", "What is Edge Computing? Explain with examples.", "What is IoT? Explain the role of NOS in IoT.", "Compare NTFS and FAT32 in detail with a comparison table.", "Compare CISC and RISC architectures.", "Compare Type 1 and Type 2 hypervisors.", "Compare Internet, Intranet, and Extranet.", "Compare CLI and GUI interfaces.", "Compare MBR and GPT partitioning schemes.", "Compare HUB and SWITCH.", "Compare all RAID levels.", "Compare Virtual Machines and Containers.", "Compare IaaS, PaaS, and SaaS.", "Compare Full, Incremental, and Differential backups.", "Compare Public, Private, and Hybrid Cloud.", "A medium-sized company wants to set up their network. Design a complete network solution including topology, hardware, and services.", "Your organization wants to migrate to the cloud. Provide a migration plan and justify your choices.", "A hospital wants to implement a secure network. Design the network with security considerations.", "A university wants to set up a campus network. Design the complete network infrastructure.", "An e-commerce company needs high availability for their website. Design a solution with load balancing and disaster recovery.", "A bank wants to implement Active Directory for user management. Design the AD infrastructure.", "Your organization is facing frequent data loss. Design a backup and recovery solution.", "A government agency needs a secure network with remote access capabilities. Design the solution.", "What is the difference between a Domain, a Tree, and a Forest in Active Directory?", "What is the difference between a switch and a router?", "What is the difference between TCP and UDP?", "What is the difference between IPv4 and IPv6?", "What is the difference between a workstation and a server?", "What is the difference between a physical server and a virtual server?", "What is the difference between vertical and horizontal scaling?", "What is the difference between authentication and authorization?", "What is the difference between symmetric and asymmetric encryption?", "What is the difference between a firewall and an IPS?", "What is the difference between VLAN and VPN?", "What is the difference between SAN and NAS?", "Explain how email works from sender to receiver.", "Explain how DNS works in detail.", "Explain the OSI model in detail with layers and functions.", "Explain the TCP/IP model in detail with layers and protocols.", "Explain how DHCP works in detail.", "Explain how ARP works in detail.", "Explain the process of booting a computer.", "Explain the installation process of Windows Server.", "Explain the process of creating and using aliases in Linux.", "Explain how virtualization works at the hardware level.", "Explain the complete process of installing and configuring Active Directory.", "Explain the complete process of setting up a Web Server (IIS/Apache).", "Explain the complete process of configuring a Mail Server.", "Explain the complete process of setting up a VPN.", "Explain the complete process of configuring a Firewall.", "Explain the complete process of implementing RAID.", "Explain the complete process of backing up and restoring data.", "Explain the complete process of creating a Virtual Machine.", "Compare and contrast on-premise, cloud, and hybrid infrastructure with scenarios where each is best suited.", "Design a complete enterprise network for a multinational company with 5000+ employees across 10 locations.", "Explain how you would handle a security breach in a large organization.", "Design a complete disaster recovery plan for an e-commerce website with 99.99% availability requirement.", "Define kernel with layer diagram and explain its functions.", "Differentiate between NTFS and FAT32 with a comparison table.", "Explain client-server model with diagram and examples.", "Explain all RAID levels with diagrams and their benefits.", "Define hypervisor and explain Type 1 and Type 2 with examples.", "Explain CISC and RISC architectures with comparison.", "Explain all network topologies with diagrams, advantages, and disadvantages.", "Differentiate between HUB and SWITCH with comparison.", "Design a network for ABC Solutions (Case Study).", "Explain all network media types with examples.", "Differentiate between Internet, Intranet, and Extranet.", "Compare CLI and GUI interfaces in detail.", "Explain Directory Services and Active Directory in detail.", "Explain MTA, MDA, MUA components of mail services.", "Explain Windows Server 2022 editions and compare them.", "Explain Windows Registry structure and importance.", "Explain MBR and GPT with comparison.", "Explain IaaS, PaaS, and SaaS with examples.", "Explain Full, Incremental, and Differential backups.", "Explain Virtualization and Containerization with comparison."
];

const TOTAL_PARTS = 10; 
const QUESTIONS_PER_PART = 20;

const getSavedNotes = (): Record<string, string> => {
  try {
    const savedNotes = localStorage.getItem(notesStorageKey);
    return savedNotes ? JSON.parse(savedNotes) : {};
  } catch {
    return {};
  }
};

export default function OperatingPage({ onBack, onComplete }: { onBack: () => void; onComplete?: (score: number, total: number, moduleName: string) => void }) {
  const { isDark } = useTheme();
  const [studyMode, setStudyMode] = useState<StudyMode>('notes');
  const [notes, setNotes] = useState<Record<string, string>>(getSavedNotes);
  
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  const [qnaCategory, setQnaCategory] = useState<QnACategory | null>(null);

  const [partScore, setPartScore] = useState(0);
  const [isPartComplete, setIsPartComplete] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    localStorage.setItem(notesStorageKey, JSON.stringify(notes));
  }, [notes]);

  const selectedNotes = notes.general ?? '';
  const updateNotes = (value: string) => setNotes((current) => ({ ...current, general: value }));

  const downloadNotes = () => {
    const content = `Operating System Notes\n\n${selectedNotes || 'No notes added yet.'}\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'operating-system-notes.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const openNotes = () => window.open(operatingSystemNotesFile.path, '_blank', 'noopener,noreferrer');
  const printCertificate = () => window.print();

  const secondaryText = isDark ? 'text-slate-400' : 'text-slate-600';
  const primaryText = isDark ? 'text-slate-100' : 'text-slate-900';
  const input = isDark ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400';
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

  const start = selectedPart ? (selectedPart - 1) * QUESTIONS_PER_PART : 0;
  const end = selectedPart ? Math.min(selectedPart * QUESTIONS_PER_PART, ALL_QUESTIONS.length) : 20;
  const currentQuestions = ALL_QUESTIONS.slice(start, end);
  const currentQuestion = currentQuestions[questionIndex];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.answer) setPartScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (questionIndex < currentQuestions.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsPartComplete(true);
    }
  };

  const handleNextPart = () => {
    if (selectedPart && selectedPart < TOTAL_PARTS) {
      setSelectedPart(prev => (prev ? prev + 1 : 1));
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setPartScore(0);
      setIsPartComplete(false);
    } else {
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

  // FULL SCREEN VIEW 1: QUIZ PART SELECTION
  if (studyMode === 'quiz' && selectedPart === null) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-4 sm:px-6 py-6 sm:py-8 flex items-center justify-center`}>
        <div className="w-full max-w-6xl">
          <button onClick={handleBackNavigation} className={`mb-8 inline-flex items-center gap-2 ${secondaryText} transition-colors hover:text-green-400`}>
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className={`rounded-3xl border-2 shadow-2xl p-5 sm:p-12 ${isDark ? 'bg-slate-900/50 border-cyan-500/20' : 'bg-white/80 border-cyan-500/20'}`}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-cyan-400/10 mb-6 border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
                <ListChecks className="h-10 w-10 text-cyan-400" />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${primaryText}`}>Professional Quiz Dashboard</h2>
              <p className={`text-lg max-w-2xl mx-auto ${secondaryText}`}>Select your OS Part to begin the test.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {Array.from({ length: TOTAL_PARTS }, (_, i) => i + 1).map((part) => (
                <button key={part} type="button" onClick={() => { setSelectedPart(part); setQuestionIndex(0); setSelectedAnswer(null); setPartScore(0); setIsPartComplete(false); }} className={`group relative overflow-hidden rounded-2xl border p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-cyan-400' : 'bg-white border-slate-200 hover:border-cyan-400'}`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <span className={`block text-4xl font-black mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{part}</span>
                  <span className={`block text-lg font-bold mb-2 ${primaryText}`}>OS Part {part}</span>
                  <span className={`block text-xs font-medium mb-4 ${secondaryText}`}>{part === 10 ? '25 Questions' : '20 Questions'}</span>
                  <span className={`inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-500 transition group-hover:bg-cyan-400 group-hover:text-white`}><Play className="h-3 w-3" /> Start</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // FULL SCREEN VIEW 2: Q&A CATEGORY SELECTION
  if (studyMode === 'qna' && qnaCategory === null) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-4 sm:px-6 py-6 sm:py-8 flex items-center justify-center`}>
        <div className="w-full max-w-6xl">
          <button onClick={handleBackNavigation} className={`mb-8 inline-flex items-center gap-2 ${secondaryText} transition-colors hover:text-green-400`}>
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className={`rounded-3xl border-2 shadow-2xl p-5 sm:p-12 ${isDark ? 'bg-slate-900/50 border-green-500/20' : 'bg-white/80 border-green-500/20'}`}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-green-400/10 mb-6 border border-green-400/20 shadow-lg shadow-green-500/10">
                <MessageCircleQuestion className="h-10 w-10 text-green-400" />
              </div>
              <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${primaryText}`}>Professional Question Bank</h2>
              <p className={`text-lg max-w-2xl mx-auto ${secondaryText}`}>Select the type of questions you want to review.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <button onClick={() => setQnaCategory('short')} className={`group relative overflow-hidden rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-amber-400' : 'bg-white border-slate-200 hover:border-amber-400'}`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <FileText className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <span className={`block text-xl font-black mb-2 ${primaryText}`}>Short Questions</span>
                <span className={`block text-xs font-medium mb-6 ${secondaryText}`}>2-5 Marks</span>
                <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-500 transition group-hover:bg-amber-400 group-hover:text-white">
                  <Play className="h-3 w-3" /> Start Reviewing
                </span>
              </button>
              <button onClick={() => setQnaCategory('long')} className={`group relative overflow-hidden rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-cyan-400' : 'bg-white border-slate-200 hover:border-cyan-400'}`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <BrainCircuit className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <span className={`block text-xl font-black mb-2 ${primaryText}`}>Long Questions</span>
                <span className={`block text-xs font-medium mb-6 ${secondaryText}`}>10-15 Marks</span>
                <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-500 transition group-hover:bg-cyan-400 group-hover:text-white">
                  <Play className="h-3 w-3" /> Start Reviewing
                </span>
              </button>
              <button onClick={() => setQnaCategory('vvi')} className={`group relative overflow-hidden rounded-2xl border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-red-400' : 'bg-white border-slate-200 hover:border-red-400'}`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <Trophy className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <span className={`block text-xl font-black mb-2 ${primaryText}`}>VVI for Exam</span>
                <span className={`block text-xs font-medium mb-6 ${secondaryText}`}>Exam Point of View</span>
                <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs font-bold text-red-500 transition group-hover:bg-red-400 group-hover:text-white">
                  <Play className="h-3 w-3" /> Start Reviewing
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // FULL SCREEN VIEW 3: Q&A LIST (Professional Cards)
  if (studyMode === 'qna' && qnaCategory !== null) {
    const currentList = qnaCategory === 'short' ? SHORT_QUESTIONS : qnaCategory === 'long' ? LONG_QUESTIONS : VVI_QUESTIONS;
    
    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-4 sm:px-6 py-6 sm:py-8`}>
        <div className="w-full max-w-5xl mx-auto">
          <button onClick={() => setQnaCategory(null)} className={`mb-8 inline-flex items-center gap-2 ${secondaryText} transition-colors hover:text-green-400`}>
            <ArrowLeft className="h-4 w-4" /> Back to Categories
          </button>

          <h2 className={`text-3xl font-black mb-6 ${primaryText}`}>
            {qnaCategory === 'short' ? 'Short Questions (2-5 Marks)' : qnaCategory === 'long' ? 'Long Questions (10-15 Marks)' : 'VVI for Exam'}
          </h2>

          <div className="space-y-4">
            {currentList.map((question, index) => (
              <article key={index} className={`group relative overflow-hidden rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-600 hover:border-cyan-400' : 'bg-white border-slate-200 hover:border-cyan-400'}`}>
                <div className="flex items-start gap-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-md ${qnaCategory === 'vvi' ? 'bg-red-500' : qnaCategory === 'long' ? 'bg-cyan-500' : 'bg-amber-500'}`}>
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                       <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${qnaCategory === 'short' ? 'bg-amber-100 text-amber-700' : qnaCategory === 'long' ? 'bg-cyan-100 text-cyan-700' : 'bg-red-100 text-red-700'}`}>
                          {qnaCategory === 'short' ? '2-5 Marks' : qnaCategory === 'long' ? '10-15 Marks' : '⭐ VVI'}
                       </span>
                    </div>
                    <h3 className={`text-lg font-bold leading-7 ${primaryText}`}>{question}</h3>
                  </div>
                  <FileText className={`h-5 w-5 mt-1 ${secondaryText} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // FULL SCREEN VIEW 4: PART COMPLETE
  if (studyMode === 'quiz' && selectedPart !== null && isPartComplete) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8 flex items-center justify-center`}>
        <div className={`w-full max-w-xl rounded-3xl border-2 shadow-2xl p-10 text-center ${isDark ? 'bg-slate-900 border-green-500/30' : 'bg-white border-green-500/30'}`}>
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-400/10 mb-6"><Trophy className="h-10 w-10 text-green-400" /></div>
          <h2 className={`text-4xl font-black mb-4 ${primaryText}`}>OS Part {selectedPart} Complete! 🎉</h2>
          <p className={`text-lg mb-2 ${secondaryText}`}>You scored</p>
          <div className={`text-6xl font-black mb-6 ${primaryText}`}>{partScore} <span className="text-2xl text-slate-500">/ {currentQuestions.length}</span></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button onClick={handleNextPart} className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">Next Part →</button>
            <button onClick={() => { if (onComplete && selectedPart !== null) { onComplete(partScore, currentQuestions.length, `Operating System - Part ${selectedPart}`); } else { setShowCertificate(true); } }} className="px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">🏆 Certificate</button>
            <button onClick={handleBackToParts} className="px-6 py-4 bg-slate-600 text-white font-bold rounded-xl hover:bg-slate-500 transition">Close / Back</button>
          </div>
        </div>
      </div>
    );
  }

  // FULL SCREEN VIEW 5: ACTIVE QUIZ
  if (studyMode === 'quiz' && selectedPart !== null) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-6 py-8`}>
        <div className="w-full max-w-5xl mx-auto">
          <button onClick={handleBackToParts} className={`mb-8 inline-flex items-center gap-2 ${secondaryText} transition-colors hover:text-cyan-400`}><ArrowLeft className="h-4 w-4" /> Back to Parts</button>
          <section className={`rounded-2xl border p-5 shadow-sm sm:p-7 ${card}`}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">OS Part {selectedPart} | Question {questionIndex + 1} of {currentQuestions.length}</p>
              <BrainCircuit className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className={`mb-5 text-lg font-bold leading-7 ${primaryText}`}>{currentQuestion.question}</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, optionIndex) => {
                const isCorrect = selectedAnswer !== null && optionIndex === currentQuestion.answer;
                const isWrong = selectedAnswer === optionIndex && !isCorrect;
                return (
                  <button key={option} type="button" onClick={() => handleAnswer(optionIndex)} className={`rounded-xl border p-4 text-left text-sm transition ${isCorrect ? 'border-green-400 bg-green-400/10 text-green-400' : isWrong ? 'border-red-400 bg-red-400/10 text-red-400' : selectedAnswer !== null ? `${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'}` : `${isDark ? 'border-slate-700' : 'border-slate-200'} ${primaryText} hover:border-cyan-400`}`}>
                    <span className="mr-2 font-mono">{String.fromCharCode(65 + optionIndex)}.</span>{option}
                  </button>
                );
              })}
            </div>
            {selectedAnswer !== null && (
              <div className={`mt-5 rounded-xl border p-4 text-sm leading-6 ${selectedAnswer === currentQuestion.answer ? 'border-green-400/30 bg-green-400/10 text-green-400' : 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'}`}>
                <strong>{selectedAnswer === currentQuestion.answer ? 'Correct.' : 'Answer:'}</strong> {currentQuestion.explanation}
              </div>
            )}
            <div className="mt-6 flex justify-end">
              <button type="button" disabled={selectedAnswer === null} onClick={handleNext} className={`rounded-lg px-4 py-2 text-sm font-bold transition ${selectedAnswer === null ? 'cursor-not-allowed bg-slate-700 text-slate-500' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'}`}>{questionIndex === currentQuestions.length - 1 ? 'Finish Part 🎉' : 'Next question'}</button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // MAIN VIEW
  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} px-4 py-8 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <button onClick={handleBackNavigation} className={`mb-8 inline-flex items-center gap-2 ${secondaryText} transition-colors hover:text-green-400`}><ArrowLeft className="h-4 w-4" /> Back</button>

        <header className="mb-8 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-400"><BookOpen className="h-4 w-4" /> Y2-M3 Workshop Library</div>
          <h1 className={`text-4xl font-black tracking-tight sm:text-5xl ${primaryText}`}>Operating System</h1>
          <p className={`mt-3 max-w-2xl text-base leading-7 ${secondaryText}`}>Choose a study mode to learn and test your operating system skills.</p>
        </header>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[{ id: 'notes' as const, title: 'Notes', description: 'Review key operating system concepts', icon: StickyNote, color: 'text-amber-400', background: 'bg-amber-400/10' },
            { id: 'quiz' as const, title: 'MCQs', description: 'Start a new professional quiz card', icon: BrainCircuit, color: 'text-cyan-400', background: 'bg-cyan-400/10' },
            { id: 'qna' as const, title: 'Q&A', description: 'Review Short, Long & VVI questions', icon: MessageCircleQuestion, color: 'text-green-400', background: 'bg-green-400/10' }
          ].map((mode) => {
            const Icon = mode.icon;
            const isSelected = studyMode === mode.id;
            return (
              <button key={mode.id} type="button" onClick={() => { selectMode(mode.id); if (mode.id === 'notes') openNotes(); }} className={`group relative overflow-hidden rounded-3xl border-2 p-7 text-left shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${isSelected ? 'border-green-400 bg-green-400/10 shadow-xl' : isDark ? 'bg-slate-800/80 border-slate-700 hover:border-cyan-400/60 hover:bg-slate-800' : 'bg-white border-slate-200 hover:border-cyan-400/60 hover:bg-white'}`}>
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30 ${mode.background}`} />
                <div className="relative z-10">
                  <span className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${mode.background}`}><Icon className={`h-7 w-7 ${mode.color}`} /></span>
                  <span className={`block text-2xl font-black mb-2 transition-colors duration-300 group-hover:text-cyan-400 ${primaryText}`}>{mode.title}</span>
                  <span className={`block text-sm leading-7 mb-6 ${secondaryText}`}>{mode.description}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500 transition-all duration-300 group-hover:gap-4 group-hover:text-cyan-400">Explore <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
                </div>
              </button>
            );
          })}
        </div>

        {studyMode === 'notes' && (
          <section className={`rounded-2xl border p-5 shadow-sm sm:p-7 ${card}`}>
            <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <StickyNote className="h-5 w-5 text-amber-400" />
                  <h2 className={`text-2xl font-black ${primaryText}`}>Study notes</h2>
                </div>
                <p className={`mt-2 text-sm ${secondaryText}`}>Write definitions, commands, and important points while you study.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={operatingSystemNotesFile.path} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold ${secondaryText} transition hover:border-amber-400 hover:text-amber-400`}><BookOpen className="h-4 w-4" /> Open Notes</a>
                <button type="button" onClick={downloadNotes} className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold ${secondaryText} transition hover:border-amber-400 hover:text-amber-400`}><StickyNote className="h-4 w-4" /> Download my notes</button>
              </div>
            </div>
            <textarea value={selectedNotes} onChange={(event) => updateNotes(event.target.value)} placeholder="Write key commands, definitions, and questions here..." className={`min-h-80 w-full resize-y rounded-xl border p-4 text-sm leading-7 outline-none transition focus:border-amber-400 ${input}`} />
            <p className={`mt-2 text-xs ${secondaryText}`}>Notes are saved automatically in this browser.</p>
          </section>
        )}
      </div>

      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center border-8 border-amber-400 relative">
            <button onClick={() => setShowCertificate(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X className="h-6 w-6" /></button>
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-amber-400/10 mb-6"><Award className="h-10 w-10 text-amber-500" /></div>
            <h2 className="text-4xl font-black text-slate-800 mt-4 mb-2">Certificate of Completion</h2>
            <p className="text-slate-500">This is to certify that</p>
            <h3 className="text-2xl font-bold text-purple-600 my-4">Student Name</h3>
            <p className="text-slate-600">has successfully completed the quiz for</p>
            <h4 className="text-xl font-bold text-slate-800 my-2">Operating System - Part {selectedPart}</h4>
            <p className="text-slate-500 mb-6">Score: {partScore} / {currentQuestions.length} | Date: {new Date().toLocaleDateString()}</p>
            <div className="flex justify-center gap-3">
              <button onClick={printCertificate} className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500">Print Certificate</button>
              <button onClick={() => setShowCertificate(false)} className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}