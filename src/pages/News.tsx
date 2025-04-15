import { useState } from "react";
import Layout from "@/components/layout/Layout";
import NewsCard from "@/components/news/NewsCard";
import NewsCategories from "@/components/news/NewsCategories";

const categories = [
  "Tecnologia",
  "IA",
  "Engenharia",
  "Saúde",
  "Medicina",
  "Construção Civil",
  "Transporte",
  "Psicologia",
  "Marketing",
  "Direito",
  "Investimentos"
];

const newsData = [
  // Tecnologia
  {
    id: "tech-1",
    title: "Apple anuncia novo chip M3 Ultra com desempenho revolucionário",
    description: "Nova geração de processadores promete aumentar em 40% o desempenho em aplicações profissionais.",
    category: "Tecnologia",
    date: new Date("2025-04-10"),
    imageUrl: "https://images.unsplash.com/photo-1639249227523-83cadbb5afa7"
  },
  {
    id: "tech-2",
    title: "5G avançado chega a todas as capitais brasileiras",
    description: "Tecnologia promete revolucionar a conectividade com velocidades até 100 vezes maiores que o 4G.",
    category: "Tecnologia",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7"
  },
  {
    id: "tech-3",
    title: "Quantum Computing: Brasil inaugura primeiro computador quântico",
    description: "Equipamento será usado para pesquisas em física quântica e desenvolvimento de novos materiais.",
    category: "Tecnologia",
    date: new Date("2025-04-08")
  },
  {
    id: "tech-4",
    title: "Nova tecnologia de bateria promete autonomia de uma semana",
    description: "Pesquisadores desenvolvem bateria de estado sólido com durabilidade impressionante.",
    category: "Tecnologia",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1601337673944-13a7b5cd6b8e"
  },
  {
    id: "tech-5",
    title: "Realidade Virtual chega ao mercado educacional",
    description: "Escolas começam a adotar tecnologia VR para aulas imersivas de ciências e história.",
    category: "Tecnologia",
    date: new Date("2025-04-06")
  },
  {
    id: "tech-6",
    title: "Nova tecnologia de tela dobrável é apresentada",
    description: "Fabricantes demonstram displays que podem ser dobrados em múltiplas direções.",
    category: "Tecnologia",
    date: new Date("2025-04-05"),
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8"
  },
  {
    id: "tech-7",
    title: "Tecnologia verde: Painéis solares transparentes",
    description: "Inovação permite transformar janelas em fonte de energia limpa.",
    category: "Tecnologia",
    date: new Date("2025-04-04")
  },
  {
    id: "tech-8",
    title: "Biometria avançada: Reconhecimento por DNA em tempo real",
    description: "Nova tecnologia promete revolucionar a segurança em aeroportos e fronteiras.",
    category: "Tecnologia",
    date: new Date("2025-04-03"),
    imageUrl: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b"
  },
  {
    id: "tech-9",
    title: "Hologramas interativos chegam ao mercado consumidor",
    description: "Tecnologia permite criar projeções 3D manipuláveis sem necessidade de óculos especiais.",
    category: "Tecnologia",
    date: new Date("2025-04-02")
  },
  {
    id: "tech-10",
    title: "Internet via satélite alcança 99% do território nacional",
    description: "Projeto de conectividade rural beneficia milhões de brasileiros.",
    category: "Tecnologia",
    date: new Date("2025-04-01"),
    imageUrl: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3"
  },

  // IA
  {
    id: "ai-1",
    title: "GPT-5 demonstra consciência em testes avançados",
    description: "Nova versão da IA surpreende especialistas com respostas que indicam autoconsciência.",
    category: "IA",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },
  {
    id: "ai-2",
    title: "IA brasileira vence competição internacional de diagnóstico médico",
    description: "Sistema desenvolvido no Brasil supera médicos humanos em precisão diagnóstica.",
    category: "IA",
    date: new Date("2025-04-14")
  },
  {
    id: "ai-3",
    title: "Assistentes virtuais ganham capacidade de empatia",
    description: "Nova geração de IAs pode reconhecer e responder a emoções humanas.",
    category: "IA",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511"
  },
  {
    id: "ai-4",
    title: "IA revoluciona processo de desenvolvimento de medicamentos",
    description: "Algoritmos reduzem tempo de pesquisa de novos fármacos de anos para meses.",
    category: "IA",
    date: new Date("2025-04-12")
  },
  {
    id: "ai-5",
    title: "Carros autônomos atingem nível 5 de autonomia",
    description: "Veículos totalmente autônomos são aprovados para uso em vias públicas.",
    category: "IA",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
  },
  {
    id: "ai-6",
    title: "IA passa em exame da OAB com nota máxima",
    description: "Sistema demonstra compreensão avançada de jurisprudência e legislação.",
    category: "IA",
    date: new Date("2025-04-10")
  },
  {
    id: "ai-7",
    title: "Professores virtuais são implementados em escolas públicas",
    description: "Projeto piloto utiliza IA para complementar ensino presencial.",
    category: "IA",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    id: "ai-8",
    title: "IA prevê mudanças climáticas com precisão inédita",
    description: "Novo modelo oferece previsões meteorológicas com até 95% de precisão.",
    category: "IA",
    date: new Date("2025-04-08")
  },
  {
    id: "ai-9",
    title: "Sistema de IA compõe sinfonia premiada",
    description: "Obra musical criada por inteligência artificial recebe reconhecimento internacional.",
    category: "IA",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76"
  },
  {
    id: "ai-10",
    title: "IA detecta fake news em tempo real",
    description: "Novo algoritmo identifica e classifica desinformação com 99% de precisão.",
    category: "IA",
    date: new Date("2025-04-06")
  },

  // Engenharia
  {
    id: "eng-1",
    title: "Maior ponte suspensa do mundo é inaugurada no Brasil",
    description: "Estrutura revolucionária une engenharia e sustentabilidade.",
    category: "Engenharia",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
  },
  {
    id: "eng-2",
    title: "Novo material é 200% mais resistente que o aço",
    description: "Descoberta promete revolucionar construção civil e aeroespacial.",
    category: "Engenharia",
    date: new Date("2025-04-14")
  },
  {
    id: "eng-3",
    title: "Engenheiros desenvolvem concreto que absorve CO2",
    description: "Material inovador pode ajudar a combater mudanças climáticas.",
    category: "Engenharia",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05c"
  },
  {
    id: "eng-4",
    title: "Robôs construtores completam primeiro arranha-céu",
    description: "Automação na construção civil atinge novo marco.",
    category: "Engenharia",
    date: new Date("2025-04-12")
  },
  {
    id: "eng-5",
    title: "Sistema revolucionário de purificação de água é apresentado",
    description: "Tecnologia promete fornecer água potável a custo mínimo.",
    category: "Engenharia",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
  },
  {
    id: "eng-6",
    title: "Novo método de reciclagem transforma plástico em combustível",
    description: "Processo químico revolucionário soluciona problema ambiental.",
    category: "Engenharia",
    date: new Date("2025-04-10")
  },
  {
    id: "eng-7",
    title: "Engenheiros criam asfalto que gera energia",
    description: "Pavimento especial converte tráfego em eletricidade.",
    category: "Engenharia",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1617195920950-1145bf9a9c72"
  },
  {
    id: "eng-8",
    title: "Impressora 3D gigante constrói casa em 24 horas",
    description: "Tecnologia promete revolucionar setor habitacional.",
    category: "Engenharia",
    date: new Date("2025-04-08")
  },
  {
    id: "eng-9",
    title: "Nova turbina eólica bate recorde de eficiência",
    description: "Equipamento aproveita 95% da energia dos ventos.",
    category: "Engenharia",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51"
  },
  {
    id: "eng-10",
    title: "Engenheiros desenvolvem vidro autolimpante",
    description: "Material revolucionário dispensa uso de produtos químicos.",
    category: "Engenharia",
    date: new Date("2025-04-06")
  },

  // Saúde
  {
    id: "health-1",
    title: "Estudo revela benefícios surpreendentes da meditação",
    description: "Pesquisa comprova impacto na longevidade e saúde mental.",
    category: "Saúde",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  },
  {
    id: "health-2",
    title: "Nova dieta personalizada por DNA revoluciona nutrição",
    description: "Algoritmo cria planos alimentares baseados em genética.",
    category: "Saúde",
    date: new Date("2025-04-14")
  },
  {
    id: "health-3",
    title: "Exercício de 5 minutos promete mesmos benefícios de 1 hora",
    description: "Técnica inovadora otimiza tempo de atividade física.",
    category: "Saúde",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  },
  {
    id: "health-4",
    title: "Alimento supernutritivo é desenvolvido em laboratório",
    description: "Produto promete suprir todas as necessidades nutricionais diárias.",
    category: "Saúde",
    date: new Date("2025-04-12")
  },
  {
    id: "health-5",
    title: "Novo método natural combate insônia crônica",
    description: "Técnica combina aromaterapia e cronobiologia.",
    category: "Saúde",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1515894203071-4c13efd95502"
  },
  {
    id: "health-6",
    title: "Descoberta relação entre microbioma e longevidade",
    description: "Bactérias intestinais podem ser chave para vida mais longa.",
    category: "Saúde",
    date: new Date("2025-04-10")
  },
  {
    id: "health-7",
    title: "App revolucionário monitora saúde em tempo real",
    description: "Tecnologia vestível detecta problemas antes dos sintomas.",
    category: "Saúde",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
  },
  {
    id: "health-8",
    title: "Estudo relaciona postura corporal e saúde mental",
    description: "Pesquisa revela impacto da posição do corpo no humor.",
    category: "Saúde",
    date: new Date("2025-04-08")
  },
  {
    id: "health-9",
    title: "Novo superfood amazônico ganha destaque mundial",
    description: "Fruta nativa apresenta propriedades antienvelhecimento.",
    category: "Saúde",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf"
  },
  {
    id: "health-10",
    title: "Técnica de respiração aumenta imunidade",
    description: "Método simples fortalece sistema imunológico naturalmente.",
    category: "Saúde",
    date: new Date("2025-04-06")
  },

  // Medicina
  {
    id: "med-1",
    title: "Cura do câncer: Breakthrough em imunoterapia",
    description: "Nova terapia apresenta 95% de eficácia em casos avançados.",
    category: "Medicina",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370"
  },
  {
    id: "med-2",
    title: "Cirurgia robótica atinge precisão microscópica",
    description: "Robô cirurgião realiza procedimentos impossíveis para humanos.",
    category: "Medicina",
    date: new Date("2025-04-14")
  },
  {
    id: "med-3",
    title: "Terapia gênica reverte envelhecimento celular",
    description: "Tratamento promete prolongar juventude biológica.",
    category: "Medicina",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
  },
  {
    id: "med-4",
    title: "Novo tratamento elimina diabetes tipo 2",
    description: "Procedimento revolucionário restaura produção de insulina.",
    category: "Medicina",
    date: new Date("2025-04-12")
  },
  {
    id: "med-5",
    title: "Vacina universal contra gripe é desenvolvida",
    description: "Imunizante protege contra todas as variantes do vírus.",
    category: "Medicina",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309"
  },
  {
    id: "med-6",
    title: "Impressão 3D de órgãos atinge escala comercial",
    description: "Tecnologia elimina filas de transplante.",
    category: "Medicina",
    date: new Date("2025-04-10")
  },
  {
    id: "med-7",
    title: "Tratamento revolucionário para Alzheimer",
    description: "Medicamento reverte perda de memória em pacientes.",
    category: "Medicina",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063"
  },
  {
    id: "med-8",
    title: "Nanorrobôs combatem células cancerosas",
    description: "Tecnologia microscópica revoluciona tratamento oncológico.",
    category: "Medicina",
    date: new Date("2025-04-08")
  },
  {
    id: "med-9",
    title: "Nova técnica regenera nervos danificados",
    description: "Tratamento permite recuperação de lesões medulares.",
    category: "Medicina",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1583912267550-d44c9c226001"
  },
  {
    id: "med-10",
    title: "Transplante de memória é realizado com sucesso",
    description: "Cientistas conseguem transferir recordações entre cérebros.",
    category: "Medicina",
    date: new Date("2025-04-06")
  },

  // Construção Civil
  {
    id: "const-1",
    title: "Edifício sustentável produz mais energia que consome",
    description: "Prédio revolucionário estabelece novo padrão em construção verde.",
    category: "Construção Civil",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77"
  },
  {
    id: "const-2",
    title: "Concreto autorreparador revoluciona construções",
    description: "Material inteligente fecha rachaduras automaticamente.",
    category: "Construção Civil",
    date: new Date("2025-04-14")
  },
  {
    id: "const-3",
    title: "Cidade flutuante começa a ser construída",
    description: "Projeto pioneiro responde à elevação do nível do mar.",
    category: "Construção Civil",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: "const-4",
    title: "Nova técnica reduz tempo de construção pela metade",
    description: "Método revolucionário acelera entrega de empreendimentos.",
    category: "Construção Civil",
    date: new Date("2025-04-12")
  },
  {
    id: "const-5",
    title: "Materiais reciclados dominam construção sustentável",
    description: "Resíduos transformados em materiais de alta qualidade.",
    category: "Construção Civil",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
  },
  {
    id: "const-6",
    title: "Prédio mais alto do Brasil é inaugurado",
    description: "Arranha-céu de 100 andares redefine skyline de São Paulo.",
    category: "Construção Civil",
    date: new Date("2025-04-10")
  },
  {
    id: "const-7",
    title: "Sistema revolucionário de fundações é aprovado",
    description: "Técnica permite construção em terrenos antes impossíveis.",
    category: "Construção Civil",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
  },
  {
    id: "const-8",
    title: "Casas modulares ganham mercado premium",
    description: "Construção pré-fabricada atinge novo patamar de qualidade.",
    category: "Construção Civil",
    date: new Date("2025-04-08")
  },
  {
    id: "const-9",
    title: "Vidros inteligentes revolucionam fachadas",
    description: "Material ajusta transparência conforme luz solar.",
    category: "Construção Civil",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650"
  },
  {
    id: "const-10",
    title: "Construção subterrânea atinge novo recorde",
    description: "Túnel de 50km é concluído em tempo recorde.",
    category: "Construção Civil",
    date: new Date("2025-04-06")
  },

  // Transporte
  {
    id: "trans-1",
    title: "Primeiro táxi voador começa operação em São Paulo",
    description: "Serviço revoluciona mobilidade urbana na maior cidade do país.",
    category: "Transporte",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1566884992635-fb3c6e940505"
  },
  {
    id: "trans-2",
    title: "Trem supersônico liga Rio a São Paulo em 30 minutos",
    description: "Projeto revolucionário de transporte é inaugurado.",
    category: "Transporte",
    date: new Date("2025-04-14")
  },
  {
    id: "trans-3",
    title: "Ônibus elétricos dominam transporte público",
    description: "Principais capitais eliminam veículos a combustão.",
    category: "Transporte",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e"
  },
  {
    id: "trans-4",
    title: "Drone de carga realiza primeira entrega intercontinental",
    description: "Tecnologia promete revolucionar logística global.",
    category: "Transporte",
    date: new Date("2025-04-12")
  },
  {
    id: "trans-5",
    title: "Bicicletas elétricas ganham faixas exclusivas",
    description: "Cidades adaptam infraestrutura para novo modal.",
    category: "Transporte",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1557087324-5ea0a1d7c2a8"
  },
  {
    id: "trans-6",
    title: "Carros autônomos reduzem acidentes em 90%",
    description: "Tecnologia prova eficácia em segurança viária.",
    category: "Transporte",
    date: new Date("2025-04-10")
  },
  {
    id: "trans-7",
    title: "Hyperloop brasileiro inicia testes",
    description: "Transporte ultrarrápido promete revolucionar viagens.",
    category: "Transporte",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1515630551372-4906d3ca0622"
  },
  {
    id: "trans-8",
    title: "Barcos solares cruzam Amazonas",
    description: "Transporte fluvial sustentável beneficia comunidades.",
    category: "Transporte",
    date: new Date("2025-04-08")
  },
  {
    id: "trans-9",
    title: "Sistema de compartilhamento de cargas revoluciona logística",
    description: "App conecta transportadoras e otimiza entregas.",
    category: "Transporte",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
  },
  {
    id: "trans-10",
    title: "Mobilidade como serviço integra todos os modais",
    description: "Plataforma única gerencia diferentes meios de transporte.",
    category: "Transporte",
    date: new Date("2025-04-06")
  },

  // Psicologia
  {
    id: "psi-1",
    title: "Terapia virtual com IA mostra resultados surpreendentes",
    description: "Atendimento psicológico digital supera expectativas.",
    category: "Psicologia",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
  },
  {
    id: "psi-2",
    title: "Nova técnica trata trauma em sessão única",
    description: "Método revolucionário promete cura rápida de TEPT.",
    category: "Psicologia",
    date: new Date("2025-04-14")
  },
  {
    id: "psi-3",
    title: "Estudo revela impacto das redes sociais na saúde mental",
    description: "Pesquisa aponta caminhos para uso saudável da tecnologia.",
    category: "Psicologia",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f"
  },
  {
    id: "psi-4",
    title: "Realidade virtual revoluciona tratamento de fobias",
    description: "Terapia de exposição atinge 95% de eficácia.",
    category: "Psicologia",
    date: new Date("2025-04-12")
  },
  {
    id: "psi-5",
    title: "Mindfulness nas escolas reduz ansiedade",
    description: "Programa nacional mostra resultados impressionantes.",
    category: "Psicologia",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851"
  },
  {
    id: "psi-6",
    title: "Psicologia positiva transforma ambiente corporativo",
    description: "Empresas relatam aumento de 40% na produtividade.",
    category: "Psicologia",
    date: new Date("2025-04-10")
  },
  {
    id: "psi-7",
    title: "Terapia com animais ganha reconhecimento científico",
    description: "Estudos comprovam eficácia no tratamento de depressão.",
    category: "Psicologia",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e"
  },
  {
    id: "psi-8",
    title: "Novo tratamento para TOC tem 80% de sucesso",
    description: "Terapia combina medicação e abordagem comportamental.",
    category: "Psicologia",
    date: new Date("2025-04-08")
  },
  {
    id: "psi-9",
    title: "Psicologia do sono revoluciona tratamento de insônia",
    description: "Método natural apresenta resultados em uma semana.",
    category: "Psicologia",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55"
  },
  {
    id: "psi-10",
    title: "App de terapia cognitiva bate recordes",
    description: "Ferramenta digital democratiza acesso à saúde mental.",
    category: "Psicologia",
    date: new Date("2025-04-06")
  },

  // Marketing
  {
    id: "mkt-1",
    title: "Marketing neural: publicidade que lê mentes",
    description: "Nova tecnologia personaliza anúncios com base em ondas cerebrais.",
    category: "Marketing",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
  },
  {
    id: "mkt-2",
    title: "Hologramas revolucionam marketing de rua",
    description: "Publicidade interativa atrai atenção de consumidores.",
    category: "Marketing",
    date: new Date("2025-04-14")
  },
  {
    id: "mkt-3",
    title: "IA cria campanhas publicitárias em segundos",
    description: "Tecnologia supera agências tradicionais em eficácia.",
    category: "Marketing",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312"
  },
  {
    id: "mkt-4",
    title: "Marketing olfativo aumenta vendas em 300%",
    description: "Técnica revolucionária explora memória sensorial.",
    category: "Marketing",
    date: new Date("2025-04-12")
  },
  {
    id: "mkt-5",
    title: "Realidade aumentada transforma experiência de compra",
    description: "Tecnologia permite experimentar produtos virtualmente.",
    category: "Marketing",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1569017388730-020b5f80a004"
  },
  {
    id: "mkt-6",
    title: "Microinfluenciadores dominam marketing digital",
    description: "Estratégia focada em nichos supera celebridades.",
    category: "Marketing",
    date: new Date("2025-04-10")
  },
  {
    id: "mkt-7",
    title: "Marketing contextual atinge precisão inédita",
    description: "Sistema prevê necessidades antes dos consumidores.",
    category: "Marketing",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48"
  },
  {
    id: "mkt-8",
    title: "Blockchain revoluciona publicidade digital",
    description: "Tecnologia elimina fraudes em anúncios online.",
    category: "Marketing",
    date: new Date("2025-04-08")
  },
  {
    id: "mkt-9",
    title: "Marketing sustentável vira exigência do mercado",
    description: "Consumidores priorizam marcas ambientalmente responsáveis.",
    category: "Marketing",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
  },
  {
    id: "mkt-10",
    title: "Neuromarketing define futuro do varejo",
    description: "Estudos cerebrais orientam decisões de negócios.",
    category: "Marketing",
    date: new Date("2025-04-06")
  },

  // Direito
  {
    id: "law-1",
    title: "IA passa em exame da OAB com nota máxima",
    description: "Sistema jurídico artificial demonstra conhecimento excepcional.",
    category: "Direito",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb"
  },
  {
    id: "law-2",
    title: "Blockchain revoluciona contratos imobiliários",
    description: "Tecnologia elimina burocracia em transações.",
    category: "Direito",
    date: new Date("2025-04-14")
  },
  {
    id: "law-3",
    title: "Nova lei regulamenta trabalho digital",
    description: "Legislação adapta-se à economia dos aplicativos.",
    category: "Direito",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  },
  {
    id: "law-4",
    title: "Tribunal virtual reduz processos em 70%",
    description: "Sistema online acelera resolução de disputas.",
    category: "Direito",
    date: new Date("2025-04-12")
  },
  {
    id: "law-5",
    title: "Direito digital ganha disciplina obrigatória",
    description: "OAB atualiza currículo para era tecnológica.",
    category: "Direito",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
  },
  {
    id: "law-6",
    title: "Inteligência artificial auxilia juízes",
    description: "Sistema analisa jurisprudência em segundos.",
    category: "Direito",
    date: new Date("2025-04-10")
  },
  {
    id: "law-7",
    title: "Lei de crimes cibernéticos é atualizada",
    description: "Legislação adapta-se a novas ameaças digitais.",
    category: "Direito",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1509565840034-3c385bbe6451"
  },
  {
    id: "law-8",
    title: "Mediação online vira obrigatória",
    description: "Nova lei exige tentativa de acordo virtual.",
    category: "Direito",
    date: new Date("2025-04-08")
  },
  {
    id: "law-9",
    title: "Direito ambiental ganha força com nova legislação",
    description: "Empresas enfrentam regras mais rígidas.",
    category: "Direito",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
  },
  {
    id: "law-10",
    title: "Robôs advogados são regulamentados",
    description: "OAB estabelece limites para automação jurídica.",
    category: "Direito",
    date: new Date("2025-04-06")
  },

  // Investimentos
  {
    id: "inv-1",
    title: "Criptomoedas verdes lideram mercado",
    description: "Tokens sustentáveis atraem investidores institucionais.",
    category: "Investimentos",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040"
  },
  {
    id: "inv-2",
    title: "IA revoluciona análise de investimentos",
    description: "Algoritmos superam analistas humanos em precisão.",
    category: "Investimentos",
    date: new Date("2025-04-14")
  },
  {
    id: "inv-3",
    title: "ESG vira principal critério de investimento",
    description: "Empresas sustentáveis dominam mercado de ações.",
    category: "Investimentos",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
  },
  {
    id: "inv-4",
    title: "Tokenização democratiza mercado imobiliário",
    description: "Pequenos investidores acessam grandes empreendimentos.",
    category: "Investimentos",
    date: new Date("2025-04-12")
  },
  {
    id: "inv-5",
    title: "Novo índice mede impacto social",
    description: "Mercado adota métrica de benefício comunitário.",
    category: "Investimentos",
    date: new Date("2025-04-11"),
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
  },
  {
    id: "inv-6",
    title: "Investimentos em energia limpa batem recorde",
    description: "Setor atrai capital sem precedentes.",
    category: "Investimentos",
    date: new Date("2025-04-10")
  },
  {
    id: "inv-7",
    title: "Microinvestimentos via PIX crescem 500%",
    description: "Plataforma permite aplicações a partir de R$ 1.",
    category: "Investimentos",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1553729784-e91953dec042"
  },
  {
    id: "inv-8",
    title: "Blockchain revoluciona mercado de arte",
    description: "NFTs movimentam bilhões em transações.",
    category: "Investimentos",
    date: new Date("2025-04-08")
  },
  {
    id: "inv-9",
    title: "Investimentos espaciais atraem pequenos investidores",
    description: "Democratização do setor aeroespacial.",
    category: "Investimentos",
    date: new Date("2025-04-07"),
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
  },
  {
    id: "inv-10",
    title: "Robôs consultores dominam mercado",
    description: "Gestão automatizada supera fundos tradicionais.",
    category: "Investimentos",
    date: new Date("2025-04-06")
  }
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredNews = selectedCategory === "Todas"
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <Layout>
      {/* Banner */}
      <div className="bg-gradient-to-r from-gj-purple to-gj-blue py-12 md:py-20">
        <div className="gj-container text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Notícias e Tendências
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades do mercado de trabalho e tecnologia
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="gj-container py-6">
        <NewsCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* News Grid */}
      <div className="gj-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.description}
              category={news.category}
              date={news.date}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
