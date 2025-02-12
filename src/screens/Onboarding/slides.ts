import { Onboarding1, Onboarding2, Onboarding3 } from '../../assets';
import { OnboardingItemProps } from './Children/type';

export default [
  {
    id: 1,
    icon: Onboarding1,
    title: 'Manage your tasks',
    description: 'You can easily manage all of your daily tasks in DoMe for free',
  },
  {
    id: 2,
    icon: Onboarding2,
    title: 'Create daily routine',
    description: 'In Uptodo  you can create your personalized routine to stay productive',
  },
  {
    id: 3,
    icon: Onboarding3,
    title: 'Orgonaize your tasks',
    description: 'You can organize your daily tasks by adding your tasks into separate categories',
  },
] as OnboardingItemProps['item'][];
