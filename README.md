# Comuna 9 - Landing Page

Landing page profesional para el restaurante **Comuna 9** desarrollada con Astro v5.

## 🔥 Características

- ✅ **Diseño Premium**: Paleta de colores terracota, tipografía elegante, animaciones suaves
- ✅ **SEO Optimizado**: Schema.org JSON-LD, meta tags completos, H1 optimizado
- ✅ **Responsive**: Adaptado a todos los dispositivos
- ✅ **Secciones Completas**:
  - Hero con imagen atmosférica
  - Concepto "Comida Noble"
  - Sección del Chef Ramiro Martínez
  - Galería visual asimétrica
  - Formulario de reserva con integración MercadoPago/WhatsApp
  - Mapa de Google Maps integrado
  - Footer con redes sociales

## 🚀 Inicio Rápido

### Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
comuna9-landing/
├── public/
│   └── images/          # Imágenes generadas
├── src/
│   ├── components/      # Componentes Astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Concepto.astro
│   │   ├── Chef.astro
│   │   ├── Experience.astro
│   │   ├── Reserva.astro
│   │   ├── Contacto.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal con SEO
│   ├── pages/
│   │   └── index.astro   # Página principal
│   └── styles/
│       └── global.css    # Design System
└── package.json
```

## 🎨 Design System

El proyecto utiliza un design system completo definido en `src/styles/global.css`:

- **Colores**: Paleta terracota y tonos tierra
- **Tipografía**: Cormorant Garamond + Inter
- **Spacing**: Sistema de espaciado consistente
- **Componentes**: Botones, forms, animaciones

## 📊 SEO Features

- Schema.org markup para restaurantes
- Open Graph tags
- Meta descriptions optimizadas
- Estructura semántica HTML5
- Google Maps integrado para SEO local

## 🔧 Personalizaciones Necesarias

1. **Imágenes**: Reemplazar las imágenes generadas en `public/images/` con fotos reales
2. **Video Hero**: Opcional - agregar video en loop en `public/videos/hero-fire.mp4`
3. **Información de Contacto**: Actualizar teléfono, email, y coordenadas en `Contacto.astro`
4. **MercadoPago**: Integrar el link real de pago en `Reserva.astro`
5. **WhatsApp**: Actualizar número de WhatsApp en `Reserva.astro`
6. **Google Tag Manager**: Agregar el GTM container ID si se requiere tracking

## 🌐 Deployment

El proyecto puede desplegarse en:

- **Vercel** (recomendado)
- **Netlify**
- **Cloudflare Pages**
- Cualquier hosting que soporte SSG

## 📝 Notas

- Las imágenes actuales son placeholders generados con IA
- El formulario de reserva envía eventos a GTM para tracking
- La integración de MercadoPago requiere configuración adicional

## 🛠️ Tecnologías

- Astro v5
- Vanilla CSS (no frameworks)
- Google Fonts: Cormorant Garamond + Inter
- Schema.org para SEO

---

Desarrollado por **Firebase Studio** para **Comuna 9**
