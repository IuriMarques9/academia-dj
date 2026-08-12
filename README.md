# 🎧 Academia de DJ

Simulador local de uma **controladora de DJ de 2 decks** (estilo Numark Party Mix) **+ curso interactivo** para aprender a mexer numa mesa — do primeiro beat ao set fluido.

100% no browser, **sem servidor e sem internet**. A música é gerada por código (Web Audio API) e também podes carregar os **teus próprios MP3**.

## ✨ O que traz

**A mesa**
- 2 jog wheels grandes, EQ de 3 bandas, filtro bipolar (LP/HP), gain, faders de canal, crossfader, master + VU
- Transporte por deck: **PLAY / CUE / SYNC**, **LOOP**, **ECHO** e 4 performance pads
- Medidor de nível por canal e scope de fase (para beatmatch)
- **⟳ NOVA**: gera uma faixa aleatória na hora (padrão + BPM + tom Camelot) — treino sem esperas
- **🏠 Sons da casa**: 6 faixas de treino incluídas (`tracks/`), com **BPM e tom Camelot reais** no manifesto — escolhidas para praticar mistura harmónica. São faixas **originais sintetizadas por código** para este projecto (sem música de terceiros).
- **💾 A minha crate**: os MP3 que carregas ficam **guardados no browser** (IndexedDB) com BPM e duração — carrega 1 vez, fica disponível offline. No iPhone, instala a app no ecrã principal (PWA), senão o Safari limpa o armazenamento ao fim de 7 dias sem uso.
- **📁 MP3**: carrega áudio teu → **waveform real**, playhead, **4 hot cues** clicáveis, BPM estimado, scratch/pitch-bend no prato
- **Ecrã inteiro** e **layout responsivo** (funciona no telemóvel, por toque)

**O curso (Academia)**
- 7 módulos / 20 lições: anatomia da mesa, contagem/phrasing, beatmatching, mistura com EQ, mistura harmónica (Camelot), transições criativas, erros comuns
- Cada lição: teoria + porquê + passos + erros + **drill** (detectado ao vivo na mesa) + **quiz**
- Glossário EN→PT, roda de Camelot e plano de treino em casa
- Conhecimento pesquisado em fontes reputadas de DJ e verificado

**💻 Mixar com Código (live coding)**
- Curso novo de 7 lições para mixar como a **dj_dave**: música escrita ao vivo em código, à la algorave
- Editor **[Strudel](https://strudel.cc)** real embutido (o mesmo que ela usa) — cada lição tem código pronto a carregar e experimentar
- Do primeiro beat (`sound("bd bd bd bd")`) até um set de 10 minutos: mini-notação, escalas (Camelot em código), FX, variação generativa, transições e performance
- Tabela de tradução mesa→código (beatmatching, low kill, filter sweep, echo out…)
- 🔌 **O código é uma faixa do deck**: carregar código num deck é como pôr lá uma música. O deck mostra «Código ao vivo» e é o **PLAY/PAUSA da mesa** que o arranca e pára, o **CUE** que o faz recomeçar, o **prato** que roda ao ritmo dele, o fader de **TEMPO** que lhe muda o BPM e o EQ/filtro/fader/crossfader que o mixam. **Nunca há código e música ao mesmo tempo no mesmo deck** — carregar um MP3 ou ⟳ NOVA descarrega o código, e vice-versa.
- 💻 **Um editor por deck**: o que escreves no editor de cima sai pelo **Deck A**, o de baixo pelo **Deck B**, sem indicares nada no código; o botão **⇄** troca as linhas de lado. Dá para mixar código com código, ou código de um lado e um MP3 teu do outro.
- 🎯 **SYNC entre decks de código**: cada editor tem o seu relógio e arrancam em alturas diferentes (medido: ~80 ms de desencontro entre os bombos). O SYNC do deck alinha-o pelo outro — verificado a descer a 0 ms.
- ⚠️ Este separador precisa de **internet** (editor + sons carregam do strudel.cc/CDN); a mesa continua 100% offline

## ▶️ Como usar

Abre o `index.html` no browser (duplo-clique) e carrega em **Ligar a mesa**.
Ou serve a pasta localmente:

```bash
npx serve .
```

**Teclado:** `Q`/`P` play A/B · `Z X` / `N M` pitch-bend · `S`/`L` sync · `←`/`→` crossfader · arrasta os jog wheels para ajustar a fase.

## 🛠️ Stack
- HTML + CSS + JavaScript vanilla, **Web Audio API**. Sem dependências, sem build.
- `index.html` (motor + UI + academia) · `curriculum.js` (currículo em JSON)

## 📄 Licença
MIT
