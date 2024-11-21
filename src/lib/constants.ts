export const DEPARTMENTS = [
  {
    id: 1,
    name: 'Cardiology',
    icon: 'heart-pulse',
    description: 'Comprehensive heart and cardiovascular care',
  },
  {
    id: 2,
    name: 'Neurology',
    icon: 'brain',
    description: 'Expert neurological diagnostics and treatment',
  },
  {
    id: 3,
    name: 'Orthopedics',
    icon: 'bone',
    description: 'Specialized bone and joint care',
  },
  {
    id: 4,
    name: 'Radiology',
    icon: 'scan',
    description: 'Advanced imaging and diagnostic services',
  },
  {
    id: 5,
    name: 'Pathology',
    icon: 'flask-round',
    description: 'Comprehensive laboratory testing',
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300',
    specialization: 'Interventional Cardiology',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    department: 'Neurology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300',
    specialization: 'Neurological Surgery',
  },
  {
    id: 3,
    name: 'Dr. Emily Williams',
    department: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300',
    specialization: 'Sports Medicine',
  },
];

export const SERVICES = [
  {
    id: 1,
    name: 'Diagnostic Imaging',
    icon: 'scan-face',
    description: 'State-of-the-art imaging services including MRI, CT, and X-ray',
  },
  {
    id: 2,
    name: 'Laboratory Testing',
    icon: 'flask-conical',
    description: 'Comprehensive blood work and pathology services',
  },
  {
    id: 3,
    name: 'Cardiac Testing',
    icon: 'activity',
    description: 'Advanced cardiac diagnostics and monitoring',
  },
];

export const NAVIGATION_ITEMS = [
  { name: 'Dashboard', icon: 'layout-dashboard', href: '#dashboard' },
  { name: 'About Us', icon: 'info', href: '#about' },
  { name: 'Book Appointment', icon: 'calendar', href: '#book' },
  { name: 'Contact', icon: 'phone', href: '#contact' },
  { name: 'Departments', icon: 'building', href: '#departments' },
  { name: 'Find a Doctor', icon: 'user', href: '#doctors' },
  { name: 'Services', icon: 'stethoscope', href: '#services' },
  { name: 'Test Results', icon: 'clipboard-list', href: '#results' },
];