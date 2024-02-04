type User = {
  id: string;
  name: string;
  imageUrl: string;
  role?: {
    id: string;
    hasAllPermissions: boolean;
  };
};

type Session = {
  status: "authenticated" | "unautheticated";
  user?: User;
};

const session: Session = {
  status: "authenticated",
  user: {
    id: "id-1",
    name: "John",
    imageUrl: "https://",
  },
};

// optional chaining(?.), nullish coalescing operator (??)
const hasPermissions = session.user?.role?.hasAllPermissions ?? "false";
console.log(hasPermissions);  // false
