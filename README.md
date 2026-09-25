# Eterno - Agencia Digital

Eterno es una aplicación web moderna, rápida y responsiva diseñada para agencias digitales enfocadas en ofrecer sitios web, aplicaciones y automatizaciones para emprendedores y negocios locales. 

## 🚀 Características Principales

- **Diseño Premium y Responsivo:** Construido con Tailwind CSS y React.
- **Flujo de Cotización Optimizado:** Un cuestionario interactivo para captar leads (Tipo de solución, Objetivos, Funcionalidades deseadas).
- **Integración Directa a Correo:** Formulario de cotización con validación AJAX conectado mediante FormSubmit.
- **WhatsApp Integrado:** Botón flotante persistente con enlace directo a contacto rápido (+1 840 232 0865).
- **Flexibilidad de Pagos:** Resalta la modalidad 50% inicio / 50% contra entrega, aceptando Zelle y Efectivo.

## 🛠️ Tecnologías

Este proyecto está construido de manera modular para poder ejecutarse **sin necesidad de Node.js o procesos de compilación (build steps)**, usando las siguientes herramientas mediante CDN:

- **React & ReactDOM (v18)**
- **Babel Standalone** (Para JSX en el navegador)
- **Tailwind CSS**
- **Supabase SDK** (Esquema y base de datos opcional)

## 📂 Estructura de Archivos

- `index.html`: Punto de entrada que carga los scripts CDN y dependencias.
- `app.jsx`: Componentes principales de la UI (Navbar, Hero, Cuestionario, Formulario, etc).
- `schema.sql`: Estructura de Base de Datos para Supabase (Tablas, ENUMs y reglas RLS).

## 💻 ¿Cómo ejecutarlo localmente?

Ya que el proyecto no requiere compilación, puedes probarlo levantando un servidor local básico (por ejemplo, con Python) en la misma carpeta:

```bash
# Con Python 3
python -m http.server 8000
```
Luego visita `http://localhost:8000` en tu navegador.

## 🗄️ Configuración de Supabase (Opcional)

Si deseas utilizar la base de datos de Supabase en lugar del envío directo de correos:
1. Crea un proyecto en Supabase.
2. Ve al editor SQL y pega el contenido del archivo `schema.sql` para crear la tabla de solicitudes.
3. Actualiza tus credenciales `supabaseUrl` y `supabaseKey` en el archivo `app.jsx`.
