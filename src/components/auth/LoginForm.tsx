
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onSwitchTab: () => void;
}

const LoginForm = ({ onSwitchTab }: LoginFormProps) => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input id="login-email" name="email" type="email" placeholder="seu@email.com" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="login-password">Senha</Label>
          <Link to="/forgot-password" className="text-sm text-gj-purple hover:underline">
            Esqueceu a senha?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input id="login-password" name="password" type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm">Lembrar de mim</Label>
      </div>

      <Button type="submit" className="w-full">
        Entrar
      </Button>

      <div className="text-center text-sm text-gray-500 mt-2">
        Não tem uma conta?{" "}
        <button
          type="button"
          className="text-gj-purple hover:underline"
          onClick={onSwitchTab}
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
