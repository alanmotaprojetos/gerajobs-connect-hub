
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ProfileSection } from '@/components/resume/ProfileSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ResumeUpload } from '@/components/resume/ResumeUpload';
import { ViewProfile } from '@/components/profile/ViewProfile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('view');
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle URL query parameters for tab selection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['view', 'profile', 'experience', 'education', 'resume'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/resume?tab=${value}`, { replace: true });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-gj-purple to-gj-blue py-16">
        <div className="gj-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Currículo
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Mantenha seu currículo atualizado para encontrar as melhores oportunidades
          </p>
        </div>
      </div>

      <div className="gj-container py-12">
        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange}
          className="space-y-8"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="view">Visualizar</TabsTrigger>
            <TabsTrigger value="profile">Editar Perfil</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="resume">Currículo</TabsTrigger>
          </TabsList>

          <TabsContent value="view" className="space-y-8">
            <ViewProfile />
          </TabsContent>

          <TabsContent value="profile" className="space-y-8">
            <ProfileSection />
          </TabsContent>

          <TabsContent value="experience" className="space-y-8">
            <ExperienceSection />
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <EducationSection />
          </TabsContent>

          <TabsContent value="resume" className="space-y-8">
            <ResumeUpload />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resume;
