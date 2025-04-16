
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

interface AuthModalProps {
  defaultTab?: "login" | "register";
  trigger?: React.ReactNode;
}

const AuthModal = ({ defaultTab = "login", trigger }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitchToRegister = () => {
    setActiveTab("register");
  };

  const handleSwitchToLogin = () => {
    setActiveTab("login");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            {activeTab === "login" ? "Entrar" : "Cadastrar"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {activeTab === "login" ? "Entre em sua conta" : "Crie sua conta"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="mt-4">
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
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
