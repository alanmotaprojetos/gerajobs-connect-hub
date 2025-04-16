
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Lock, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface RegisterFormProps {
  onSwitchTab: () => void;
}

const RegisterForm = ({ onSwitchTab }: RegisterFormProps) => {
  const [accountType, setAccountType] = useState<"individual" | "company">("individual");
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signUp(email, password);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <Button
          type="button"
          variant={accountType === "individual" ? "default" : "outline"}
          className="flex items-center justify-center gap-2"
          onClick={() => setAccountType("individual")}
        >
          <User size={18} />
          <span>Candidato</span>
        </Button>
        <Button
          type="button"
          variant={accountType === "company" ? "default" : "outline"}
          className="flex items-center justify-center gap-2"
          onClick={() => setAccountType("company")}
        >
          <Building2 size={18} />
          <span>Empresa</span>
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 py-2">
        <div className="space-y-2">
          <Label htmlFor="register-name">
            {accountType === "individual" ? "Nome Completo" : "Nome da Empresa"}
          </Label>
          <div className="relative">
            {accountType === "individual" ? (
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            ) : (
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            )}
            <Input 
              id="register-name"
              name="name"
              placeholder={accountType === "individual" ? "João Silva" : "Empresa S/A"} 
              className="pl-10" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input id="register-email" name="email" type="email" placeholder="seu@email.com" className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password">Senha</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input id="register-password" name="password" type="password" placeholder="••••••••" className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-confirm-password">Confirme sua senha</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input id="register-confirm-password" name="confirmPassword" type="password" placeholder="••••••••" className="pl-10" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            Eu concordo com os{" "}
            <Link to="/terms" className="text-gj-purple hover:underline">
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link to="/privacy" className="text-gj-purple hover:underline">
              Política de Privacidade
            </Link>
          </Label>
        </div>

        <Button type="submit" className="w-full">
          Cadastrar
        </Button>

        <div className="text-center text-sm text-gray-500 mt-2">
          Já tem uma conta?{" "}
          <button
            type="button"
            className="text-gj-purple hover:underline"
            onClick={onSwitchTab}
          >
            Entre
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
