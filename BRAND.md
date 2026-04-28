# Manual de Marca · nanu

> Este documento define cómo se ve, suena y se comporta la marca nanu.
> Cualquier asistente (humano o AI) que trabaje en el sitio debe respetar estas reglas.

---

## 1. Identidad

- **Nombre comercial:** nanu (siempre minúsculas)
- **Nombre legal:** Nanu Group LLC (solo en footer legal, contratos, facturas)
- **Tagline:** Especialistas en marcas de industrias complejas
- **Subtítulo:** Marketing donde otros no se atreven
- **Posicionamiento:** Agencia de marketing digital especializada en industrias técnicas, reguladas o complejas (fintech, blockchain, B2B industrial, construcción premium)

## 2. Arquetipo y voz

- **Arquetipo:** Sofisticado cálido (Apple + Glossier)
- **Tratamiento:** Tú (cercano, directo, cálido)
- **Personalidad:** Pensadora estratégica · "Hemos analizado profundamente"
- **Lenguaje:** Tecnicismos cuando aporten valor, no para presumir

### Frases firma
- "Marketing donde otros no se atreven."
- "Antes de proponer, entendemos."
- "La complejidad es nuestra ventaja, no tu problema."
- "No somos para todos. Somos para algunos."
- "Estrategia con cuidado. Resultados con narrativa."

### Palabras que usamos
estrategia, profundidad, análisis, industrias complejas, cuidado, construir confianza, especialistas, "hemos visto que…", "la realidad es que…"

### Palabras prohibidas
growth hack, disrupción, innovador (vacío), full-service, 360°, "tu socio estratégico", "llevamos tu marca al siguiente nivel", soluciones a medida, "pasión por…"

---

## 3. Paleta de colores

```css
--tinta:     #1D1D1F;  /* Primario · texto y fondos oscuros */
--pizarra:   #5C544D;  /* Secundario · texto secundario, captions */
--electrico: #4F46E5;  /* Acento · CTAs, links, signature visual */
--piedra:    #C7C2BA;  /* Neutro · divisores, fondos sutiles */
--hueso:     #F9F6F0;  /* Fondo · NUNCA blanco puro #FFFFFF */
```

### Reglas de uso (CRÍTICAS)

1. **Hueso (60%) + Tinta (25%) + Piedra (8%) + Pizarra (5%) + Eléctrico (2%)**
2. **El azul eléctrico ocupa MÁXIMO 5-10% de cualquier composición** — si cubre más, pierde su poder de signature.
3. **Hueso es el fondo, NO blanco puro.** El blanco puro #FFFFFF se siente frío y genérico.
4. **Tinta es el color de texto, NO negro puro.** Negro puro #000 es duro.

### Combinaciones aprobadas
- Tinta sobre Hueso (combinación principal)
- Hueso sobre Tinta (hero sections, premium)
- Tinta sobre Piedra (secciones secundarias)
- Hueso sobre Eléctrico (CTAs grandes, máximo énfasis)

### Combinaciones PROHIBIDAS
- Eléctrico sobre Piedra (poco contraste)
- Pizarra como fondo principal (demasiado pesado)

---

## 4. Tipografía

**Una sola fuente: Inter**

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Escala tipográfica

| Nivel | Tamaño web | Peso | Letter-spacing | Uso |
|-------|-----------|------|----------------|-----|
| Display | 48-72px | 700 | -0.04em | Hero principal |
| H1 | 32-40px | 600 | -0.03em | Títulos de sección |
| H2 | 24-28px | 600 | -0.02em | Subtítulos |
| H3 | 18-20px | 600 | -0.02em | Headings menores |
| Body | 14-16px | 400 | normal | Cuerpo de texto, line-height 1.6 |
| Caption | 11-12px | 500 | 1.5px | UPPERCASE, eyebrows |
| Micro | 9-10px | 400 | normal | Footers, metadatos |

### Reglas de oro
1. **Letter-spacing negativo en títulos** (-0.02 a -0.05em). Esto separa profesional de amateur.
2. **Letter-spacing positivo en captions** (+1.5 a +2px). Da aire editorial premium.
3. **Mayúsculas SOLO en captions.** Nunca en títulos ni cuerpo.
4. **Line-height 1.6-1.7 en cuerpo, 1.05-1.15 en títulos.**
5. **Pesos disponibles:** 300, 400, 500, 600, 700. NUNCA usar 900.

---

## 5. Logo

El logo es: `nanu` en Inter Bold + un **punto azul eléctrico** al final.

```html
<span class="logo">nanu<span class="logo-dot">.</span></span>
```

```css
.logo {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: var(--tinta);
}
.logo-dot {
  color: var(--electrico);
}
```

### Regla NO NEGOCIABLE
**El punto del logo SIEMPRE es azul eléctrico #4F46E5.** Única excepción: si el fondo es azul, el punto se vuelve hueso.

### Isotipo (cuando solo cabe el icono)
Cuadrado con border-radius ~17%, fondo tinta, letra "n." en hueso con punto eléctrico.

---

## 6. Filosofía de aplicación

- **Espacio en blanco no es vacío, es respiro.** Las marcas premium usan espacio generoso.
- **Una idea por sección.** No abrumes con datos.
- **El detalle revela el carácter.** Si descuidamos lo pequeño, ¿cuidamos lo grande?
- **Test final antes de publicar:** ¿Esto se siente nanu? Si dudas, no lo es.

---

## 7. Estructura sugerida del sitio web

1. **Hero** — Eyebrow ("Agencia de marketing"), título grande con tagline, descripción corta, dos CTAs (primario eléctrico + secundario outline)
2. **Industrias** — 4 cards: Fintech, Blockchain, B2B industrial, Construcción premium
3. **Cómo trabajamos** — 3 pasos: Entendemos → Analizamos → Construimos
4. **Casos** — Casos de éxito con métricas grandes (estilo stat cards)
5. **Sobre nanu** — Quiénes somos, valores, filosofía
6. **CTA final** — Sección oscura con tagline y botón eléctrico
7. **Footer** — Links, redes, "© 2026 Nanu Group LLC"

---

## 8. Stack técnico recomendado

- **Framework:** Next.js 14 (app router) o Astro
- **Styling:** Tailwind CSS con variables CSS personalizadas para los colores nanu
- **Hosting:** Vercel (gratis para empezar)
- **Dominio:** nanugroup.com (o el que tengas)
- **Analytics:** Plausible o Vercel Analytics (no Google Analytics, demasiado intrusivo para una marca premium)

---

## Checklist final antes de publicar cualquier página

Visual:
- [ ] El logo está bien proporcionado
- [ ] El punto del logo es azul eléctrico #4F46E5
- [ ] La paleta usa solo los 5 colores oficiales
- [ ] El azul eléctrico ocupa <10% de la composición
- [ ] La tipografía es Inter en todo
- [ ] Los títulos tienen letter-spacing negativo
- [ ] Hay espacio en blanco generoso

Texto:
- [ ] Tratamiento de tú
- [ ] Suena a pensadora estratégica
- [ ] Sin clichés ("disrupción", "innovador", "soluciones a medida")
- [ ] Tecnicismos aportan precisión, no presunción
