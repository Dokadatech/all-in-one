import { AndroidNotificationPriority } from "expo-notifications";

export interface FirebaseData {
  title?: string;
  message?: string;
  subtitle?: string;
  sound?: boolean | string;
  vibrate?: boolean | number[];
  priority?: AndroidNotificationPriority;
  badge?: number;
}
