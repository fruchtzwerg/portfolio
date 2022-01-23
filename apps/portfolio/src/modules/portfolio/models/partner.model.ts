type Responsibility = 'Architect' | 'Developer';

export interface Partner {
  name: string;
  icon: string;
  responsibilities: Responsibility[];
  link: `https://${string}`;
}
