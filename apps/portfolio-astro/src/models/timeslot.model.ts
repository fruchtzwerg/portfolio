export interface Timeslot {
  caption: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  link?: {
    label: string;
    href: string;
  };
}
