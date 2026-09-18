# Funerarias Navarro

Web estática, responsive y preparada para desplegarse en Vercel. Incluye una portada, catálogo, reserva de cita y página de contacto. El tono y los datos mostrados siguen el anuncio proporcionado y **son demostrativos**: reemplaza teléfono, email, precios, avisos legales y el tratamiento del formulario antes de usarla para un negocio real.

## Páginas

- `/` — portada y propuesta de servicios.
- `/catalogo` — modelos de ataúdes orientativos.
- `/reservas` — formulario de solicitud con confirmación local.
- `/contacto` — datos de atención y preguntas frecuentes.

## Desarrollo local

No hay dependencias que instalar. Se puede abrir `index.html` directamente, o levantar un servidor local:

```bash
npm run dev
```

Visita `http://localhost:3000`.

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En Vercel, elige **Add New → Project** e importa el repositorio.
3. Conserva los valores detectados (es un sitio estático, sin comando de build).
4. Pulsa **Deploy**.

`vercel.json` configura rutas limpias (`/catalogo`, `/reservas` y `/contacto`) y cabeceras básicas de seguridad. Vercel desplegará automáticamente cada cambio enviado a la rama conectada.

## Personalización imprescindible antes de publicar

1. Cambia el teléfono `+34 910 000 000` y el correo de ejemplo por los datos reales.
2. Configura un backend o proveedor de formularios (por ejemplo, una Vercel Function) para que las reservas lleguen a un equipo. Actualmente el formulario **no guarda ni transmite datos**.
3. Añade política de privacidad, aviso legal, consentimiento y cualquier requisito regulatorio aplicable a tu país.
4. Revisa precios, disponibilidad, textos, dirección y licencias comerciales.

## Comprobaciones

```bash
npm test
```

El test comprueba la presencia de las páginas y archivos de despliegue esenciales.
