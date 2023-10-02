# Pruebas de Rutas:

Las pruebas de rutas se centran en verificar el enrutamiento de la aplicación, asegurándose de que las rutas definidas en el enrutador de Angular funcionen correctamente y dirijan a los componentes adecuados según la URL proporcionada.

## Ejemplos y Casos de Uso:

1. **Verificación de la Redirección:**

   Puedes probar si una ruta redirige correctamente a otra ruta. Esto es especialmente útil para verificar rutas de página no encontrada o rutas de inicio de sesión.

   ```typescript
   it('debería redirigir a la página de inicio de sesión si no hay usuario autenticado', fakeAsync(() => {
     const router = TestBed.inject(Router);
     const location = TestBed.inject(Location);

     router.navigate(['/perfil']);
     tick();

     expect(location.path()).toBe('/login');
   }));
   ```

2. **Verificación de Parámetros de Ruta:**

   Si tienes rutas que utilizan parámetros, puedes verificar si los parámetros se capturan y manejan correctamente.

   ```typescript
   it('debería mostrar detalles de un artículo basado en el ID de la ruta', fakeAsync(() => {
     const router = TestBed.inject(Router);
     const location = TestBed.inject(Location);

     router.navigate(['/articulo/123']);
     tick();

     expect(location.path()).toBe('/articulo/123');
     expect(component.obtenerIdArticulo()).toBe('123');
   }));
   ```

3. **Pruebas de Carga de Componentes:**

   Puedes probar si el componente correcto se carga en función de la ruta.

   ```typescript
   it('debería cargar el componente de inicio al acceder a la ruta de inicio', fakeAsync(() => {
     const fixture = TestBed.createComponent(RouterOutletComponent);
     const router = TestBed.inject(Router);
     const location = TestBed.inject(Location);

     router.navigate(['/inicio']);
     tick();

     fixture.detectChanges();

     const componenteCargado = fixture.nativeElement.querySelector('app-inicio');
     expect(componenteCargado).toBeTruthy();
   }));
   ```

4. **Pruebas de Integración de Rutas con Guardias de Ruta:**

   Puedes probar cómo funcionan las guardias de ruta (route guards) al asegurarte de que las rutas restringidas solo se puedan acceder cuando las condiciones son cumplidas.

   ```typescript
   it('debería redirigir a la página de inicio de sesión si no está autenticado', fakeAsync(() => {
     const router = TestBed.inject(Router);
     const location = TestBed.inject(Location);

     router.navigate(['/area-restringida']);
     tick();

     expect(location.path()).toBe('/login');
   }));
   ```

5. **Pruebas de Integración de Rutas con Módulos Lazy Loaded:**

   Si tienes módulos cargados de forma diferida (lazy loaded), puedes verificar si se cargan correctamente cuando se accede a la ruta correspondiente.

   ```typescript
   it('debería cargar el módulo de detalles de producto al acceder a la ruta de detalles', fakeAsync(() => {
     const fixture = TestBed.createComponent(RouterOutletComponent);
     const router = TestBed.inject(Router);
     const location = TestBed.inject(Location);

     router.navigate(['/producto/123']);
     tick();

     fixture.detectChanges();

     const moduloCargado = fixture.nativeElement.querySelector('app-detalles-producto');
     expect(moduloCargado).toBeTruthy();
   }));
   ```

Las pruebas de rutas son fundamentales para garantizar que el enrutamiento de tu aplicación Angular funcione correctamente. Al verificar que las rutas se redirijan, carguen los componentes correctos y cumplan con las guardias de ruta, estás asegurando una experiencia de navegación fluida y sin problemas para los usuarios.