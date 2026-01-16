# 🏀 Digital Scorekeeper - Basketball Stats Manager

Una aplicación web moderna y profesional para la gestión de estadísticas de baloncesto en vivo, optimizada para tablet y móvil (Mobile First).

![Basketball Scorekeeper](https://img.shields.io/badge/Basketball-Scorekeeper-orange)
![React](https://img.shields.io/badge/React-19.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Zustand](https://img.shields.io/badge/Zustand-State-FF6B6B)

## 🎯 Características Principales

### 📊 Gestión Completa de Partido
- ✅ Configuración de equipos con colores personalizados y dorsales editables
- ✅ Gestión de 12 jugadores por equipo (5 activos + 7 banquillo)
- ✅ Cronómetro progresivo centrado con soporte de prórrogas ilimitadas
- ✅ Sistema de sustituciones simples con un click
- ✅ Dark Mode y Light Mode con toggle

### 📈 Estadísticas Completas (Box Score)
- **MIN**: Minutos jugados
- **PTS**: Puntos totales
- **T2**: Tiros de 2 puntos (intentados/anotados/%)
- **T3**: Tiros de 3 puntos (intentados/anotados/%)
- **T1**: Tiros libres (intentados/anotados/%)
- **REB**: Rebotes (ofensivos + defensivos)
- **AST**: Asistencias
- **BR**: Balones robados
- **BP**: Balones perdidos
- **TF**: Tapones a favor
- **TC**: Tapones en contra
- **FC**: Faltas cometidas
- **FR**: Faltas recibidas
- **VAL**: Valoración calculada automáticamente

### 🎮 Flujos de Acción Inteligentes

**Puntos:**
1. Seleccionar jugador → Tipo de tiro (1pt/2pt/3pt) → Anotado/Fallado
2. Si anotado 2pt o 3pt → ¿Hubo asistencia? → Seleccionar asistente
3. Si fallado → ¿Hubo rebote? → Tipo (ofensivo/defensivo) → Jugador o rebote de equipo

**Faltas:**
1. Seleccionar jugador que comete falta → Tipo (personal/técnica/antideportiva/descalificante)
2. Si personal o antideportiva → Jugador que recibe la falta
3. Tiros libres: Sin TL / 1 TL / 2 TL / 3 TL
4. Por cada TL → ¿Anotado/Fallado?
5. Solo tras último TL fallado → ¿Hubo rebote?

**Robos y Pérdidas:**
- Tras robo → Pregunta jugador que cometió pérdida
- Tras pérdida → ¿Hubo robo? → Jugador que robó

**Tapones:**
- Tras tapón → Pregunta jugador taponado

### 📝 Play-by-Play y Undo
- Registro cronológico de todas las jugadas con colores personalizados
- Sistema de DESHACER para corregir las últimas 10 acciones
- Vista detallada por cuarto y tiempo

### 📄 Exportación a PDF
- Box Score completo con todas las estadísticas
- Opción de incluir play-by-play
- Formato profesional tipo NBA
- Totales por equipo y valoraciones

### 💾 Persistencia
- Guardado automático en LocalStorage
- Continuar partidos interrumpidos
- Sin necesidad de backend o base de datos

## 🚀 Tecnologías

### Frontend
- **React** 19.0 - Framework principal
- **Zustand** - Gestión de estado global con persistencia
- **Tailwind CSS** - Estilos utility-first
- **Shadcn/ui** - Componentes UI accesibles
- **Lucide React** - Iconos modernos
- **jsPDF + jspdf-autotable** - Generación de PDFs

### Tipografía
- **Space Grotesk** - Interfaz general
- **Orbitron** - Números del marcador digital

### Backend (Opcional - No requerido para el frontend)
- **FastAPI** - API REST
- **MongoDB** - Base de datos

## 📦 Instalación y Uso

### Opción 1: Solo Frontend (Recomendado)

```bash
# Clonar repositorio
git clone https://github.com/jnavarro629/digital-scorekeeper.git
cd digital-scorekeeper/frontend

# Instalar dependencias
yarn install

# Ejecutar en desarrollo
yarn start

# Build para producción
yarn build
```

### Opción 2: Proyecto Completo (Frontend + Backend)

```bash
# Clonar repositorio
git clone https://github.com/jnavarro629/digital-scorekeeper.git
cd digital-scorekeeper

# Frontend
cd frontend
yarn install
yarn start

# Backend (en otra terminal)
cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 🌐 Deployment en Netlify

### Deploy Rápido

1. **Desde GitHub:**
   - Fork este repositorio
   - Ve a [netlify.com](https://netlify.com)
   - "New site from Git" → Selecciona tu fork
   - Configuración:
     ```
     Base directory: frontend
     Build command: yarn build
     Publish directory: frontend/build
     ```

2. **Deploy Manual:**
   ```bash
   cd frontend
   yarn build
   # Arrastra la carpeta 'build' a Netlify
   ```

3. **Con Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   cd frontend
   yarn build
   netlify deploy --prod --dir=build
   ```

El archivo `netlify.toml` ya está configurado en la raíz del proyecto.

## 📱 Uso de la Aplicación

### 1. Configuración Inicial
- Ingresa nombres de equipos (Local y Visitante)
- Selecciona colores personalizados con el color picker
- Configura dorsales de jugadores (0-99)
- Agrega nombres de los 12 jugadores por equipo
- Establece duración de cuartos (default: 10 minutos)

### 2. Durante el Partido
- Selecciona jugador de la lista
- Elige acción (Puntos, Falta, Rebote, Robo, Pérdida, Tapón)
- Responde preguntas contextuales que aparezcan
- Usa el botón Undo (⟲) para corregir errores

### 3. Gestión del Partido
- **Play/Pause**: Controlar cronómetro
- **Reset**: Reiniciar tiempo del cuarto
- **Next**: Avanzar al siguiente cuarto/prórroga
- **Sustituciones**: Click en ⇄ junto al jugador activo

### 4. Visualización
- **Box Score**: Click en 📊 para estadísticas completas
- **PDF Export**: Click en 📥 para descargar
- **Theme**: Click en ☀️/🌙 para cambiar modo
- **Reset Game**: Click en ⚙️ para reiniciar partido

## 🎨 Capturas de Pantalla

*(Las capturas se pueden agregar aquí)*

## 📐 Arquitectura del Proyecto

```
digital-scorekeeper/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn components
│   │   │   ├── ActionButtons.jsx
│   │   │   ├── BoxScore.jsx
│   │   │   ├── GameDashboard.jsx
│   │   │   ├── GameSetup.jsx
│   │   │   ├── GameTimer.jsx
│   │   │   ├── PlayByPlay.jsx
│   │   │   ├── PlayerSelector.jsx
│   │   │   ├── Scoreboard.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── store/
│   │   │   └── gameStore.js     # Zustand store
│   │   ├── utils/
│   │   │   └── pdfExport.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css            # Tailwind + Design tokens
│   ├── package.json
│   └── tailwind.config.js
├── backend/                     # Opcional
├── netlify.toml
└── README.md
```

## 🧮 Cálculo de Valoración (VAL)

```
VAL = PTS + REB + AST + BR + TF 
      - (T2 fallados) - (T3 fallados) - (T1 fallados) - BP
```

## 🌟 Características Destacadas

### Mobile-First Design
- Optimizado para tablets y móviles
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly con botones grandes
- Diálogos adaptables

### Estadísticas en Tiempo Real
Debajo de cada jugador se muestra:
- **PTS**: Puntos anotados
- **REB**: Rebotes capturados
- **ASIS**: Asistencias realizadas
- **VAL**: Valoración calculada
- **FC**: Faltas cometidas (en cuadrado rojo)

### Sistema de Colores Dinámico
- Colores personalizados en marcador
- Badges de equipo con colores elegidos
- Play-by-play con barras de color del equipo
- Selección de jugador con highlight de color

## 🛠️ Desarrollo

### Estructura de Estado (Zustand)

```javascript
{
  // Configuración
  homeTeam: { name, color, players[] },
  awayTeam: { name, color, players[] },
  quarterDuration: 10,
  
  // Estado del juego
  isConfigured: false,
  gameStarted: false,
  currentQuarter: 1,
  timeElapsed: 0,
  isTimerRunning: false,
  
  // Puntuación
  homeScore: 0,
  awayScore: 0,
  
  // Jugadores activos
  homeActivePlayers: [0,1,2,3,4],
  awayActivePlayers: [0,1,2,3,4],
  
  // Estadísticas
  homePlayerStats: [],
  awayPlayerStats: [],
  
  // Historial
  playByPlay: [],
  history: [] // Para undo
}
```

### Agregar Nuevas Acciones

1. Agregar método en `gameStore.js`
2. Crear botón en `ActionButtons.jsx`
3. Implementar handler y diálogos necesarios
4. Actualizar estadísticas correspondientes

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 👤 Autor

**jnavarro629**

## 🙏 Agradecimientos

- Shadcn/ui por los componentes base
- Lucide por los iconos
- Vercel por Next.js y tecnologías relacionadas
- La comunidad de React

---

**¡Disfruta gestionando tus partidos de baloncesto!** 🏀

Para preguntas o soporte, abre un issue en GitHub.
