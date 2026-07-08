/* Academia de DJ — currículo gerado por pesquisa multi-agente na web,
   verificado factualmente (Camelot, contagem de compassos, gain staging).
   Fontes: Digital DJ Tips, DJ TechTools, Native Instruments, Mixed In Key, iZotope, et al. */
window.CURRICULUM = {
  "title": "Academia de DJ — Do Primeiro Beat ao Set Fluido",
  "intro": "Bem-vindo à academia de DJ: aqui aprendes a passar de \"carregar no play\" para construir transições limpas e sets que fluem. Cada módulo combina teoria curta, drills práticos na mesa para treinares o gesto, e quizzes para fixar os conceitos. Avança do iniciante ao avançado pela ordem dos módulos, repete os drills até o movimento ficar automático e usa os quizzes para confirmar que percebeste o porquê de cada técnica.",
  "modules": [
    {
      "id": "anatomia-da-mesa",
      "module": "Anatomia da mesa e sinal",
      "icon": "🎛️",
      "summary": "Conhece os controlos essenciais (decks, canais, crossfader, EQ, gain) e como o sinal viaja sem distorcer.",
      "lessons": [
        {
          "title": "O mapa da mesa",
          "level": "básico",
          "theory": "Uma mesa de DJ tem dois (ou mais) decks que reproduzem faixas e um misturador (mixer) ao centro. Cada deck liga a um canal com o seu fader de volume, EQ de três bandas (graves, médios, agudos), gain/trim de entrada e medidor de nível. O crossfader mistura entre os dois canais e o fader de master controla a saída final para as colunas.",
          "why": "Saber onde está cada controlo é o primeiro passo: não consegues fazer uma transição se não souberes qual o fader que sobe a faixa que está a entrar.",
          "steps": ["Identifica os dois decks (esquerda e direita) e o misturador ao centro.","Localiza, em cada canal: gain/trim, EQ (low/mid/high), fader de volume e medidor.","Encontra o crossfader e o fader de master.","Sobe e desce um fader de canal a ouvir o efeito no volume."],
          "mistakes": ["Confundir o gain de entrada com o fader de volume de sala.","Mexer no master quando o problema está num canal.","Ignorar os medidores de nível."],
          "drill": { "task": "Sobe o fader de volume do Deck A acima de ~40% e ouve a faixa entrar na mistura.", "simControl": "volume", "successHint": "A faixa do Deck A deve ouvir-se de forma estável, sem clipping no medidor." },
          "quiz": { "q": "Qual controlo mistura o som entre os dois canais?", "options": ["O gain de entrada","O crossfader","O EQ dos médios"], "answerIndex": 1, "explain": "O crossfader desloca a mistura de um canal para o outro; o gain ajusta o nível de entrada e o EQ molda as frequências." }
        },
        {
          "title": "Gain staging — sinal limpo",
          "level": "básico",
          "theory": "O gain (ou trim) ajusta o nível de entrada de cada faixa para que todas cheguem ao misturador com força semelhante. O objetivo é os picos ficarem na zona laranja do medidor sem nunca acender o vermelho. O vermelho significa clipping: o sinal ultrapassa o máximo digital e distorce, com risco para as colunas. Uma referência razoável para áudio digital é rondar -18 dBFS de média (RMS) com picos entre -6 e -3 dBFS.",
          "why": "Faixas com gains desiguais obrigam-te a corrigir volumes a meio da transição. Igualar os níveis à entrada deixa a mistura previsível e protege o equipamento.",
          "steps": ["Carrega uma faixa e põe-na a tocar em pré-escuta.","Observa o medidor e ajusta o gain até os picos ficarem no laranja.","Confirma que o vermelho nunca acende nas partes mais fortes.","Repete para a outra faixa para igualar os dois níveis."],
          "mistakes": ["Usar o gain como volume de sala em vez do fader.","Empurrar tudo para o máximo 'para soar mais alto'.","Deixar os picos no vermelho e ignorar a distorção."],
          "drill": { "task": "Ajusta o gain do Deck A até os picos ficarem no laranja, sem tocar no vermelho.", "simControl": "gain", "successHint": "O medidor deve oscilar no laranja nos picos e nunca acender o vermelho." },
          "quiz": { "q": "O que indica o vermelho no medidor de nível?", "options": ["Volume ideal","Clipping e distorção","Que a faixa está em pausa"], "answerIndex": 1, "explain": "O vermelho é clipping: o sinal passa do máximo digital, distorce e pode danificar as colunas. Mantém os picos no laranja." }
        },
        {
          "title": "Headroom no master",
          "level": "básico",
          "theory": "Headroom é a margem que deixas entre o nível médio do som e o máximo digital, para os picos não cortarem. Mantém o master com margem (no Traktor, por exemplo, a referência ronda os -10 dB no master) e trata o limiter como rede de segurança contra picos acidentais, não como nível de trabalho.",
          "why": "Sem headroom, somar duas faixas durante uma transição leva facilmente a clipping. Com margem, a mistura respira e a saída fica limpa.",
          "steps": ["Põe duas faixas a tocar em simultâneo numa transição.","Observa o medidor de master enquanto os dois canais somam.","Baixa ligeiramente os canais se o master se aproximar do vermelho.","Mantém uma margem visível abaixo do máximo."],
          "mistakes": ["Tratar o limiter como nível normal de funcionamento.","Maximizar o master e perder toda a margem.","Esquecer que duas faixas somadas pedem mais headroom."],
          "drill": { "task": "Com as DUAS faixas a tocar, baixa o knob MASTER para criar headroom (fica abaixo de ~70%).", "simControl": "headroom", "successHint": "O master mantém-se abaixo do vermelho mesmo com os dois canais a somar." },
          "quiz": { "q": "Para que serve o headroom no master?", "options": ["Deixar margem para os picos não cortarem","Aumentar o volume final ao máximo","Desligar o EQ automaticamente"], "answerIndex": 0, "explain": "Headroom é a margem que evita clipping quando os sinais somam, sobretudo durante transições." }
        }
      ]
    },
    {
      "id": "estrutura-faixa",
      "module": "Estrutura da faixa e contagem",
      "icon": "🧱",
      "summary": "Aprende a contar batidas, compassos e frases para saber sempre onde estás na música.",
      "lessons": [
        {
          "title": "Batidas, compassos e frases",
          "level": "básico",
          "theory": "A maioria da música de dança está em 4/4: cada compasso (bar) tem 4 batidas. As batidas agrupam-se em compassos e os compassos em frases. Uma frase comum tem 4 bars (4 × 4 = 16 batidas) e uma frase maior tem 8 bars (8 × 4 = 32 batidas). As secções de uma faixa costumam vir em número par de frases de 4 bars.",
          "why": "Contar dá-te um relógio interno: sabes quando uma secção vai mudar e podes preparar a transição para cair no sítio certo.",
          "steps": ["Escolhe uma faixa de dança e identifica o kick (bombo) em cada batida.","Conta '1, 2, 3, 4' a cada compasso.","Agrupa quatro compassos para sentires uma frase de 4 bars.","Marca onde a secção muda — costuma ser ao fim de 8 ou 16 bars."],
          "mistakes": ["Perder a contagem quando entram percussões extra.","Contar batidas em vez de compassos ao medir frases.","Assumir que todas as secções têm o mesmo tamanho sem confirmar."],
          "drill": { "task": "Conta 16 batidas (4 bars) ao ritmo do bombo e identifica o fim da frase. (Exercício de escuta — marca quando o fizeres.)", "simControl": "none", "successHint": "O fim das 16 batidas deve coincidir com o início de uma nova frase musical." },
          "quiz": { "q": "Quantas batidas tem uma frase de 8 bars em 4/4?", "options": ["16","24","32"], "answerIndex": 2, "explain": "8 bars × 4 batidas = 32 batidas. Uma frase de 4 bars tem 16 batidas." }
        },
        {
          "title": "Phrasing — alinhar secções",
          "level": "intermédio",
          "theory": "Phrasing é encaixar a transição nos limites das frases das duas faixas, para que as secções (intro, breakdown, drop) se alinhem. A 'regra dos 16/32 bars' ajuda: planeia a mudança para coincidir com o início de uma frase de 16 ou 32 bars em ambas as faixas.",
          "why": "Misturar fora de frase soa desencaixado mesmo que o beatmatch esteja perfeito. Respeitar as frases faz a transição soar musical e intencional.",
          "steps": ["Conta as frases da faixa a tocar e antecipa o próximo limite de 16 bars.","Conta as frases da faixa que vai entrar.","Faz a entrada coincidir com o início de uma frase em ambas.","Planeia a transição para terminar antes do próximo grande limite."],
          "mistakes": ["Beatmatch perfeito mas entrada a meio de uma frase.","Não contar a faixa que entra, só a que toca.","Começar a transição tarde demais e atropelar o drop."],
          "drill": { "task": "Lança a faixa do Deck B exatamente no início de uma frase de 16 bars do Deck A.", "simControl": "phase", "successHint": "As duas faixas devem alinhar-se no início da frase, sem desencaixe percetível." },
          "quiz": { "q": "O que é phrasing na mistura?", "options": ["Igualar o volume das faixas","Encaixar a transição nos limites das frases musicais","Cortar os graves de uma faixa"], "answerIndex": 1, "explain": "Phrasing alinha as secções pelas frases (16/32 bars) para a transição soar musical, além do beatmatch." }
        }
      ]
    },
    {
      "id": "beatmatching",
      "module": "Beatmatching",
      "icon": "🥁",
      "summary": "Sincroniza o andamento e a fase de duas faixas de ouvido, com pitch e jog wheel.",
      "lessons": [
        {
          "title": "Igualar o andamento (tempo)",
          "level": "intermédio",
          "theory": "Beatmatching começa por igualar os BPM (batidas por minuto) das duas faixas. Usas o controlo de pitch/tempo para subir ou descer o andamento da faixa que entra até bater certo com a que está a tocar. Quando os tempos são iguais, os beats mantêm-se juntos ao longo do tempo.",
          "why": "Se os andamentos diferem, as faixas afastam-se progressivamente e a mistura 'tropeça'. Igualar o tempo é a base de qualquer transição beatmatched.",
          "steps": ["Ouve as duas faixas em pré-escuta com auscultadores.","Compara os BPM e ajusta o pitch da faixa que entra.","Sobe o pitch se estiver lenta, baixa se estiver rápida.","Confirma que os bombos se mantêm sobrepostos durante vários compassos."],
          "mistakes": ["Confiar só no número de BPM e não ouvir.","Ajustar o pitch da faixa errada (a que já toca).","Dar saltos grandes de pitch em vez de afinar aos poucos."],
          "drill": { "task": "Ajusta o pitch do Deck B até o seu andamento igualar o do Deck A.", "simControl": "beatmatch", "successHint": "Os bombos das duas faixas devem manter-se juntos sem se afastarem." },
          "quiz": { "q": "O que ajusta o controlo de pitch/tempo?", "options": ["A tonalidade musical apenas","A velocidade (BPM) da faixa","O volume dos graves"], "answerIndex": 1, "explain": "O pitch/tempo altera a velocidade (BPM). Igualar BPM é o primeiro passo do beatmatching." }
        },
        {
          "title": "Corrigir a fase com o jog (pitch bend)",
          "level": "intermédio",
          "theory": "Mesmo com BPM iguais, os beats podem estar desalinhados (fora de fase). Para corrigir momentaneamente, usas o jog wheel: empurrar para a frente (nudge) acelera a faixa por instantes; puxar para trás (drag) abranda-a por instantes. É um ajuste temporário para realinhar os bombos.",
          "why": "A fase é o que faz a mistura soar 'colada'. Saber dar um pequeno nudge ou drag corrige derivas sem mexer no pitch geral.",
          "steps": ["Com os BPM já iguais, ouve se os bombos coincidem.","Se a faixa que entra está atrasada, empurra o jog para a frente (nudge) para a acelerar até alinhar.","Se está adiantada, puxa o jog para trás (drag) para a abrandar até alinhar.","Larga o jog assim que os beats coincidirem."],
          "mistakes": ["Usar o jog em vez de corrigir o BPM quando o problema é de andamento.","Fazer correções demasiado grandes e desalinhar mais.","Esquecer de largar o jog depois de alinhar."],
          "drill": { "task": "A faixa do Deck B está adiantada: puxa o jog para trás (drag) até os bombos alinharem.", "simControl": "phase", "successHint": "Os bombos voltam a coincidir e a mistura soa colada." },
          "quiz": { "q": "A faixa que entra está adiantada. O que fazes para a realinhar?", "options": ["Empurras o jog para a frente (nudge)","Puxas o jog para trás (drag) para abrandar a faixa adiantada","Subes o pitch ao máximo"], "answerIndex": 1, "explain": "Puxar o jog para trás (drag) abranda momentaneamente a própria faixa adiantada para ela voltar ao alinhamento com a outra." }
        },
        {
          "title": "Sync — quando e porquê",
          "level": "básico",
          "theory": "O botão Sync alinha automaticamente o BPM (e por vezes a fase) da faixa que entra com a faixa-mestre. É uma ajuda útil, sobretudo ao vivo, mas depende de grids de batida bem detetados e não substitui saber beatmatch de ouvido.",
          "why": "Sync poupa tempo e liberta-te para focar em EQ e phrasing, mas se confiares cegamente e o grid estiver errado, a mistura desencaixa e não saberás corrigir.",
          "steps": ["Define a faixa-mestre (master) que dá o tempo de referência.","Carrega a faixa nova e ativa o Sync.","Confirma de ouvido que os beats estão mesmo alinhados.","Corrige com o jog se o grid não estiver perfeito."],
          "mistakes": ["Confiar no Sync sem nunca confirmar de ouvido.","Não verificar o beatgrid das faixas.","Nunca treinar beatmatch manual e ficar dependente."],
          "drill": { "task": "Ativa o Sync no Deck B e confirma de ouvido que os beats ficaram alinhados.", "simControl": "sync-b", "successHint": "Os BPM igualam-se de imediato e os bombos coincidem." },
          "quiz": { "q": "O que faz o botão Sync?", "options": ["Iguala automaticamente o BPM com a faixa-mestre","Aumenta o volume do master","Corta os médios da faixa"], "answerIndex": 0, "explain": "O Sync alinha o BPM (e por vezes a fase) com a faixa-mestre, mas convém sempre confirmar de ouvido." }
        }
      ]
    },
    {
      "id": "mistura-eq",
      "module": "Mistura com EQ",
      "icon": "🎚️",
      "summary": "Usa o EQ de três bandas para sobrepor faixas sem confusão de graves e fazer trocas limpas.",
      "lessons": [
        {
          "title": "Cortar em vez de aumentar",
          "level": "intermédio",
          "theory": "O EQ de três bandas controla graves, médios e agudos de cada canal. A boa prática é preferir cortar a aumentar: para dar espaço a uma faixa, baixas frequências na outra em vez de empurrar tudo para cima. Reforçar (boost) consome headroom e pode levar a clipping — o risco depende da margem disponível e do conteúdo da faixa, por isso compensa-se o corte com o gain. (Por exemplo, evitar boosts exagerados é uma boa regra prática, não um limite técnico absoluto.)",
          "why": "Cortar mantém a mistura limpa e com headroom; aumentar empilha energia e distorce. Pensar em 'tirar' em vez de 'pôr' dá transições mais controladas.",
          "steps": ["Identifica que faixa deve dominar cada banda durante a transição.","Em vez de subir uma faixa, baixa a banda concorrente na outra.","Compensa a perda de volume percebido com o gain, se preciso.","Usa boosts ligeiros e pontuais, nunca exagerados."],
          "mistakes": ["Aumentar graves nas duas faixas e saturar a mistura.","Tratar uma posição fixa do knob como limite rígido.","Esquecer de compensar com gain depois de cortar."],
          "drill": { "task": "Corta uma banda de EQ (ex.: LOW ou MID) num dos decks para dar espaço, em vez de aumentar.", "simControl": "eq-cut", "successHint": "A faixa que entra ganha clareza sem que o nível geral suba ou distorça." },
          "quiz": { "q": "Qual é a boa prática base ao usar EQ na mistura?", "options": ["Aumentar sempre as bandas da faixa nova","Preferir cortar a aumentar e compensar com gain","Pôr todas as bandas no máximo"], "answerIndex": 1, "explain": "Cortar preserva headroom e clareza; reforçar consome margem e arrisca clipping. Compensa-se com o gain." }
        },
        {
          "title": "Troca de graves (bassline swap)",
          "level": "avançado",
          "theory": "Dois bombos e duas linhas de baixo a tocar ao mesmo tempo criam uma confusão de graves e perda de energia. A solução é a troca de graves: enquanto sobrepões as faixas, cortas os graves de uma e deixas só os graves da outra, trocando o domínio dos baixos no momento certo.",
          "why": "Os graves são a frequência mais 'cheia'. Manter só uma fonte de graves de cada vez mantém a pista com punch e evita o som lamacento de dois baixos sobrepostos.",
          "steps": ["Traz a faixa nova com os graves já cortados.","Sobrepõe as duas faixas mantendo só os graves da que sai.","No limite de frase, corta os graves da que sai e abre os da que entra.","Confirma que há sempre uma e só uma linha de baixo dominante."],
          "mistakes": ["Deixar os dois graves abertos ao mesmo tempo.","Trocar os graves a meio de uma frase em vez do limite.","Trocar cedo demais e perder energia antes do tempo."],
          "drill": { "task": "Corta os graves do Deck A e abre os do Deck B em simultâneo, no limite da frase.", "simControl": "bassline-swap", "successHint": "A troca de baixos é limpa, sem buraco nem sobreposição de graves." },
          "quiz": { "q": "Porque se faz a troca de graves numa transição?", "options": ["Para haver dois baixos ao mesmo tempo","Para manter só uma linha de baixo dominante e evitar mistura lamacenta","Para subir o volume do master"], "answerIndex": 1, "explain": "Dois baixos sobrepostos criam confusão de graves. A troca mantém sempre só uma fonte de graves dominante." }
        },
        {
          "title": "Kill dos graves para entrar",
          "level": "intermédio",
          "theory": "O kill de graves (low kill) corta totalmente a banda dos graves de um canal. Usa-se para trazer uma faixa nova só com médios e agudos por cima de outra, e depois revelar os graves quando chega a altura de a faixa nova assumir o controlo.",
          "why": "Entrar com os graves cortados deixa a faixa nova encaixar sem chocar com o baixo existente, dando uma transição suave e controlada.",
          "steps": ["Antes de subir o fader da faixa nova, aciona o low kill nesse canal.","Sobe o fader: a faixa entra só com médios e agudos.","Faz o phrasing até ao ponto de troca.","Liberta os graves da faixa nova quando ela passa a dominar."],
          "mistakes": ["Subir a faixa nova com os graves abertos e chocar baixos.","Libertar os graves demasiado cedo.","Esquecer-se de que o kill está ativo e perder punch."],
          "drill": { "task": "Aciona o low kill no Deck B antes de subir o fader e revela os graves só na troca.", "simControl": "eq-low-kill", "successHint": "A faixa entra limpa sem chocar graves e só ganha baixo no momento da troca." },
          "quiz": { "q": "Para que serve o low kill ao trazer uma faixa nova?", "options": ["Para a faixa entrar sem chocar com os graves existentes","Para aumentar os agudos ao máximo","Para acelerar o BPM"], "answerIndex": 0, "explain": "Cortar os graves da faixa que entra evita o choque de baixos; revelam-se os graves só quando ela assume o controlo." }
        }
      ]
    },
    {
      "id": "mistura-harmonica",
      "module": "Mistura harmónica (Camelot)",
      "icon": "🎼",
      "summary": "Mistura faixas em tonalidades compatíveis usando a roda de Camelot para transições melódicas.",
      "lessons": [
        {
          "title": "A roda de Camelot",
          "level": "intermédio",
          "theory": "A roda de Camelot traduz as tonalidades musicais num código simples: um número (1 a 12) e uma letra (A para menor, B para maior). O anel interior (A) são as tonalidades menores e o exterior (B) as maiores. Software como o Mixed In Key analisa as faixas e atribui o código, evitando teoria musical complexa.",
          "why": "Misturar faixas em tons compatíveis evita choques de notas (dissonância) e abre a porta à mistura melódica, onde as melodias se sobrepõem em harmonia.",
          "steps": ["Analisa as faixas e regista o código Camelot de cada uma.","Identifica o número e a letra (ex.: 8A).","Compara o código das faixas que queres misturar.","Escolhe pares dentro das vizinhanças seguras (ver lição seguinte)."],
          "mistakes": ["Confundir A (menor) com B (maior).","Ignorar o código e misturar tons que chocam.","Achar que precisas de saber teoria avançada para usar Camelot."],
          "drill": { "task": "Confirma na aba Camelot que as duas faixas têm código compatível (ambas 8A) antes de misturar. (Conceptual — marca quando perceberes.)", "simControl": "none", "successHint": "As tonalidades batem certo e as melodias não chocam ao sobrepor." },
          "quiz": { "q": "O que significa a letra 'A' no código de Camelot?", "options": ["Tonalidade maior","Tonalidade menor","Andamento alto"], "answerIndex": 1, "explain": "No código Camelot, A são as tonalidades menores (anel interior) e B as maiores (anel exterior)." }
        },
        {
          "title": "As vizinhanças seguras",
          "level": "intermédio",
          "theory": "As misturas seguras na roda são três: o mesmo número e letra (tom igual), +1 na mesma letra e -1 na mesma letra. Cada passo de +1 na roda corresponde a um movimento de uma quinta justa na tónica; no sentido inverso, -1 corresponde a uma quarta acima (quinta abaixo). Por exemplo, 8A→9A é uma quinta acima (Lá menor → Mi menor) e as duas escalas partilham todas as notas exceto uma. A roda é circular: 12A é vizinho de 1A.",
          "why": "Estas vizinhanças partilham quase todas as notas, por isso as faixas soam consonantes juntas. Saltos maiores (ex.: 5A→9A, salto de 4) saem destas vizinhanças e tendem a chocar.",
          "steps": ["Parte do código da faixa a tocar (ex.: 8A).","Lista os vizinhos seguros: 8A (mesmo), 9A (+1) e 7A (-1).","Lembra-te da circularidade: a seguir a 12 vem 1.","Escolhe a faixa seguinte dentro destes vizinhos."],
          "mistakes": ["Dar saltos grandes na roda e provocar dissonância.","Esquecer a circularidade (12↔1).","Misturar +1 mudando também de letra sem perceber o efeito."],
          "drill": { "task": "Estando o Deck A em 8A, indica um vizinho seguro (7A, 9A ou 8A). (Conceptual — marca quando souberes.)", "simControl": "none", "successHint": "A faixa escolhida está numa vizinhança segura e a mistura soa consonante." },
          "quiz": { "q": "Estando uma faixa em 8A, qual NÃO é uma vizinhança segura simples?", "options": ["7A","9A","9A com salto a partir de 5A (ex.: 5A→9A)"], "answerIndex": 2, "explain": "As vizinhanças seguras são mesmo número, +1 e -1. Um salto de 4 como 5A→9A sai dessas vizinhanças e tende a chocar." }
        },
        {
          "title": "Energy boost e relativa maior/menor",
          "level": "avançado",
          "theory": "Para subir a energia sem perder harmonia, há movimentos úteis: +7 na roda sobe um semitom (ex.: 2A → 9A, Mi bemol menor → Mi menor) e +2 sobe um tom inteiro, ou seja dois semitons (ex.: 5A → 7A, Dó menor → Ré menor). Trocar de letra mantendo o número (A↔B) leva-te à relativa: 8A (Lá menor) ↔ 8B (Dó maior) partilham as mesmas notas. Atenção: relativa não é o mesmo que homónima (Lá menor ↔ Lá maior), que não é este movimento.",
          "why": "Estes saltos dão um lift percetível à pista (energy boost) mantendo a compatibilidade, e a troca para a relativa permite mudar entre menor e maior sem dissonância.",
          "steps": ["Para um lift subtil, sobe um semitom com +7 (ex.: 2A → 9A).","Para um lift maior, sobe um tom com +2 (ex.: 5A → 7A).","Para mudar o carácter (menor↔maior), troca a letra no mesmo número (8A↔8B).","Confirma sempre o resultado de ouvido na pré-escuta."],
          "mistakes": ["Confundir relativa (8A/8B) com homónima (Lá menor/Lá maior).","Abusar dos boosts e perder o fio harmónico.","Trocar de letra esperando o som de homónima."],
          "drill": { "task": "Indica que código dá um energy boost de +7 (um semitom) a partir de 8A. (Conceptual — marca quando souberes.)", "simControl": "none", "successHint": "A energia sobe de forma percetível e as faixas continuam harmonicamente compatíveis." },
          "quiz": { "q": "8A e 8B são que tipo de relação?", "options": ["Relativa maior/menor, partilham as mesmas notas","Homónima, com notas diferentes","Sem qualquer relação harmónica"], "answerIndex": 0, "explain": "Mesmo número com troca de letra é a relativa: 8A (Lá menor) e 8B (Dó maior) partilham as mesmas notas. Homónima (Lá menor/Lá maior) é outro movimento." }
        }
      ]
    },
    {
      "id": "transicoes-criativas",
      "module": "Transições criativas",
      "icon": "✨",
      "summary": "Vai além do blend: usa crossfader, filtros, loops e echo out para transições com carácter.",
      "lessons": [
        {
          "title": "Blend com crossfader",
          "level": "intermédio",
          "theory": "A transição mais simples é o blend longo: com beatmatch e EQ feitos, deslocas gradualmente o crossfader (ou os faders de canal) da faixa que sai para a que entra, ao longo de várias frases, mantendo o nível geral constante.",
          "why": "Um blend bem feito é a base de tudo: suave, invisível e musical. Domina-lo dá-te uma transição segura para qualquer situação.",
          "steps": ["Beatmatch e phrasing prontos, com graves geridos por EQ.","Começa a deslocar o crossfader no início de uma frase.","Acompanha o nível para não haver subida nem buraco de volume.","Conclui a passagem antes do próximo grande limite de frase."],
          "mistakes": ["Mover o crossfader depressa demais e cortar a transição.","Ignorar os graves e somar dois baixos durante o blend.","Começar a passagem fora do início de uma frase."],
          "drill": { "task": "Faz um blend deslocando o crossfader do Deck A para o Deck B ao longo de uma frase.", "simControl": "crossfader", "successHint": "A passagem é gradual, sem subida nem buraco de volume." },
          "quiz": { "q": "O que mantém um blend com crossfader a soar suave?", "options": ["Mover o crossfader o mais rápido possível","Manter o nível geral constante e respeitar as frases","Cortar todas as bandas de EQ"], "answerIndex": 1, "explain": "Um blend suave mantém o volume constante, gere os graves com EQ e respeita os limites de frase." }
        },
        {
          "title": "Filtro de varrimento",
          "level": "intermédio",
          "theory": "O filtro (sweep) corta progressivamente os graves (high-pass) ou os agudos (low-pass) de um canal. Rodar o filtro durante uma transição cria tensão e dá um efeito dramático que ajuda a disfarçar a passagem entre faixas.",
          "why": "O filtro é uma ferramenta expressiva: cria um momento de suspense antes de a faixa nova explodir, tornando a transição mais emocionante do que um simples blend.",
          "steps": ["Aplica um high-pass na faixa que sai, tirando-lhe os graves aos poucos.","Sobe a faixa nova por baixo enquanto a antiga fica fina.","No clímax, abre o filtro e deixa a faixa nova em cheio.","Sincroniza o varrimento com o limite de frase."],
          "mistakes": ["Deixar o filtro num extremo tempo demais e cansar o ouvido.","Não sincronizar o sweep com a estrutura da música.","Usar filtro em todas as transições e perder o impacto."],
          "drill": { "task": "Roda o filtro do Deck A para criar tensão e abre-o quando entra o Deck B.", "simControl": "filter", "successHint": "O varrimento cria tensão e a abertura do filtro coincide com a entrada da nova faixa." },
          "quiz": { "q": "Qual o efeito principal de um filtro de varrimento numa transição?", "options": ["Igualar o BPM","Criar tensão e disfarçar a passagem entre faixas","Cortar o sinal de master"], "answerIndex": 1, "explain": "O filtro cria tensão (e drama) ao remover graves ou agudos, ajudando a disfarçar a transição." }
        },
        {
          "title": "Loop para ganhar tempo",
          "level": "avançado",
          "theory": "Um loop repete em ciclo uma secção de batidas (ex.: 4 ou 8 bars). Podes usar um loop para esticar uma intro ou um breakdown, ganhando tempo para preparar a faixa seguinte ou para construir tensão antes de retomar.",
          "why": "Os loops dão-te controlo sobre o tempo: prolongam uma secção útil para a mistura e permitem manobras mais elaboradas sem pressa.",
          "steps": ["Escolhe uma secção limpa e ativa um loop de 4 ou 8 bars.","Confirma que o loop está alinhado ao beatgrid e à frase.","Usa o tempo extra para fazer beatmatch e EQ da faixa nova.","Sai do loop num limite de frase para retomar naturalmente."],
          "mistakes": ["Definir o loop fora do limite de frase e desencaixar.","Deixar o loop a repetir tempo demais e tornar-se aborrecido.","Sair do loop a meio de uma frase."],
          "drill": { "task": "Ativa um loop no Deck A para ganhar tempo a preparar o Deck B.", "simControl": "loop", "successHint": "O loop repete-se certinho e dá tempo para preparar a faixa seguinte." },
          "quiz": { "q": "Para que serve um loop numa transição?", "options": ["Esticar uma secção para ganhar tempo ou criar tensão","Aumentar o headroom do master","Mudar a tonalidade da faixa"], "answerIndex": 0, "explain": "O loop repete uma secção de batidas, esticando uma intro/breakdown para ganhares tempo ou construíres tensão." }
        },
        {
          "title": "Echo out (saída com eco)",
          "level": "avançado",
          "theory": "O echo out usa um efeito de delay/eco para 'desvanecer' a faixa que sai: ativas o eco, baixas o fader e as últimas batidas ecoam e dissipam-se, dando um final limpo enquanto a faixa nova já toca.",
          "why": "É uma saída elegante para situações em que um blend longo não encaixa — por exemplo, faixas de estruturas muito diferentes — e dá um toque profissional ao corte.",
          "steps": ["Com a faixa nova já a tocar, ativa o delay/eco na que sai.","Baixa o fader da faixa que sai enquanto o eco segura as últimas batidas.","Deixa o eco dissipar-se naturalmente.","Desliga o efeito quando a cauda do eco terminar."],
          "mistakes": ["Exagerar no eco e criar uma confusão sonora.","Esquecer de desligar o efeito depois da cauda.","Usar echo out quando um blend simples encaixaria melhor."],
          "drill": { "task": "Aplica um echo out no Deck A enquanto baixas o fader, deixando o eco dissipar.", "simControl": "echo-out", "successHint": "As últimas batidas ecoam e dissipam-se, com a faixa nova já a sustentar a pista." },
          "quiz": { "q": "O que faz um echo out?", "options": ["Acelera a faixa nova","Desvanece a faixa que sai com uma cauda de eco","Iguala as tonalidades"], "answerIndex": 1, "explain": "O echo out usa delay/eco para dissipar as últimas batidas da faixa que sai, dando um corte limpo e profissional." }
        }
      ]
    },
    {
      "id": "erros-comuns",
      "module": "Erros comuns e preparação",
      "icon": "⚠️",
      "summary": "Evita as armadilhas típicas de níveis, graves e fluxo, e prepara a tua biblioteca para tocar.",
      "lessons": [
        {
          "title": "Armadilhas de níveis e graves",
          "level": "básico",
          "theory": "Os erros mais comuns de iniciantes são técnicos e evitáveis: deixar o sinal entrar no vermelho (clipping), somar dois baixos sem trocar os graves, e usar o gain como volume de sala. Mantém os picos no laranja, gere os graves com EQ/kill e usa o gain só para igualar entradas.",
          "why": "Estes erros estragam até uma boa seleção musical: distorcem o som, criam confusão de graves e desequilibram volumes. Corrigi-los dá logo um salto de qualidade.",
          "steps": ["Confirma que nenhum canal nem o master entram no vermelho.","Garante que só uma linha de baixo domina de cada vez.","Usa o gain para gain-matching, não como volume de sala.","Mantém headroom no master durante as transições."],
          "mistakes": ["Empurrar tudo para o máximo para soar mais alto.","Sobrepor dois bombos e dois baixos abertos.","Confundir gain de entrada com volume de saída."],
          "drill": { "task": "Corrige os níveis: o GAIN do Deck A está no vermelho — baixa-o até ao laranja.", "simControl": "gain-fix", "successHint": "O canal sai da zona vermelha e os picos voltam ao laranja." },
          "quiz": { "q": "Qual destes é um erro técnico comum a evitar?", "options": ["Manter os picos no laranja","Somar dois baixos sem trocar os graves","Deixar headroom no master"], "answerIndex": 1, "explain": "Somar dois baixos abertos cria confusão de graves. Manter picos no laranja e deixar headroom são, pelo contrário, boas práticas." }
        },
        {
          "title": "Preparar a biblioteca",
          "level": "básico",
          "theory": "Tocar bem começa antes da pista: organiza a biblioteca com BPM e código Camelot analisados, beatgrids corrigidos, cue points marcados e faixas agrupadas por energia e género. Uma biblioteca preparada deixa-te decidir depressa e confiar nas ferramentas (Sync, harmónica).",
          "why": "Sem preparação, perdes tempo a procurar e arriscas misturas que chocam. Com a biblioteca tratada, focas-te na performance e na leitura da pista.",
          "steps": ["Analisa todas as faixas para BPM e Camelot.","Verifica e corrige os beatgrids das faixas que vais tocar.","Marca cue points nas entradas e drops importantes.","Cria playlists/crates por energia, género ou momento do set."],
          "mistakes": ["Tocar com beatgrids errados e confiar no Sync.","Não marcar cue points e perder as entradas.","Misturar tudo numa só pasta sem organização."],
          "drill": { "task": "Confirma que a faixa do Deck B tem BPM e Camelot prontos (vê o ecrã do deck). (Conceptual — marca quando confirmares.)", "simControl": "none", "successHint": "A faixa tem BPM e código Camelot prontos, permitindo decisões rápidas e seguras." },
          "quiz": { "q": "Porque convém corrigir os beatgrids antes de tocar?", "options": ["Para o Sync e o beatmatch funcionarem em confiança","Para aumentar o volume das faixas","Para mudar a tonalidade"], "answerIndex": 0, "explain": "Beatgrids corretos são a base para o Sync e o beatmatch funcionarem; grids errados desencaixam a mistura." }
        }
      ]
    }
  ],
  "glossary": [
    { "term": "BPM (beats per minute)", "def": "Batidas por minuto — a velocidade ou andamento de uma faixa." },
    { "term": "Beatmatching", "def": "Sincronizar o andamento e a fase de duas faixas para os beats coincidirem." },
    { "term": "Phrasing", "def": "Encaixar a transição nos limites das frases musicais (frases de 16/32 bars)." },
    { "term": "Bar (compasso)", "def": "Grupo de batidas; em 4/4 tem 4 batidas. Quatro bars formam uma frase de 16 batidas." },
    { "term": "Gain / trim", "def": "Controlo do nível de entrada de cada canal, usado para igualar volumes (gain-matching)." },
    { "term": "Headroom", "def": "Margem entre o nível médio e o máximo digital, para os picos não cortarem." },
    { "term": "Clipping", "def": "Distorção causada por o sinal ultrapassar o máximo digital (zona vermelha do medidor)." },
    { "term": "EQ (equalização)", "def": "Controlo das bandas de graves, médios e agudos de cada canal." },
    { "term": "Low kill", "def": "Corte total dos graves de um canal, útil para trazer uma faixa sem chocar baixos." },
    { "term": "Bassline swap", "def": "Troca de graves — passar o domínio dos baixos de uma faixa para a outra na transição." },
    { "term": "Crossfader", "def": "Fader que mistura o som entre os dois canais." },
    { "term": "Jog wheel", "def": "Roda do deck usada para nudge (acelerar) ou drag (abrandar) e corrigir a fase." },
    { "term": "Pitch / tempo", "def": "Controlo que altera a velocidade (BPM) de uma faixa." },
    { "term": "Sync", "def": "Função que iguala automaticamente o BPM (e por vezes a fase) com a faixa-mestre." },
    { "term": "Camelot Wheel", "def": "Sistema de códigos (número + A/B) que indica tonalidades compatíveis para mistura harmónica." },
    { "term": "Relativa maior/menor", "def": "Tonalidades com as mesmas notas; no Camelot, mesmo número com troca de letra (ex.: 8A/8B)." },
    { "term": "Echo out", "def": "Saída com eco/delay que dissipa as últimas batidas da faixa que sai." },
    { "term": "Loop", "def": "Repetição em ciclo de uma secção de batidas para esticar uma parte da faixa." }
  ],
  "camelot": {
    "explain": "Na mistura harmónica escolhes faixas em tonalidades compatíveis para as melodias não chocarem. A forma mais segura é misturar duas faixas no mesmo tom: como partilham exatamente as mesmas notas, sobrepõem-se em consonância total, sem qualquer risco de dissonância. Por isso, com o Deck A em 8A (Lá menor) e o Deck B também em 8A (Lá menor), tens a combinação mais segura possível.",
    "trackAkey": "8A (Am)",
    "trackBkey": "8A (Am)",
    "compatible": true,
    "note": "Um vizinho compatível seria 9A (Mi menor), que é +1 na roda — uma quinta acima de Lá menor, partilhando todas as notas exceto uma; muda ligeiramente o carácter e dá um pequeno lift de energia mantendo a harmonia. Em alternativa, 8B (Dó maior) é a relativa maior de 8A: mesmas notas, mas passa de um tom menor (mais melancólico) para maior (mais luminoso)."
  },
  "practicePlan": [
    "Aquece o ouvido: escolhe uma faixa de dança e conta '1,2,3,4' por compasso até identificares frases de 16 e 32 bars sem te perderes.",
    "Treina gain staging: carrega 4 faixas e ajusta o gain de cada uma para os picos ficarem no laranja, igualando os níveis entre todas.",
    "Pratica beatmatch manual sem Sync: iguala os BPM de dois temas pelo pitch e corrige a fase com nudge/drag no jog até os bombos colarem por 32 bars.",
    "Faz blends limpos: monta 5 transições seguidas com crossfader e EQ, fazendo low kill na faixa que entra e troca de graves no limite da frase.",
    "Mistura por harmonia: analisa a biblioteca em Camelot e cria uma sequência de 4 faixas só com vizinhanças seguras (mesmo, +1, -1), incluindo um energy boost de +7.",
    "Adiciona carácter: pratica uma transição com filtro de varrimento, uma com loop e uma com echo out.",
    "Prepara a biblioteca: corrige beatgrids, marca cue points e organiza crates por energia e código Camelot.",
    "Grava um mini-set de 15 minutos, ouve-o de fora e anota um erro de níveis, um de graves e um de phrasing para corrigir no próximo treino."
  ]
};
