
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { Trash2 } from 'lucide-react';

interface Education {
  id?: string;
  institution: string;
  degree: string;
  field_of_study: string;
  start_date: string;
  end_date?: string;
  current_education: boolean;
}

export const EducationSection = () => {
  const [educations, setEducations] = useState<Education[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        institution: '',
        degree: '',
        field_of_study: '',
        start_date: '',
        current_education: false
      }
    ]);
  };

  const handleEducationChange = (index: number, field: keyof Education, value: any) => {
    const newEducations = [...educations];
    newEducations[index] = { ...newEducations[index], [field]: value };
    setEducations(newEducations);
  };

  const handleRemoveEducation = (index: number) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Erro",
          description: "Você precisa estar logado para salvar sua formação",
          variant: "destructive"
        });
        return;
      }

      for (const edu of educations) {
        if (edu.id) {
          // Update existing education
          const { error } = await supabase
            .from('education')
            .update({
              ...edu,
              user_id: user.id
            })
            .eq('id', edu.id);

          if (error) throw error;
        } else {
          // Create new education
          const { error } = await supabase
            .from('education')
            .insert({
              ...edu,
              user_id: user.id
            });

          if (error) throw error;
        }
      }

      toast({
        title: "Sucesso!",
        description: "Formação acadêmica salva com sucesso",
      });

    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao salvar a formação. Tente novamente.",
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
          <h2 className="text-2xl font-bold">Formação Acadêmica</h2>
          <p className="text-gray-600">Adicione sua formação acadêmica</p>
        </div>
        <Button type="button" onClick={handleAddEducation}>
          Adicionar Formação
        </Button>
      </div>

      {educations.map((edu, index) => (
        <div key={index} className="p-6 border rounded-lg space-y-4">
          <div className="flex justify-end">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveEducation(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Instituição</Label>
              <Input
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Grau</Label>
              <Input
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                required
                placeholder="Ex: Bacharelado, Mestrado, etc."
              />
            </div>
            
            <div className="space-y-2">
              <Label>Área de Estudo</Label>
              <Input
                value={edu.field_of_study}
                onChange={(e) => handleEducationChange(index, 'field_of_study', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Data de Início</Label>
              <Input
                type="date"
                value={edu.start_date}
                onChange={(e) => handleEducationChange(index, 'start_date', e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Data de Conclusão</Label>
              <Input
                type="date"
                value={edu.end_date}
                onChange={(e) => handleEducationChange(index, 'end_date', e.target.value)}
                disabled={edu.current_education}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id={`current-edu-${index}`}
              checked={edu.current_education}
              onCheckedChange={(checked) => handleEducationChange(index, 'current_education', checked)}
            />
            <Label htmlFor={`current-edu-${index}`}>Em andamento</Label>
          </div>
        </div>
      ))}

      {educations.length > 0 && (
        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Formação"}
        </Button>
      )}
    </form>
  );
};
