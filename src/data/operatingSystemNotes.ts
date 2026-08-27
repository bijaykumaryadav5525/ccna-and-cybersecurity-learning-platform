export interface OperatingSystemNotesFile {
  title: string;
  fileName: string;
  fileType: 'MD';
  path: string;
  notes?: string;
}

export const operatingSystemNotesFile: OperatingSystemNotesFile = {
  title: 'Operating System Notes',
  fileName: 'Operating_Systems_and_Networks_Notes.md',
  fileType: 'MD',
  path: '/notes/Operating_Systems_and_Networks_Notes.md',
  notes: 'Read or download the lightweight Operating System study notes outline.',
};