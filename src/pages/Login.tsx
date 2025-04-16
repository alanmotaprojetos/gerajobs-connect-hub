
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const Login = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const navigate = useNavigate();
  const { user } = useAuth();

  // Set initial tab based on URL path
  useEffect(() => {
    if (location.pathname === "/register") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  }, [location.pathname]);

  if (user) {
    navigate('/');
    return null;
  }

  const handleSwitchToRegister = () => {
    setActiveTab("register");
    navigate("/register");
  };

  const handleSwitchToLogin = () => {
    setActiveTab("login");
    navigate("/login");
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
                <LoginForm onSwitchTab={handleSwitchToRegister} />
              </TabsContent>

              {/* Aba de Cadastro */}
              <TabsContent value="register">
                <RegisterForm onSwitchTab={handleSwitchToLogin} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
