import { login } from './login';
import { logout } from './logout';
import { me } from './me';
import { register } from './register';
import { forgotPassword } from './forgotPassword';
import { validatePasswordCode } from './validatePasswordCode';
import { resetPassword } from './resetPassword';

export const AuthService = {
  login,
  logout,
  register,
  me,
  forgotPassword,
  validatePasswordCode,
  resetPassword
}
