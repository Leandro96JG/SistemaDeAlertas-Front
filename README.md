# SistemaDeAlertas

## Recordatorios:
- Agregar los routingmodulo hijos a los imports de app-routing

### @ngtranslate:

1. Como HttpClientModulo esta deprecado, se usa ``provideHttpClient(withInterceptorsFromDi()``.
2. Tener cuidado como se importa cada componente y modulo de ngtranslate.
3. Importar TranslateModule en los modulos hijos para que funcione el pipe.
4. Agregar en los providers
````javascript
importProvidersFrom([
      TranslateModule.forRoot({
        loader:{
          provide:TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps:[HttpClient],
        }
      })
    ]),
````






## Definiciones:

- ``@HostListener`` Escucha los eventos de clic en el documento. Cada vez que haces clic en cualquier parte de la página, verifica si el clic ocurrió dentro del contenedor. Si el clic fue fuera, cambia la variable ``isVisible`` a ``false``, lo que oculta el contenedor.

