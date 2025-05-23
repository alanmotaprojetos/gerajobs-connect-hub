
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { User2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface UserProfile {
  full_name: string;
  email: string;
  phone: string | null;
  location: string | null;
  profession: string | null;
  bio: string | null;
  linkedin_url: string | null;
  profile_image: string | null;
}

export const ViewProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchProfile = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        throw error;
      }
      
      setProfile(data);
    } catch (error: any) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Erro ao carregar perfil",
        description: error.message || "Não foi possível carregar seus dados",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  if (!user) {
    return (
      <Card className="text-center py-8">
        <CardContent>
          <p className="text-lg mb-4">Você precisa estar logado para visualizar seu perfil.</p>
          <p className="text-muted-foreground">Faça login para acessar todos os recursos.</p>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="text-center py-8">
        <CardContent className="flex flex-col items-center">
          <RefreshCw className="h-8 w-8 animate-spin mb-4" />
          <p>Carregando seu perfil...</p>
        </CardContent>
      </Card>
    );
  }

  if (!profile) {
    return (
      <Card className="text-center py-8">
        <CardContent className="flex flex-col items-center">
          <p className="text-lg mb-4">Perfil não encontrado</p>
          <p className="text-muted-foreground mb-4">Você ainda não completou seu cadastro.</p>
          <Button onClick={() => fetchProfile()}>
            Tentar novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  const profileImageUrl = profile.profile_image 
    ? `${supabase.storage.from('profile_images').getPublicUrl(profile.profile_image).data.publicUrl}` 
    : null;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          {profileImageUrl ? (
            <AvatarImage src={profileImageUrl} alt={profile.full_name} />
          ) : (
            <AvatarFallback>
              <User2 className="h-8 w-8" />
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{profile.full_name}</h2>
          <p className="text-muted-foreground">{profile.profession || 'Profissão não especificada'}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Informações de Contato</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> {profile.email}</p>
            {profile.phone && <p><span className="font-medium">Telefone:</span> {profile.phone}</p>}
            {profile.location && <p><span className="font-medium">Localização:</span> {profile.location}</p>}
            {profile.linkedin_url && (
              <p>
                <span className="font-medium">LinkedIn:</span>{' '}
                <a 
                  href={profile.linkedin_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {profile.linkedin_url}
                </a>
              </p>
            )}
          </div>
        </div>

        {profile.bio && (
          <div>
            <h3 className="font-semibold mb-2">Biografia</h3>
            <p className="text-muted-foreground">{profile.bio}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
