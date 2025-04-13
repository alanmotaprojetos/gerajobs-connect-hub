
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, UserPlus, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";

const Login = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [accountType, setAccountType] = useState<"individual" | "company">("individual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log("Formulário enviado:", activeTab, accountType);
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
          <div className="bg-gradient-to-r from-gj-purple to-gj-blue p-6 text-center text-white">
            <h1 className="text-2xl font-bold">
              {activeTab === "login" ? "Entre em sua conta" : "Crie sua conta"}
            </h1>
            <p className="mt-2 text-white/80">
              {activeTab === "login" 
                ? "Acesse para encontrar vagas e cursos" 
                : "Comece sua jornada profissional conosco"}
            </p>
          </div>

          <div className="p-6">
            <Tabs 
              defaultValue={activeTab} 
              value={activeTab} 
              onValueChange={(value) => setActiveTab(value as "login" | "register")} 
              className="mt-4"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Cadastrar</TabsTrigger>
              </TabsList>

              {/* Aba de Login */}
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="login-email" type="email" placeholder="seu@email.com" className="pl-10" />
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
                      <Input id="login-password" type="password" placeholder="••••••••" className="pl-10" />
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
                      onClick={() => setActiveTab("register")}
                    >
                      Cadastre-se
                    </button>
                  </div>
                </form>
              </TabsContent>

              {/* Aba de Cadastro */}
              <TabsContent value="register">
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
                        placeholder={accountType === "individual" ? "João Silva" : "Empresa S/A"} 
                        className="pl-10" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="register-email" type="email" placeholder="seu@email.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="register-password" type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirme sua senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="register-confirm-password" type="password" placeholder="••••••••" className="pl-10" />
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
                      onClick={() => setActiveTab("login")}
                    >
                      Entre
                    </button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
