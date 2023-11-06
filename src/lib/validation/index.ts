import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'too short'}),
    username: z.string().min(2, {message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8'})
  });
  
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be at least 8'})
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  location: z.string().min(2).max(100),
  file: z.custom<File[]>(),
  tags: z.string()
});

