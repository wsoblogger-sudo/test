export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  purchases: Purchase[];
}

export interface Purchase {
  softwareName: string;
  plan: string;
  price: string;
  date: string;
  status: 'pending' | 'completed';
}

export const getUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const saveUser = (user: User): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('user', JSON.stringify(user));
};

export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('user');
};

export const isAuthenticated = (): boolean => {
  return getUser() !== null;
};

export const createAccount = (email: string, password: string, name: string): User => {
  const user: User = {
    id: Math.random().toString(36).substring(7),
    email,
    name,
    createdAt: new Date().toISOString(),
    purchases: [],
  };
  
  // Store password hash (in production, use proper hashing)
  if (typeof window !== 'undefined') {
    localStorage.setItem(`pwd_${email}`, password);
  }
  
  saveUser(user);
  return user;
};

export const login = (email: string, password: string): User | null => {
  if (typeof window === 'undefined') return null;
  
  const storedPassword = localStorage.getItem(`pwd_${email}`);
  if (storedPassword !== password) {
    return null;
  }
  
  // Find user by email in all stored users
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr) as User;
    if (user.email === email) {
      return user;
    }
  }
  
  return null;
};

export const addPurchase = (purchase: Purchase): void => {
  const user = getUser();
  if (!user) return;
  
  user.purchases.push(purchase);
  saveUser(user);
};
