export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export const ccnaQuizModules: QuizModule[] = [
  // ========== MODULE 1: NETWORKING BASICS (QUESTIONS 1–22) ==========
  {
    id: "networking-basics",
    title: "Networking Basics",
    description: "Routing, switching, network topologies, cabling, and WAN technologies",
    icon: "🌐",
    color: "from-blue-500 to-blue-700",
    questions: [
      {
        id: 1,
        question:
          "As a network administrator, you have a packet that needs to be routed to a specific network. How does a router determine the appropriate interface to forward this packet?",
        options: [
          "By checking the source MAC address",
          "Through the packet's destination IP address",
          "By using the packet's source IP address",
          "Based on the packet's size",
        ],
        correct: 1,
        explanation:
          "Routers make packet forwarding decisions based on the packet's destination IP address. The router checks its routing table to determine the appropriate interface (egress interface) for forwarding packets to their destination network.",
      },
      {
        id: 2,
        question:
          "Imagine you are troubleshooting a newly installed Ethernet switch. You notice that frames from a device are being flooded to all ports. What is the likely reason for this behavior?",
        options: [
          "The switch has a malfunctioning port",
          "There is a loop in the network topology",
          "The destination MAC address is not yet learned",
          "The Ethernet switch is configured as a multilayer switch",
        ],
        correct: 2,
        explanation:
          "When an Ethernet switch receives a frame with a destination MAC address it hasn't learned yet, it floods the frame out all ports except the one it was received on. This ensures the frame reaches its intended recipient. Once the switch learns the destination MAC address from return traffic, it updates its MAC address table and no longer needs to flood such frames.",
      },
      {
        id: 3,
        question:
          "What is the primary function of an Intrusion Prevention System (IPS) sensor in network security?",
        options: [
          "Encrypting network traffic",
          "Managing network bandwidth",
          "Analyzing and blocking potential threats",
          "Providing wireless connectivity",
        ],
        correct: 2,
        explanation:
          "The primary function of an IPS sensor is to analyze incoming network traffic and block potential threats. It does this by comparing packet signatures to a database of known threats and taking action, such as dropping the packets or instructing a firewall to block traffic from a malicious IP address.",
      },
      {
        id: 4,
        question: "What characterizes an ad hoc wireless LAN?",
        options: [
          "Involves direct communication between wireless clients",
          "Requires a central access point for communication",
          "Utilizes mesh nodes for traffic routing",
          "Involves roaming between different access points",
        ],
        correct: 0,
        explanation:
          "An ad hoc wireless LAN is characterized by direct communication between wireless clients without the need for a central infrastructure device like an access point or router. It is typically used for temporary connections such as file transfers and has limited scalability.",
      },
      {
        id: 5,
        question:
          "What is the key difference between client-server and peer-to-peer architectures?",
        options: [
          "Client-server architecture uses a server for resource sharing",
          "Peer-to-peer architecture requires special network devices",
          "Client-server architecture is limited to file sharing",
          "Peer-to-peer architecture does not involve clients",
        ],
        correct: 0,
        explanation:
          "The key difference is that in a client-server architecture, clients access resources from a centralized server, whereas in a peer-to-peer architecture, clients themselves serve up resources, such as shared printers or files.",
      },
      {
        id: 6,
        question:
          "You are designing a network using Cisco Catalyst Center. Which of the following tasks can you perform with this tool?",
        options: [
          "Creating VLANs and managing subnetting",
          "Mapping out network topology and allocating IP addresses",
          "Setting up Internet connection types (DSL, cable, fiber)",
          "Programming routers with low-level machine code",
        ],
        correct: 1,
        explanation:
          "Cisco Catalyst Center (formerly, Cisco DNA Center) provides a graphical interface to design networks. It allows you to map out network topology, allocate IP addresses, add areas and buildings, and place devices on a floor plan. It streamlines network design and management tasks.",
      },
      {
        id: 7,
        question:
          "If you require running the hypervisor directly on the server's hardware without a host operating system, which type of hypervisor should you select?",
        options: [
          "Type 1: Native or Bare Metal Hypervisor",
          "Type 2: Hosted Hypervisor",
          "Type 3: Cloud-Based Hypervisor",
          "Type 4: Hybrid Hypervisor",
        ],
        correct: 0,
        explanation:
          "A Type 1 hypervisor, also known as a Native or Bare Metal Hypervisor, runs directly on the server's hardware. It does not require a host operating system, thus having direct access to the machine's resources. An example is VMware ESXi, which is installed directly onto the server hardware.",
      },
      {
        id: 8,
        question:
          "What is the purpose of the three-way handshake in the TCP protocol?",
        options: [
          "To synchronize and acknowledge the termination of a session",
          "To confirm the receipt of each data packet",
          "To negotiate the speed of data transmission",
          "To establish a connection between two devices",
        ],
        correct: 3,
        explanation:
          "The three-way handshake in TCP is used to establish a connection between two devices. This process involves three steps: a synchronization message (SYN) from the initiator, a synchronization and acknowledgement message (SYN-ACK) from the responder, and an acknowledgement message (ACK) from the initiator. This handshake ensures that both sides are ready to communicate and establishes a reliable connection.",
      },
      {
        id: 9,
        question:
          "What is a primary advantage of using a three-tier architecture for interconnecting buildings on a corporate campus?",
        options: [
          "It requires fewer physical connections due to a full mesh design between buildings.",
          "It enhances scalability by allowing easy addition of new buildings through a structured hierarchy.",
          "It reduces the need for high-end switches at the core layer by distributing the load.",
          "It simplifies network management by collapsing the core and distribution layers into a single layer.",
        ],
        correct: 1,
        explanation:
          "The three-tier architecture (access, distribution, and core layers) provides a scalable way to interconnect buildings on a corporate or university campus. By structuring the network into tiers, new buildings can be added by simply replicating the existing structure and connecting the building's distribution layer to the core layer. This structured approach avoids the scalability issues of a full mesh architecture, where each building would need to connect to every other building, significantly increasing the complexity and number of physical connections required.",
      },
      {
        id: 10,
        question:
          "What distinguishes Top-of-Rack (ToR) switches in a spine-leaf data center architecture?",
        options: [
          "They directly connect to each other to form a mesh network.",
          "They serve as the primary routing interfaces for external data center traffic.",
          "They act as leaves, connecting both to servers within the rack and spine switches.",
          "They exclusively manage the internal traffic within their respective racks without interfacing with spine switches.",
        ],
        correct: 2,
        explanation:
          "In a spine-leaf architecture, Top-of-Rack (ToR) switches play a pivotal role as 'leaves' by interfacing with both the servers (and other devices like firewalls, load balancers, routers, etc.) located within their specific rack and the spine switches that form the backbone of the data center's network. This dual responsibility ensures high availability through redundancy and facilitates efficient data flow across the data center, distinguishing them from switches that might only manage internal rack traffic or connect racks without interfacing with a centralized backbone.",
      },
      {
        id: 11,
        question:
          "You are a network administrator tasked with choosing a WAN technology that provides dedicated bandwidth and predictable latency for connecting two sites. However, high bandwidth is not a requirement. Given the need for these specific characteristics, which WAN technology would be the most appropriate choice?",
        options: [
          "VPN over the Internet",
          "Frame Relay",
          "Asynchronous Transfer Mode (ATM)",
          "Point-to-Point connection using PPP",
        ],
        correct: 3,
        explanation:
          "A point-to-point connection using the Point-to-Point Protocol (PPP) is the most suitable choice for dedicated bandwidth and predictable latency between two sites. This is because a point-to-point connection is exclusively reserved for use between these two sites, ensuring that the bandwidth is not shared with others and that the latency remains consistent. Unlike Frame Relay, ATM, or VPNs over the Internet, a point-to-point connection does not involve traffic from other clients on the network, which could otherwise introduce variability in bandwidth and latency.",
      },
      {
        id: 12,
        question:
          "You are setting up a network for a small office with a mix of wired and wireless devices, including laptops, smartphones, and a server. To ensure all devices can communicate internally and access the Internet, which combination of network devices is most appropriate for your SOHO environment?",
        options: [
          "A wireless router with built-in Ethernet ports, connected to an external cable modem",
          "A cable modem and a standalone Ethernet switch without wireless capabilities",
          "Multiple wireless access points to form a mesh network without a router",
          "A dedicated firewall device without integrated routing or switching capabilities",
        ],
        correct: 0,
        explanation:
          "For a small office/home office (SOHO) environment that includes both wired and wireless devices, a wireless router with built-in Ethernet ports connected to an external cable modem (or other broadband technology) is the most suitable setup. This configuration allows wired devices to connect through Ethernet ports and wireless devices to connect via Wi-Fi, ensuring all devices can communicate with each other and access the Internet. Unlike the other options, this setup provides a comprehensive solution for both internal networking and Internet connectivity, leveraging the versatility of a wireless router with Ethernet capabilities.",
      },
      {
        id: 13,
        question:
          "As the IT director of a growing enterprise, you're strategizing on how to scale your computing resources efficiently while maintaining control over critical data. Given the desire to combine the flexibility of cloud resources with the security of in-house systems, which cloud deployment model would best fit your objectives?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
        correct: 2,
        explanation:
          "The Hybrid Cloud model is the optimal choice for organizations looking to blend the scalability and elasticity of cloud services with the security and control of an on-premises infrastructure. This model allows for critical data and applications to be managed on-premises (private cloud) for security and compliance, while also leveraging the cloud (public cloud) for scalable, on-demand resources. This approach provides a balanced solution that can adapt to fluctuating demands and offers a phased migration pathway to the cloud.",
      },
      {
        id: 14,
        question:
          "You are configuring a home entertainment system and need to choose the appropriate coaxial cable for connecting to your television and also to your cable modem. Which of the following cable types should you consider for optimal performance given the electrical characteristics mentioned?",
        options: ["RG-58", "RG-59", "RG-6", "RG-8/U"],
        correct: 2,
        explanation:
          "RG-6 is recommended for home entertainment systems and for connections to cable modems, as it has better electrical characteristics than RG-59, which is an older standard. RG-58 and RG-8/U are used for different applications, such as networking in older 10BASE2 and 10BASE5 networks. Also, RG-58 and RG-8/U cables have a different impedance (i.e., 50 Ohms) as compared to RG-59 and RG-6 cables (i.e., 75 Ohms).",
      },
      {
        id: 15,
        question:
          "You are installing a network in an office environment with a significant amount of electromagnetic interference (EMI). Which type of twisted pair cabling should you choose to ensure the best protection against EMI?",
        options: [
          "UTP (Unshielded Twisted Pair)",
          "STP (Shielded Twisted Pair)",
          "Plenum-rated cabling",
          "Any twisted pair cabling, as they are all equally effective against EMI",
        ],
        correct: 1,
        explanation:
          "STP (Shielded Twisted Pair) is the correct choice for environments with significant electromagnetic interference (EMI). STP cables have an additional layer of shielding, either foil or braided metal, which provides superior protection against EMI compared to UTP (Unshielded Twisted Pair) that relies solely on the twisting of the wires. Plenum-rated cabling is concerned with fire safety and the release of toxic fumes, not specifically with EMI protection.",
      },
      {
        id: 16,
        question:
          "A network engineer is tasked with upgrading the company's network infrastructure to support 1 gigabit per second data transmission over a maximum distance of 100 meters. Which category of twisted pair cabling should the engineer choose to ensure compatibility with the 1000BASE-T standard, while minimizing cost of the cabling?",
        options: ["Category 5", "Category 6a", "Category 3", "Category 5e"],
        correct: 3,
        explanation:
          "Category 5e cabling is the appropriate choice for supporting 1 gigabit per second data transmission over distances up to 100 meters using the 1000BASE-T standard. While Category 5 technically can support 1 gigabit per second, it's not recommended due to its electrical characteristics. Category 3 is not suitable for 1 gigabit per second speeds, and while Category 6a could also support 1 gigabit per second, however, it is more expensive that Category 5e.",
      },
      {
        id: 17,
        question:
          "You are tasked with connecting two PCs directly to facilitate a file transfer without using a switch or router. What type of Ethernet cable should you use to ensure the PCs can communicate effectively?",
        options: ["Crossover cable", "Straight-through cable", "Plenum-rated cable", "Coaxial cable"],
        correct: 0,
        explanation:
          "A crossover cable is required when directly connecting two devices with identical pinouts on their network interfaces, such as directly connecting two PCs, to ensure proper communication. This cable type swaps transmit and receive leads, allowing the devices to communicate effectively without needing an intermediary device like a switch.",
      },
      {
        id: 18,
        question:
          "When considering the installation of a fiber optic network that spans a long distance, which type of fiber optic cabling would you choose to minimize data corruption due to multimode delay distortion?",
        options: ["Coaxial Fiber", "Single Mode Fiber (SMF)", "Multimode Fiber (MMF)", "Plenum-rated Fiber"],
        correct: 1,
        explanation:
          "Single Mode Fiber (SMF) is the ideal choice for long-distance installations because it is designed to carry light directly down the fiber without multiple modes of propagation. This characteristic minimizes modal dispersion, a common issue in Multimode Fiber (MMF) where different paths (modes) of light can lead to data corruption, especially over long distances. SMF has a smaller core diameter, allowing only one path for the light, which prevents modal dispersion and ensures data integrity.",
      },
      {
        id: 19,
        question:
          "In setting up a high-density fiber network panel, which connector would you choose to maximize port density?",
        options: ["ST connector", "LC connector", "SC connector", "MTRJ connector"],
        correct: 3,
        explanation:
          "The MTRJ connector is the best choice for maximizing port density in a high-density fiber network panel due to its design, which incorporates two fibers (for transmitting and receiving) within a single, very small connector. This allows for a higher density of cabling in the same physical space compared to ST, LC, and SC connectors, which typically require a separate connector for each fiber strand.",
      },
      {
        id: 20,
        question:
          "A network administrator is tasked with implementing a fiber optic network to interconnect several buildings on a university campus, where the maximum distance between any two buildings does not exceed 220 meters. Also, the fiber network must support a speed of 1 gigabit per second. Which of the following Ethernet standards should the administrator choose to ensure compatibility, while minimizing cost?",
        options: ["100BASE-FX", "100BASE-SX", "1000BASE-SX", "10GBASE-LR"],
        correct: 2,
        explanation:
          "The 1000BASE-SX standard supports a 1 gigabit per second speed over 200m (using multimode fiber with a core diameter of 62.5μm). However, the 100BASE-FX and 100BASE-SX standards support a maximum speed of 100 megabits per second. The 10GBASE-LR standard supports a speed of 10 gigabits per second, but it uses single mode fiber, which is more expensive than multimode fiber.",
      },
      {
        id: 21,
        question:
          "A network designer is planning to deploy IP cameras and wireless access points in a new office building. To simplify the installation and reduce the need for additional power outlets, which technology should be utilized to power these devices over the Ethernet infrastructure?",
        options: ["Power over Ethernet (PoE)", "Power over Cable (PoC)", "Power Line Communication (PLC)", "Power over WiFi (PoWiFi)"],
        correct: 0,
        explanation:
          "Power over Ethernet (PoE) is the correct technology to use for powering devices like IP cameras and wireless access points over the Ethernet cabling. This technology allows electrical power, along with data, to be transmitted over Ethernet cables, eliminating the need for separate power supplies or electrical outlets close to the devices.",
      },
      {
        id: 22,
        question:
          "A network engineer notices an increasing number of input/output errors on router interfaces. What could be a potential cause for these errors?",
        options: ["Incorrect VLAN configuration", "Duplex mismatch", "IP address conflict", "Incorrect subnet mask"],
        correct: 1,
        explanation:
          "Duplex mismatch is a common cause of increasing input/output errors on router interfaces. This occurs when one end of a connection operates in half-duplex mode and the other in full-duplex mode, leading to poor network performance and a high number of errors. A duplex mismatch can be diagnosed with the 'show interfaces' command to view a router's duplex setting and to look for continuously incrementing errors.",
      },
    ],
  },

  // ========== MODULE 2: IP ADDRESSING & SUBNETTING (QUESTIONS 23–38) ==========
  {
    id: "ip-addressing-subnetting",
    title: "IP Addressing & Subnetting",
    description: "IPv4, binary conversion, subnetting, NAT, DHCP, and DNS",
    icon: "🔢",
    color: "from-green-500 to-green-700",
    questions: [
      {
        id: 23,
        question: "What is the decimal equivalent of the binary number 11001010?",
        options: ["202", "205", "210", "212"],
        correct: 0,
        explanation: "The binary number 11001010 is calculated as follows: 128 + 64 + 0 + 0 + 8 + 0 + 2 + 0 = 202",
      },
      {
        id: 24,
        question: "Convert the decimal number 156 to an 8-bit binary number.",
        options: ["10011010", "10111100", "10011100", "11001100"],
        correct: 2,
        explanation:
          "We begin by creating an eight-column table with column headings of: 128, 64, 32, 16, 8, 4, 2, and 1. Then, we ask if 156 greater than or equal to 128. Since the answer is, 'yes,' we place a '1' in the 128 column and find the remainder (i.e., 156 - 128 = 28). Next, we ask if 28 is greater than or equal to 64. Since the answer is 'no,' we place a '0' in the 64 column. Similarly, we ask if 28 is greater than or equal to '32,' and again the answer is no, so we place a '0' in the 32 column. We then ask if 28 is greater than or equal to 16, and the answer is 'yes.' So, we place a 1 in the 16 column and find the remainder (i.e., 28 - 16 = 12). Then, we ask if 12 is greater than or equal to 8. Again, the answer is 'yes.' That means we place a '1' in the 8 column and find the remainder (i.e., 12 - 8 = 4). Then, we ask if 4 is greater than or equal to 4. Since the answer is 'yes,' we place a '1' in the 4 column. Interestingly, the remainder is now 0 (i.e., 4 - 4 = 0), meaning we'll place a 0 in both the 2 column and 1 column. Putting these values together gives us a binary value of 10011100.",
      },
      {
        id: 25,
        question: "In an 8-bit binary number, which bit represents the highest value?",
        options: ["The leftmost bit", "The rightmost bit", "The middle bit", "All bits have equal value"],
        correct: 0,
        explanation: "In binary, each bit represents a power of 2, with the leftmost bit in an 8-bit binary number representing 2^7 or 128, which is the highest value.",
      },
      {
        id: 26,
        question: "What is the binary representation of the decimal number 255 in an 8-bit format?",
        options: ["11111110", "11111111", "10101010", "11001100"],
        correct: 1,
        explanation: "The number 255 in binary is the highest number that can be represented in 8 bits, with all bits set to a 1 (i.e., 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255).",
      },
      {
        id: 27,
        question:
          "You are configuring a network device and need to assign an IPv4 address. To ensure proper address assignment, you must understand the structure of IPv4 addresses. Which of the following best describes the total number of bits in an IPv4 address and how they are commonly represented?",
        options: [
          "48 bits, represented in a hexadecimal format",
          "32 bits, represented in a dotted binary format",
          "64 bits, represented in a colon-separated hexadecimal format",
          "32 bits, represented in a dotted decimal format",
        ],
        correct: 3,
        explanation:
          "An IPv4 address is made up of 32 bits. These bits are commonly represented in a dotted decimal format, where the 32 bits are divided into four 8-bit sections. Each section is converted to its decimal equivalent and separated by dots. This representation makes IPv4 addresses easier to read and understand compared to binary or other formats.",
      },
      {
        id: 28,
        question:
          "As a network engineer, you're tasked with designing a network for a small company. You need to choose an appropriate IP address range that ensures devices within the network can communicate internally but are not directly routable on the public Internet. Which of the following IP address ranges would you select?",
        options: [
          "192.0.2.0 - 192.0.2.255",
          "172.16.0.0 - 172.31.255.255",
          "203.0.113.0 - 203.0.113.255",
          "8.8.8.0 - 8.8.8.255",
        ],
        correct: 1,
        explanation:
          "The 172.16.0.0 - 172.31.255.255 address range is designated for private networks, allowing devices within the same network to communicate with each other without being routable on the public Internet. The other options are not suitable: A and C are ranges reserved for documentation and example purposes, and D is a publicly routable address range.",
      },
      {
        id: 29,
        question:
          "You are a network administrator who needs to enable multiple devices in your network to share a single publicly routable IP address for Internet access. Which NAT variant would you most likely utilize to achieve this?",
        options: ["Static NAT", "Dynamic NAT", "Port Address Translation (PAT)", "Reverse NAT"],
        correct: 2,
        explanation:
          "Port Address Translation (PAT) allows multiple devices on a local network to be mapped to a single public IP address but with different port numbers, which are used to distinguish between various communication sessions. This is especially useful for home networks or small offices where there is only one publicly routable IP address available, while multiple devices need to simultaneously access the Internet.",
      },
      {
        id: 30,
        question:
          "You're tasked with setting up a company-wide video broadcast of the CEO's announcement. To minimize network load and ensure only interested parties receive the stream, which IP packet flow method should you employ?",
        options: [
          "Multicast, sending a single stream to a group of PCs, which belong to interested users",
          "Unicast, sending a separate stream to each interested user's PC",
          "Broadcast, sending a single stream to all devices in the subnet",
          "Anycast, sending from multiple servers, in a round-robin fashion",
        ],
        correct: 0,
        explanation:
          "Multicast is the optimal solution for delivering video streams to a selective audience without overloading the network. By using a multicast group identified by a Class D IP address, a video server can send a single stream that a network's infrastructure replicates only to the devices that have joined a specific multicast group. This method prevents unnecessary load on both the video server and the network links, and it does not disturb devices not interested in the stream, making it the most efficient choice.",
      },
      {
        id: 31,
        question:
          "In a small office, you are tasked with manually configuring the IPv4 address parameters of a new server to ensure it can communicate within the local network and access the Internet. Which of the following parameters would you NOT be manually configuring as part of your IPv4 configuration?",
        options: ["IPv4 address", "subnet mask", "default gateway", "MAC address"],
        correct: 3,
        explanation:
          "For manual IPv4 address configuration, you must assign the IPv4 address, subnet mask, and default gateway. An IPv4 address uniquely identifies the device on the network, a subnet mask determines the network and host portions of the address, and a default gateway is the router on the local network that routes traffic to other networks, including the Internet. A MAC address is a hardware identifier for a Network Interface Card (NIC) and is assigned by the manufacturer. Therefore, a MAC address is not manually configured as part of a device's IPv4 settings.",
      },
      {
        id: 32,
        question:
          "As a network administrator, you've observed a PC on your network successfully obtaining an IP address via DHCP. Which sequence correctly represents the order of messages exchanged between the PC and the DHCP server?",
        options: [
          "Offer, Discover, Request, Acknowledgement",
          "Request, Offer, Discover, Acknowledgement",
          "Discover, Offer, Request, Acknowledgement",
          "Acknowledgement, Discover, Offer, Request",
        ],
        correct: 2,
        explanation:
          "The correct sequence of messages exchanged between a PC and a DHCP server during the IP address assignment process is: Discover, Offer, Request, Acknowledgement. This sequence is commonly referred to by the acronym DORA. The process starts with the client broadcasting a Discover message to locate available DHCP servers, followed by the server responding with an Offer message. The client then sends a Request message to accept the offer, and finally, the server sends an Acknowledgement message to confirm the assignment.",
      },
      {
        id: 33,
        question:
          "Imagine you are deploying a new application that needs to be reachable by two Fully Qualified Domain Names (FQDNs). You first create an A record to map the first FQDN to the application's server. Which additional record type would you create to map the second FQDN to the application's server?",
        options: ["TXT", "CNAME", "MX", "AAAA"],
        correct: 1,
        explanation:
          "An A record maps a domain name to an IPv4 address, ensuring that the domain is reachable on the Internet. CNAME records allow the domain to be aliased to another domain (e.g., redirecting example.com to kwtrain.com). TXT records are typically used for verification purposes, such as domain ownership or email sender policies. MX records are used for routing email. Finally, AAAA records map a domain name to an IPv6 address.",
      },
      {
        id: 34,
        question:
          "You are a network administrator tasked with configuring a link between two sites, connected by routers R1 and R2, within a Class C network of 192.0.2.0 /24. Considering the need to optimize IP address usage, which of the following subnet masks would allow you to allocate IP addresses efficiently for this link, which requires only two IP addresses?",
        options: ["255.255.255.0", "255.255.255.252", "255.255.255.248", "255.255.255.254"],
        correct: 1,
        explanation:
          "The 255.255.255.252 subnet mask allows for four IP addresses in the subnet, two of which can be assigned to hosts (R1 and R2), plus one address for the network address and one address for the broadcast address. This minimizes wasting IP addresses, as a Class C network with a default subnet mask (255.255.255.0) would provide 254 usable IP addresses, far more than necessary for a link requiring only two.",
      },
      {
        id: 35,
        question:
          "As a network engineer, you are planning to segment a Class C network into subnets to accommodate 5 separate departments within your company. Each department requires its own subnet. According to the subnetting formula: 'Number of Subnets = 2^s, where s is the number of borrowed bits,' how many bits must you borrow from the host portion of the default subnet mask to accommodate 5 subnets, without borrowing more host bits than necessary?",
        options: ["2 bits", "3 bits", "4 bits", "5 bits"],
        correct: 1,
        explanation:
          "Using the formula: 'Number of Subnets = 2^s, where s is the number of borrowed bits,' borrowing 3 bits results in 8 possible subnets, because 2^3 = 8. This satisfies the requirement of accommodating 5 separate departments, making it the most efficient choice.",
      },
      {
        id: 36,
        question:
          "As a network engineer configuring a subnet with a subnet mask of 255.255.255.224 applied to a Class C network, you need to determine the maximum number of devices that can be assigned IP addresses within a subnet. Using the formula: 'Number of Hosts = 2^h - 2, where h represents the number of host bits,' what is the maximum number of usable host addresses available in each subnet?",
        options: ["30", "62", "126", "254"],
        correct: 0,
        explanation:
          "The subnet mask 255.255.255.224 is a 27-bit subnet mask (i.e., a /27 mask), and an IPv4 address has 32 bits. That leaves 5 bits for host addresses (since 32 total bits - 27 network = 5 host bits). Using the formula: 'Number of Hosts = 2^h - 2, where h represents the number of host bits,' we calculate 2^5 - 2 = 30 usable host addresses. The subtraction of 2 accounts for the network address and the directed broadcast address, which cannot be assigned to hosts.",
      },
      {
        id: 37,
        question:
          "You are configuring a network that utilizes the 192.168.10.0 /24 address space. If you divide this network into subnets with a subnet mask of 255.255.255.248, what would be the first usable IP address in the second subnet?",
        options: ["192.168.10.9", "192.168.10.10", "192.168.10.17", "192.168.10.2"],
        correct: 0,
        explanation:
          "With a subnet mask of 255.255.255.248 (/29), each subnet has a 'block size' of 8 (i.e., The 'interesting octet' is the 4th octet, and the value in the 4th octet is 248. Therefore, the block size is 256 - 248 = 8. The first subnet starts at 192.168.10.0, making its range 192.168.10.0-192.168.10.7 (where 192.168.10.0 is the network address and 192.168.10.7 is the broadcast address). The second subnet starts at 192.168.10.8 (the network address), which is determined by adding 8 (i.e., the block size) to the current value (i.e., 0) in the interesting octet (i.e., the 4th octet). That makes the first usable IP address in the second subnet 192.168.10.9, which is determined by adding 1 to the network address of 192.168.10.8.",
      },
      {
        id: 38,
        question:
          "If a device in your network is assigned the IP address 192.168.1.130 with a subnet mask of 255.255.255.192, which of the following represents the subnet that this IP address belongs to?",
        options: ["192.168.1.0 /26", "192.168.1.64 /26", "192.168.1.128 /26", "192.168.1.192 /26"],
        correct: 2,
        explanation:
          "To determine the subnets created with a 255.255.255.192 subnet mask, we determine the interesting octet (i.e., the last octet to contain a binary 1 in the subnet mask) and the block size (i.e., block size = 256 - [subnet value in the interesting octet]). In this example, the interesting octet is the 4th octet, and the block size is 64 (i.e., 256 - 192 = 64). We can determine the subnets created by counting in increments of 64 in the 4th octet, starting with a value of 0 in the 4th octet. This gives us networks of: 192.168.1.0, 192.168.1.64, 192.168.1.128, and 192.168.1.192. Given the IP address 192.168.1.130, it falls within the range of the third block of 64 addresses, ranging from 192.168.1.128 to 192.168.1.191. The network address of this subnet is 192.168.1.128.",
      },
    ],
  },

  // ========== MODULE 3: IPv6 (QUESTIONS 39–52 + 226) ==========
  {
    id: "ipv6",
    title: "IPv6",
    description: "IPv6 addressing, types, autoconfiguration, and transition",
    icon: "🌍",
    color: "from-cyan-500 to-blue-500",
    questions: [
      {
        id: 39,
        question:
          "You are a network engineer tasked with calculating hexadecimal values for a new IPv6 deployment. Given the decimal number 157, what is its hexadecimal equivalent?",
        options: ["0xC9", "0x9D", "0xCA", "0xAD"],
        correct: 1,
        explanation:
          "To convert a decimal number to its hexadecimal equivalent, you first convert it to binary and then divide the binary number into two nibbles (i.e., groups of four bits). The binary representation of 157 is 10011101. Breaking this into nibbles gives us 1001 (which is 9 in decimal and 9 in hexadecimal) and 1101 (which is 13 in decimal and D in hexadecimal). Therefore, the hexadecimal equivalent of 157 is 0x9D.",
      },
      {
        id: 40,
        question:
          "As a network architect, you're explaining the structure of IPv6 addresses to a group of new engineers. How would you describe the total number of bits an IPv6 address comprises and its representation in hexadecimal digits?",
        options: [
          "64 bits represented as 16 hexadecimal numbers",
          "128 bits represented as 16 hexadecimal numbers",
          "128 bits represented as 32 hexadecimal numbers",
          "256 bits represented as 64 hexadecimal numbers",
        ],
        correct: 2,
        explanation:
          "A hexadecimal digit has one of 16 possible values and can therefore be represented as 4 binary bits. An IPv6 address is made up of 128 bits represented as 32 hexadecimal numbers (i.e., 32 hex digits * 4 bits/digit = 128 bits). In contrast, an IPv4 address is made up of only 32 bits. An IPv6 address is commonly represented as 32 hexadecimal digits to simplify notation, divided into eight groups of four hexadecimal digits (i.e., quartets), with each group separated by colons.",
      },
      {
        id: 41,
        question:
          "As a systems administrator, you're configuring network devices with IPv6 addresses and need to apply address shortening techniques for efficiency. When you encounter a sequence of quartets that only contain zeros, what is the most efficient method to shorten this part of the address?",
        options: [
          "Remove the zeros and leave the space blank",
          "Replace the sequence with a single zero",
          "Replace the sequence with a single colon",
          "Replace the sequence with a double colon",
        ],
        correct: 3,
        explanation:
          "According to IPv6 address shortening rules, when you encounter consecutive quartets containing only zeros, you can replace them with a double colon. This method significantly reduces the length of the address but can only be applied once in an address to avoid ambiguity.",
      },
      {
        id: 42,
        question:
          "In the context of IPv6 traffic types, which of the following best describes the Anycast communication model?",
        options: ["one-to-nearest", "one-to-one", "one-to-many", "one-to-all"],
        correct: 0,
        explanation:
          "Anycast is a unique IPv6 traffic flow where a single address is assigned to multiple devices, typically servers, distributed across different geographical locations. When a client sends a request to an Anycast address, the network directs the request to the nearest server, optimizing for lower latency and better bandwidth utilization. This one-to-nearest communication flow is fundamentally different from Unicast, Multicast, and the nonexistent Broadcast in IPv6.",
      },
      {
        id: 43,
        question:
          "You are setting up an IPv6 network for your organization and need to assign global unicast addresses to your servers. Which of the following addresses is a valid IPv6 global unicast address that could be assigned to a server?",
        options: ["FE80::1", "FF02::1", "2001:DB8::1", "::1"],
        correct: 2,
        explanation:
          "IPv6 global unicast addresses are publicly routable addresses that start with the first three bits set to 001, which typically results in the first hexadecimal digit of the address being 2 or 3. Therefore, 2001:DB8::1 is a valid global unicast address, as it starts with '2001', indicating it falls within the 2000::/3 range. The other options are not IPv6 global unicast addresses. Specifically, FE80::/10 is for link local addresses, and FF00::/8 is for multicast addresses, and ::1 is the loopback address.",
      },
      {
        id: 44,
        question:
          "Which of the following IPv6 addresses is used to represent all nodes in a link local scope for multicast traffic?",
        options: ["FF02::1", "FE80::1", "2001::1", "FF01::1"],
        correct: 0,
        explanation:
          "The address FF02::1 is a multicast address used to represent all nodes in a link local scope, functioning similarly to a broadcast in IPv4. A typical use of this multicast address is a router sending a Router Advertisement (RA) to all nodes on a segment connected to a router interface.",
      },
      {
        id: 45,
        question:
          "While configuring an IPv6 network, you need to ensure local communication on a single network segment without involving routable addresses. Which type of IPv6 address would you assign to the interfaces of devices on the same network segment to achieve this?",
        options: ["global unicast address", "link local address", "unique local address", "multicast address"],
        correct: 1,
        explanation:
          "IPv6 link local addresses are specifically designed for local network segment communication and are not routable beyond their segment. A common use of these addresses is a router sending out route advertisements sourced from an interface's link local address. Global unicast addresses are routable and designed for Internet-wide communication, making them unsuitable for this scenario. Unique local addresses serve a different purpose, providing local communication within a broader scope but still potentially routable within a private network. Multicast addresses are used for one-to-many communication, not for the specified requirement.",
      },
      {
        id: 46,
        question:
          "You are designing a private network for your organization and decide to use IPv6 unique local addresses. What prefix would you typically see at the beginning of these addresses?",
        options: ["FE80::/10", "FF00::/8", "2001::/3", "FC00::/7"],
        correct: 3,
        explanation:
          "IPv6 unique local addresses are defined to start with the prefix FC00::/7 (although the second hexadecimal digit is typically a D, due to the L-bit being set to 1), which allows for local communication within an organization but is not routable on the public Internet. This prefix ensures that the addresses are used within private networks, similar to the use of RFC 1918 addresses in IPv4.",
      },
      {
        id: 47,
        question:
          "A developer is testing a newly installed IPv6 stack on their machine. To confirm its operational status, which IPv6 address should they ping?",
        options: ["::1", "FE80::1", "2001:DB8::1", "FF02::1"],
        correct: 0,
        explanation:
          "The IPv6 address ::1 is the IPv6 loopback address, equivalent to 127.0.0.1 in IPv4. Pinging ::1 verifies that the IPv6 stack on the machine is operational, ensuring that the network interface card (NIC) can send and receive packets to itself without involving external network interfaces.",
      },
      {
        id: 48,
        question:
          "When initializing communication without a specific IPv6 address, a device might use a certain type of address to indicate that it does not yet have a defined IPv6 address. Which IPv6 address serves this purpose?",
        options: ["::/128", "FE80::/10", "2001::/3", "FF02::1"],
        correct: 0,
        explanation:
          "The IPv6 unspecified address, represented as ::/128, or simply ::, consists of all 128 bits set to zero and is used by devices indicating that they do not yet have a defined IPv6 address. This address is employed during initial communication processes, such as when a device is looking to obtain an IPv6 address through mechanisms like DHCPv6 or during the initial stages of neighbor discovery.",
      },
      {
        id: 49,
        question:
          "When configuring an IPv6 network, how does the IPv6 solicited-node multicast address help act as a replacement for IPv4's use of ARP?",
        options: [
          "By enabling broadcast messages to all devices on the network",
          "Through direct communication with the router to obtain its MAC address",
          "By sending a multicast message to a group, expecting a response from the device with a matching IPv6 address",
          "Using a unique local address to directly contact the target device without needing its MAC address",
        ],
        correct: 2,
        explanation:
          "The IPv6 solicited-node multicast address replaces the ARP functionality of IPv4 by sending a multicast message to a group of devices where only the device with the matching IPv6 address will respond. This method is efficient and limits the scope of address resolution traffic to interested parties only, unlike the IPv4 ARP broadcast method, which reaches all devices on a local network segment.",
      },
      {
        id: 50,
        question:
          "When manually configuring an IPv6 address for a device in a network, which of the following steps is NOT part of the configuration process?",
        options: [
          "Entering the 128-bit IPv6 address in hexadecimal notation",
          "Specifying a subnet prefix, often a /64",
          "Setting a default gateway to facilitate off-network communication",
          "Assigning a unique MAC address to ensure network interface identification",
        ],
        correct: 3,
        explanation:
          "A MAC address is a hardware identifier for network interfaces and is not manually assigned as part of an IPv6 configuration. The steps involved typically include entering the IPv6 address, specifying the subnet prefix (often /64 for individual subnets), and setting a default gateway for off-network communication. The MAC address is used in the process of generating a unique interface identifier for link local addresses and some types of global addresses but is not directly assigned by network administrators during manual IPv6 address configuration.",
      },
      {
        id: 51,
        question:
          "You are configuring an IPv6 network and need to generate interface IDs for devices using their MAC addresses. Which of the following correctly describes the initial step in creating a 64-bit interface ID using the EUI-64 format from a 48-bit MAC address?",
        options: [
          "Add the hexadecimal digits 'FFFF' in the middle of the MAC address.",
          "Divide the MAC address into two parts and insert 'FFFF' in the middle.",
          "Replace the first 24 bits of the MAC address with 'FFFF'.",
          "Convert the entire MAC address to binary and then add 16 bits of zeros.",
        ],
        correct: 1,
        explanation:
          "The EUI-64 format for generating a 64-bit interface ID from a 48-bit MAC address involves dividing the MAC address into two equal parts and inserting the hexadecimal digits 'FFFF' in the middle. This step extends the 48-bit MAC address to 64 bits, which is necessary for creating the interface ID part of an IPv6 address. The addition of 'FFFF' ensures that the generated address remains unique and follows the structure required for IPv6 interface identification.",
      },
      {
        id: 52,
        question:
          "In an IPv6 network, which of the following describes the Stateless Address Autoconfiguration (SLAAC) process?",
        options: [
          "Devices must request an IPv6 address from a DHCPv6 server.",
          "A device uses a combination of a router advertisement and its MAC address to generate its own IPv6 address.",
          "IPv6 addresses are assigned manually by network administrators for each device.",
          "A specific IPv6 address is designated for each device by the network based only on its MAC address.",
        ],
        correct: 1,
        explanation:
          "SLAAC allows a device to automatically generate its own IPv6 address without needing a DHCPv6 server. It uses the EUI-64 process to create the host portion of the address based on its MAC address and obtains the network prefix from a router advertisement (RA), enabling a device to autonomously configure its own IPv6 address.",
      },
      {
        id: 226,
        question: "Which IPv6 address type is automatically configured on every interface and is used for communication on the same local link?",
        options: ["Global Unicast", "Link‑Local", "Unique Local", "Multicast"],
        correct: 1,
        explanation:
          "Link‑Local addresses (FE80::/10) are automatically configured on every IPv6‑enabled interface and are used exclusively for communication on the same network segment. They are not routable beyond the local link.",
      },
    ],
  },

  // ========== MODULE 4: SWITCHING & VLANS (QUESTIONS 53–84) ==========
  {
    id: "switching-vlans",
    title: "Switching & VLANs",
    description: "Switching fundamentals, VLANs, trunking, STP, EtherChannel",
    icon: "🔌",
    color: "from-yellow-500 to-orange-600",
    questions: [
      {
        id: 53,
        question:
          "You are a network engineer tasked with configuring a network to efficiently handle both Layer 2 and Layer 3 forwarding decisions. Which type of switch would you choose to meet this requirement?",
        options: ["Traditional Ethernet switch", "Layer 2 switch with VLAN capabilities", "Basic hub", "Multilayer switch"],
        correct: 3,
        explanation:
          "A multilayer switch is designed to make forwarding decisions based on both Layer 2 (MAC address) and Layer 3 (IP address) information, as opposed to a traditional Layer 2 switch that bases decisions solely on MAC addresses. Multilayer switches can route packets between VLANs, apply security rules, and perform quality of service operations, making them ideal for handling complex networking requirements that involve both Layer 2 and Layer 3 forwarding. Also, the term 'multilayer' means that upper layer information can also be considered when making a forwarding decision (e.g., a configuration to block Telnet, using TCP port 23).",
      },
      {
        id: 54,
        question:
          "A network administrator is examining the MAC address table on a Cisco Catalyst switch. They notice several MAC addresses have the first six hexadecimal digits in common. What does this indicate?",
        options: [
          "The devices with those MAC addresses belong to the same Layer 2 multicast group.",
          "The devices with those MAC addresses have network interface cards manufactured by the same manufacturer.",
          "The vendor producing the network interfaces cards with those MAC addresses have mistakenly duplicated bits that were supposed to be unique.",
          "The switch is configured for IGMP Snooping on the ports associated with the MAC addresses in question.",
        ],
        correct: 1,
        explanation:
          "A Media Access Control (MAC) address is a 48-bit address burned into a network interface card by its manufacturer and is typically written as a series of twelve hexadecimal digits. A MAC address is divided into two parts: (1) The first 24 bits (i.e., the first 6 hexadecimal digits) are called the Organizationally Unique Identifier (OUI), which is assigned to a specific manufacturer. (2) The last 24 bits are assigned by the manufacturer. Therefore, MAC addresses having their first six hexadecimal digits in common were manufactured by the same manufacturer, who has been assigned those six hexadecimal digits (i.e., 24 bits) as their OUI.",
      },
      {
        id: 55,
        question:
          "You are configuring a network and need to identify adjacent Cisco devices, some of which do not have IP addresses. Which protocol would you use to discover these Layer 2 adjacent devices?",
        options: ["SNMP", "CDP", "LACP", "OSPF"],
        correct: 1,
        explanation:
          "CDP (Cisco Discovery Protocol) is a Layer 2 protocol that allows Cisco devices to discover information about directly connected CDP-speaking devices without the need for IP addressing. It enables network devices to share information about themselves with other directly connected devices on the network, facilitating the discovery of a network topology by revealing details about adjacent CDP-speaking devices.",
      },
      {
        id: 56,
        question:
          "As a network administrator, you're tasked with enhancing the security of your network's edge that connects to an Internet Service Provider (ISP). To prevent the ISP from gaining insights regarding your edge router, what CDP command should you apply on the interface connected to the ISP?",
        options: ["cdp enable", "cdp run", "no cdp run", "no cdp enable"],
        correct: 3,
        explanation:
          "The 'no cdp enable' command is used to selectively disable CDP on a specific interface. This prevents the device on the other end of the link, such as an ISP, from receiving CDP packets that contain information about your network device, thus enhancing security by limiting the amount of information exposed.",
      },
      {
        id: 57,
        question:
          "You are integrating non-Cisco devices into your network and want to ensure all devices can discover each other at Layer 2. Which protocol would you use to achieve this?",
        options: ["LLDP", "SNMP", "CDP", "BGP"],
        correct: 0,
        explanation:
          "LLDP (Link Layer Discovery Protocol) is an IEEE standard (802.1AB) protocol designed for discovering Layer 2 adjacent devices that are part of a network, irrespective of their vendor. Unlike CDP, which is proprietary to Cisco, LLDP offers a vendor-neutral solution, allowing for interoperability across different network device manufacturers.",
      },
      {
        id: 58,
        question:
          "You're configuring a switch port and wish to stop sending LLDP packets to a directly connected service provider in order to better protect your network details. Which command allows you to achieve this without affecting your ability to receive LLDP packets from the service provider?",
        options: ["no llpd run", "llpd transmit", "no llpd transmit", "llpd receive"],
        correct: 2,
        explanation:
          "The 'no llpd transmit' command disables the transmission of LLDP packets from a switch port to other devices, such as a service provider, helping ensure that sensitive network information is not inadvertently shared. This command does not affect the switch port's ability to receive LLDP packets, allowing it to still learn details regarding a directly connected LLDP-speaking device.",
      },
      {
        id: 59,
        question:
          "You are configuring a network for a company with several departments, and you need to ensure that each department is on a separate broadcast domain to enhance security and performance. Which of the following actions best accomplishes this goal?",
        options: [
          "Assign all devices to the default VLAN.",
          "Configure a trunk port for each department.",
          "Place all departments on the same subnet with different IP ranges.",
          "Segment the network into different VLANs based on department.",
        ],
        correct: 3,
        explanation:
          "Segmenting the network into different VLANs based on department ensures that each department is on a separate broadcast domain. This setup enhances network security and performance by isolating departmental traffic, reducing broadcast traffic, and limiting the visibility of devices across different departments.",
      },
      {
        id: 60,
        question:
          "You are tasked with setting up VLANs for a company with two departments: Engineering and Human Resources. After creating VLANs 10 and 20 for Engineering and HR respectively, you need to assign interfaces to these VLANs. How would you most efficiently assign interfaces GigabitEthernet0/1 and GigabitEthernet0/2 to the Engineering VLAN (VLAN 10)?",
        options: [
          "Use the interface range gig 0/1-2' command followed by the 'switchport access vlan 10' command.",
          "Individually configure each interface with 'switchport access vlan 10' command.",
          "Assign the interfaces to VLAN 10 using the 'vlan database' command.",
          "Apply the 'switchport access vlan 10' command under the global configuration mode, causing it to be inherited by interfaces without a VLAN assignment.",
        ],
        correct: 0,
        explanation:
          "The 'interface range' command allows you to configure multiple interfaces at the same time. By entering 'interface range gig 0/1-2' and then applying the 'switchport access vlan 10' command, both interfaces are assigned to the Engineering VLAN (VLAN 10). This method is more efficient than individually configuring each interface, which is also a valid method but not the best option given.",
      },
      {
        id: 61,
        question:
          "You are configuring a router-on-a-stick to facilitate communication between VLAN 10 and VLAN 20 on a Layer 2 switch. Which of the following configurations is essential on the router's interface to support traffic for both VLANs?",
        options: [
          "Configure the interface as an access port for VLAN 10.",
          "Subdivide the interface into two subinterfaces, each with its own VLAN identifier.",
          "Configure two physical interfaces, one for each VLAN.",
          "Set the interface to default VLAN 1 to automatically route VLAN traffic.",
        ],
        correct: 1,
        explanation:
          "A router-on-a-stick configuration uses a single physical router interface subdivided into multiple subinterfaces, each representing a VLAN with a unique VLAN identifier. This setup allows the router to route traffic between multiple VLANs over a single interface, with each subinterface acting as the default gateway for its VLAN.",
      },
      {
        id: 62,
        question:
          "When configuring a Layer 3 switch to facilitate inter-VLAN routing without an external router, what should be created for each VLAN to allow devices within those VLANs to communicate with each other?",
        options: [
          "A dedicated physical interface for each VLAN",
          "A static route configuration for each VLAN",
          "A Switch Virtual Interface (SVI) for each VLAN",
          "A separate routing protocol instance for each VLAN",
        ],
        correct: 2,
        explanation:
          "Switch Virtual Interfaces (SVIs) provide a means to route traffic between VLANs on a Layer 3 switch without the need for an external router. By assigning an IP address to an SVI for each VLAN, the switch can use these interfaces as the default gateways for devices in the VLANs, allowing for inter-VLAN routing.",
      },
      {
        id: 63,
        question:
          "You are configuring a switch to connect to a router for external network access. Which command would you use to transform a Layer 2 switch port into a Layer 3 routed port?",
        options: ["switchport mode access", "switchport mode trunk", "ip routing", "no switchport"],
        correct: 3,
        explanation:
          "The command 'no switchport' is used to convert a Layer 2 switch port into a Layer 3 routed port. This command disables the switchport functionality, allowing the port to be assigned an IP address and participate in routing.",
      },
      {
        id: 64,
        question:
          "You are analyzing traffic flowing over an Ethernet trunk. For most of the frames, you see four extra 'tag' bytes that, among other functions, identify the VLAN of the frame. However, some frames do not have these tag bytes. What can you conclude about these untagged frames?",
        options: [
          "The frames belong to the trunk's Default VLAN.",
          "The frames are destined for a multicast group.",
          "The frames are single fragments of a fragmented frame.",
          "The frames belong to the trunk's Native VLAN.",
        ],
        correct: 3,
        explanation:
          "An IEEE 802.1Q trunk can carry traffic for multiple VLANs over a single link. Frames for most VLANs are tagged with four additional 'tag' bytes. One of the fields in the tag bytes identifies the VLAN of that frame. However, there is one exception. One VLAN, known as the 'Native VLAN,' is not tagged, meaning it does not have those four tag bytes added to its frames. Therefore, it's important that the ports at each end of a trunk be configured with an identical Native VLAN (which defaults to VLAN 1).",
      },
      {
        id: 65,
        question:
          "As a network administrator for the Sales division in your company, you have administrative privileges on switch SW1. This switch is connected via a single Ethernet link to switch SW2. However, you do not have administrative access to switch SW2, yet you have been assigned the task of configuring an Ethernet trunk between those two switches. You happen to know the default trunk mode for ports on switch SW2 is 'dynamic auto.' Which of the following trunk modes can you configure on the SW1 side of the link to form a trunk?",
        options: ["access", "voice vlan", "dynamic desirable", "dynamic auto"],
        correct: 2,
        explanation:
          "The 'dynamic desirable' mode actively attempts to negotiate a trunk link by sending Dynamic Trunking Protocol (DTP) frames. When a port configured in 'dynamic desirable' mode connects to another switch port that is in 'dynamic desirable,' 'dynamic auto,' or 'trunk' mode, a trunk is formed. This mode is preferred when you want to ensure that a trunk is established without manual configuration of a far-end switch.",
      },
      {
        id: 66,
        question:
          "You are a network engineer tasked with securing a trunk link to ensure that it only carries traffic for VLANs explicitly specified by your network policy. Specifically, you only want to allow VLANs to 10, 20, and 30 on the trunk. Which of the following commands will achieve this security enhancement?",
        options: [
          "switchport trunk allowed vlan 10,20,30",
          "switchport trunk allowed vlan include 10,20,30",
          "switchport trunk denied vlan except 10,20,30",
          "switchport trunk permit vlan add 10,20,30",
        ],
        correct: 0,
        explanation:
          "The 'switchport trunk allowed vlan 10,20,30' command is the correct syntax to explicitly restrict the trunk link to carry only VLANs 10, 20, and 30. As another option, instead of explicitly stating which VLANs you wish to allow, you could tell the trunk to allow all VLANs, except the ones you specify. For example, if you wished to permit all VLANs except 10, 20, and 30, you could use the command 'switchport trunk allowed vlan except 10,20,30' in interface configuration mode for your trunk port.",
      },
      {
        id: 67,
        question:
          "Under what circumstances might you opt for a single VLAN access port instead of a multi-VLAN access port for your IP telephony deployment?",
        options: [
          "When you need to support Cisco IP phones with CDP version 2",
          "When using a third-party IP phone that does not support multi-VLAN access ports",
          "When running LLDP-MED for VLAN membership notification",
          "When you want to separate voice and data traffic into different VLANs",
        ],
        correct: 1,
        explanation:
          "A single VLAN access port might be chosen over a multi-VLAN access port when dealing with third-party IP phones that do not support the concept of multi-VLAN access ports. In this case, the voice and data traffic share the same VLAN.",
      },
      {
        id: 68,
        question:
          "When configuring a multi-VLAN access port for a Cisco IP Phone, which command specifies the VLAN for voice traffic?",
        options: [
          "switchport mode access",
          "switchport voice vlan 400",
          "switchport trunk allowed vlan 300,400",
          "switchport trunk native vlan 300",
        ],
        correct: 1,
        explanation:
          "The command 'switchport voice vlan 400' specifies the VLAN dedicated for voice traffic. This allows the IP phone to tag voice frames with VLAN 400, ensuring proper VLAN separation and prioritization for voice traffic while using the same physical port for both voice and data.",
      },
      {
        id: 69,
        question:
          "You are configuring a network with multiple switches and need to ensure optimal root bridge selection for Spanning Tree Protocol operations. Given the significance of the bridge ID in this process, which component does NOT contribute to the bridge ID calculation?",
        options: ["MAC address of the switch", "Port priority", "Switch priority", "VLAN ID"],
        correct: 1,
        explanation:
          "The bridge ID, crucial for root bridge determination in STP, consists of a switch's priority and its MAC address. The VLAN ID may influence the extended system ID in certain spanning tree versions like PVST+, but the port priority does not directly contribute to the bridge ID calculation.",
      },
      {
        id: 70,
        question:
          "Your network experienced a link failure between two switches. In the context of traditional Spanning Tree Protocol, how long does it take for a blocking port to transition to a Forwarding state after the failure?",
        options: ["50 seconds", "15 seconds", "20 seconds", "30 seconds"],
        correct: 0,
        explanation:
          "In traditional STP, a blocking port goes through 20 seconds of Blocking, 15 seconds of Listening, and 15 seconds of Learning before it transitions to the Forwarding state, totaling 50 seconds. This process ensures a loop-free logical topology while adapting to topology changes.",
      },
      {
        id: 71,
        question:
          "You are configuring a network to optimize traffic patterns for multiple VLANs using Cisco's Per VLAN Spanning Tree Plus (PVST+). If VLAN 200 should have a different root bridge than VLAN 100 to optimize its traffic flow, how can you ensure this in a PVST+ environment?",
        options: [
          "Set the same priority for all VLANs on all switches.",
          "Manually configure each VLAN with a different MAC address.",
          "Use the same root bridge for all VLANs across the network.",
          "Assign different bridge priorities to VLANs on different switches.",
        ],
        correct: 3,
        explanation:
          "PVST+ allows each VLAN to have its own spanning tree instance, meaning each VLAN can have a different root bridge based on its traffic flow needs. By assigning different bridge priorities to VLANs on different switches, network administrators can influence which switch becomes the root bridge for a particular VLAN, thereby optimizing the traffic flow for that VLAN.",
      },
      {
        id: 72,
        question:
          "You connect a printer to an access layer switch port in your network. To minimize connectivity delay, which STP feature should you enable on this port?",
        options: ["BPDU Guard", "Root Guard", "PortFast", "UplinkFast"],
        correct: 2,
        explanation:
          "PortFast is an STP feature designed to bypass the standard Listening and Learning states for ports connected to end devices, like printers, enabling them to transition directly to the Forwarding state and thus minimize connectivity delays.",
      },
      {
        id: 73,
        question:
          "Imagine you are configuring a switch (SW1), which is acting as a Root Bridge. You want to ensure that an attached switch (SW2) does not assume the role of the Root Bridge, even if SW2 sends a superior BPDU to SW1. Which Spanning Tree Protocol (STP) enhancement would you configure to meet this requirement?",
        options: ["BPDU Filter", "Root Guard", "Loop Guard", "BPDU Guard"],
        correct: 1,
        explanation:
          "Root Guard is an STP enhancement that is configured on switch port, off of which a superior BPDU should not be seen. This can help protect a network from an attacker adding their own switch and advertising a superior BPDU (i.e., a BPDU claiming the newly added switch has the lowest Bridge ID (BID) in the network).",
      },
      {
        id: 74,
        question:
          "You are monitoring a network and notice that a non-designated port on a switch has stopped receiving BPDUs but is still capable of sending data. To prevent potential Layer 2 topological loops due to this unidirectional link failure, which STP feature should be activated on this port?",
        options: ["Root Guard", "BPDU Filter", "Loop Guard", "BPDU Guard"],
        correct: 2,
        explanation:
          "Loop Guard is specifically designed to handle situations where a non-designated port stops receiving BPDUs but continues to transmit data. This feature will automatically transition the port into a Loop-Inconsistent state if it stops receiving BPDUs, thus preventing the port from mistakenly transitioning to the Forwarding state and potentially creating a Layer 2 topological loop.",
      },
      {
        id: 75,
        question:
          "As a network administrator, you are responsible for preventing Spanning Tree Protocol (STP) information from leaking between two distinct autonomous systems within your organization. To achieve this, you decide to implement an STP enhancement feature on a switch interface connecting one autonomous system to the other autonomous system. Which feature should you configure?",
        options: ["BPDU Guard", "Root Guard", "Loop Guard", "BPDU Filter"],
        correct: 3,
        explanation:
          "BPDU Filter is the appropriate feature to use in this scenario. It prevents Bridge Protocol Data Units (BPDUs) from being sent or received through a specified port. By filtering out BPDUs on the interface connecting the switches of two different autonomous systems, you can ensure that each system maintains its own Spanning Tree topology without interference or integration with the other, thus preserving the autonomy and security of both network segments.",
      },
      {
        id: 76,
        question:
          "You are a network technician setting up a switch with several ports configured for PortFast, which should only connect to end stations. What additional feature should you enable on these ports to ensure they are immediately disabled if they receive a BPDU, thus preventing unauthorized switches from potentially causing a network loop or a sub-optimal Spanning Tree topology?",
        options: ["BPDU Filter", "Root Guard", "Loop Guard", "BPDU Guard"],
        correct: 3,
        explanation:
          "BPDU Guard is the correct feature to enable in this scenario. When BPDU Guard is active on a PortFast-enabled port, it ensures that the port is moved into an Error-Disabled state if any BPDU is received. This feature is crucial for preventing network loops or sub-optimal Spanning Tree topologies by immediately disabling the port upon detecting a BPDU, indicating that a switch, rather than an end station, has been connected to the port.",
      },
      {
        id: 77,
        question:
          "In a network with varying VLAN traffic patterns, you seek an STP optimization strategy that minimizes the number of spanning tree instances while ensuring optimal paths for VLAN traffic. Which STP variant meets these requirements?",
        options: ["PVST+", "RSTP", "MSTP", "CST"],
        correct: 2,
        explanation:
          "MSTP (Multiple Spanning Tree Protocol) allows for the creation of multiple spanning tree instances that can be shared among VLANs, optimizing path selection based on traffic patterns while reducing the number of required instances.",
      },
      {
        id: 78,
        question:
          "You are configuring a network to improve convergence times in the event of a link failure. Given the significant reduction in convergence times provided by RSTP compared to traditional STP, which of the following best describes the time frame you can expect for a link failure recovery with RSTP?",
        options: [
          "Instantaneous recovery",
          "Recovery within a few milliseconds to a maximum of about six seconds",
          "Recovery within 30 seconds",
          "Recovery within 50 seconds",
        ],
        correct: 1,
        explanation:
          "Rapid Spanning Tree Protocol (RSTP) significantly reduces the default convergence time of traditional STP from potentially 50 seconds to a range of a few milliseconds to a maximum of about six seconds. This improvement is especially notable in the case of direct link failures, where the convergence time can be on the lower end of this range. The capability of switches to quickly propagate Topology Change Notifications (TCNs) contributes to this speed increase, ensuring faster recovery and minimal network downtime.",
      },
      {
        id: 79,
        question:
          "You're in the process of configuring your network switches to use Rapid PVST. After configuring the switches, you need to verify that a specific switch has successfully transitioned to Rapid PVST mode. Which command should you use to confirm the current Spanning Tree Protocol mode on a Cisco switch?",
        options: ["show spanning-tree summary", "show version", "show protocols", "show running-config"],
        correct: 0,
        explanation:
          "The 'show spanning-tree summary' command is the appropriate command to verify the STP mode on a Cisco switch. This command provides a concise summary of the STP status, including the current STP mode, which would reflect Rapid PVST after successful configuration. This command is especially useful for quickly confirming the operational status and root bridge designation for various VLANs.",
      },
      {
        id: 80,
        question:
          "Imagine you are configuring an EtherChannel between two switches to enhance bandwidth and provide redundancy. What is an essential step to ensure the EtherChannel functions correctly?",
        options: [
          "Assign different IP addresses to each port in the EtherChannel.",
          "Ensure all ports in the EtherChannel have different VLAN settings.",
          "Configure all ports in the EtherChannel with the same speed and duplex settings.",
          "Turn off Spanning Tree Protocol (STP) on the EtherChannel ports to prevent ports from blocking traffic.",
        ],
        correct: 2,
        explanation:
          "For an EtherChannel to operate correctly, it is critical that all ports in the EtherChannel bundle on both switches are configured with the same speed and duplex settings. This ensures that the ports can communicate effectively and function as a single, logical connection. Mismatched settings could prevent the EtherChannel from forming or lead to suboptimal performance.",
      },
      {
        id: 81,
        question:
          "When configuring an EtherChannel with PAgP, which mode combination will successfully establish an EtherChannel?",
        options: [
          "One side set to 'auto' and the other side set to 'desirable'",
          "Both sides set to 'auto'",
          "One side set to 'desirable' and the other to 'on'",
          "One side set to 'auto' and the other side set to 'on'",
        ],
        correct: 0,
        explanation:
          "For an EtherChannel to form using PAgP, one side must be set to 'desirable,' which actively sends PAgP frames to negotiate an EtherChannel, and the other side can be set to either 'auto' (which is willing to form an EtherChannel but will not initiate it) or 'desirable'.",
      },
      {
        id: 82,
        question:
          "Considering EtherChannel load balancing methods, which scenario best utilizes the load balancing algorithm based on both source and destination MAC addresses?",
        options: [
          "A network environment where traffic is predominantly broadcast",
          "A network setup with identical traffic patterns between fixed source-destination pairs",
          "A network where EtherChannel links are used exclusively for server backups at fixed schedules",
          "A network with mostly unicast traffic where source and destination pairs vary widely",
        ],
        correct: 3,
        explanation:
          "The load balancing algorithm that considers both source and destination address information (either MAC address or IP address information) is most effective in environments where source-destination pairs vary widely. This method distributes traffic across the EtherChannel links more evenly by adding an element of randomness and diversity to the path selection process, optimizing the use of available bandwidth.",
      },
      {
        id: 83,
        question:
          "As a network engineer, you're configuring a Layer 2 EtherChannel between switches SW1 and SW2. Which of the following commands correctly creates an EtherChannel using PAgP with a mode that actively seeks to form an EtherChannel?",
        options: [
          "channel-group 1 mode passive",
          "channel-group 1 mode desirable",
          "channel-group 1 mode auto",
          "channel-group 1 mode active",
        ],
        correct: 1,
        explanation:
          "In PAgP (Port Aggregation Protocol), which is Cisco proprietary, the 'desirable' mode actively sends PAgP frames to negotiate the formation of an EtherChannel. This mode indicates that the port actively seeks to form an EtherChannel with the remote port if the remote port is set to either 'auto' or 'desirable' mode. Therefore, 'channel-group 1 mode desirable' is the correct command for creating an EtherChannel that proactively attempts to form using PAgP.",
      },
      {
        id: 84,
        question:
          "In the process of setting up a Layer 3 EtherChannel between two switches for inter-VLAN routing, which configuration step is essential?",
        options: [
          "Configuring the port channel with an IP address before assigning the physical interfaces to the EtherChannel",
          "Ensuring all ports in the EtherChannel are configured as access ports with the same VLAN ID",
          "Setting the EtherChannel mode to 'desirable' to actively negotiate LACP packets",
          "Assigning the port channel interface an IP address to enable Layer 3 routing capabilities",
        ],
        correct: 3,
        explanation:
          "For a Layer 3 EtherChannel, the crucial step is assigning the port channel interface an IP address, which enables routing capabilities over the EtherChannel. This is because, in a Layer 3 EtherChannel, the port channel interface acts as a routed interface instead of a switchport, allowing it to facilitate inter-VLAN routing or routing between different IP networks. The other options are not relevant to configuring a Layer 3 EtherChannel for routing purposes.",
      },
    ],
  },

  // ========== MODULE 5: ROUTING & FHRP (QUESTIONS 85–102) ==========
  {
    id: "routing-fhrp",
    title: "Routing & FHRP",
    description: "Routing fundamentals, static routes, OSPF, and First Hop Redundancy Protocols",
    icon: "🔀",
    color: "from-purple-500 to-purple-700",
    questions: [
      {
        id: 85,
        question:
          "You are configuring a new network segment for your company, connecting various devices and servers. If a device in this new segment needs to communicate with a server located in a different network segment, which piece of information is critical for the device to send packets to the server?",
        options: [
          "The server's MAC address",
          "The server's wildcard mask",
          "The MAC address of the device's default gateway",
          "The MAC address of the server's default gateway",
        ],
        correct: 2,
        explanation:
          "For a device to communicate with another device or server in a different network segment, it needs to send the packets to its default gateway. The packets are then forwarded to the destination by routers. The device uses ARP (Address Resolution Protocol) to determine the MAC address of its default gateway, as this is the next hop for packets destined for other networks.",
      },
      {
        id: 86,
        question:
          "Your router has learned routes to a specific network from multiple sources. Which criterion will your router use to select the most authoritative route when multiple routes to the same destination exist?",
        options: [
          "The route with the lowest administrative distance",
          "The route with the highest bandwidth",
          "The route with the shortest path",
          "The route with the fewest number of hops",
        ],
        correct: 0,
        explanation:
          "The Administrative Distance (AD) is a value used by routers to choose the most authoritative route when there are multiple routes to the same destination. The lower the AD, the more trustworthy the source of the route. Directly connected networks have an AD of 0, making them the most reliable.",
      },
      {
        id: 87,
        question:
          "In the context of routing protocols, which of the following correctly pairs a routing protocol with its categorization based on how it shares routing information?",
        options: [
          "RIP - Link State",
          "EIGRP - Advanced Distance Vector",
          "OSPF - Distance Vector",
          "BGP - Interior Gateway Protocol",
        ],
        correct: 1,
        explanation:
          "EIGRP is considered an advanced distance-vector routing protocol. It enhances traditional distance vector-protocols with features that allow for quicker convergence and more efficient routing, yet it does not have a complete map of the network topology like link-state routing protocols (e.g., OSPF and IS-IS).",
      },
      {
        id: 88,
        question:
          "You are a network engineer analyzing the routing table of a Cisco router that participates in both OSPF and EIGRP routing protocols. You observe routes to the same destination network advertised by both OSPF and EIGRP. Given the administrative distance values commonly associated with these protocols, under which condition would the router prefer the OSPF route over the EIGRP route for forwarding packets?",
        options: [
          "When the OSPF route has a lower metric than the EIGRP route",
          "When the EIGRP route's metric is artificially inflated",
          "When the OSPF route has a lower administrative distance than the EIGRP route",
          "When the EIGRP route has an administrative distance adjustment to make it less preferred than OSPF",
        ],
        correct: 3,
        explanation:
          "By default, EIGRP (with an administrative distance of 90 for internal routes) is preferred over OSPF (with an administrative distance of 110) due to its lower administrative distance, which makes EIGRP routes more trustworthy. However, if the administrative distance of the EIGRP route is manually adjusted (inflated) to make it higher than OSPF's administrative distance, then the router would prefer the OSPF route for forwarding packets. This adjustment is a strategic configuration choice made by network engineers to prefer certain routes over others under specific conditions.",
      },
      {
        id: 89,
        question:
          "You are a network administrator responsible for managing a remote sales office connected to the headquarters (HQ) network. The remote office router (BR1) has a single connection to the HQ router. Which of the following configurations would be most appropriate for enabling Internet access from the remote office?",
        options: [
          "Configure OSPF on BR1 to dynamically learn routes from HQ.",
          "Configure a static default route on BR1 pointing to the HQ router.",
          "Configure a static route on BR1 for every possible internet destination.",
          "Enable a dynamic routing protocol like EIGRP on BR1 to learn routes from HQ.",
        ],
        correct: 1,
        explanation:
          "Since the remote office router (BR1) has a single connection to the HQ router and there is no need for a complex routing protocol, configuring a static default route pointing to the HQ router is the most appropriate solution. This static default route will forward all Internet-bound traffic from the remote office to the HQ router, which presumably has the necessary routing information to reach the Internet.",
      },
      {
        id: 90,
        question:
          "Imagine you're a network administrator in a small company that just expanded its network with a new subnet of IP cameras. These cameras are on a separate subnet, 192.168.50.0/24, and you need to ensure that traffic from the main office network, 192.168.10.0/24, can reach this new subnet. You've decided to add a static route on the office's main router to handle this traffic. Which of the following commands would correctly configure the static route if the next-hop IP address is 192.168.10.254?",
        options: [
          "ip route 192.168.50.0 255.255.255.0 192.168.10.254",
          "ip route 192.168.50.0 255.255.255.0 192.168.50.1",
          "ip route 192.168.10.0 255.255.255.0 192.168.50.254",
          "ip route 192.168.10.254 255.255.255.0 192.168.50.0",
        ],
        correct: 0,
        explanation:
          "This command is correct because it specifies the destination network (192.168.50.0/24) and uses the correct subnet mask (255.255.255.0) along with the next-hop IP address (192.168.10.254) through which the traffic should be directed to reach the new subnet. Note that the next-hop IP address must be reachable from the router on which this static route is configured.",
      },
      {
        id: 91,
        question:
          "As a network engineer, you're troubleshooting a connectivity issue where a critical server, ServerA with an IP address 10.10.10.10, must be reached via a specific gateway, RouterB, instead of the default route used for the rest of the subnet traffic. RouterB's IP address on the network is 10.10.10.2. To ensure that only traffic to ServerA is routed through RouterB, which of the following static route configurations should you implement on your edge router?",
        options: [
          "ip route 10.10.10.0 255.255.255.0 10.10.10.2",
          "ip route 10.10.10.10 255.255.255.0 10.10.10.2",
          "ip route 10.10.10.10 255.255.255.255 10.10.10.2",
          "ip route 0.0.0.0 0.0.0.0 10.10.10.2",
        ],
        correct: 2,
        explanation:
          "This command is correct because it configures a static route specifically for the host with IP address 10.10.10.10 (ServerA), directing traffic to the specified next-hop IP address 10.10.10.2 (RouterB). This is a static host route configuration, as indicated by the use of a 32-bit subnet mask (255.255.255.255), ensuring that only traffic to ServerA is affected.",
      },
      {
        id: 92,
        question:
          "You are a network administrator managing a network that uses OSPF for dynamic routing. For redundancy, you've decided to configure a backup path through an alternate gateway router, RouterB, with an IP address of 192.168.1.2, in case the primary OSPF route to the 10.0.2.0/24 network fails. The OSPF routes have an administrative distance of 110. To configure this backup route as a floating static route, which command could you issue on the network's edge router?",
        options: [
          "ip route 10.0.2.0 255.255.255.0 192.168.1.2 100",
          "ip route 10.0.2.0 255.255.255.0 192.168.1.2 90",
          "ip route 0.0.0.0 0.0.0.0 192.168.1.2 115",
          "ip route 10.0.2.0 255.255.255.0 192.168.1.2 120",
        ],
        correct: 3,
        explanation:
          "This command is correct because it configures a static route to the 10.0.2.0/24 network through RouterB with an administrative distance of 120. The administrative distance is higher than the OSPF routes' distance of 110, making this static route a floating static route. It will only be used if the OSPF route becomes unavailable, thus providing the desired redundancy without interfering with the primary OSPF-based routing during normal operations.",
      },
      {
        id: 93,
        question:
          "Which multicast address is used by OSPF routers to send hello messages and form neighbor relationships?",
        options: ["224.0.0.9", "224.0.0.5", "FF02::A", "FF02::9"],
        correct: 1,
        explanation:
          "OSPF routers use the multicast address 224.0.0.5 (IPv4) or FF02::5 (IPv6) to send Hello messages to other OSPF-speaking routers on the same network segment. This allows them to discover each other and form neighbor relationships.",
      },
      {
        id: 94,
        question:
          "In an OSPF network with multiple routers connected to the same Ethernet segment, what is the primary reason for electing a Designated Router (DR) and Backup Designated Router (BDR)?",
        options: [
          "To reduce the number of adjacencies formed",
          "To increase the number of adjacencies formed",
          "To elect the router with the highest Router ID",
          "To ensure all routers have the same priority",
        ],
        correct: 0,
        explanation:
          "The primary reason for electing a DR and BDR in an OSPF network with multiple routers on the same Ethernet segment is to reduce the number of adjacencies formed. In a full-mesh topology, the number of adjacencies grows exponentially with the number of routers, which can lead to scalability issues. By electing a DR and BDR, other routers only need to form adjacencies with these two routers, reducing the overall number of adjacencies, while still allowing for the efficient exchange of routing information.",
      },
      {
        id: 95,
        question:
          "You are configuring OSPF on a router and want to ensure one of the router's Ethernet interfaces participates in the DR/BDR election process. However, you notice that the interface is not being considered for the DR or BDR role, even though it has the highest Router ID. What could be the reason for this behavior?",
        options: [
          "The interface has been configured with the Broadcast type.",
          "The interface is not connected to a transit network.",
          "The interface is in a different OSPF area than the other routers.",
          "The interface has been configured with an OSPF priority of 0.",
        ],
        correct: 3,
        explanation:
          "If an interface is configured with an OSPF priority value of 0, it will not participate in the DR/BDR election process, regardless of its Router ID. The priority value is a configurable parameter that influences the election of the DR and BDR. By setting the priority to 0, you prevent the router from becoming a DR or BDR on that specific interface. To resolve this issue and allow the interface to participate in the DR/BDR election process based on its Router ID, you could change the interface's OSPF priority to a non-zero value using the 'ip ospf priority' command in interface configuration mode.",
      },
      {
        id: 96,
        question:
          "As an OSPF network grows, you notice that the number of entries in the Link-State Database is becoming too large to manage effectively. Which of the following actions can help mitigate this issue?",
        options: [
          "Increasing the number of Designated Routers (DRs)",
          "Configuring all interfaces as point-to-point networks",
          "Dividing the network into multiple OSPF areas",
          "Disabling OSPF on some interfaces",
        ],
        correct: 2,
        explanation:
          "When an OSPF network grows large, the number of entries in the Link-State Database (LSDB) can become difficult to manage. To mitigate this issue, you can divide the network into multiple OSPF areas. Each area maintains its own LSDB, containing detailed topology information for that specific area. Routers in one area do not have the full topology information of other areas, which helps to reduce the size of the LSDB and improve scalability. This also helps administrators more easily interpret information in the LSDB.",
      },
      {
        id: 97,
        question: "What information is contained in a Type 1 LSA?",
        options: [
          "Networks in one area that are sent to another area",
          "Transit networks with an elected Designated Router",
          "Connected networks advertised by every router",
          "A listing of available networks without topology information",
        ],
        correct: 2,
        explanation:
          "A Type 1 LSA, also known as a Router LSA, is generated by every router to advertise its directly connected networks within an area. For example, if router R1 had five interfaces, each participating in the same OSPF routing process, then R1 would advertise those directly connected networks by sending five Type 1 LSAs (inside of Link State Update (LSU) packets), one for each directly connected network.",
      },
      {
        id: 98,
        question:
          "You are configuring OSPFv2 on a router and need to ensure that interface GigabitEthernet 0/1, which connects to a network segment with end users and no OSPF routers, does not send OSPF Hello messages. Which of the following router configuration mode commands correctly configures this requirement?",
        options: [
          "router ospf 1 area 0 passive-interface gig 0/1",
          "passive-interface default",
          "passive-interface gig 0/1",
          "ip ospf passive-interface gig 0/1",
        ],
        correct: 2,
        explanation:
          "The command 'passive-interface gig 0/1' is used within OSPF router configuration mode to specify that OSPF Hello messages should not be sent or received through the GigabitEthernet 0/1 interface. This is suitable for interfaces that connect to networks where no OSPF neighbors are expected, such as networks with end users only. This command prevents OSPF neighbor relationships from forming on that interface while still allowing the network connected to that interface to be advertised via OSPF.",
      },
      {
        id: 99,
        question:
          "While verifying your OSPFv2 configuration on a router, you notice that some of the networks learned via OSPF are marked with the code 'IA'. What does this code signify?",
        options: [
          "Intra-Area routes, indicating routes within the same area as the router",
          "Inter-Area routes, indicating routes that come from a different area",
          "Inaccessible routes, indicating routes that are not reachable",
          "Interface-Attached routes, indicating routes for directly connected networks",
        ],
        correct: 1,
        explanation:
          "The 'IA' code in an OSPF routing table stands for Inter-Area, indicating routes learned from an area other than the one in which a router resides. These Inter-Area routes were advertised to this router by an Area Border Router (ABR) using Type 3 LSAs.",
      },
      {
        id: 100,
        question:
          "You are a network engineer configuring an HSRP setup with two routers, R1 and R2, where R1 is the Active router and R2 is the Standby router. If R1 experiences an outage, how long will R2 wait, by default, before assuming the Active role?",
        options: ["3 seconds", "10 seconds", "1 second", "5 seconds"],
        correct: 1,
        explanation:
          "In HSRP, a Standby router waits for a duration called the 'Hold Time' before assuming the Active role if the Active router fails. The default Hold Time is 10 seconds. This interval allows the Standby router to ensure that the absence of communication from the Active router is due to a failure and not just lost messages due to network issues.",
      },
      {
        id: 101,
        question:
          "As a network administrator, you are tasked with choosing a First Hop Redundancy Protocol (FHRP) that allows a router interface to share the same IP address as the Virtual Router's IP address. Which protocol would you use?",
        options: ["HSRP", "GLBP", "VRRP", "OSPF"],
        correct: 2,
        explanation:
          "VRRP, unlike HSRP and GLBP, supports configuring a router interface's IP address to be the same as the Virtual Router's IP address. This feature can prevent the Virtual Router from using one of the available IP addresses in a subnet, although it might complicate troubleshooting.",
      },
      {
        id: 102,
        question:
          "You are setting up a network using GLBP to optimize both load balancing and redundancy. Which of the following methods can GLBP use to distribute client traffic across multiple routers?",
        options: ["Round-Robin Distribution", "Weighted Distribution", "Host-Dependent Configuration", "All of the above"],
        correct: 3,
        explanation:
          "GLBP supports several load balancing methods, including Round-Robin, where requests are distributed evenly across routers; Weighted Distribution, which allocates traffic based on predefined weights; and Host-Dependent Configuration, which allows traffic from specific hosts to consistently use the same router. This flexibility allows network administrators to tailor traffic distribution based on network needs and device capabilities.",
      },
    ],
  },

  // ========== MODULE 6: WIRELESS (QUESTIONS 103–113 + 227–230) ==========
  {
    id: "wireless",
    title: "Wireless Networking",
    description: "WLAN design, Wi-Fi standards, access point modes, and interference",
    icon: "📡",
    color: "from-teal-500 to-cyan-600",
    questions: [
      {
        id: 103,
        question:
          "You are a network administrator for a small office. The office uses multiple wireless access points configured independently. Which of the following is a potential benefit or drawback commonly associated this setup?",
        options: [
          "Increased wireless signal strength",
          "Increased risk of configuration errors",
          "Reduced administrative overhead",
          "Simplified configuration process",
        ],
        correct: 1,
        explanation:
          "Configuring multiple wireless access points independently can lead to an increased risk of configuration errors due to the need to manually set each access point with the correct SSID, channel, security settings, etc. This approach does not scale well and increases administrative overhead, making it more error-prone compared to using a centralized Wireless LAN Controller (WLC).",
      },
      {
        id: 104,
        question:
          "In which type of WLAN design do wireless clients communicate directly with each other without the use of an Access Point (AP)?",
        options: ["Ad Hoc WLAN", "Infrastructure WLAN", "Mesh WLAN", "Point-to-Point WLAN"],
        correct: 0,
        explanation:
          "An Ad Hoc WLAN design allows wireless clients to communicate directly with each other without relying on any infrastructure such as APs or Ethernet switches. This setup is useful for quick, temporary communication needs.",
      },
      {
        id: 105,
        question:
          "In which access point mode does an AP solely perform background tasks (e.g., rogue AP detection), without providing client connectivity?",
        options: ["Local Mode", "FlexConnect Mode", "Monitor Mode", "Bridge Mode"],
        correct: 2,
        explanation:
          "In Monitor Mode, an access point is dedicated to performing background operations such as intrusion detection and rogue AP detection without providing connectivity to clients. This mode helps enhance network security and performance monitoring.",
      },
      {
        id: 106,
        question:
          "What term describes a unique MAC address on an access point that allows a wireless client to identify and communicate with it specifically?",
        options: ["BSSID", "IBSS", "SSID", "ESSID"],
        correct: 0,
        explanation:
          "A Basic Service Set Identifier (BSSID) is a MAC address on an access point, allowing wireless clients to identify and communicate with a specific access point within a network. Note that some APs could have multiple BSSIDs, where a different BSSID is associated with each SSID configured on the AP.",
      },
      {
        id: 107,
        question: "Which of the following frequency bands is not commonly used in modern wireless networks?",
        options: ["2.4 GHz", "5 GHz", "6 GHz", "7 GHz"],
        correct: 3,
        explanation: "The 2.4 GHz, 5 GHz, and 6 GHz bands are commonly used in modern wireless networks. However, the 7 GHz band is not typically used for wireless networking.",
      },
      {
        id: 108,
        question: "Which of the following can cause interference in the 2.4 GHz wireless band?",
        options: ["Infrared remote controls", "Bluetooth devices", "AM radio signals", "Fiber optic cables"],
        correct: 1,
        explanation: "Bluetooth devices operate in the 2.4 GHz band, which can overlap and cause interference with wireless networks using the same frequency range.",
      },
      {
        id: 109,
        question:
          "Which Wi-Fi standard introduced the use of the 5 GHz frequency band and offered a maximum theoretical bandwidth of 54 Mbps?",
        options: ["802.11b", "802.11a", "802.11g", "802.11n"],
        correct: 1,
        explanation:
          "The 802.11a standard, introduced in 1999, was the first to use the 5 GHz frequency band and offered a maximum theoretical bandwidth of 54 Mbps. This provided higher data rates and less interference compared to the 2.4 GHz band used by earlier standards.",
      },
      {
        id: 110,
        question:
          "Which of the following describes the principle behind Orthogonal Frequency Division Multiplexing (OFDM)?",
        options: [
          "Subdividing a channel into multiple subchannels that are phase-shifted by 90 degrees",
          "Using the same frequency for all subchannels",
          "Sending one bit of data at a time in a single channel",
          "Hopping frequencies in a random sequence",
        ],
        correct: 0,
        explanation:
          "Orthogonal Frequency Division Multiplexing (OFDM) works by subdividing a channel into multiple subchannels, each phase-shifted by 90 degrees. This orthogonality prevents interference between adjacent subchannels, allowing for more efficient data transmission.",
      },
      {
        id: 111,
        question:
          "Which technology allows an access point to communicate with multiple clients simultaneously by using multiple spatial streams?",
        options: ["Single-User MIMO", "Frequency Hopping Spread Spectrum", "Multi-User MIMO (MU-MIMO)", "Direct Sequence Spread Spectrum"],
        correct: 2,
        explanation:
          "Multi-User MIMO (MU-MIMO) allows an access point to communicate with multiple clients simultaneously using multiple spatial streams. This improves overall network throughput and efficiency in dense environments.",
      },
      {
        id: 112,
        question: "What is the main benefit of channel bonding in Wi-Fi networks?",
        options: [
          "Reducing interference from other wireless networks",
          "Increasing the number of available channels",
          "Enhancing security by using multiple channels",
          "Increasing the channel width to increase throughput",
        ],
        correct: 3,
        explanation:
          "The main benefit of channel bonding is to increase throughput by increasing channel width. For example, bonding two 20 MHz channels to create a 40 MHz channel allows for more data to be transmitted simultaneously, thus increasing network performance.",
      },
      {
        id: 113,
        question:
          "When configuring a new wireless LAN on a Cisco Wireless LAN Controller, what must be done to ensure the wireless LAN's SSID is visible to users?",
        options: ["Set a static IP address", "Enable SSID broadcasting", "Configure DHCP settings", "Set the SSID to 'Public'"],
        correct: 1,
        explanation:
          "To ensure a wireless LAN's SSID is visible to users, SSID broadcasting must be enabled. This allows a wireless network name to be seen by devices searching for available networks.",
      },
      {
        id: 227,
        question: "Which IEEE 802.11 standard first introduced MIMO (Multiple Input Multiple Output) technology?",
        options: ["802.11a", "802.11g", "802.11n", "802.11ac"],
        correct: 2,
        explanation:
          "802.11n (Wi‑Fi 4) introduced MIMO technology, which uses multiple antennas to improve throughput and range. 802.11ac later enhanced MIMO with MU‑MIMO.",
      },
      {
        id: 228,
        question: "How many non‑overlapping channels are available in the 2.4 GHz band in the United States?",
        options: ["1", "3", "6", "11"],
        correct: 1,
        explanation:
          "In the 2.4 GHz band, only channels 1, 6, and 11 are non‑overlapping in the US, providing 3 usable channels for Wi‑Fi deployments.",
      },
      {
        id: 229,
        question: "Which wireless security protocol uses SAE (Simultaneous Authentication of Equals) for stronger key exchange?",
        options: ["WEP", "WPA", "WPA2", "WPA3"],
        correct: 3,
        explanation:
          "WPA3 introduces SAE (also called Dragonfly) to replace the pre‑shared key (PSK) handshake of WPA2, providing better protection against offline dictionary attacks.",
      },
      {
        id: 230,
        question: "What is the primary purpose of a Beacon frame in a wireless LAN?",
        options: [
          "To authenticate wireless clients",
          "To announce the presence of an access point and its SSID",
          "To encrypt data traffic",
          "To assign IP addresses to clients",
        ],
        correct: 1,
        explanation:
          "Beacon frames are broadcast periodically by an access point to advertise its SSID, supported data rates, and other capabilities, allowing clients to discover the network.",
      },
    ],
  },

  // ========== MODULE 7: WAN & SERVICES (QUESTIONS 114–132) ==========
  {
    id: "wan-services",
    title: "WAN & Services",
    description: "NAT, NTP, DHCP, SNMP, syslog, QoS, and remote access",
    icon: "📡",
    color: "from-indigo-500 to-blue-600",
    questions: [
      {
        id: 114,
        question:
          "You are a network administrator tasked with configuring static NAT on router R1 to allow PC1 with an inside local address of 192.168.1.100 to access the Internet using the inside global address of 192.0.2.101. Which command correctly maps the inside local address to the inside global address?",
        options: [
          "ip nat inside source static 192.168.1.100 192.0.2.101",
          "ip nat outside source static 192.168.1.100 192.0.2.101",
          "ip nat inside source dynamic 192.168.1.100 192.0.2.101",
          "ip nat outside source dynamic 192.168.1.100 192.0.2.101",
        ],
        correct: 0,
        explanation:
          "The command 'ip nat inside source static 192.168.1.100 192.0.2.101' is used to configure static NAT by mapping the inside local address (192.168.1.100) to the inside global address (192.0.2.101). The keyword 'static' indicates this is a static mapping.",
      },
      {
        id: 115,
        question:
          "You are configuring dynamic NAT on router R1. After defining the inside and outside interfaces, what is the next step to allow inside local addresses to be translated to addresses in a pool of inside global addresses?",
        options: [
          "Configure a static NAT mapping.",
          "Create an access control list (ACL) to match the inside local addresses.",
          "Configure PAT (Port Address Translation).",
          "Enable NAT on both interfaces.",
        ],
        correct: 1,
        explanation:
          "After defining which interfaces are considered to be 'inside' and 'outside' NAT interfaces (which also enables NAT on those interfaces), the next step in configuring dynamic NAT is to create an access control list (ACL) to match the inside local addresses that need to be translated to inside global addresses. Note that in this context, the ACL is being used to match traffic, rather than permit or deny traffic.",
      },
      {
        id: 116,
        question:
          "In a small office setup with a single public IP address, which NAT variant allows multiple devices to share this single IP address using unique port numbers?",
        options: ["Static NAT", "Dynamic NAT", "Network Address Port Translation (NAPT)", "Port Address Translation (PAT)"],
        correct: 3,
        explanation:
          "Port Address Translation (PAT) allows multiple devices on a local network to be mapped to a single public IP address but with a unique port number for each session. This is also known as 'NAT Overloading.'",
      },
      {
        id: 117,
        question:
          "During an audit, you discover that the digital certificates used for secure communications are frequently being marked as expired even though they should still be valid. What is the most likely cause of this issue, and how can it be resolved?",
        options: [
          "The certificates were issued incorrectly. Reissue all certificates.",
          "Network devices are not synchronized with an NTP server. Ensure all devices are configured to use an NTP server.",
          "The CA (Certificate Authority) server is down. Restart the CA server.",
          "The network time zone settings are incorrect. Adjust the time zone settings on all devices.",
        ],
        correct: 1,
        explanation:
          "If network devices are not synchronized with an NTP server, the local time on devices might not match the actual time, causing valid digital certificates to be seen as expired. Synchronizing all devices with an NTP server ensures consistent and accurate time across the network, helping prevent such issues.",
      },
      {
        id: 118,
        question:
          "After setting up NTP on your network, you observe that synchronization is not happening immediately, and the Stratum values on your routers are higher than expected. What underlying mechanism of NTP might be causing this delay, and how does it ensure accurate time synchronization?",
        options: [
          "NTP version compatibility checks, which delay synchronization until verified.",
          "NTP waits for manual confirmation from the administrator before final synchronization.",
          "NTP requires a reboot of all network devices to fully synchronize.",
          "NTP uses a complex algorithm to gradually adjust the local clock to match the reference clock, preventing sudden changes.",
        ],
        correct: 3,
        explanation:
          "NTP uses a complex algorithm to gradually adjust a local clock to match a reference clock. This process, known as 'clock discipline,' prevents sudden changes to the system clock, ensuring a smooth and accurate synchronization. This gradual adjustment can cause an initial delay before the clocks are fully synchronized and the stratum values reflect accurate time sources.",
      },
      {
        id: 119,
        question:
          "You are configuring a Cisco IOS router to act as a DHCP server. You want it to hand out IP addresses in the range 192.168.1.100 through 192.168.1.199. Which command do you use to exclude the IP addresses outside this range?",
        options: [
          "'ip dhcp pool included-address 192.168.1.100 192.168.1.199'",
          "'ip dhcp excluded-address 192.168.1.1-99' and 'ip dhcp excluded-address 192.168.1.200-254'",
          "'ip dhcp excluded-address 192.168.1.1 192.168.1.99' and 'ip dhcp excluded-address 192.168.1.200 192.168.1.254'",
          "'ip dhcp inclusive 192.168.1.0 192.168.1.255 exclusive 192.168.1.100-199'",
        ],
        correct: 2,
        explanation:
          "To exclude the IP addresses outside the desired range, you need to use the 'ip dhcp excluded-address' command twice. First, to exclude the addresses from 192.168.1.1 through 192.168.1.99, and second, to exclude the addresses from 192.168.1.200 through 192.168.1.254. This ensures that only the addresses from the 192.168.1.100 through 192.168.1.199 range are available for the DHCP pool.",
      },
      {
        id: 120,
        question:
          "You are a network administrator configuring Router R2 as a DHCP Relay Agent to forward DHCP Discover messages from Router R1 to a DHCP server at IP address 192.0.2.1. Which command would you use on Router R2 to correctly set up the DHCP relay agent on interface Gig 0/1?",
        options: ["ip helper-address 192.0.2.1", "ip dhcp relay 192.0.2.1", "ip relay address 192.0.2.1", "ip dhcp forward 192.0.2.1"],
        correct: 0,
        explanation:
          "The 'ip helper-address 192.0.2.1' command is used to configure a router interface to forward DHCP Discover messages to a DHCP server with an IP address of 192.0.2.1. This allows clients on a different subnet to receive IP address assignments from the DHCP server.",
      },
      {
        id: 121,
        question:
          "You are a network administrator tasked with accessing a Cisco router remotely for configuration. Which of the following methods would provide an encrypted remote connection?",
        options: ["Telnet", "HTTP", "SSH", "Console port with a USB cable"],
        correct: 2,
        explanation:
          "SSH (Secure Shell) provides a secure connection by encrypting the traffic between the client and the router, ensuring that sensitive information such as usernames and passwords are protected from interception. Telnet and HTTP do not provide encryption, making them insecure options. The console port with a USB cable is used for direct, local access, not remote access.",
      },
      {
        id: 122,
        question:
          "Which type of AI learning involves the system grouping data into categories without labeled training data?",
        options: ["Supervised learning", "Unsupervised learning", "Semi-supervised learning", "Reinforcement learning"],
        correct: 1,
        explanation:
          "Unsupervised learning involves the system analyzing unlabeled data to find natural groupings or patterns. This method allows the AI to categorize the data without predefined labels, making it useful for discovering underlying structures within the data.",
      },
      {
        id: 123,
        question:
          "What is the primary purpose of an SNMP agent's MIB (Management Information Base)?",
        options: [
          "To store user login credentials",
          "To manage the physical hardware of a network device",
          "To encrypt network traffic",
          "To define a database of manageable objects",
        ],
        correct: 3,
        explanation:
          "The Management Information Base (MIB) is a database of manageable objects that an SNMP agent uses to monitor and manage device performance. It includes various OIDs (Object Identifiers) that represent different statistics and parameters that can be monitored and managed.",
      },
      {
        id: 124,
        question:
          "Which SNMP command is used to configure a read-only community string on a Cisco router?",
        options: [
          "snmp-server community [string] 0x444",
          "snmp-server community [string] ro",
          "snmp-server community [string] read",
          "snmp-server community [string] public",
        ],
        correct: 1,
        explanation:
          "The command 'snmp-server community [string] ro' is used to set up a read-only community string on a Cisco router, allowing SNMP managers to read information from the device without making changes.",
      },
      {
        id: 125,
        question: "What is a primary benefit of using a centralized syslog server?",
        options: [
          "It provides real-time device monitoring.",
          "It helps with event correlation by collecting log information from multiple devices in one place.",
          "It encrypts all log messages for security.",
          "It automatically updates device firmware.",
        ],
        correct: 1,
        explanation:
          "A centralized syslog server collects log information from multiple devices, enabling better event correlation. This helps network administrators identify patterns and determine the root causes of issues by analyzing logs from various sources at the same time.",
      },
      {
        id: 126,
        question:
          "Which command is used to generate an RSA key to support SSH on a Cisco router?",
        options: ["crypto key generate rsa", "ssh keygen", "key generate rsa", "crypto rsa generate key"],
        correct: 0,
        explanation:
          "The command 'crypto key generate rsa' is used to generate an RSA key to support Secure Shell (SSH) on a Cisco router. This key is a requirement for establishing a secure SSH connection.",
      },
      {
        id: 127,
        question:
          "Which Transport Layer protocol does TFTP use, and why is it less secure than FTP?",
        options: [
          "TCP; TFTP lacks encryption",
          "UDP; TFTP uses cleartext passwords",
          "UDP; TFTP lacks authentication",
          "TCP; TFTP does not support large file transfers",
        ],
        correct: 2,
        explanation:
          "TFTP uses the UDP Transport Layer protocol and lacks authentication, making it less secure than FTP. TFTP's simplicity makes it faster but unsuitable for secure file transfers.",
      },
      {
        id: 128,
        question:
          "You are asked to configure a collection of QoS tools on a departmental network in your company. These tools include: CB-WFQ, LLQ, WRED, and Class-Based Policing. These tools all fall under which category of QoS tools?",
        options: ["FIFO", "DiffServ", "Best Effort", "IntServ"],
        correct: 1,
        explanation:
          "The DiffServ (Differentiated Services) category of Quality of Service (QoS) mechanisms allows us to differentiate between various traffic types, typically using Class-Maps. All the tools listed in the question fall under this QoS category. IntServ (Integrated Services) allows applications to reserve a portion of a link's bandwidth for the duration of that application. RSVP is an example of an IntServ QoS mechanism. The Best Effort category of QoS mechanisms treats traffic with a FIFO (First-In First-Out) approach, and therefore does not prioritize or reorder packets.",
      },
      {
        id: 129,
        question:
          "In a network, which Layer 2 marking is used on a Dot1Q trunk to identify the priority of traffic, and how many different values can it represent?",
        options: ["CoS; 8 values", "IP Precedence; 8 values", "DSCP; 64 values", "TOS; 64 values"],
        correct: 0,
        explanation:
          "Class of Service (CoS) is the Layer 2 marking used on a Dot1Q trunk. It uses three bits, allowing for 8 different values (0-7), though typically only 0-5 are used for production traffic.",
      },
      {
        id: 130,
        question:
          "Which queuing mechanism should you configure on a Cisco router to ensure that voice traffic is prioritized over other types of traffic?",
        options: ["FIFO", "CB-WFQ", "LLQ", "WFQ"],
        correct: 2,
        explanation:
          "Low Latency Queuing (LLQ) should be configured to ensure that voice traffic is prioritized. LLQ adds a priority queue to Class-Based Weighted Fair Queuing (CB-WFQ) configuration, which can guarantee that high-priority traffic, like voice and/or video, is sent first.",
      },
      {
        id: 131,
        question:
          "You want to limit the bandwidth that a class of traffic uses on a WAN link. The link has a relatively slow speed, and you want to delay excess traffic, rather than dropping it. Which traffic conditioner should you choose?",
        options: ["Policing", "Weighted Random Early Detection", "WFQ", "Shaping"],
        correct: 3,
        explanation:
          "Cisco routers support two types of traffic conditioners: (1) Shaping and (2) Policing. Shaping delays excess traffic rather than dropping it, and it is intended to be used on slower speed interfaces. Policing, however, drops excess traffic rather than delaying it, and it is intended to be used on higher speed interfaces.",
      },
      {
        id: 132,
        question:
          "In the 3-step MQC configuration process, which step involves assigning QoS policies to the identified classes of traffic?",
        options: ["Applying a Policy-Map", "Creating a Policy-Map", "Matching traffic with a Class-Map", "Verifying the configuration"],
        correct: 1,
        explanation:
          "In the 3-step MQC configuration process, the 1st step is to classify traffic using Class-Maps. The 2nd step is to assign QoS policies (to the classes of traffic identified in Step 1) using Policy-Maps. The 3rd step is to apply the Policy-Maps, which are typically applied to an interface, in either the inbound or outbound direction.",
      },
    ],
  },

  // ========== MODULE 8: SECURITY (QUESTIONS 133–151) ==========
  {
    id: "security",
    title: "Network Security",
    description: "Security concepts, ACLs, DHCP snooping, DAI, port security, and more",
    icon: "🔒",
    color: "from-red-500 to-red-700",
    questions: [
      {
        id: 133,
        question:
          "The CIA triad is a fundamental concept in information security. Which of the following describes the 'Integrity' component of the CIA triad?",
        options: [
          "Protecting private information from unauthorized access",
          "Ensuring that information is accurate and unaltered",
          "Making sure information is available when needed",
          "Encrypting data to prevent unauthorized access",
        ],
        correct: 1,
        explanation:
          "The 'Integrity' component of the CIA triad focuses on preserving the accuracy and consistency of data. It ensures that information is not altered by unauthorized parties and remains trustworthy. This can be achieved through methods like hashing, which detects changes in data.",
      },
      {
        id: 134,
        question: "Which of the following best describes a 'zero-day attack?'",
        options: [
          "An attack that occurs on the same day a vulnerability is discovered",
          "An attack that takes advantage of an outdated system patch",
          "An exploit that targets a known vulnerability with available patches",
          "A phishing attack that tricks users into revealing their passwords",
        ],
        correct: 0,
        explanation:
          "A 'zero-day attack' occurs when attackers exploit a vulnerability that has just been discovered and for which no patch is yet available. This makes it particularly dangerous, because defenses are not yet in place.",
      },
      {
        id: 135,
        question: "Which of the following scenarios is an example of 'phishing?'",
        options: [
          "An attacker calls pretending to be tech support",
          "A person following an employee into a secure area without proper authorization",
          "An attacker installing a rogue access point in an office",
          "An email that asks you to update your bank details on a fake website",
        ],
        correct: 3,
        explanation:
          "Phishing involves tricking individuals into disclosing sensitive information such as login credentials or financial information through deceptive emails or websites. In this scenario, the email asking for bank details is a classic example of phishing.",
      },
      {
        id: 136,
        question:
          "In a Denial of Service (DoS) attack, what is the primary goal of the attacker?",
        options: [
          "To steal confidential data",
          "To spoof the target system's identity",
          "To make a service unavailable to its users",
          "To gain unauthorized access to the system",
        ],
        correct: 2,
        explanation:
          "The primary goal of a Denial of Service (DoS) attack is to make a service unavailable to its intended users by overwhelming the target with excessive traffic, rendering it unable to perform its regular functions.",
      },
      {
        id: 137,
        question: "What is an 'evil twin' in the context of wireless network security?",
        options: [
          "A duplicate user account created by an attacker",
          "A rogue access point that mimics a legitimate wireless network",
          "A type of malware that replicates itself",
          "A phishing email designed to look like a legitimate one",
        ],
        correct: 1,
        explanation:
          "An 'evil twin' is a rogue access point set up by an attacker to mimic a legitimate wireless network. Unsuspecting users connect to it, allowing the attacker to intercept their data.",
      },
      {
        id: 138,
        question:
          "You need to ensure that passwords configured on a Cisco router are not stored in plain text. Which command will you use to apply basic encryption to passwords?",
        options: ["enable password encryption", "password-encryption service", "service password-encryption", "enable secret password"],
        correct: 2,
        explanation:
          "The command 'service password-encryption' applies basic encryption to passwords on a Cisco router. This prevents passwords from being stored in plain text, providing a minimal level of security against casual observation.",
      },
      {
        id: 139,
        question: "In the context of AAA, what does the 'Authorization' component control?",
        options: ["Who you are", "What you did", "How you authenticate", "What you can do"],
        correct: 3,
        explanation:
          "The 'Authorization' component in AAA (Authentication, Authorization, and Accounting) controls what a user is allowed to do once they are authenticated. Specifically, it defines the user's permissions and access levels within a system.",
      },
      {
        id: 140,
        question: "Which of the following is an example of multi-factor authentication?",
        options: [
          "Scanning a fingerprint and entering a password",
          "Entering a username and password",
          "Using a password to log into a computer",
          "Entering an email address and clicking a confirmation link",
        ],
        correct: 0,
        explanation:
          "Multi-factor authentication (MFA) involves using more than one method of verification. Scanning a fingerprint and entering a password uses two different factors: something the user is (fingerprint) and something the user knows (password).",
      },
      {
        id: 141,
        question:
          "Which of the following encryption methods uses the same key for both encryption and decryption?",
        options: ["Asymmetric encryption", "Public key encryption", "Symmetric encryption", "RSA encryption"],
        correct: 2,
        explanation:
          "Symmetric encryption uses the same key for both encryption and decryption, making it faster but requiring a secure key exchange. Examples include DES, Triple DES, and AES.",
      },
      {
        id: 142,
        question:
          "Which VPN type would you use to securely connect a traveling employee back to their corporate office network?",
        options: ["Site-to-site VPN", "Remote access VPN", "SSH VPN", "GRE VPN"],
        correct: 1,
        explanation:
          "A remote access VPN allows a traveling employee to securely connect back to their corporate office network over the Internet, providing access to internal resources as if they were physically present at their office.",
      },
      {
        id: 143,
        question:
          "Which of the following best describes a strong password according to current best practices?",
        options: [
          "A minimum of 8 characters, using only lowercase letters",
          "A minimum of 10 characters, using common words, allowing for quick recall",
          "A minimum of 6 characters, changed monthly",
          "A minimum of 12 characters, using a mix of upper and lowercase letters, numbers, and special characters",
        ],
        correct: 3,
        explanation:
          "A strong password should have a minimum of 12 characters and include a mix of upper and lowercase letters, numbers, and special characters to provide greater security against brute force and dictionary attacks.",
      },
      {
        id: 144,
        question:
          "Which wireless security protocol introduced the requirement that AES encryption be supported?",
        options: ["WEP", "WPA", "WPA2", "WPA3"],
        correct: 2,
        explanation:
          "WPA2 (Wi-Fi Protected Access 2) introduced the requirement that AES (Advanced Encryption Standard) encryption be supported, because AES provided a significant security improvement over its predecessors (i.e., TKIP and WEP).",
      },
      {
        id: 145,
        question:
          "You are a network administrator configuring ACLs on your network. You need to ensure that only Telnet traffic from a specific host can access a specific server while blocking all other traffic from that host. Which type of ACL should you use?",
        options: ["standard ACL", "extended ACL", "class-based ACL", "outbound ACL"],
        correct: 1,
        explanation:
          "An extended ACL allows you to specify both source and destination addresses as well as a specific protocol and port number. In this case, you can permit Telnet traffic (TCP port 23) from a specific host to a specific server, which is not possible with a standard ACL that only filters by source IP address.",
      },
      {
        id: 146,
        question:
          "You are configuring a numbered standard ACL to permit all IP traffic from the 192.168.10.0/24 network. Which of the following access control entries would you use?",
        options: [
          "access-list 10 permit 192.168.10.0 0.0.0.255",
          "access-list 10 permit 192.168.10.0 255.255.255.0",
          "access-list 10 permit host 192.168.10.0 0.0.0.255",
          "access-list 10 permit 192.168.10.0",
        ],
        correct: 0,
        explanation:
          "In a numbered standard ACL, the correct syntax to permit all IP traffic from a network uses the network address followed by its wildcard mask. The wildcard mask for a /24 network is 0.0.0.255. Therefore, the correct ACE is 'access-list 10 permit 192.168.10.0 0.0.0.255'.",
      },
      {
        id: 147,
        question:
          "In configuring a numbered standard ACL, which of the following are the correct ranges for the ACL number?",
        options: ["1-99 and 1000-1999", "1-199 and 2000-2699", "1-99 and 1300-1999", "100-199 and 2000-2999"],
        correct: 2,
        explanation:
          "The ranges for standard ACLs are 1-99 and 1300-1999. These ranges are used to define standard ACLs, while 100-199 and 2000-2699 are reserved for extended ACLs.",
      },
      {
        id: 148,
        question:
          "You are configuring a numbered extended ACL to deny Telnet (TCP port 23) traffic from the 192.168.1.0/24 network to a server with an IP address of 10.1.1.10. Which of the following access control entries would you use?",
        options: [
          "access-list 100 deny tcp 192.168.1.0 0.0.0.255 any eq 23",
          "access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 23",
          "access-list 100 deny tcp any host 10.1.1.10 eq 23",
          "access-list 100 deny tcp host 10.1.1.10 192.168.1.0 0.0.0.255 eq 23",
        ],
        correct: 1,
        explanation:
          "To deny Telnet traffic from the 192.168.1.0/24 network to a specific host, the correct syntax specifies the protocol (TCP), the source network with its wildcard mask, the destination host, and the TCP port number of 23. Therefore, the correct ACE is 'access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 23'.",
      },
      {
        id: 149,
        question:
          "What is one major advantage of using named ACLs over numbered ACLs?",
        options: [
          "They can filter traffic based on MAC addresses.",
          "They support more detailed logging options.",
          "They are easier to understand and manage, because they can have descriptive names.",
          "They provide better performance than numbered ACLs.",
        ],
        correct: 2,
        explanation:
          "Named ACLs can have descriptive names, which makes them easier to understand and manage as compared to numbered ACLs. This helps administrators quickly identify the purpose of an ACL in a configuration.",
      },
      {
        id: 150,
        question:
          "You need to create a named extended ACL to deny HTTP (TCP port 80) traffic from the network 192.168.20.0/24 to any destination. You begin your configuration by creating a named extended ACL with the 'ip access-list extended BLOCK_HTTP' command, which puts you into 'config-ext-nacl' configuration mode. From that mode, which of the following access control entries would you enter?",
        options: [
          "deny tcp any 192.168.20.0 0.0.0.255 eq 80",
          "deny tcp host 192.168.20.0 any eq 80",
          "deny tcp 192.168.20.0 0.0.0.255 any port 80",
          "deny tcp 192.168.20.0 0.0.0.255 any eq 80",
        ],
        correct: 3,
        explanation:
          "To deny HTTP traffic from a specific network to any destination using a named extended ACL, the correct syntax for an ACE specifies the protocol (TCP), the source network with its wildcard mask, the destination (any), and the destination port number (80). Therefore, the correct ACE is 'deny tcp 192.168.20.0 0.0.0.255 any eq 80'.",
      },
      {
        id: 151,
        question:
          "When troubleshooting an ACL that is blocking more traffic than intended, what is a common cause?",
        options: [
          "The implicit 'deny any' rule at the end of the ACL",
          "Incorrect ACL logging parameters",
          "Using an extended ACL instead of a standard ACL",
          "Not using named ACLs",
        ],
        correct: 0,
        explanation:
          "The implicit 'deny any' rule at the end of an ACL blocks all traffic that is not explicitly permitted by the preceding rules. If an ACL is not correctly configured to permit necessary traffic before this implicit deny rule, it can block more traffic than intended. Always ensure that the ACL has explicit permit statements for required traffic before the implicit deny takes effect.",
      },
    ],
  },

  // ========== MODULE 9: ETHERNET & SWITCHING (QUESTIONS 152–160 + 231–236) ==========
  {
    id: "ethernet-switching",
    title: "Ethernet & Switching",
    description: "Ethernet frames, MAC addresses, switching methods, ARP, and switch configuration",
    icon: "🔌",
    color: "from-blue-500 to-blue-700",
    questions: [
      {
        id: 152,
        question: "What is the size of a MAC address in bits and how is it typically represented?",
        options: [
          "32 bits, represented in dotted decimal format",
          "48 bits, represented as 12 hexadecimal digits",
          "64 bits, represented in colon-separated format",
          "128 bits, represented in hexadecimal",
        ],
        correct: 1,
        explanation:
          "A MAC address is 48 bits (6 bytes) long and is typically represented as 12 hexadecimal digits, often grouped in pairs separated by colons or hyphens (e.g., 00:1A:2B:3C:4D:5E).",
      },
      {
        id: 153,
        question:
          "When a switch receives a frame with a destination MAC address that is not in its MAC address table, what action does it take?",
        options: [
          "It drops the frame",
          "It forwards the frame out all ports except the receiving port (flooding)",
          "It sends an ARP request to learn the MAC address",
          "It stores the frame in a buffer until the MAC address is learned",
        ],
        correct: 1,
        explanation:
          "When a switch receives a frame with an unknown destination MAC address, it floods the frame out all ports except the one it was received on. This ensures the frame reaches its intended recipient, and the switch will learn the MAC address from the reply traffic.",
      },
      {
        id: 154,
        question:
          "What is the primary difference between a collision domain and a broadcast domain?",
        options: [
          "A collision domain is Layer 2 and a broadcast domain is Layer 3",
          "A collision domain is limited to a single switch port segment, while a broadcast domain extends to all devices reachable at Layer 2",
          "A collision domain includes all devices in a VLAN, while a broadcast domain is per port",
          "There is no difference; they are the same concept",
        ],
        correct: 1,
        explanation:
          "A collision domain is the network segment where collisions can occur (e.g., a single Ethernet segment or a switch port). A broadcast domain is the set of devices that receive broadcast frames from each other, typically defined by VLAN boundaries.",
      },
      {
        id: 155,
        question:
          "What is the purpose of the Address Resolution Protocol (ARP) in a network?",
        options: [
          "To resolve IP addresses to MAC addresses",
          "To resolve hostnames to IP addresses",
          "To assign IP addresses dynamically",
          "To route packets between networks",
        ],
        correct: 0,
        explanation:
          "ARP (Address Resolution Protocol) is used to map an IP address to a MAC address on a local network. When a device needs to communicate with another device on the same network, it uses ARP to find the MAC address corresponding to the destination IP address.",
      },
      {
        id: 156,
        question:
          "Which of the following switching methods reads only the first 14 bytes (destination MAC, source MAC, and EtherType) before forwarding the frame?",
        options: ["Store-and-forward", "Cut-through", "Fragment-free", "Adaptive switching"],
        correct: 1,
        explanation:
          "Cut-through switching reads only the first 14 bytes of a frame (destination MAC, source MAC, and EtherType) and immediately begins forwarding the frame. This reduces latency but does not perform error checking, allowing corrupted frames to be forwarded.",
      },
      {
        id: 157,
        question:
          "What is the purpose of the CAM table on an Ethernet switch?",
        options: [
          "To store routing information for Layer 3 forwarding",
          "To map MAC addresses to switch ports for Layer 2 forwarding decisions",
          "To store VLAN configuration information",
          "To maintain a list of all IP addresses on the network",
        ],
        correct: 1,
        explanation:
          "A CAM (Content Addressable Memory) table, also known as the MAC address table, is used by a switch to map MAC addresses to the ports on which they were learned. This allows the switch to make forwarding decisions at Layer 2 by looking up the destination MAC address in the CAM table.",
      },
      {
        id: 158,
        question:
          "When configuring a switch port as an access port, what is the default VLAN assigned to untagged frames?",
        options: ["VLAN 0", "VLAN 1", "VLAN 2", "VLAN 10"],
        correct: 1,
        explanation:
          "By default, all switch ports are configured as access ports in VLAN 1. Untagged frames received on an access port are assigned to the access VLAN configured on that port.",
      },
      {
        id: 159,
        question:
          "What is the purpose of the 802.1Q standard?",
        options: [
          "To define Power over Ethernet (PoE) specifications",
          "To define the VLAN tagging mechanism for trunk links",
          "To define wireless networking standards",
          "To define Spanning Tree Protocol operations",
        ],
        correct: 1,
        explanation:
          "IEEE 802.1Q is the standard that defines VLAN tagging, allowing Ethernet frames to carry a VLAN identifier (VLAN ID) so that multiple VLANs can be transported over a single physical link (trunk).",
      },
      {
        id: 160,
        question:
          "Which of the following best describes a trunk port on a switch?",
        options: [
          "A port that belongs to a single VLAN",
          "A port that carries traffic for multiple VLANs using 802.1Q tagging",
          "A port used exclusively for voice traffic",
          "A port that is administratively shut down",
        ],
        correct: 1,
        explanation:
          "A trunk port is a port configured to carry traffic for multiple VLANs by adding 802.1Q VLAN tags to frames. Trunks are typically used to connect switches to each other or to routers for inter-VLAN routing.",
      },
      {
        id: 231,
        question: "Which switching method reads the entire frame and checks the FCS before forwarding it?",
        options: ["Cut‑through", "Store‑and‑forward", "Fragment‑free", "Adaptive switching"],
        correct: 1,
        explanation:
          "Store‑and‑forward switching reads the entire frame into a buffer, verifies the FCS (Frame Check Sequence) for errors, and only then forwards the frame. This ensures error‑free forwarding but adds latency.",
      },
      {
        id: 232,
        question: "What is the default MAC address aging time on a Cisco switch?",
        options: ["60 seconds", "120 seconds", "300 seconds", "600 seconds"],
        correct: 2,
        explanation:
          "By default, a Cisco switch removes a MAC address from its CAM table after 300 seconds (5 minutes) of inactivity. This helps keep the table current.",
      },
      {
        id: 233,
        question: "Which protocol is used by switches to prevent Layer 2 loops by blocking redundant links?",
        options: ["ARP", "VTP", "STP", "DTP"],
        correct: 2,
        explanation:
          "Spanning Tree Protocol (STP) prevents loops in a switched network by placing redundant ports into a Blocking state, ensuring only one active path between any two switches.",
      },
      {
        id: 234,
        question: "What is the main purpose of VTP (VLAN Trunking Protocol)?",
        options: [
          "To route traffic between VLANs",
          "To synchronize VLAN configuration across multiple switches",
          "To secure VLAN traffic",
          "To assign IP addresses to VLANs",
        ],
        correct: 1,
        explanation:
          "VTP is a Cisco proprietary protocol that propagates VLAN additions, deletions, and name changes across a network of switches, reducing manual configuration overhead.",
      },
      {
        id: 235,
        question: "What information does the 'show mac address‑table' command display on a Cisco switch?",
        options: [
          "The IP routing table",
          "The mapping of MAC addresses to switch ports",
          "The ARP cache",
          "The VLAN configuration",
        ],
        correct: 1,
        explanation:
          "The 'show mac address‑table' command displays the MAC address table (CAM table), showing which MAC addresses have been learned on which ports.",
      },
      {
        id: 236,
        question: "Which of the following is a valid MAC address?",
        options: [
          "00:1A:2B:3C:4D:5E",
          "192.168.1.1",
          "2001:DB8::1",
          "00‑1A‑2B‑3C‑4D‑5E‑6F",
        ],
        correct: 0,
        explanation:
          "A MAC address is a 48‑bit address represented as 12 hexadecimal digits, typically grouped in pairs (e.g., 00:1A:2B:3C:4D:5E). Option D has 14 hex digits and is invalid.",
      },
    ],
  },

  // ========== MODULE 10: PHYSICAL NETWORKING (QUESTIONS 161–170 + 237–241) ==========
  {
    id: "physical-networking",
    title: "Physical Networking",
    description: "Copper and fiber cabling, connectors, Ethernet standards, and PoE",
    icon: "🔧",
    color: "from-gray-500 to-gray-700",
    questions: [
      {
        id: 161,
        question:
          "Which category of twisted pair cabling is designed to support 10 Gbps speeds up to 100 meters?",
        options: ["Category 5e", "Category 6", "Category 6a", "Category 7"],
        correct: 2,
        explanation:
          "Category 6a (Augmented Category 6) is designed to support 10 Gbps Ethernet up to 100 meters. Category 6 supports 10 Gbps only up to 55 meters, while Category 5e supports 1 Gbps up to 100 meters.",
      },
      {
        id: 162,
        question:
          "What is the primary advantage of single-mode fiber (SMF) over multimode fiber (MMF) for long-distance transmission?",
        options: [
          "SMF is less expensive than MMF",
          "SMF supports longer distances due to lower attenuation and no modal dispersion",
          "SMF uses a larger core diameter",
          "SMF is easier to terminate",
        ],
        correct: 1,
        explanation:
          "Single-mode fiber (SMF) has a smaller core diameter (typically 9μm) that allows only a single mode of light to propagate, eliminating modal dispersion and enabling transmission over much longer distances (up to 100 km or more) compared to multimode fiber.",
      },
      {
        id: 163,
        question:
          "Which fiber optic connector is most commonly used for high-density applications and features a small form factor?",
        options: ["ST connector", "SC connector", "LC connector", "MTRJ connector"],
        correct: 2,
        explanation:
          "The LC (Lucent Connector) is a small form-factor connector that is widely used in high-density fiber optic applications. It uses a 1.25mm ferrule and is half the size of the SC connector, making it ideal for dense patch panels.",
      },
      {
        id: 164,
        question:
          "Which Ethernet standard uses 1000BASE-T to provide 1 Gbps over Category 5e or better UTP cabling?",
        options: ["100BASE-TX", "1000BASE-T", "10GBASE-T", "100BASE-SX"],
        correct: 1,
        explanation:
          "1000BASE-T is the IEEE standard for Gigabit Ethernet over twisted pair copper cabling (Category 5e or better). It uses all four pairs of the cable and achieves 1 Gbps full-duplex transmission over distances up to 100 meters.",
      },
      {
        id: 165,
        question:
          "What is the maximum distance supported by 1000BASE-SX over 62.5/125μm multimode fiber?",
        options: ["55 meters", "220 meters", "275 meters", "550 meters"],
        correct: 2,
        explanation:
          "1000BASE-SX supports 275 meters over 62.5/125μm multimode fiber (and 550 meters over 50/125μm fiber). It uses a 850nm wavelength and is commonly used for short-distance connections within buildings.",
      },
      {
        id: 166,
        question:
          "Which of the following cable types would you use to connect a switch to a router that is 50 meters away in a high-EMI environment?",
        options: ["UTP", "STP", "Coaxial", "Fiber optic"],
        correct: 1,
        explanation:
          "Shielded Twisted Pair (STP) provides better protection against EMI than UTP and is suitable for distances up to 100 meters. Fiber optic could also be used but is typically more expensive than STP for this distance.",
      },
      {
        id: 167,
        question:
          "What is the purpose of Power over Ethernet (PoE) in a network?",
        options: [
          "To provide power to network devices over the Ethernet cabling",
          "To increase the speed of Ethernet connections",
          "To encrypt data transmitted over Ethernet",
          "To prioritize voice traffic over data traffic",
        ],
        correct: 0,
        explanation:
          "Power over Ethernet (PoE) allows electrical power to be delivered alongside data over standard Ethernet cabling. This eliminates the need for separate power supplies for devices like IP phones, wireless access points, and security cameras.",
      },
      {
        id: 168,
        question:
          "What does the term 'duplex mismatch' refer to in networking?",
        options: [
          "One device is running at 100 Mbps and the other at 1 Gbps",
          "One device is running half-duplex and the other full-duplex on a link",
          "One device is using UTP and the other is using fiber optic",
          "One device is using 802.1Q and the other is not",
        ],
        correct: 1,
        explanation:
          "A duplex mismatch occurs when one device on a link is configured for full-duplex and the other is configured for half-duplex. This leads to poor performance and an increasing number of errors on the interface, which can be observed with the 'show interfaces' command.",
      },
      {
        id: 169,
        question:
          "Which fiber optic connector is a push-pull connector that features a 2.5mm ferrule and is commonly used in data centers?",
        options: ["ST", "SC", "LC", "MTRJ"],
        correct: 1,
        explanation:
          "The SC (Subscriber Connector) is a push-pull connector with a 2.5mm ferrule. It is commonly used in data centers and is known for its durability and ease of use.",
      },
      {
        id: 170,
        question:
          "Which type of fiber optic cable is recommended for a campus network where distances between buildings are up to 2 km?",
        options: ["Multimode fiber (62.5μm)", "Multimode fiber (50μm)", "Single-mode fiber", "Plastic optical fiber"],
        correct: 2,
        explanation:
          "Single-mode fiber is recommended for campus networks with distances of 2 km or more due to its low attenuation and high bandwidth capabilities. Multimode fiber is typically limited to distances of a few hundred meters.",
      },
      {
        id: 237,
        question: "What is the maximum data rate supported by Category 5e (Cat5e) cabling over 100 meters?",
        options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
        correct: 2,
        explanation:
          "Category 5e cabling is designed to support 1000BASE‑T (Gigabit Ethernet) at speeds up to 1 Gbps over distances of up to 100 meters.",
      },
      {
        id: 238,
        question: "Which type of fiber optic cable uses a laser as its light source and is typically used for long‑haul transmission?",
        options: ["Multimode fiber", "Single‑mode fiber", "Coaxial cable", "Plastic optical fiber"],
        correct: 1,
        explanation:
          "Single‑mode fiber (SMF) has a small core (9μm) and uses laser light, which allows it to transmit signals over much longer distances (up to 100 km or more) with low attenuation.",
      },
      {
        id: 239,
        question: "Which fiber optic connector is most commonly used with SFP/SFP+ transceivers due to its small form factor?",
        options: ["SC", "LC", "ST", "MTRJ"],
        correct: 1,
        explanation:
          "LC (Lucent Connector) is the standard small‑form‑factor connector used with SFP and SFP+ transceivers in high‑density network equipment.",
      },
      {
        id: 240,
        question: "What is the characteristic impedance of RG‑6 coaxial cable, commonly used for cable TV and cable modems?",
        options: ["50 Ω", "75 Ω", "100 Ω", "120 Ω"],
        correct: 1,
        explanation:
          "RG‑6 and RG‑59 cables have a 75‑ohm impedance, which is standard for video and RF applications. RG‑58 and RG‑8 are 50‑ohm cables used in older Ethernet networks.",
      },
      {
        id: 241,
        question: "What is the maximum distance supported by 10GBASE‑T over Cat6a cabling?",
        options: ["55 meters", "100 meters", "200 meters", "500 meters"],
        correct: 1,
        explanation:
          "10GBASE‑T supports 10 Gbps over Category 6a cabling for the full 100 meters. Standard Cat6 only supports 10 Gbps up to 55 meters.",
      },
    ],
  },

  // ========== MODULE 11: TROUBLESHOOTING (QUESTIONS 171–180 + 242–246) ==========
  {
    id: "troubleshooting",
    title: "Network Troubleshooting",
    description: "Ping, traceroute, ARP, DHCP, DNS, VLAN, and wireless troubleshooting",
    icon: "🔍",
    color: "from-red-500 to-orange-600",
    questions: [
      {
        id: 171,
        question:
          "You are troubleshooting a connectivity issue and need to determine the path that packets take from your PC to a remote server. Which command should you use?",
        options: ["ping", "tracert/traceroute", "arp", "nslookup"],
        correct: 1,
        explanation:
          "Traceroute (tracert on Windows, traceroute on Linux/macOS) is used to trace the path that packets take from a source to a destination, showing each hop along the way. This helps identify where connectivity problems occur.",
      },
      {
        id: 172,
        question:
          "A user reports that they can access the Internet but cannot reach a specific internal server. You verify that the server is running and reachable from other devices. What is the most likely cause?",
        options: [
          "The DNS server is not resolving the server's hostname",
          "The DHCP server is out of addresses",
          "The user's device has an incorrect subnet mask",
          "The ARP cache on the user's device is corrupted",
        ],
        correct: 0,
        explanation:
          "If the user can access the Internet but not a specific internal server, and the server is reachable from other devices, it is likely a DNS issue. The user's device may not be able to resolve the server's hostname to an IP address.",
      },
      {
        id: 173,
        question:
          "You suspect a DHCP issue because a client is not receiving an IP address. Which of the following would you do to verify DHCP operation?",
        options: [
          "Use the 'ping' command to test connectivity to the DHCP server",
          "Use Wireshark to capture DHCP traffic (Discover, Offer, Request, ACK)",
          "Check the CAM table on the switch",
          "Check the routing table on the router",
        ],
        correct: 1,
        explanation:
          "To troubleshoot DHCP issues, capturing DHCP traffic with Wireshark or a similar tool allows you to see the DORA sequence (Discover, Offer, Request, ACK). This helps identify if the client is sending Discover messages and if the server is responding.",
      },
      {
        id: 174,
        question:
          "A user reports that they cannot access a website, but they can ping the website's IP address. What is the most likely cause of this issue?",
        options: [
          "The website's server is down",
          "DNS resolution is failing",
          "The user's default gateway is misconfigured",
          "There is a firewall blocking the HTTP/HTTPS traffic",
        ],
        correct: 1,
        explanation:
          "If a user can ping the IP address but cannot access the website, it indicates a DNS issue. The user's device is unable to resolve the domain name to the IP address, preventing the browser from connecting to the website.",
      },
      {
        id: 175,
        question:
          "What does a 'Request timed out' response indicate when using the ping command?",
        options: [
          "The destination device is unreachable or not responding",
          "The destination device is responding but the ICMP echo request was lost",
          "The source device has no IP address configured",
          "The destination device is on a different subnet",
        ],
        correct: 0,
        explanation:
          "A 'Request timed out' response indicates that the source did not receive an ICMP Echo Reply within the timeout period. This could mean the destination is unreachable, not responding to ping, or there is a connectivity issue along the path.",
      },
      {
        id: 176,
        question:
          "You are troubleshooting an STP issue and notice that a port is in the Blocking state. What is the most likely reason for this?",
        options: [
          "The port is connected to an end device",
          "The port has received a superior BPDU from another switch",
          "The port is administratively shut down",
          "The port is configured as an access port",
        ],
        correct: 1,
        explanation:
          "In Spanning Tree Protocol (STP), a port in the Blocking state has received a superior BPDU and is not forwarding traffic to prevent loops. The port will transition to Listening, Learning, and eventually Forwarding states if it determines it should be a forwarding port.",
      },
      {
        id: 177,
        question:
          "A user's device has an IP address of 169.254.1.100. What does this indicate?",
        options: [
          "The device is connected to a network with no DHCP server",
          "The device is using a static IP address",
          "The device has a correct IP address from a DHCP server",
          "The device is on a different subnet than the default gateway",
        ],
        correct: 0,
        explanation:
          "An IP address in the 169.254.0.0/16 range is an Automatic Private IP Addressing (APIPA) address. It indicates that the device could not reach a DHCP server and has automatically assigned itself this address to communicate on the local network only.",
      },
      {
        id: 178,
        question:
          "You are troubleshooting a VLAN configuration and notice that a device cannot communicate with devices in the same VLAN on another switch. What could be the cause?",
        options: [
          "The trunk link between the switches is not carrying the VLAN",
          "The device has an incorrect subnet mask",
          "The default gateway is misconfigured",
          "The ARP cache is full",
        ],
        correct: 0,
        explanation:
          "If devices in the same VLAN on different switches cannot communicate, the trunk link between the switches may not be carrying that VLAN. This could be because the VLAN is not allowed on the trunk or the native VLAN mismatch.",
      },
      {
        id: 179,
        question:
          "Which of the following tools would you use to capture and analyze network packets at a detailed level?",
        options: ["Ping", "Traceroute", "Wireshark", "Netstat"],
        correct: 2,
        explanation:
          "Wireshark is a powerful network protocol analyzer that captures and displays network packets in detail. It allows network administrators to inspect traffic, troubleshoot issues, and analyze network behavior.",
      },
      {
        id: 180,
        question:
          "You are troubleshooting a NAT issue where internal users cannot access the Internet. Which of the following commands would you use on a Cisco router to verify NAT translations?",
        options: ["show ip nat translations", "show ip route", "show ip interface", "show running-config"],
        correct: 0,
        explanation:
          "The 'show ip nat translations' command displays the current NAT translation table, showing the mapping between inside local and inside global addresses. This is essential for verifying that NAT is working correctly and identifying any translation problems.",
      },
      {
        id: 242,
        question: "Which command is used to test connectivity to a remote host and measure round‑trip time?",
        options: ["traceroute", "ping", "netstat", "nslookup"],
        correct: 1,
        explanation:
          "The ping command sends ICMP Echo Request messages to a target host and measures the round‑trip time. It is the most basic connectivity test tool.",
      },
      {
        id: 243,
        question: "What is the default port number used by HTTPS?",
        options: ["80", "443", "22", "53"],
        correct: 1,
        explanation:
          "HTTPS (HTTP over SSL/TLS) uses TCP port 443 by default. HTTP uses port 80, SSH uses 22, and DNS uses 53.",
      },
      {
        id: 244,
        question: "Which protocol is used to automatically assign IP addresses to network devices?",
        options: ["DNS", "DHCP", "ARP", "ICMP"],
        correct: 1,
        explanation:
          "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses and other network configuration parameters to devices on a network.",
      },
      {
        id: 245,
        question: "What is the purpose of the 'logging trap' command in Cisco IOS?",
        options: ["To enable syslog on the device", "To set the severity level of messages sent to the syslog server", "To disable logging", "To specify the syslog server IP"],
        correct: 1,
        explanation:
          "The 'logging trap' command sets the severity level (0-7) of syslog messages that are sent to the remote syslog server. Only messages at that level and higher are forwarded.",
      },
      {
        id: 246,
        question: "Which of the following is a secure alternative to FTP for file transfer?",
        options: ["TFTP", "SFTP", "HTTP", "Telnet"],
        correct: 1,
        explanation:
          "SFTP (SSH File Transfer Protocol) provides secure, encrypted file transfer over SSH. It is a much safer alternative to FTP and TFTP, which transmit data in clear text.",
      },
    ],
  },

  // ========== MODULE 12: NETWORK MANAGEMENT (QUESTIONS 181–185 + 247–256) ==========
  {
    id: "network-management",
    title: "Network Management",
    description: "SSH, Telnet, SNMP, Syslog, NTP, and network monitoring",
    icon: "⚙️",
    color: "from-teal-500 to-teal-700",
    questions: [
      {
        id: 181,
        question:
          "What is the primary security advantage of using SSH over Telnet for remote device management?",
        options: [
          "SSH is faster than Telnet",
          "SSH encrypts all traffic, including passwords",
          "SSH uses UDP, which is more reliable",
          "SSH supports more commands than Telnet",
        ],
        correct: 1,
        explanation:
          "SSH (Secure Shell) encrypts all traffic between the client and the server, including login credentials. This prevents eavesdropping and man-in-the-middle attacks. Telnet transmits everything in clear text, making it insecure for remote management.",
      },
      {
        id: 182,
        question:
          "Which SNMP version introduced support for encryption and authentication to improve security?",
        options: ["SNMPv1", "SNMPv2c", "SNMPv3", "SNMPv4"],
        correct: 2,
        explanation:
          "SNMPv3 is the first SNMP version to provide security features such as authentication, encryption, and integrity. It addresses the security weaknesses of SNMPv1 and SNMPv2c, which use community strings transmitted in clear text.",
      },
      {
        id: 183,
        question:
          "What is the purpose of the Management Information Base (MIB) in SNMP?",
        options: [
          "To store user credentials for authentication",
          "To define the structure and hierarchy of managed objects on a device",
          "To encrypt SNMP traffic",
          "To generate alerts for network events",
        ],
        correct: 1,
        explanation:
          "The Management Information Base (MIB) is a database of managed objects on a device. It defines the structure and hierarchy of objects that can be monitored or managed using SNMP. Each object is identified by an Object Identifier (OID).",
      },
      {
        id: 184,
        question:
          "What is the default UDP port used by SNMP agents to receive requests from NMS?",
        options: ["53", "161", "162", "443"],
        correct: 1,
        explanation:
          "SNMP agents listen for requests on UDP port 161. SNMP traps are sent from agents to NMS on UDP port 162.",
      },
      {
        id: 185,
        question:
          "Which of the following is NOT a typical function of syslog in network management?",
        options: [
          "Collecting and storing log messages from network devices",
          "Facilitating event correlation and troubleshooting",
          "Configuring device interfaces and routing protocols",
          "Providing a centralized repository for log information",
        ],
        correct: 2,
        explanation:
          "Syslog is used for collecting, storing, and analyzing log messages from network devices. It does not configure device interfaces or routing protocols; that would be done through CLI, SNMP, or other management protocols.",
      },
      {
        id: 247,
        question: "What is the function of an NTP stratum level?",
        options: [
          "It indicates the encryption strength of NTP traffic",
          "It represents the distance from the reference clock source",
          "It determines the polling interval",
          "It sets the time zone offset",
        ],
        correct: 1,
        explanation:
          "The stratum level in NTP indicates the number of hops from the reference clock. A stratum 1 server is directly connected to a reference clock, while stratum 2 servers synchronize from stratum 1, and so on.",
      },
      {
        id: 248,
        question: "Which command is used to enable SNMPv3 on a Cisco router?",
        options: [
          "snmp-server community public ro",
          "snmp-server group v3 ...",
          "snmp-server enable traps",
          "snmp-server location",
        ],
        correct: 1,
        explanation:
          "To enable SNMPv3, you use the 'snmp-server group' and 'snmp-server user' commands to configure authentication and privacy. The 'snmp-server community' command is used for v1/v2c, not v3.",
      },
      {
        id: 249,
        question: "What is a Management Information Base (MIB) used for in SNMP?",
        options: [
          "To encrypt SNMP messages",
          "To define the set of manageable objects on a device",
          "To store user credentials",
          "To generate alarms",
        ],
        correct: 1,
        explanation:
          "The MIB (Management Information Base) is a hierarchical database that defines the structure of managed objects. Each object is identified by an OID, and SNMP managers use these OIDs to read or write configuration and operational data.",
      },
      {
        id: 250,
        question: "Which of the following is a benefit of using a centralized syslog server?",
        options: [
          "It reduces network traffic",
          "It centralizes log collection for easier troubleshooting and correlation",
          "It encrypts all network traffic",
          "It automatically configures network devices",
        ],
        correct: 1,
        explanation:
          "A centralized syslog server collects logs from multiple devices, enabling easier troubleshooting and event correlation. It does not reduce network traffic or automatically configure devices.",
      },
      {
        id: 251,
        question: "What is the purpose of the 'crypto key generate rsa' command?",
        options: [
          "To generate an RSA key pair for SSH authentication",
          "To encrypt the router's configuration file",
          "To generate a password hash",
          "To enable IPsec VPN",
        ],
        correct: 0,
        explanation:
          "The 'crypto key generate rsa' command generates an RSA key pair that is used for SSH authentication and encryption on Cisco routers. It is a prerequisite for enabling SSH.",
      },
      {
        id: 252,
        question: "Which protocol uses community strings for authentication?",
        options: ["SSH", "SNMP v1/v2c", "SNMP v3", "Syslog"],
        correct: 1,
        explanation:
          "SNMP versions 1 and 2c use community strings (like public or private) for authentication. SNMPv3 uses more secure methods like user-based security models.",
      },
      {
        id: 253,
        question: "What is the default syslog severity level on Cisco devices?",
        options: ["Emergency (0)", "Critical (2)", "Informational (6)", "Debugging (7)"],
        correct: 2,
        explanation:
          "By default, Cisco devices send syslog messages with a severity of 6 (Informational) and above (0-6). Debugging (7) messages are sent only when debugging is enabled.",
      },
      {
        id: 254,
        question: "Which NTP command configures a Cisco router as an NTP client?",
        options: ["ntp master", "ntp server", "ntp peer", "ntp authentication"],
        correct: 1,
        explanation:
          "The 'ntp server' command is used to configure a Cisco device as an NTP client, specifying the IP address or hostname of the NTP server.",
      },
      {
        id: 255,
        question: "What is the purpose of the 'logging synchronous' command?",
        options: [
          "To enable logging to a syslog server",
          "To prevent console messages from interrupting command input",
          "To set the logging severity level",
          "To log messages to a file",
        ],
        correct: 1,
        explanation:
          "The 'logging synchronous' command prevents console log messages from interrupting the line of text you are typing at the CLI, making the interface more user‑friendly.",
      },
      {
        id: 256,
        question: "Which of the following is a key feature of SNMPv3?",
        options: ["It uses clear text community strings", "It provides authentication and encryption", "It is less secure than SNMPv2c", "It does not support traps"],
        correct: 1,
        explanation:
          "SNMPv3 introduced authentication (MD5/SHA) and encryption (DES/AES) to secure SNMP traffic, making it the most secure SNMP version.",
      },
    ],
  },

  // ========== MODULE 13: NETWORK REDUNDANCY (QUESTIONS 186–190 + 257–266) ==========
  {
    id: "network-redundancy",
    title: "Network Redundancy",
    description: "HSRP, VRRP, GLBP, link redundancy, and high availability",
    icon: "🔄",
    color: "from-orange-500 to-red-600",
    questions: [
      {
        id: 186,
        question:
          "Which First Hop Redundancy Protocol (FHRP) provides load balancing by allowing multiple routers to forward traffic for the same virtual IP?",
        options: ["HSRP", "VRRP", "GLBP", "IRDP"],
        correct: 2,
        explanation:
          "GLBP (Gateway Load Balancing Protocol) is a Cisco-proprietary FHRP that provides both redundancy and load balancing. It allows up to four routers to share the forwarding load for a single virtual IP address, unlike HSRP and VRRP where only one router is active at a time.",
      },
      {
        id: 187,
        question:
          "In HSRP, what is the default Hello time and Hold time?",
        options: [
          "Hello: 2 seconds, Hold: 6 seconds",
          "Hello: 3 seconds, Hold: 10 seconds",
          "Hello: 1 second, Hold: 3 seconds",
          "Hello: 5 seconds, Hold: 15 seconds",
        ],
        correct: 1,
        explanation:
          "In HSRP, the default Hello time is 3 seconds and the default Hold time is 10 seconds. The Standby router waits for the Hold time to expire (3 missed Hellos) before assuming the Active role.",
      },
      {
        id: 188,
        question:
          "Which of the following is an advantage of VRRP over HSRP?",
        options: [
          "VRRP is Cisco proprietary and has better support",
          "VRRP allows the router with the physical IP address matching the virtual IP to be the Master",
          "VRRP supports load balancing",
          "VRRP has a faster convergence time",
        ],
        correct: 1,
        explanation:
          "VRRP (Virtual Router Redundancy Protocol) is an IEEE standard (RFC 3768). One advantage is that it allows a router's physical interface IP address to be used as the virtual IP address, reducing the need for an extra IP address on the subnet.",
      },
      {
        id: 189,
        question:
          "What is the primary benefit of using HSRP, VRRP, or GLBP in a network?",
        options: [
          "Increased network speed",
          "Redundancy for the default gateway",
          "Enhanced security for user traffic",
          "Simplified IP address management",
        ],
        correct: 1,
        explanation:
          "The primary benefit of FHRPs like HSRP, VRRP, and GLBP is to provide redundancy for the default gateway. If the active router fails, a standby router takes over, ensuring uninterrupted connectivity for end devices.",
      },
      {
        id: 190,
        question:
          "In HSRP, how many routers can be in the Standby state at any given time?",
        options: ["One", "Two", "Unlimited", "Depends on the configuration"],
        correct: 0,
        explanation:
          "In HSRP, only one router can be in the Standby state at a time. The group consists of one Active router, one Standby router, and any number of Listen routers. The Standby router is the one that will take over if the Active router fails.",
      },
      {
        id: 257,
        question: "Which FHRP is defined in RFC 5798 as an open standard?",
        options: ["HSRP", "VRRP", "GLBP", "IRDP"],
        correct: 1,
        explanation:
          "VRRP (Virtual Router Redundancy Protocol) is an open standard defined in RFC 5798. HSRP and GLBP are Cisco proprietary.",
      },
      {
        id: 258,
        question: "What is the default priority value for a router in HSRP?",
        options: ["50", "100", "200", "255"],
        correct: 1,
        explanation:
          "The default HSRP priority is 100. The router with the highest priority becomes the Active router.",
      },
      {
        id: 259,
        question: "In HSRP version 2, what is the maximum number of groups supported?",
        options: ["16", "64", "256", "4096"],
        correct: 3,
        explanation:
          "HSRP version 2 supports up to 4096 group numbers (0-4095), compared to version 1 which only supports up to 255.",
      },
      {
        id: 260,
        question: "Which FHRP allows for preemption by default?",
        options: ["HSRP", "VRRP", "GLBP", "None"],
        correct: 1,
        explanation:
          "VRRP enables preemption by default, meaning a router with a higher priority will immediately take over the Master role. HSRP requires the 'standby preempt' command to be configured.",
      },
      {
        id: 261,
        question: "What is the purpose of the 'standby preempt' command in HSRP?",
        options: [
          "To prevent the router from becoming Active",
          "To allow a router with higher priority to take over as Active",
          "To set the Hello timer",
          "To configure the virtual IP address",
        ],
        correct: 1,
        explanation:
          "The 'standby preempt' command allows a router with a higher priority to take over the Active role from a lower‑priority router. Without preemption, a new router with higher priority will not become Active until the current Active router fails.",
      },
      {
        id: 262,
        question: "In GLBP, how many routers can be forwarding at the same time for a single group?",
        options: ["1", "2", "4", "8"],
        correct: 2,
        explanation:
          "GLBP supports up to 4 active forwarders per group, allowing load balancing across multiple routers.",
      },
      {
        id: 263,
        question: "Which protocol uses the 'track object' feature to monitor interface status?",
        options: ["HSRP", "VRRP", "GLBP", "All of the above"],
        correct: 3,
        explanation:
          "HSRP, VRRP, and GLBP all support tracking objects to monitor the status of interfaces or other conditions, allowing priority adjustments if a tracked object fails.",
      },
      {
        id: 264,
        question: "What is the default HSRP group number if not specified?",
        options: ["0", "1", "10", "100"],
        correct: 0,
        explanation:
          "If no group number is specified in the 'standby' command, the default group number is 0.",
      },
      {
        id: 265,
        question: "Which VRRP state indicates the router is the Master?",
        options: ["Backup", "Master", "Initialize", "Listen"],
        correct: 1,
        explanation:
          "In VRRP, the Master router is the one that forwards traffic for the virtual IP address. All other routers are in Backup state.",
      },
      {
        id: 266,
        question: "What is the purpose of GLBP's 'round‑robin' load balancing?",
        options: [
          "To distribute traffic based on source IP",
          "To distribute traffic sequentially among the active forwarders",
          "To distribute traffic based on destination MAC",
          "To send all traffic through one router",
        ],
        correct: 1,
        explanation:
          "Round‑robin load balancing in GLBP distributes ARP replies sequentially to different routers, causing clients to send their traffic to different routers in a round‑robin fashion.",
      },
    ],
  },

  // ========== MODULE 14: ADVANCED NETWORKING (QUESTIONS 191–195 + 267–276) ==========
  {
    id: "advanced-networking",
    title: "Advanced Networking",
    description: "Enterprise architecture, data center, VXLAN, EVPN, SDN, and network automation",
    icon: "🚀",
    color: "from-purple-500 to-indigo-600",
    questions: [
      {
        id: 191,
        question:
          "In a three-tier enterprise network architecture, what is the primary function of the distribution layer?",
        options: [
          "To provide user access to the network",
          "To aggregate access layer switches and implement routing and policy",
          "To provide high-speed connectivity between distribution layers",
          "To connect the enterprise to the Internet",
        ],
        correct: 1,
        explanation:
          "The distribution layer aggregates access layer switches and provides routing, policy-based connectivity, and security services. It serves as the boundary between the access and core layers.",
      },
      {
        id: 192,
        question:
          "What is the purpose of VXLAN in a data center network?",
        options: [
          "To provide VLAN extension across Layer 3 boundaries",
          "To replace traditional Ethernet switching",
          "To provide network security",
          "To improve wireless connectivity",
        ],
        correct: 0,
        explanation:
          "VXLAN (Virtual Extensible LAN) is a network virtualization technology that encapsulates Layer 2 frames in Layer 3 UDP packets, allowing VLANs to be extended across Layer 3 boundaries. It provides scalability for large data centers and cloud environments.",
      },
      {
        id: 193,
        question:
          "Which of the following describes the SDN (Software-Defined Networking) architecture?",
        options: [
          "Network control is centralized and separated from the forwarding plane",
          "Network devices are configured individually using CLI",
          "Networks are managed using traditional routing protocols",
          "Network configuration is hardware-based",
        ],
        correct: 0,
        explanation:
          "SDN decouples the control plane from the data plane, centralizing network intelligence in a controller. This allows for programmable, automated network management and simplifies policy enforcement.",
      },
      {
        id: 194,
        question:
          "What is the primary benefit of using network automation tools like Ansible or Python scripts?",
        options: [
          "Reduced configuration errors and faster deployment",
          "Increased network bandwidth",
          "Enhanced security through encryption",
          "Reduced need for skilled network engineers",
        ],
        correct: 0,
        explanation:
          "Network automation tools reduce configuration errors and speed up deployment by automating repetitive tasks, enforcing consistency, and enabling rapid provisioning across multiple devices. This improves operational efficiency and reduces human error.",
      },
      {
        id: 195,
        question:
          "What is EVPN (Ethernet VPN) primarily used for in modern data centers?",
        options: [
          "To provide secure remote access to the network",
          "To enable scalable Layer 2 connectivity over Layer 3 networks",
          "To replace VXLAN as a tunneling protocol",
          "To provide wireless network connectivity",
        ],
        correct: 1,
        explanation:
          "EVPN (Ethernet VPN) is a control-plane technology used with VXLAN to provide scalable and efficient Layer 2 connectivity over Layer 3 networks. It uses MP-BGP to distribute MAC and IP reachability information, enabling advanced features like multi-homing and load balancing.",
      },
      {
        id: 267,
        question: "In a spine-leaf architecture, what is the role of a spine switch?",
        options: [
          "To connect to servers and end devices",
          "To interconnect all leaf switches",
          "To act as the default gateway",
          "To provide PoE to endpoints",
        ],
        correct: 1,
        explanation:
          "In a spine-leaf architecture, spine switches form the backbone of the network, interconnecting all leaf switches. They provide high‑speed, non‑blocking connectivity between leaves.",
      },
      {
        id: 268,
        question: "What is the purpose of overlay networks in data centers?",
        options: [
          "To increase the physical bandwidth",
          "To decouple network services from the underlying physical infrastructure",
          "To replace VLANs",
          "To encrypt all traffic",
        ],
        correct: 1,
        explanation:
          "Overlay networks (e.g., VXLAN, NVGRE) allow virtual networks to be decoupled from the physical network, enabling multi‑tenancy and flexibility. They encapsulate tenant traffic and carry it over the physical infrastructure.",
      },
      {
        id: 269,
        question: "Which protocol is commonly used for network automation with REST APIs?",
        options: ["HTTP/HTTPS", "SNMP", "NetFlow", "BGP"],
        correct: 0,
        explanation:
          "REST APIs for network automation are typically accessed over HTTP or HTTPS using methods like GET, POST, PUT, and DELETE. This allows programmatic configuration and monitoring of network devices.",
      },
      {
        id: 270,
        question: "What is the function of a Network Controller in SDN?",
        options: [
          "To forward packets at high speed",
          "To centralize control plane logic and provide an API to applications",
          "To replace physical switches",
          "To assign IP addresses to devices",
        ],
        correct: 1,
        explanation:
          "The SDN controller centralizes the control plane, providing a global view of the network. It exposes northbound APIs for applications and uses southbound protocols (e.g., OpenFlow) to program network devices.",
      },
      {
        id: 271,
        question: "Which data format is commonly used with REST APIs for network configuration?",
        options: ["CSV", "JSON or XML", "Plain text", "Binary"],
        correct: 1,
        explanation:
          "REST APIs commonly exchange data in JSON (JavaScript Object Notation) or XML (Extensible Markup Language) formats, which are structured and easy to parse programmatically.",
      },
      {
        id: 272,
        question: "What is a benefit of network virtualization?",
        options: [
          "It increases the physical cable count",
          "It improves resource utilization and tenant isolation",
          "It reduces the number of IP addresses needed",
          "It eliminates the need for routing protocols",
        ],
        correct: 1,
        explanation:
          "Network virtualization allows multiple virtual networks to share the same physical infrastructure, improving resource utilization while providing isolation and security between tenants.",
      },
      {
        id: 273,
        question: "What is VXLAN's default UDP port number?",
        options: ["4789", "5000", "8080", "21"],
        correct: 0,
        explanation:
          "VXLAN uses UDP port 4789 as the default port for encapsulating Layer 2 frames in UDP packets.",
      },
      {
        id: 274,
        question: "Which technology enables Network Functions Virtualization (NFV)?",
        options: ["Virtualization platforms", "Physical appliances", "Fiber optic cables", "Routing protocols"],
        correct: 0,
        explanation:
          "NFV uses virtualization platforms (hypervisors, containers) to run network functions (firewalls, routers, load balancers) as software instances, reducing reliance on dedicated hardware.",
      },
      {
        id: 275,
        question: "What is the purpose of a REST API in networking?",
        options: [
          "To provide a user interface for network operators",
          "To enable programmatic management and configuration of network devices",
          "To replace the CLI",
          "To increase network throughput",
        ],
        correct: 1,
        explanation:
          "REST APIs allow network administrators and developers to programmatically manage and configure network devices, enabling automation, orchestration, and integration with external systems.",
      },
      {
        id: 276,
        question: "What is an Ansible playbook used for?",
        options: [
          "To define a set of automated tasks for network configuration",
          "To capture network packets",
          "To monitor bandwidth usage",
          "To generate RSA keys",
        ],
        correct: 0,
        explanation:
          "Ansible playbooks are YAML files that define a series of tasks to be executed on managed devices. They are used for automation, including network device configuration and provisioning.",
      },
    ],
  },

  // ========== MODULE 15: OSI & TCP/IP (QUESTIONS 196–205 + 277–281) ==========
  {
    id: "osi-tcpip",
    title: "OSI & TCP/IP Model",
    description: "OSI layers, TCP/IP model, encapsulation, decapsulation, and protocol data units",
    icon: "📚",
    color: "from-pink-500 to-rose-600",
    questions: [
      {
        id: 196,
        question: "Which layer of the OSI model is responsible for end‑to‑end communication and error recovery?",
        options: ["Network Layer", "Transport Layer", "Session Layer", "Application Layer"],
        correct: 1,
        explanation:
          "The Transport Layer (Layer 4) provides end‑to‑end communication, error recovery, flow control, and segmentation/reassembly. Protocols like TCP and UDP operate at this layer.",
      },
      {
        id: 197,
        question: "What is the PDU (Protocol Data Unit) called at the Network Layer of the OSI model?",
        options: ["Frame", "Packet", "Segment", "Bits"],
        correct: 1,
        explanation:
          "At the Network Layer (Layer 3), the PDU is called a 'packet'. It contains the source and destination IP addresses and is routed across networks.",
      },
      {
        id: 198,
        question: "Which OSI layer is responsible for converting data into a format suitable for transmission over the physical medium?",
        options: ["Physical Layer", "Data Link Layer", "Network Layer", "Presentation Layer"],
        correct: 3,
        explanation:
          "The Presentation Layer (Layer 6) is responsible for data translation, encryption, compression, and formatting so that the application layer can understand the data. It ensures the data is in a standardized format for transmission.",
      },
      {
        id: 199,
        question: "Which of the following correctly matches the OSI layer with its corresponding function?",
        options: [
          "Network Layer – Error detection and correction",
          "Transport Layer – Routing and addressing",
          "Session Layer – Dialog control and synchronization",
          "Data Link Layer – Data encryption",
        ],
        correct: 2,
        explanation:
          "The Session Layer (Layer 5) establishes, manages, and terminates sessions between applications. It provides dialog control, synchronization, and checkpointing.",
      },
      {
        id: 200,
        question: "In the TCP/IP model, which layer corresponds to the OSI Network Layer?",
        options: ["Network Interface Layer", "Internet Layer", "Transport Layer", "Application Layer"],
        correct: 1,
        explanation:
          "The Internet Layer of the TCP/IP model corresponds to the OSI Network Layer. It handles logical addressing (IP) and routing of packets across networks.",
      },
      {
        id: 201,
        question: "What is the process of adding headers (and sometimes trailers) to data as it moves down the OSI stack called?",
        options: ["Encapsulation", "Decapsulation", "Fragmentation", "Segmentation"],
        correct: 0,
        explanation:
          "Encapsulation is the process of adding protocol information (headers and trailers) to the data as it moves down the OSI layers. Each layer adds its own header, and when the data reaches the physical medium, it is transmitted as bits.",
      },
      {
        id: 202,
        question: "Which layer of the OSI model is responsible for MAC addressing and media access control?",
        options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
        correct: 1,
        explanation:
          "The Data Link Layer (Layer 2) is responsible for MAC addressing, frame creation, error detection (via CRC), and media access control. It ensures reliable transmission across the physical link.",
      },
      {
        id: 203,
        question: "Which protocol operates at the Application Layer of the TCP/IP model and is used for translating domain names to IP addresses?",
        options: ["DHCP", "DNS", "FTP", "HTTP"],
        correct: 1,
        explanation:
          "DNS (Domain Name System) operates at the Application Layer and translates human‑readable domain names to IP addresses. It is a fundamental service for network communication.",
      },
      {
        id: 204,
        question: "What is the primary difference between the OSI model and the TCP/IP model?",
        options: [
          "The OSI model has 5 layers, while TCP/IP has 7",
          "The OSI model is theoretical and more detailed, while TCP/IP is practical and was developed first",
          "TCP/IP includes a Presentation Layer, while OSI does not",
          "OSI uses connection‑oriented protocols only, TCP/IP uses connectionless only",
        ],
        correct: 1,
        explanation:
          "The OSI model is a theoretical reference model with 7 layers, providing a detailed framework. The TCP/IP model is a practical implementation with 4 or 5 layers, developed earlier and used in real networks. OSI is more structured, while TCP/IP is more flexible.",
      },
      {
        id: 205,
        question: "At which layer does a router primarily operate, and what information does it use for forwarding decisions?",
        options: [
          "Layer 2, using MAC addresses",
          "Layer 3, using IP addresses",
          "Layer 4, using port numbers",
          "Layer 1, using electrical signals",
        ],
        correct: 1,
        explanation:
          "A router operates at the Network Layer (Layer 3) and uses destination IP addresses to make forwarding decisions. It consults its routing table to determine the best path for the packet.",
      },
      {
        id: 277,
        question: "Which OSI layer provides flow control and error detection?",
        options: ["Network Layer", "Transport Layer", "Data Link Layer", "Both Transport and Data Link"],
        correct: 3,
        explanation:
          "Both the Transport Layer (Layer 4, e.g., TCP) and the Data Link Layer (Layer 2) provide flow control and error detection. TCP handles end‑to‑end flow control and error recovery, while the Data Link Layer handles error detection on a per‑link basis via CRC.",
      },
      {
        id: 278,
        question: "What is a socket in the context of networking?",
        options: ["A physical port on a switch", "A combination of an IP address and a port number", "A type of cable connector", "A routing protocol"],
        correct: 1,
        explanation:
          "A socket is a combination of an IP address and a port number. It uniquely identifies a communication endpoint on a network.",
      },
      {
        id: 279,
        question: "Which layer of the OSI model is closest to the user?",
        options: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
        correct: 0,
        explanation:
          "The Application Layer (Layer 7) is the topmost layer and is closest to the user. It provides services such as email, file transfer, and web browsing.",
      },
      {
        id: 280,
        question: "What is the purpose of the UDP protocol?",
        options: [
          "To provide reliable, connection‑oriented data transfer",
          "To provide fast, connectionless data transfer",
          "To provide routing services",
          "To provide error detection at the application layer",
        ],
        correct: 1,
        explanation:
          "UDP (User Datagram Protocol) provides a fast, connectionless, best‑effort delivery service. It does not guarantee delivery or provide error recovery, making it suitable for real‑time applications like VoIP and video streaming.",
      },
      {
        id: 281,
        question: "In encapsulation, which PDU is created at the Transport Layer?",
        options: ["Frame", "Packet", "Segment (or Datagram for UDP)", "Bits"],
        correct: 2,
        explanation:
          "At the Transport Layer, the PDU is called a 'segment' (for TCP) or a 'datagram' (for UDP). It contains the transport header (source/destination ports) and the data from the upper layer.",
      },
    ],
  },

  // ========== MODULE 16: ROUTING PROTOCOLS (QUESTIONS 206–215 + 282–286) ==========
  {
    id: "routing-protocols",
    title: "Routing Protocols",
    description: "RIP, EIGRP, BGP, metrics, administrative distance, and route selection",
    icon: "🛣️",
    color: "from-amber-500 to-yellow-600",
    questions: [
      {
        id: 206,
        question: "Which routing protocol uses hop count as its primary metric and has a maximum of 15 hops?",
        options: ["OSPF", "EIGRP", "RIP", "BGP"],
        correct: 2,
        explanation:
          "RIP (Routing Information Protocol) uses hop count as its metric, with a maximum of 15 hops (16 is unreachable). It is a distance‑vector protocol and is simple but limited in scalability.",
      },
      {
        id: 207,
        question: "Which advanced distance‑vector routing protocol supports unequal‑cost load balancing and uses a composite metric?",
        options: ["RIP", "OSPF", "EIGRP", "IS‑IS"],
        correct: 2,
        explanation:
          "EIGRP is an advanced distance‑vector (hybrid) protocol that uses a composite metric (bandwidth, delay, load, reliability). It supports unequal‑cost load balancing and has fast convergence.",
      },
      {
        id: 208,
        question: "What is the default administrative distance of OSPF (internal) routes?",
        options: ["90", "100", "110", "120"],
        correct: 2,
        explanation:
          "OSPF has a default administrative distance of 110 for internal routes. This makes it less preferred than EIGRP (AD 90) but more preferred than RIP (AD 120).",
      },
      {
        id: 209,
        question: "Which routing protocol is primarily used between autonomous systems on the Internet?",
        options: ["RIP", "OSPF", "EIGRP", "BGP"],
        correct: 3,
        explanation:
          "BGP (Border Gateway Protocol) is the exterior gateway protocol used to exchange routing information between autonomous systems on the Internet. It is path‑vector protocol and uses policies for route selection.",
      },
      {
        id: 210,
        question: "In OSPF, what is the purpose of a Designated Router (DR) on a multi‑access network?",
        options: [
          "To reduce the number of OSPF neighbors",
          "To generate Type 5 LSAs",
          "To act as the default gateway for the network",
          "To provide a backup route in case of failure",
        ],
        correct: 0,
        explanation:
          "The DR is elected to reduce the number of OSPF adjacencies on a multi‑access network (e.g., Ethernet). All other routers form full adjacencies only with the DR and BDR, reducing the overhead of full‑mesh adjacencies.",
      },
      {
        id: 211,
        question: "Which BGP attribute is used to determine the preferred path among multiple routes to the same destination?",
        options: ["AS_PATH", "Local Preference", "MED", "Weight"],
        correct: 1,
        explanation:
          "Local Preference is a BGP attribute used within an AS to influence the outbound route selection. It is the highest value preferred. Other attributes like Weight (Cisco proprietary) also affect path selection, but Local Preference is a standard attribute.",
      },
      {
        id: 212,
        question: "What is the maximum number of hops in RIP version 1?",
        options: ["15", "16", "30", "255"],
        correct: 0,
        explanation:
          "RIP uses hop count as the metric, with a maximum of 15 hops. A metric of 16 is considered unreachable. This limitation makes RIP unsuitable for large networks.",
      },
      {
        id: 213,
        question: "Which of the following is true about EIGRP?",
        options: [
          "It is a link‑state routing protocol",
          "It uses the SPF algorithm for route computation",
          "It supports VLSM and route summarization",
          "It is a classful protocol",
        ],
        correct: 2,
        explanation:
          "EIGRP is an advanced distance‑vector protocol that supports VLSM, CIDR, and manual route summarization. It uses the Diffusing Update Algorithm (DUAL) for loop‑free paths, not SPF.",
      },
      {
        id: 214,
        question: "What metric does OSPF use to determine the best path?",
        options: ["Hop count", "Bandwidth", "Cost (based on bandwidth)", "Delay"],
        correct: 2,
        explanation:
          "OSPF uses a cost metric calculated from the interface bandwidth (cost = reference bandwidth / bandwidth). The path with the lowest cumulative cost is preferred.",
      },
      {
        id: 215,
        question: "In BGP, what is an autonomous system (AS) number used for?",
        options: [
          "To identify the router within the AS",
          "To uniquely identify the AS on the Internet",
          "To set the BGP timer values",
          "To determine the path selection algorithm",
        ],
        correct: 1,
        explanation:
          "An AS number (ASN) is a unique identifier assigned to each autonomous system for BGP routing. It allows BGP to apply policies and prevent routing loops between ASes.",
      },
      {
        id: 282,
        question: "Which routing protocol uses a metric based on bandwidth and delay by default?",
        options: ["RIP", "OSPF", "EIGRP", "BGP"],
        correct: 2,
        explanation:
          "EIGRP uses a composite metric that includes bandwidth and delay by default. It can also incorporate load and reliability if configured.",
      },
      {
        id: 283,
        question: "What is a routing loop?",
        options: [
          "Packets bouncing between routers indefinitely",
          "A circular network topology",
          "A direct path between two routers",
          "A loopback interface on a router",
        ],
        correct: 0,
        explanation:
          "A routing loop occurs when packets are forwarded back and forth between routers without reaching their destination, often due to inconsistent routing tables.",
      },
      {
        id: 284,
        question: "Which mechanism is used to prevent routing loops in distance‑vector protocols?",
        options: ["Split horizon", "SPF algorithm", "Cost metric", "BGP attributes"],
        correct: 0,
        explanation:
          "Split horizon is a loop‑prevention mechanism used by distance‑vector protocols. It prevents a router from advertising a route back through the interface from which it was learned.",
      },
      {
        id: 285,
        question: "What is an OSPF area?",
        options: [
          "A logical grouping of routers to reduce the size of the LSDB",
          "A physical location in a data center",
          "A VLAN on a switch",
          "A type of routing metric",
        ],
        correct: 0,
        explanation:
          "An OSPF area is a logical grouping of routers that share the same Link‑State Database (LSDB). It helps reduce the size of the LSDB and limits the impact of network changes.",
      },
      {
        id: 286,
        question: "Which BGP attribute is considered the most preferred by Cisco routers?",
        options: ["AS_PATH", "Weight", "Local Preference", "MED"],
        correct: 1,
        explanation:
          "Weight is a Cisco‑specific attribute that is local to the router and is the most preferred BGP attribute. Higher weight values are preferred.",
      },
    ],
  },

  // ========== MODULE 17: WAN TECHNOLOGIES (QUESTIONS 216–225 + 287–291) ==========
  {
    id: "wan-technologies",
    title: "WAN Technologies",
    description: "Leased lines, PPP, HDLC, MPLS, SD‑WAN, GRE, DMVPN, and WAN design",
    icon: "🌍",
    color: "from-emerald-500 to-green-600",
    questions: [
      {
        id: 216,
        question: "Which WAN technology provides a dedicated point‑to‑point connection between two sites and guarantees bandwidth?",
        options: ["Frame Relay", "ATM", "Leased line", "MPLS VPN"],
        correct: 2,
        explanation:
          "A leased line (e.g., T1, E1) provides a dedicated, always‑on point‑to‑point connection with guaranteed bandwidth and predictable latency. It does not share bandwidth with other customers, unlike Frame Relay or MPLS.",
      },
      {
        id: 217,
        question: "Which protocol is commonly used to encapsulate data over serial point‑to‑point connections and supports authentication (PAP, CHAP)?",
        options: ["HDLC", "PPP", "Frame Relay", "ATM"],
        correct: 1,
        explanation:
          "PPP (Point‑to‑Point Protocol) is widely used for serial connections and supports authentication, multilink, and compression. It is often used on leased lines and dial‑up links.",
      },
      {
        id: 218,
        question: "What is the default encapsulation used on Cisco serial interfaces for point‑to‑point links?",
        options: ["PPP", "HDLC", "Frame Relay", "ATM"],
        correct: 1,
        explanation:
          "Cisco's default serial encapsulation is HDLC (High‑Level Data Link Control), which is Cisco proprietary. It does not support authentication, so many enterprises use PPP instead.",
      },
      {
        id: 219,
        question: "Which WAN technology uses labels to forward packets across a provider network, enabling traffic engineering and VPN services?",
        options: ["MPLS", "Frame Relay", "ATM", "SD‑WAN"],
        correct: 0,
        explanation:
          "MPLS (Multiprotocol Label Switching) uses label‑switched paths (LSPs) to forward packets based on labels, not just IP addresses. It provides traffic engineering, VPNs, and efficient packet forwarding.",
      },
      {
        id: 220,
        question: "What is a key benefit of SD‑WAN over traditional WAN technologies?",
        options: [
          "It guarantees 100% uptime",
          "It provides centralized control and can use multiple transport types (Internet, MPLS, LTE)",
          "It is limited to MPLS connections",
          "It does not support encryption",
        ],
        correct: 1,
        explanation:
          "SD‑WAN (Software‑Defined WAN) centrally manages WAN connections and can intelligently route traffic across multiple types of links (MPLS, broadband Internet, 4G/5G) based on application policies, improving agility and cost‑effectiveness.",
      },
      {
        id: 221,
        question: "What is the purpose of Generic Routing Encapsulation (GRE) in a WAN environment?",
        options: [
          "To provide encryption for VPN traffic",
          "To encapsulate non‑IP protocols over an IP network",
          "To compress data over slow links",
          "To provide a secure tunnel for HTTP traffic",
        ],
        correct: 1,
        explanation:
          "GRE is a tunneling protocol that can encapsulate a wide variety of network layer protocols (including IP, IPX, AppleTalk) inside IP packets. It is commonly used with IPsec for VPNs.",
      },
      {
        id: 222,
        question: "Which technology combines GRE and IPsec to create a dynamic, scalable VPN overlay over the Internet?",
        options: ["DMVPN", "MPLS VPN", "SD‑WAN", "L2TP"],
        correct: 0,
        explanation:
          "DMVPN (Dynamic Multipoint VPN) uses GRE tunnels combined with IPsec and Next‑Hop Resolution Protocol (NHRP) to dynamically establish a VPN overlay between multiple sites. It is scalable and eliminates the need for static tunnel configurations.",
      },
      {
        id: 223,
        question: "In a Frame Relay network, what is the DLCI (Data Link Connection Identifier) used for?",
        options: [
          "To identify the physical port on the router",
          "To uniquely identify a virtual circuit between the customer and the provider",
          "To set the clocking on the serial interface",
          "To assign an IP address to the interface",
        ],
        correct: 1,
        explanation:
          "The DLCI is a number that identifies a specific virtual circuit in a Frame Relay network. It is locally significant and used to map a logical connection to a physical port.",
      },
      {
        id: 224,
        question: "Which WAN design approach uses a hub‑and‑spoke topology with a central site that connects to multiple branch offices?",
        options: ["Full mesh", "Partial mesh", "Hub‑and‑spoke", "Ring"],
        correct: 2,
        explanation:
          "Hub‑and‑spoke is a common WAN design where the central (hub) site connects to each branch (spoke) site. This simplifies routing and is cost‑effective, but relies on the hub for inter‑branch communication.",
      },
      {
        id: 225,
        question: "What is the main advantage of using MPLS over traditional IP routing for WAN traffic?",
        options: [
          "MPLS can forward traffic based on labels, enabling traffic engineering and VPNs",
          "MPLS is cheaper than any other WAN technology",
          "MPLS does not require any routing protocols",
          "MPLS provides built‑in encryption",
        ],
        correct: 0,
        explanation:
          "MPLS uses label switching to forward packets, allowing for faster and more flexible routing, traffic engineering, and the creation of Layer 3 VPNs. It does not inherently provide encryption; that is typically added via IPsec.",
      },
      {
        id: 287,
        question: "Which WAN technology uses cell switching with fixed 53‑byte cells?",
        options: ["Frame Relay", "ATM", "HDLC", "PPP"],
        correct: 1,
        explanation:
          "ATM (Asynchronous Transfer Mode) uses fixed‑size 53‑byte cells for switching, which simplifies hardware implementation and supports both voice and data.",
      },
      {
        id: 288,
        question: "What is the main characteristic of a leased line?",
        options: [
          "It is a shared connection",
          "It provides dedicated bandwidth",
          "It uses cell switching",
          "It requires a VPN",
        ],
        correct: 1,
        explanation:
          "A leased line provides dedicated, private bandwidth between two sites. It is not shared with other customers, ensuring predictable performance.",
      },
      {
        id: 289,
        question: "Which protocol provides Multilink PPP (MLPPP) support?",
        options: ["HDLC", "PPP", "Frame Relay", "ATM"],
        correct: 1,
        explanation:
          "MLPPP is an extension of PPP that allows multiple physical links to be bonded together to increase bandwidth. It is supported by PPP.",
      },
      {
        id: 290,
        question: "What does SD‑WAN use to improve application performance?",
        options: [
          "Static routing",
          "Application‑aware routing and policy‑based steering",
          "Frame Relay",
          "HDLC encapsulation",
        ],
        correct: 1,
        explanation:
          "SD‑WAN monitors the performance of various links and can steer traffic based on application‑defined policies, ensuring optimal performance for critical applications.",
      },
      {
        id: 291,
        question: "What is the purpose of NHRP in DMVPN?",
        options: [
          "To provide authentication",
          "To resolve the physical IP address of a destination tunnel endpoint",
          "To encrypt GRE traffic",
          "To manage IP address allocation",
        ],
        correct: 1,
        explanation:
          "NHRP (Next‑Hop Resolution Protocol) is used in DMVPN to map a destination tunnel IP address to a physical (public) IP address, allowing dynamic establishment of direct spoke‑to‑spoke tunnels.",
      },
    ],
  },
];