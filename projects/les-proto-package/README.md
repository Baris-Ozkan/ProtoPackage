# LesProtoPackage

This is a prototype package to test how to form libraries in Angular. The package includes an Angular component, service, pipe, and a directive to test functionality.

## How to make a library and turn it into npm package using Angular

1. Make sure that you have an npm account to sign-in and publish your library as well as nodejs and npm installed in your environment.
2. Create a workspace with the command `ng new <work-spae> --create-application=false`. The flag prevents Angular from building the default application so that we can work on a clean empty workspace.
3. Create a library with the command `ng generate library <library-name>`
4. Put any component, service, pipe, directive, etc. in the generated library directory most likely under `projects/<library-name>/src/lib/`. You can generate any new Angular class by using the `generate` command. Ex: `ng generate pipe <pipe-name>`
5. Make sure that any Angular class you want to use is exported through `public-api.ts` and the `.module.ts` files. Ex: in `public-api.ts` `export * from './lib/italic-highlight.directive';`. In `.module.ts`, `exports: [LesProtoPackageComponent, ItalicHighlightDirective, NoSAllUPipe]`
5. Build the library with the command `ng build`
6. Login to the npm registry with `npm login` and navigate to the dist directory generated after building the library `cd dist/<library-name>`.
7. Publish the library with `npm publish`.

## How to update your library

If you want to update your library package, just repeat the steps from 6 to 8 but increment the version in `package.json` under `dist/library` after building and then publish again.
