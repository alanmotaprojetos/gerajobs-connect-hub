
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { Trash2 } from 'lucide-react';

interface Experience {
  id?: string;
  company_name: string;
  position: string;
  start_date: string;
  end_date?: string;
  current_job: boolean;
  description: string;
}

export const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        company_name: '',
        position: '',
        start_date: '',
        current_job: false,
        description: ''
      }
    ]);
  };

  const handleExperienceChange = (index: number, field: keyof Experience, value: any) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setExperiences(newExperiences);
  };

  const handleRemoveExperience = (index: number) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Erro",
          description: "Você precisa estar logado para salvar suas experiências",
          variant: "destructive"
        });
        return;
      }

      for (const exp of experiences) {
        if (exp.id) {
          // Update existing experience
          const { error } = await supabase
            .from('work_experience')
            .update({
              ...exp,
              user_id: user.id
            })
            .eq('id', exp.id);

          if (error) throw error;
        } else {
          // Create new experience
          const { error } = await supabase
            .from('work_experience')
            .insert({
              ...exp,
              user_id: user.id
            });

          if (error) throw error;
        }
      }

      toast({
        title: "Sucesso!",
        description: "Experiências salvas com sucesso",
      });

    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao salvar as experiências. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Experiência Profissional</h2>
          <p className="text-gray-600">Adicione suas experiências profissionais relevantes</p>
        </div>
        <Button type="button" onClick={handleAddExperience}>
          Adicionar Experiência
        </Button>
      </div>

      {experiences.map((exp, index) => (
        <div key={index} className="p-6 border rounded-lg space-y-4">
          <div className="flex justify-end">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveExperience(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Empresa</Label>
              <Input
                value={exp.company_name}
                onChange={(e) => handleExperienceChange(index, 'company_name', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Cargo</Label>
              <Input
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Data de Início</Label>
              <Input
                type="date"
                value={exp.start_date}
                onChange={(e) => handleExperienceChange(index, 'start_date', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Data de Término</Label>
              <Input
                type="date"
                value={exp.end_date}
                onChange={(e) => handleExperienceChange(index, 'end_date', e.target.value)}
                disabled={exp.current_job}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id={`current-${index}`}
              checked={exp.current_job}
              onCheckedChange={(checked) => handleExperienceChange(index, 'current_job', checked)}
            />
            <Label htmlFor={`current-${index}`}>Emprego atual</Label>
          </div>

          <div className="space-y-2">
            <Label>Descrição</Label>
            <Textarea
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              placeholder="Descreva suas principais atividades e conquistas..."
              className="h-32"
            />
          </div>
        </div>
      ))}

      {experiences.length > 0 && (
        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Experiências"}
        </Button>
      )}
    </form>
  );
};
