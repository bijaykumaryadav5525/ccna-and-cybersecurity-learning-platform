export interface LabStep {
  step: number;
  title: string;
  command?: string;
  description: string;
}

export interface Lab {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  topology: string;
  objectives: string[];
  steps: LabStep[];
  verification: string[];
  tags: string[];
}

export const ccnaLabs: Lab[] = [
  {
    id: "basic-router-config",
    title: "Basic Router Configuration",
    difficulty: "Beginner",
    duration: "30 min",
    description: "Configure a Cisco router with hostname, passwords, interfaces, and basic security settings.",
    topology: "PC → Router → Switch → PC",
    objectives: [
      "Set hostname and domain name",
      "Configure enable password and secret",
      "Configure interface IP addresses",
      "Enable SSH access",
      "Save configuration"
    ],
    steps: [
      { step: 1, title: "Enter Privileged EXEC Mode", command: "enable", description: "Access the privileged EXEC mode from user EXEC mode. The prompt changes from '>' to '#'." },
      { step: 2, title: "Enter Global Configuration Mode", command: "configure terminal", description: "Enter global configuration mode to make system-wide changes." },
      { step: 3, title: "Set Hostname", command: "hostname R1", description: "Set the router's hostname to R1. This helps identify the device." },
      { step: 4, title: "Set Domain Name", command: "ip domain-name noea.local", description: "Set the domain name, required for SSH key generation." },
      { step: 5, title: "Set Enable Secret", command: "enable secret Cisco123!", description: "Set an encrypted password for privileged access." },
      { step: 6, title: "Configure Interface", command: "interface GigabitEthernet0/0", description: "Enter interface configuration mode for the first gigabit interface." },
      { step: 7, title: "Set IP Address", command: "ip address 192.168.1.1 255.255.255.0", description: "Assign the IP address and subnet mask to the interface." },
      { step: 8, title: "Enable Interface", command: "no shutdown", description: "Enable the interface (Cisco interfaces are disabled by default)." },
      { step: 9, title: "Generate SSH Keys", command: "crypto key generate rsa modulus 2048", description: "Generate RSA keys for SSH encryption." },
      { step: 10, title: "Enable SSH Version 2", command: "ip ssh version 2", description: "Configure SSH version 2 for better security." },
      { step: 11, title: "Configure VTY Lines", command: "line vty 0 4", description: "Enter line configuration mode for virtual terminal lines 0-4." },
      { step: 12, title: "Set Login SSH", command: "transport input ssh\nlogin local", description: "Allow only SSH connections and require local authentication." },
      { step: 13, title: "Save Configuration", command: "copy running-config startup-config", description: "Save the configuration to non-volatile memory (NVRAM)." }
    ],
    verification: [
      "show ip interface brief - Check interface status",
      "show running-config - View current configuration",
      "show version - View IOS version and hardware",
      "ping 192.168.1.1 - Test local connectivity"
    ],
    tags: ["Router Config", "SSH", "Interfaces", "Security"]
  },
  {
    id: "vlan-config",
    title: "VLAN Configuration & Trunking",
    difficulty: "Intermediate",
    duration: "45 min",
    description: "Create VLANs on Cisco switches, configure access and trunk ports, and verify connectivity.",
    topology: "PC1 (VLAN10) → SW1 ←trunk→ SW2 → PC2 (VLAN20)",
    objectives: [
      "Create multiple VLANs",
      "Configure access ports",
      "Configure trunk ports with 802.1Q",
      "Verify VLAN connectivity",
      "Configure VTP"
    ],
    steps: [
      { step: 1, title: "Create VLANs", command: "vlan 10\nname SALES\nvlan 20\nname HR", description: "Create VLAN 10 for SALES and VLAN 20 for HR department." },
      { step: 2, title: "Configure Access Port", command: "interface FastEthernet0/1\nswitchport mode access\nswitchport access vlan 10", description: "Configure Fa0/1 as an access port for VLAN 10." },
      { step: 3, title: "Configure Another Access Port", command: "interface FastEthernet0/2\nswitchport mode access\nswitchport access vlan 20", description: "Configure Fa0/2 as an access port for VLAN 20." },
      { step: 4, title: "Configure Trunk Port", command: "interface GigabitEthernet0/1\nswitchport mode trunk\nswitchport trunk encapsulation dot1q", description: "Configure the uplink port as a trunk carrying all VLANs." },
      { step: 5, title: "Specify Allowed VLANs", command: "switchport trunk allowed vlan 10,20", description: "Restrict the trunk to only carry VLAN 10 and 20 traffic." },
      { step: 6, title: "Configure Native VLAN", command: "switchport trunk native vlan 99", description: "Change the native VLAN from default (1) for security." },
      { step: 7, title: "Configure VTP", command: "vtp mode server\nvtp domain NOEA\nvtp password Cisco123", description: "Configure VTP server mode to propagate VLAN info." },
      { step: 8, title: "Verify VLANs", command: "show vlan brief", description: "Verify VLAN creation and port assignments." }
    ],
    verification: [
      "show vlan brief - Verify VLAN database",
      "show interfaces trunk - Check trunk ports",
      "show interfaces switchport - Verify port modes",
      "show vtp status - Check VTP configuration"
    ],
    tags: ["VLAN", "Trunking", "VTP", "Switching"]
  },
  {
    id: "ospf-config",
    title: "OSPF Single Area Configuration",
    difficulty: "Intermediate",
    duration: "60 min",
    description: "Configure OSPF routing protocol between multiple routers and verify dynamic route learning.",
    topology: "R1 ←OSPF→ R2 ←OSPF→ R3",
    objectives: [
      "Enable OSPF process",
      "Advertise networks",
      "Configure passive interfaces",
      "Verify adjacencies",
      "Analyze routing table"
    ],
    steps: [
      { step: 1, title: "Enable OSPF Process on R1", command: "router ospf 1", description: "Start the OSPF routing process with process ID 1." },
      { step: 2, title: "Set Router ID", command: "router-id 1.1.1.1", description: "Manually set the OSPF router ID for R1." },
      { step: 3, title: "Advertise Networks", command: "network 192.168.1.0 0.0.0.255 area 0\nnetwork 10.0.12.0 0.0.0.3 area 0", description: "Advertise connected networks into OSPF Area 0." },
      { step: 4, title: "Configure Passive Interface", command: "passive-interface GigabitEthernet0/0", description: "Prevent OSPF hellos on the LAN interface (no other OSPF routers there)." },
      { step: 5, title: "Configure R2", command: "router ospf 1\nrouter-id 2.2.2.2\nnetwork 10.0.12.0 0.0.0.3 area 0\nnetwork 10.0.23.0 0.0.0.3 area 0", description: "Configure OSPF on R2 with its connected networks." },
      { step: 6, title: "Configure R3", command: "router ospf 1\nrouter-id 3.3.3.3\nnetwork 10.0.23.0 0.0.0.3 area 0\nnetwork 192.168.3.0 0.0.0.255 area 0", description: "Configure OSPF on R3 with its connected networks." },
      { step: 7, title: "Verify OSPF Neighbors", command: "show ip ospf neighbor", description: "Verify OSPF adjacencies have formed between routers." },
      { step: 8, title: "Check Routing Table", command: "show ip route ospf", description: "Verify OSPF routes (marked with 'O') in the routing table." }
    ],
    verification: [
      "show ip ospf neighbor - Check adjacencies",
      "show ip route - View complete routing table",
      "show ip ospf database - View LSDB",
      "ping 192.168.3.1 source 192.168.1.1 - Test end-to-end"
    ],
    tags: ["OSPF", "Routing", "Dynamic Routing", "Area 0"]
  },
  {
    id: "acl-config",
    title: "Access Control Lists (ACL)",
    difficulty: "Intermediate",
    duration: "45 min",
    description: "Configure standard and extended ACLs to filter network traffic based on various criteria.",
    topology: "PC_Admin → R1 → Server\nPC_Guest → R1 (blocked)",
    objectives: [
      "Create standard ACLs",
      "Create extended ACLs",
      "Apply ACLs to interfaces",
      "Verify ACL operation",
      "Troubleshoot ACL issues"
    ],
    steps: [
      { step: 1, title: "Create Standard ACL", command: "ip access-list standard BLOCK_GUEST\ndeny 192.168.2.0 0.0.0.255\npermit any", description: "Create a named standard ACL that denies the guest network." },
      { step: 2, title: "Apply Standard ACL", command: "interface GigabitEthernet0/1\nip access-group BLOCK_GUEST out", description: "Apply the ACL outbound on the server-facing interface." },
      { step: 3, title: "Create Extended ACL", command: "ip access-list extended WEB_ONLY\npermit tcp 192.168.1.0 0.0.0.255 any eq 80\npermit tcp 192.168.1.0 0.0.0.255 any eq 443\ndeny ip any any", description: "Create an extended ACL allowing only HTTP/HTTPS traffic." },
      { step: 4, title: "Apply Extended ACL", command: "interface GigabitEthernet0/0\nip access-group WEB_ONLY in", description: "Apply the extended ACL inbound (close to source)." },
      { step: 5, title: "Verify ACL", command: "show ip access-lists", description: "View all ACLs and their match counters to verify operation." },
      { step: 6, title: "Test Connectivity", command: "ping 192.168.3.1 source 192.168.1.1", description: "Test if permitted traffic flows correctly." }
    ],
    verification: [
      "show ip access-lists - View ACL with hit counts",
      "show ip interface - See applied ACLs on interfaces",
      "debug ip packet - Trace ACL decisions (caution: high CPU)",
      "show running-config | include access - Find ACL references"
    ],
    tags: ["ACL", "Security", "Filtering", "Extended ACL"]
  },
  {
    id: "dhcp-server",
    title: "DHCP Server Configuration",
    difficulty: "Beginner",
    duration: "30 min",
    description: "Configure a Cisco router as a DHCP server to automatically assign IP addresses to clients.",
    topology: "DHCP Clients → SW1 → R1 (DHCP Server)",
    objectives: [
      "Create DHCP pools",
      "Configure excluded addresses",
      "Verify DHCP leases",
      "Configure DHCP relay"
    ],
    steps: [
      { step: 1, title: "Exclude Static Addresses", command: "ip dhcp excluded-address 192.168.1.1 192.168.1.10", description: "Exclude the first 10 addresses from DHCP pool (for static devices)." },
      { step: 2, title: "Create DHCP Pool", command: "ip dhcp pool LAN_POOL", description: "Create a DHCP pool named LAN_POOL." },
      { step: 3, title: "Define Network", command: "network 192.168.1.0 255.255.255.0", description: "Specify the network and subnet mask for the DHCP pool." },
      { step: 4, title: "Set Default Gateway", command: "default-router 192.168.1.1", description: "Configure the default gateway to be given to clients." },
      { step: 5, title: "Set DNS Server", command: "dns-server 8.8.8.8 8.8.4.4", description: "Configure DNS servers for clients (Google DNS)." },
      { step: 6, title: "Set Lease Duration", command: "lease 7", description: "Set IP address lease duration to 7 days." },
      { step: 7, title: "Configure DHCP Relay", command: "interface GigabitEthernet0/1\nip helper-address 10.0.0.1", description: "Configure DHCP relay agent for remote subnets." },
      { step: 8, title: "Verify DHCP", command: "show ip dhcp binding", description: "View all DHCP leases currently assigned." }
    ],
    verification: [
      "show ip dhcp binding - View active leases",
      "show ip dhcp pool - View pool statistics",
      "show ip dhcp conflict - Check for IP conflicts",
      "debug ip dhcp server events - Monitor DHCP process"
    ],
    tags: ["DHCP", "IP Assignment", "Pool Config", "Relay"]
  },
  {
    id: "nat-config",
    title: "NAT & PAT Configuration",
    difficulty: "Advanced",
    duration: "60 min",
    description: "Configure NAT and PAT (Port Address Translation) to allow internal hosts to access the internet.",
    topology: "Internal PCs → R1 (NAT) → ISP Router → Internet",
    objectives: [
      "Configure static NAT",
      "Configure dynamic NAT",
      "Configure PAT (NAT overload)",
      "Verify NAT translations",
      "Troubleshoot NAT issues"
    ],
    steps: [
      { step: 1, title: "Define Inside Interface", command: "interface GigabitEthernet0/0\nip nat inside", description: "Mark the LAN-facing interface as NAT inside." },
      { step: 2, title: "Define Outside Interface", command: "interface GigabitEthernet0/1\nip nat outside", description: "Mark the WAN-facing interface as NAT outside." },
      { step: 3, title: "Configure Static NAT", command: "ip nat inside source static 192.168.1.100 203.0.113.100", description: "Map a specific internal IP to a specific public IP." },
      { step: 4, title: "Create ACL for Dynamic NAT", command: "ip access-list standard NAT_ACL\npermit 192.168.1.0 0.0.0.255", description: "Define which hosts can use dynamic NAT." },
      { step: 5, title: "Create NAT Pool", command: "ip nat pool PUBLIC_POOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0", description: "Define a pool of public IP addresses for dynamic NAT." },
      { step: 6, title: "Configure PAT (NAT Overload)", command: "ip nat inside source list NAT_ACL interface GigabitEthernet0/1 overload", description: "Configure PAT using the outside interface IP - many-to-one." },
      { step: 7, title: "Verify NAT", command: "show ip nat translations", description: "View active NAT translation table." }
    ],
    verification: [
      "show ip nat translations - View active translations",
      "show ip nat statistics - View NAT counters",
      "debug ip nat - Monitor real-time NAT translations",
      "ping 8.8.8.8 from inside host - Test internet access"
    ],
    tags: ["NAT", "PAT", "Internet Access", "Address Translation"]
  }
];
