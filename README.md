# Wlanding

Sitio personal en Next.js con un formulario de contacto que registra consultas en Google Sheets. El formulario está protegido con Cloudflare Turnstile y una limitación de solicitudes por IP.

## Desarrollo local

Usa `pnpm@9.13.0`:

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Crea `.env.local` a partir de `.env.example`. Nunca publiques este archivo ni sus valores.

| Variable | Uso |
| --- | --- |
| `GOOGLE_SHEETS_ENDPOINT` | URL `/exec` del Web App desplegado desde Apps Script. |
| `GOOGLE_SHEETS_SHARED_SECRET` | Valor que coincide con `LEADS_SHARED_SECRET` en las propiedades de Apps Script. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clave pública del widget Turnstile. Se incorpora en el navegador. |
| `TURNSTILE_SECRET_KEY` | Clave secreta de Turnstile. Solo se usa en el servidor. |

## Configuración de Google Sheets

1. Crea una hoja de cálculo y copia su ID: el fragmento entre `/d/` y `/edit` de su URL.
2. En el proyecto de Apps Script, pega el contenido de `script.js`.
3. En **Project Settings > Script properties**, configura:
   - `SPREADSHEET_ID`: ID de la hoja de cálculo.
   - `LEADS_SHARED_SECRET`: secreto aleatorio que también se define en `GOOGLE_SHEETS_SHARED_SECRET`.
4. Implementa el script como **Web app**, con acceso para cualquier persona, y copia la URL que termina en `/exec` a `GOOGLE_SHEETS_ENDPOINT`.
5. El primer envío crea automáticamente la pestaña `leads-wilmar-landing` y sus encabezados.

## Configuración de Cloudflare Turnstile

1. En Cloudflare, crea un widget Turnstile para el sitio.
2. Añade el dominio final y `localhost` como hostnames autorizados.
3. Copia la clave de sitio a `NEXT_PUBLIC_TURNSTILE_SITE_KEY` y la clave secreta a `TURNSTILE_SECRET_KEY`.
4. Configura ambas variables en el entorno de producción antes de generar el build. La clave pública se inserta durante la compilación.

Sin las dos variables de Turnstile, el formulario queda deshabilitado y el servidor rechaza los envíos.

## Protección del formulario

- Turnstile se valida en el servidor antes de enviar información a Apps Script.
- El endpoint permite hasta cinco solicitudes por IP cada 15 minutos.
- El límite está en memoria y se aplica por instancia. Para una protección global en despliegues con varias instancias, configura además reglas de rate limiting o WAF en el proveedor de hosting.
- La solicitud hacia Apps Script tiene un tiempo máximo de 30 segundos porque el registro y la notificación por correo se procesan de forma síncrona.

## Validación previa al despliegue

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Confirma manualmente en escritorio y móvil que el widget de Turnstile aparece, completa una consulta y verifica que la fila se crea en `leads-wilmar-landing`.
