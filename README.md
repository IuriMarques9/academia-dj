# 🎧 Academia de DJ

Simulador local de uma **controladora de DJ de 2 decks** (estilo Numark Party Mix) **+ curso interactivo** para aprender a mexer numa mesa — do primeiro beat ao set fluido.

100% no browser, **sem servidor e sem internet**. A música é gerada por código (Web Audio API) e também podes carregar os **teus próprios MP3**.

## ✨ O que traz

**A mesa**
- 2 jog wheels grandes, EQ de 3 bandas, filtro bipolar (LP/HP), gain, faders de canal, crossfader, master + VU
- Transporte por deck: **PLAY / CUE / SYNC**, **LOOP**, **ECHO** e 4 performance pads
- Medidor de nível por canal e scope de fase (para beatmatch)
- **⟳ NOVA**: gera uma faixa aleatória na hora (padrão + BPM + tom Camelot) — treino sem esperas
- **📁 MP3**: carrega áudio teu → **waveform real**, playhead, **4 hot cues** clicáveis, BPM estimado, scratch/pitch-bend no prato
- **Ecrã inteiro** e **layout responsivo** (funciona no telemóvel, por toque)

**O curso (Academia)**
- 7 módulos / 20 lições: anatomia da mesa, contagem/phrasing, beatmatching, mistura com EQ, mistura harmónica (Camelot), transições criativas, erros comuns
- Cada lição: teoria + porquê + passos + erros + **drill** (detectado ao vivo na mesa) + **quiz**
- Glossário EN→PT, roda de Camelot e plano de treino em casa
- Conhecimento pesquisado em fontes reputadas de DJ e verificado

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
