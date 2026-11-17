export interface StoredInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  projectDetails: string;
  timestamp: string;
}

const STORAGE_KEY = 'nexgen_inquiries_v1';

export function saveInquiry(data: Omit<StoredInquiry, 'id' | 'timestamp'>): StoredInquiry {
  const newInquiry: StoredInquiry = {
    ...data,
    id: `NEX-${Math.floor(1000 + Math.random() * 9000)}`,
    timestamp: new Date().toISOString(),
  };

  try {
    const existing = getStoredInquiries();
    existing.unshift(newInquiry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage not available, saved in memory', err);
  }

  return newInquiry;
}

export function getStoredInquiries(): StoredInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
