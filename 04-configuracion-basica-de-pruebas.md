# Configuración Básica de Pruebas en Angular:

La configuración básica de pruebas en Angular implica preparar tu proyecto para la escritura y ejecución de pruebas unitarias. Aquí están los pasos clave para la configuración:

## **1. Creación de un Proyecto:**

Si aún no tienes un proyecto Angular, puedes crear uno utilizando Angular CLI con el siguiente comando:

```bash
ng new mi-proyecto
```

Sigue las instrucciones en la terminal para configurar el proyecto.

## **2. Carpetas de Pruebas:**

Angular CLI genera una estructura de carpetas que incluye un directorio llamado `src/app` donde se encuentra la mayoría del código de la aplicación. Para las pruebas unitarias, generalmente se siguen las mismas estructuras y se crean carpetas separadas, como `src/app` pero en `src/app` pero con la convención `src/app/app.component.spec.ts`.

## **3. Configuración de TestBed:**

En cada archivo de prueba, debes configurar el entorno de prueba utilizando `TestBed`. Esto incluye la importación de módulos, componentes y servicios relevantes. Ejemplo:

```typescript
import { TestBed } from '@angular/core/testing';
import { MiComponente } from './mi-componente.component';

describe('MiComponente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiComponente],
    });
  });

  // ... casos de prueba
});
```

## **4. Ejecución de Pruebas:**

Para ejecutar las pruebas, utiliza el comando `ng test`. Esto iniciará Karma y ejecutará las pruebas en el navegador que hayas configurado en `karma.conf.js`.

## **5. Configuración de Karma:**

El archivo `karma.conf.js` se encuentra en la raíz del proyecto y configura cómo se ejecutarán las pruebas. En él, especificas archivos de código fuente, archivos de prueba, navegadores, entre otros detalles. Puedes ajustar esta configuración según tus necesidades.

## **6. Pruebas Iniciales:**

Antes de escribir tus propias pruebas, Angular CLI genera automáticamente pruebas iniciales para los componentes y servicios que creas. Puedes utilizar estas pruebas como punto de partida y aprender de ellas.

## **7. Karma y Navegadores:**

Karma se encarga de ejecutar las pruebas en diferentes navegadores. Puedes configurar los navegadores en `karma.conf.js`. Algunos navegadores comunes son Chrome, Firefox y Edge.

## **8. Archivos de Prueba:**

Los archivos de prueba generalmente tienen el sufijo `.spec.ts` y se ubican junto a los archivos correspondientes. Por ejemplo, si tienes `mi-componente.component.ts`, su archivo de prueba sería `mi-componente.component.spec.ts`.

## **9. Jasmine:**

Recuerda que las pruebas en Angular generalmente se escriben utilizando el framework de pruebas Jasmine. Jasmine proporciona sintaxis clara para definir descripciones, casos de prueba y expectativas.

## **10. Cobertura de Código:**

Karma también puede generar informes de cobertura de código que indican qué porcentaje de tu código está cubierto por las pruebas. Puedes ver estos informes en la terminal o en una página HTML generada.

## **11. Mantenimiento y Mejora:**

Conforme tu proyecto evoluciona, sigue mejorando y manteniendo tus pruebas. Asegúrate de agregar nuevas pruebas para nuevas funcionalidades y mantener tus pruebas existentes actualizadas.

La configuración básica de pruebas en Angular implica familiarizarse con Angular CLI, configurar TestBed, Jasmine y Karma, y comprender cómo escribir y ejecutar pruebas. Una vez que tengas este entorno configurado, estarás listo para escribir pruebas unitarias efectivas en tu aplicación Angular.