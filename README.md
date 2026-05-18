# E-Commerce PetShop - Refactorización

> Refactorización completa de un e-commerce desarrollado en grupo, convertido a una arquitectura moderna con **TypeScript**, **React**, y **Tailwind CSS**. Proyecto en desarrollo activo con componentes funcionales y UI responsivo.

🔄 **Estado:** En Desarrollo | **Rama Activa:** `features`

---

## 📋 Descripción del Proyecto

Este proyecto es una refactorización del e-commerce original desarrollado en equipo ([Grupo_6_FootGoose](https://github.com/Grupo-6-FootGoose)). Se está reescribiendo desde cero con tecnologías modernas para mejorar la arquitectura, mantenibilidad y experiencia de usuario.

### Objetivos Principales
- ✅ **Modernizar el stack** - De vanilla JS a React + TypeScript
- ✅ **Mejorar la escalabilidad** - Arquitectura componentizada
- ✅ **UI/UX responsiva** - Diseño mobile-first con Tailwind CSS
- ✅ **Código tipado** - TypeScript para mayor seguridad de tipos
- ✅ **Mejor rendimiento** - Optimizado con Vite + React

---

## 🎯 Progreso Actual (Rama `features`)

### ✅ Completado

#### Estructura del Proyecto
- ✅ Setup inicial con **Vite** + **React 19** + **TypeScript**
- ✅ Configuración de **Tailwind CSS v4** con Vite
- ✅ Sistema de rutas con **React Router v7**
- ✅ ESLint configurado para TypeScript y React
- ✅ Estructura modular de componentes

#### Componentes Implementados
- ✅ **Header/Navbar** - Navegación principal con menú responsive
  - Logo y barra de búsqueda
  - Menú desktop en navbar horizontal
  - Menú mobile desplegable
  - Carrito de compras
  - Selector de tema (estructura lista)

#### Funcionalidades de UI
- ✅ Diseño **Mobile-First** responsivo
- ✅ Breakpoints Tailwind (md:) configurados
- ✅ Sistema de estilos CSS base
- ✅ Componentes modularizados
- ✅ Página principal con estructura

#### Configuración de Desarrollo
- ✅ Hot Module Replacement (HMR) con Vite
- ✅ TypeScript strict mode
- ✅ Linting automático con ESLint
- ✅ Build optimizado para producción

### 🚧 En Progreso

- 🔄 Componentes de catálogo de productos
- 🔄 Sistema de filtrado y búsqueda
- 🔄 Página de detalles del producto
- 🔄 Carrito de compras (lógica y UI)
- 🔄 Paginador mejorado
- 🔄 Gestión de estado global (Context API / Redux)

### 📋 Próximas Fases

- ⏳ Autenticación de usuario
- ⏳ Checkout y formulario de pago
- ⏳ Integración con API backend
- ⏳ Sistema de reseñas y valoraciones
- ⏳ Panel de administración
- ⏳ Optimización SEO
- ⏳ Testing (Jest + React Testing Library)

---

## 🛠️ Stack Tecnológico

### Frontend
- **Framework:** React 19.2.5 con ESM modules
- **Lenguaje:** TypeScript 6.0
- **Build Tool:** Vite 8.0.10
- **Estilos:** Tailwind CSS 4.2.4
- **Enrutamiento:** React Router DOM 7.14.2
- **Carruseles:** Swiper 12.1.4

### Herramientas de Desarrollo
- **Linter:** ESLint 10.2.1 + TypeScript ESLint
- **Type Checking:** TypeScript strict mode
- **Dev Server:** Vite con HMR
- **Node:** v18+ recomendado

### Stack Original (Grupo_6_FootGoose)
- Frontend: HTML, CSS, JavaScript
- Actualmente siendo reescrito en la refactorización

---

## 🏗️ Estructura del Proyecto

```
e-commerce-petshop/
├── petshop-client/              # Cliente React (rama features)
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── App.tsx         # Componente raíz
│   │   │   ├── AppProviders.tsx # Providers de la app
│   │   │   ├── Header.tsx       # Navbar principal
│   │   │   └── ...              # Otros componentes
│   │   ├── assets/              # Imágenes y recursos
│   │   │   └── logo.png
│   │   ├── styles/              # Estilos globales
│   │   │   └── index.css        # Tailwind + CSS custom
│   │   ├── main.tsx             # Punto de entrada
│   │   └── ...
│   ├── index.html               # HTML principal
│   ├── vite.config.ts           # Configuración Vite
│   ├── tsconfig.json            # Configuración TypeScript
│   ├── tailwind.config.js        # Configuración Tailwind
│   ├── eslint.config.js         # Configuración ESLint
│   ├── package.json             # Dependencias
│   └── README.md
├── main (rama)                   # Rama de producción (vacía)
└── features (rama)               # Rama de desarrollo activo
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Marcos676/e-commerce-petshop.git
   cd e-commerce-petshop
   ```

2. **Cambiar a la rama de desarrollo**
   ```bash
   git checkout features
   ```

3. **Navegar al cliente**
   ```bash
   cd petshop-client
   ```

4. **Instalar dependencias**
   ```bash
   npm install
   ```

5. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📦 Scripts Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar código con ESLint
npm run lint

# Type checking
npx tsc --noEmit
```

---

## 📚 Competencias Técnicas Demostradas

### Frontend Moderno
✅ **React 19** - Últimas características y hooks  
✅ **TypeScript** - Tipado estricto y seguridad de tipos  
✅ **Tailwind CSS** - Diseño utility-first eficiente  
✅ **Vite** - Build tool moderno y rápido  

### Arquitectura
✅ Componentes funcionales y reutilizables  
✅ Separación de responsabilidades  
✅ Estructura escalable y mantenible  
✅ Patrones de React (props, state, hooks)  

### Herramientas de Desarrollo
✅ ESLint configurado para TypeScript  
✅ Vite HMR para desarrollo eficiente  
✅ TypeScript strict mode habilitado  
✅ React Router para navegación SPA  

### Diseño Responsivo
✅ Mobile-first approach  
✅ Breakpoints configurados  
✅ UI adaptativa (desktop, tablet, mobile)  
✅ Componentes flexibles  

### Refactorización de Código
✅ Migración de JS vanilla a React  
✅ Mejora de arquitectura y patrón  
✅ Modernización del stack tecnológico  
✅ Mantenimiento de funcionalidad existente  

---

## 🔄 Rama `features` vs `main`

| Rama | Estado | Contenido |
|------|--------|-----------|
| **main** | ⏳ Vacio | Se usará para versiones estables |
| **features** | ✅ Activo | Desarrollo en progreso con componentes funcionales |

**Recomendación para revisar:** Usar la rama `features` para ver el código más reciente y actualizado.

---

## 🎨 Características de Diseño

- **Color Scheme:** Sistema de temas claro/oscuro preparado
- **Typography:** Sistema de fonts responsivo
- **Spacing:** Sistema de padding/margin consistente
- **Components:** Header funcional y responsivo
- **Search:** Barra de búsqueda integrada
- **Navigation:** Menú adaptativo (desktop/mobile)

---

## 📝 Última Actualización

**Rama:** features  
**Último Commit:** Optimización del paginador  
**Fecha:** Mayo 2026

---

## 📞 Información del Proyecto Original

**Repositorio Original:** [Grupo_6_FootGoose](https://github.com/Grupo-6-FootGoose)  
**Tipo:** E-commerce para petshop  
**Equipo:** Proyecto grupal refactorizado individualmente

---

## 👨‍💻 Autor

**Marcos676**  
Frontend Developer | React | TypeScript | Tailwind CSS  
[GitHub](https://github.com/Marcos676) | [LinkedIn](https://linkedin.com/in/marcos676)

---

## 📄 Licencia

Este proyecto es una refactorización del trabajo original del Grupo 6. Respeta la licencia del repositorio original.

---

## 🤝 Contribuciones

Este es un proyecto personal de refactorización. Para consultas sobre el código o mejoras sugeridas, contactar directamente.

---

**Estado del Proyecto:** 🚀 En desarrollo activo  
**Progreso General:** ~30-40% completado  
**Próxima Revisión:** Implementar componentes de catálogo
