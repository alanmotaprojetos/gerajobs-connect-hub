
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { ProfileSection } from '@/components/resume/ProfileSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ResumeUpload } from '@/components/resume/ResumeUpload';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('profile');

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
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="resume">Currículo</TabsTrigger>
          </TabsList>

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
