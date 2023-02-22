import { Bars3CenterLeftIcon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  UsersIcon,
  CalendarDaysIcon,
  StarIcon,
  ChartPieIcon,
  EnvelopeIcon
} from '@heroicons/react/20/solid'

export const nav = [
  {
    name: 'Home',
    href: '/our-work/crm/complete-solution/home',
    icon: HomeIcon,
    current: true,
  },
  {
    name: 'Donors',
    href: '#',
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: 'Donations',
    href: '#',
    icon: CurrencyDollarIcon,
    current: false,
  },
  {
    name: 'Volunteers',
    href: '#',
    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Events',
    href: '#',
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: 'Financials',
    href: '#',
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: 'Newsletters',
    href: '#',
    icon: EnvelopeIcon,
    current: false,
  }
];

export const committees = [
  {
    name: 'Steering',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
  {
    name: 'Content',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
  {
    name: 'Web',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
  {
    name: 'Volunteer Management',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
  {
    name: 'Finance',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
  {
    name: 'Development',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
  {
    name: 'Events',
    href: '#',
    bgColorClass: 'bg-indigo-500',
  },
];
