
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export const ResumeUpload = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Erro",
          description: "Você precisa estar logado para fazer upload do currículo",
          variant: "destructive"
        });
        return;
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase
        .from('resumes')
        .insert({
          user_id: user.id,
          file_path: fileName,
          file_name: file.name,
          file_type: file.type
        });

      if (dbError) throw dbError;

      toast({
        title: "Sucesso!",
        description: "Currículo enviado com sucesso",
      });
      
      setFile(null);

    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar o currículo. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Upload de Currículo</h2>
        <p className="text-gray-600">Faça upload do seu currículo em PDF</p>
      </div>

      <div className="border-2 border-dashed rounded-lg p-6 text-center">
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        <Label
          htmlFor="resume"
          className="cursor-pointer flex flex-col items-center space-y-2"
        >
          <Upload className="h-8 w-8 text-gray-400" />
          <span className="text-sm text-gray-600">
            {file ? file.name : "Clique para selecionar ou arraste seu currículo aqui"}
          </span>
        </Label>
      </div>

      {file && (
        <Button
          onClick={handleUpload}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Enviando..." : "Enviar Currículo"}
        </Button>
      )}
    </div>
  );
};
