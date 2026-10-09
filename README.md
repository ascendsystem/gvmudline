# G.V.MUDLINE · Web corporativa

Web estática multipágina con HTML, CSS y JavaScript. Los textos entre corchetes son placeholders. Todas las fotografías son de vehículos todoterreno 4x4; no se usan fotos de coches nuevos de turismo.

## Estructura
`index.html` portada; `servicios.html`, `4x4.html`, `clasicos.html`, `nosotros.html`, `contacto.html`; páginas legales `aviso-legal.html`, `privacidad.html`, `cookies.html`; `404.html`; `css/styles.css` y `css/premium.css`; `js/`, `assets/`, `robots.txt` y `sitemap.xml`. El dominio de producción considerado es `https://gv.mudline.com/`, que aparece en la tarjeta del taller.

## Probar y publicar
Abre `index.html` o ejecuta `py -m http.server 8000` desde la carpeta y visita `http://localhost:8000`. Para publicar, sube la carpeta a un hosting estático con HTTPS, configura redirecciones a `https://gv.mudline.com/`, conserva la página 404 y verifica en producción que dominio, canónicas y sitemap coinciden.

## Personalizar
El emblema original está guardado en `assets/img/logo-gvmudline.png`; la web carga su versión optimizada `assets/img/logo-gvmudline.webp`. Las fotografías originales JPEG también se conservan en `assets/img/` y la web carga versiones WebP locales optimizadas. Al sustituirlas por fotos propias/autorizadas, actualiza los originales y genera sus WebP correspondientes, manteniendo rutas y revisando los textos alt. `assets/favicon/favicon.svg` es un favicon independiente. No representan el taller ni trabajos de G.V.MUDLINE. Consulta la [licencia Unsplash](https://unsplash.com/license) (permite uso comercial con atribución opcional) y revisa posibles derechos de marcas/imagen representadas antes de publicar. Referencias de las fotos: [Brice Cooper](https://unsplash.com/photos/a-couple-of-jeeps-driving-down-a-muddy-road-Vsc8xcwxHJY), [Romain Gal](https://unsplash.com/photos/a-jeep-driving-through-a-mud-puddle-on-a-dirt-road-kGgNqFjcPkM), [Johann Noby](https://unsplash.com/photos/a-black-jeep-driving-through-muddy-terrain-b6eSIj-u3gg), [Sven W](https://unsplash.com/photos/black-suv-in-the-middle-of-the-forest-during-daytime-KRB-KhzJr7M), [Eugene Chystiakov](https://unsplash.com/photos/white-suv-in-forest-during-daytime-P_e3Avzdbso), [Paul C](https://unsplash.com/photos/two-jeeps-driving-on-a-rocky-trail-in-the-woods-1fOc3vxEC3A), [Quilia](https://unsplash.com/photos/gray-jeep-vehicle-in-rock-terrain-during-daytime-aRoP871gEa0), [Rob Wingate](https://unsplash.com/photos/a-white-land-rover-defender-sits-outdoors-URvfeh-2-hE), [Darina Rodionova](https://unsplash.com/photos/toyota-suv-parked-on-hill-k90frwP4Xn4) y [Thomas Tucker](https://unsplash.com/photos/jeep-drives-through-a-muddy-path-in-the-forest-W9gneChEWjQ).

Los datos actuales de titular, teléfono, correo, dirección y horario están cargados en las páginas de contacto y legales. Si cambian, actualízalos también en el JSON-LD de `index.html`, pies de página y sitemap cuando afecten a rutas o dominio.

## Formspree
Crea un formulario en [Formspree](https://formspree.io/), verifica el destino y copia el endpoint. En `js/contact.js`, reemplaza `https://formspree.io/f/TU_ID` en `const FORMSPREE_ENDPOINT` por el endpoint real. Restringe el dominio en tu cuenta y prueba respuestas correctas y fallidas. El formulario no finge éxito y explica si falta el endpoint. Antes de activarlo, revisa términos y privacidad vigentes, rol del proveedor, subencargados, localización, transferencias, salvaguardas y retención aplicables a tu cuenta. La página de seguridad de Formspree menciona AWS en EE. UU. y SCC; confirma condiciones concretas.

## Estado legal y funcional

El aviso legal y la política de privacidad incluyen la identidad, NIF, domicilio y contacto facilitados para G.V.MUDLINE. La política informa de que el formulario no transmite datos mientras el endpoint de Formspree siga sin configurarse. Estos textos describen la web actual y deben revisarse si cambian proveedores, configuración o actividad. No hay venta, reserva, pago ni contratación online.

Antes de publicar: verifica el endpoint Formspree y actualiza la política si se activa; comprueba el proveedor y condiciones del hosting; confirma si son aplicables datos registrales o autorizaciones profesionales; verifica licencias de las fotografías y que el horario publicado coincide con el horario real del negocio.

## Fuentes
[AEPD: guía de cookies](https://www.aepd.es/guias/guia-cookies.pdf) · [AEPD](https://www.aepd.es/) · [LSSI-CE (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) · [RGPD (BOE)](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807) · [LOPDGDD (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) · [Consumidores (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555) · [Formspree seguridad](https://formspree.io/security/) · [Formspree privacidad](https://formspree.io/legal/privacy-policy/).

## Ajustes visuales

El hero de portada ocupa toda la altura visible (`100svh`) para evitar que se asome la siguiente sección en el primer plano. Las secciones y tarjetas entran progresivamente al desplazarse, con retrasos escalonados y movimiento suave; se respeta `prefers-reduced-motion`. La barra superior indica el avance de lectura. Las fotografías dentro de cada página son distintas para evitar repeticiones.

## Recursos externos
No hay Google Fonts, analítica, píxeles, mapas, iframes, almacenamiento local, ni cookies añadidas por este código. Imágenes locales y tipografía del sistema. Formspree solo recibe datos tras configurar el endpoint y enviar el formulario. Valida el sitio publicado y alojamiento porque pueden añadir recursos.


## SEO local

La portada incluye datos estructurados `AutoRepair`, canónicas por página, metadatos para compartir y contenido local sobre mecánica 4x4 y clásicos en Vilafranca del Penedès. `robots.txt` enlaza al sitemap XML. Las canónicas y el sitemap usan `https://gv.mudline.com/`, dominio indicado en la tarjeta del taller; antes de lanzar confirma que el dominio resuelve a este sitio, que HTTPS funciona y que las variantes `www`/sin `www` redirigen a la versión canónica.

Las fotos y el logotipo se sirven desde archivos locales WebP optimizados; se conservan también sus originales JPG/PNG. Verifica la propiedad del dominio en Google Search Console y envía el sitemap al publicar. Reclama/verifica el Perfil de Empresa de Google y mantén nombre, dirección, teléfono, categoría, horario, fotos y reseñas coherentes con el negocio. El posicionamiento depende de más factores, así que no se puede garantizar una posición concreta.

La capa visual adicional de `css/premium.css` conserva el contenido semántico y las etiquetas SEO del HTML. `js/main.js` activa entradas/salidas reversibles, movimiento parallax limitado a imágenes y estado del menú; sin JavaScript y con movimiento reducido, el contenido sigue visible. No se añaden bibliotecas externas.
