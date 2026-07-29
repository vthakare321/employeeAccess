export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
   company: {
    department: string;
  };

  role: string;
}