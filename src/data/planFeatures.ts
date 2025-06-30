
import { PlanFeatures } from '@/types/pricing';

export const planFeatures: PlanFeatures = {
  starter: [
    'Multi-locations',
    'CRM',
    'Conversation Hub',
    'Conversation AI',
    'Voice AI',
    'Integrated Email System',
    'Email & SMS Notifications',
    'Online Scheduling',
    'Online Payment',
    'Workflow Automation',
    'Invoicing & Estimates',
    'Products & Orders',
    'Inventory',
    'Loyalty Program',
    'Coupon Codes',
    'Client Portal',
    'Forms & Surveys',
    'Documents & Contracts',
    'Email Templates',
    'Snippets',
    'Surveys',
    'QR Codes',
    'Media Storage',
    'Countdown Timers',
    'App Marketplace',
    'Reports/Analytics',
    '1 Custom Report',
    '1 Custom Dashboard',
    'Google Analytics',
    'Meta Pixel Ad'
  ],
  pro: [
    '**All Starter Suit Features +**',
    'Pipelines/Opportunities',
    'Funnels',
    'Blogs',
    'Memberships',
    'Quizzes',
    'Certificates',
    'Communities',
    'Trigger Links',
    'Smart Chat Widget'
  ],
  elite: [
    '**All Starter Suit Features +**',
    '**All Pro Suit Features +**',
    'Google Reputation Manager',
    'Social Planner',
    'Smart Websites Builder',
    'E-Commerce',
    'Webinars',
    'Marketing Campaigns',
    'Email Marketing',
    'Payment Links'
  ]
};

export const getFeatureDetails = (feature: string) => {
  const details: { [key: string]: string } = {
    'Conversation AI': 'Check rates & limits',
    'Voice AI': 'Check rates & limits',
    'Integrated Email System': 'Check rates & limits'
  };
  return details[feature];
};
