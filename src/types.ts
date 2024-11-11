export interface TimeEntry {
  id: string;
  projectId: string;
  description: string;
  startTime: number;
  endTime?: number;
  duration: number;
}

export interface Project {
  id: string;
  name: string;
  color: string;
  isDefault?: boolean;
}

export interface TimeStats {
  today: number;
  week: number;
  month: number;
}