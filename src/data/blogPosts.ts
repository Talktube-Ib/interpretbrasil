export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    author: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "cabine-verde-interpretacao-sustentavel-em-eventos-globais",
        title: "A Nova Cabine Verde: Sustentabilidade na Interpretação de Eventos Globais",
        date: "2025-10-17",
        author: "Sara Goulart",
        category: "Sustentabilidade",
        excerpt: "Descubra como a interpretação de eventos está se tornando mais sustentável com novas tecnologias e práticas ecológicas.",
        content: `
            <p>No cenário dos eventos corporativos internacionais, a sustentabilidade deixou de ser um detalhe e passou a ser um fator estratégico. A "Cabine Verde" é um conceito que integra práticas ecológicas na interpretação simultânea.</p>
            <h3>O que é a Cabine Verde?</h3>
            <p>Trata-se de uma abordagem que visa reduzir a pegada de carbono dos eventos de tradução. Isso inclui desde o uso de equipamentos de baixo consumo energético até a redução de deslocamentos através da interpretação remota (RSI).</p>
            <h3>Benefícios</h3>
            <ul>
                <li>Redução de emissões de CO2 com menos viagens.</li>
                <li>Uso de tablets e materiais digitais em vez de papel para roteiros.</li>
                <li>Equipamentos com certificação energética.</li>
            </ul>
            <p>A Interpret Brasil está comprometida em oferecer soluções que não apenas conectam pessoas, mas também respeitam o planeta.</p>
        `
    },
    {
        id: "2",
        slug: "belem-multilingue-cop30",
        title: "Belém se Torna Multilíngue: Preparativos Linguísticos para a COP30",
        date: "2025-10-09",
        author: "Sara Goulart",
        category: "Eventos",
        excerpt: "Como a cidade de Belém está se preparando para receber o mundo na conferência do clima.",
        content: `
            <p>A capital paraense será palco da COP30, e o desafio linguístico é gigantesco. Receber delegações de quase 200 países exige uma infraestrutura de interpretação robusta.</p>
            <p>A Interpret Brasil já está mobilizando equipes de intérpretes especializados em terminologia ambiental e diplomática para garantir que as negociações fluam sem barreiras linguísticas.</p>
            <h3>O Legado para a Região</h3>
            <p>Além do evento em si, a COP30 deixará um legado de capacitação profissional para tradutores e intérpretes na região Norte do Brasil.</p>
        `
    },
    {
        id: "3",
        slug: "diplomacia-corporativa-acordos-globais",
        title: "Diplomacia Corporativa na Prática: Como Intérpretes Moldam Acordos Globais",
        date: "2025-10-03",
        author: "Sara Goulart",
        category: "Negócios",
        excerpt: "O papel invisível mas crucial dos intérpretes nas grandes mesas de negociação internacional.",
        content: `
            <p>Em negociações de alto nível, uma palavra mal colocada pode custar milhões ou desfazer uma aliança estratégica. O intérprete de negócios não apenas traduz línguas, ele traduz culturas.</p>
            <p>Nossos profissionais são treinados para entender as nuances de etiqueta corporativa asiática, europeia e americana, garantindo que a intenção por trás da fala seja preservada.</p>
        `
    },
    {
        id: "4",
        slug: "falar-lingua-dos-negocios",
        title: "Falar a Língua dos Negócios: O Impacto Econômico da Tradução",
        date: "2025-09-18",
        author: "Sara Goulart",
        category: "Economia",
        excerpt: "No cenário dos eventos corporativos internacionais, a comunicação multilíngue é um fator estratégico de ROI.",
        content: `
            <p>Quando uma empresa decide investir em um congresso global, cada detalhe é avaliado sob a ótica do retorno sobre o investimento (ROI). Nesse contexto, os serviços de tradução simultânea desempenham um papel fundamental.</p>
            <p>Participantes que entendem o conteúdo em sua língua nativa estão mais propensos a fechar negócios e absorver o conhecimento transmitido.</p>
        `
    },
    {
        id: "5",
        slug: "profissionais-do-agora",
        title: "Profissionais do Agora: Como se Formar para Atuar em Eventos de Alto Nível",
        date: "2025-08-28",
        author: "Douglas Simões",
        category: "Carreira",
        excerpt: "O mercado de tradução simultânea exige mais do que bilinguismo; exige técnica, postura e conhecimento enciclopédico.",
        content: `
            <p>O mercado de tradução simultânea para eventos internacionais está em plena expansão. Congressos, fóruns econômicos e encontros corporativos exigem intérpretes preparados.</p>
            <p>Formar-se intérprete não significa apenas dominar dois ou mais idiomas. Significa dominar técnicas de <em>shadowing</em>, tomada de notas para consecutiva e gestão cognitiva sob pressão.</p>
        `
    },
    {
        id: "6",
        slug: "gestao-de-traducoes-de-excelencia",
        title: "3 motivos para a sua empresa ter uma gestão de traduções de excelência",
        date: "2025-04-20",
        author: "Douglas Simões",
        category: "Gestão",
        excerpt: "Alta qualidade, menores preços e melhores prazos através de uma gestão profissional de ativos linguísticos.",
        content: `
            <p>Entenda o papel da gestão de traduções e quais são as tecnologias envolvidas.</p>
            <ol>
                <li><strong>Consistência Terminológica:</strong> O uso de Memórias de Tradução garante que o termo "Peça" seja sempre traduzido da mesma forma em todos os manuais.</li>
                <li><strong>Redução de Custos:</strong> Não pague para traduzir a mesma frase duas vezes. Ferramentas CAT identificam repetições.</li>
                <li><strong>Agilidade:</strong> Glossários bem definidos aceleram o trabalho dos tradutores.</li>
            </ol>
        `
    }
];
