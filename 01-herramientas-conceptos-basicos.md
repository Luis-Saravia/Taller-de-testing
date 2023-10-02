# Herramientas y Conceptos Básicos:

## **Jasmine:**

Jasmine es un framework de pruebas que se utiliza en Angular para escribir y ejecutar pruebas unitarias. Proporciona una sintaxis clara y legible para definir suites de pruebas, casos de prueba y expectativas. Algunas características clave de Jasmine son:

- **Describe y It:** Jasmine utiliza las funciones `describe` para agrupar casos de prueba en suites y `it` para definir casos de prueba individuales. Esto ayuda a organizar y estructurar las pruebas de manera clara.

- **Expect:** La función `expect` se utiliza para definir expectativas sobre los resultados esperados. Se combina con métodos como `toBe`, `toEqual`, `toContain`, entre otros, para verificar resultados.

- **BeforeEach y AfterEach:** Jasmine proporciona las funciones `beforeEach` y `afterEach` que permiten realizar configuraciones antes y después de cada caso de prueba, lo que ayuda a mantener el estado limpio entre las pruebas.

## **Karma:**

Karma es un test runner que se utiliza para ejecutar pruebas en diferentes navegadores y ambientes. Angular CLI incorpora Karma por defecto para simplificar el proceso de ejecución de pruebas. Algunos aspectos importantes de Karma son:

- **Configuración:** Karma se configura mediante un archivo llamado `karma.conf.js`, donde se especifican los archivos de código fuente, los archivos de prueba, los navegadores en los que se deben ejecutar las pruebas y otros ajustes relacionados.

- **Navegadores:** Karma permite ejecutar pruebas en varios navegadores, lo que ayuda a garantizar que tu aplicación funcione correctamente en diferentes entornos. Puedes configurar qué navegadores deseas utilizar para tus pruebas.

- **Informes de Cobertura:** Karma también puede generar informes de cobertura de código, que muestran qué porcentaje de tu código ha sido cubierto por las pruebas. Esto es útil para identificar áreas que no están siendo probadas.

## **Angular Testing Utilities:**

Angular proporciona una serie de utilidades y clases para facilitar la escritura de pruebas unitarias:

- **TestBed:** TestBed es una clase que proporciona un entorno de prueba para configurar módulos, componentes y servicios. Puedes usarlo para crear componentes y servicios simulados, inyectar dependencias y realizar pruebas.

- **ComponentFixture:** ComponentFixture es una clase que envuelve un componente y proporciona métodos para interactuar con él y detectar cambios. Te permite acceder al componente, a sus propiedades y métodos, y manipular su vista.

- **async y fakeAsync:** Angular Testing Utilities proporciona las funciones `async` y `fakeAsync` que ayudan a manejar operaciones asíncronas en las pruebas. `async` se usa con `await` para manejar promesas, mientras que `fakeAsync` se usa con `tick` para manejar temporizadores y observables.

Estas herramientas y conceptos básicos son fundamentales para escribir y ejecutar pruebas unitarias efectivas en Angular. Al comprender y utilizar adecuadamente Jasmine, Karma y las utilidades de prueba proporcionadas por Angular, podrás crear pruebas confiables que aseguren la calidad y la estabilidad de tu aplicación.
